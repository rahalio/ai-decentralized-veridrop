/**
 * Slim API client for Veridrop webapp — matches generated service call style.
 */

import type { ApiError, ApiResponse, RequestOptions } from "./types";
import { getEffectiveOrgId, setAuthOrgId, setCurrentOrgId } from "./tenant-state";

const TOKEN_KEY = "auth_token";
const API_KEY_KEY = "api_key";

function getApiBase(): string {
  try {
    const vite = (import.meta as ImportMeta & { env?: Record<string, string> })?.env
      ?.VITE_API_BASE;
    if (typeof vite === "string" && vite.startsWith("http")) {
      return vite.replace(/\/$/, "");
    }
  } catch {
    /* ignore */
  }
  return "http://127.0.0.1:4000";
}

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

function getApiKey(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(API_KEY_KEY);
}

export class ApiClient {
  setToken = (token: string) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(TOKEN_KEY, token);
  };

  getToken = (): string | null => getToken();

  clearToken = () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(TOKEN_KEY);
  };

  setApiKey = (key: string) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(API_KEY_KEY, key);
  };

  getApiKey = (): string | null => getApiKey();

  clearApiKey = () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(API_KEY_KEY);
  };

  setOrgId = (orgId: string | null) => {
    setCurrentOrgId(orgId);
    setAuthOrgId(orgId);
    if (typeof window !== "undefined") {
      if (orgId) localStorage.setItem("orgId", orgId);
      else localStorage.removeItem("orgId");
    }
  };

  getOrgId = (): string | null => getEffectiveOrgId();

  private async request<T>(
    endpoint: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<T>> {
    const base = getApiBase();
    // Generated URLs sometimes include `/orgs/${orgId}/` prefix — strip to API paths.
    let path = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
    path = path.replace(/^\/orgs\/[^/]+\/?/, "/");
    path = path.replace(/\/{2,}/g, "/");
    const url = `${base}${path}`;

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...((options.headers as Record<string, string>) || {}),
    };
    const token = getToken();
    const apiKey = getApiKey();
    if (token) headers.Authorization = `Bearer ${token}`;
    if (apiKey) headers["X-API-Key"] = apiKey;

    let body = options.body;
    if (body !== undefined && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    const response = await fetch(url, {
      ...options,
      headers,
      body: body as BodyInit | null | undefined,
    });

    if (!response.ok) {
      const errJson = await response.json().catch(() => ({}));
      const err: ApiError = {
        error: (errJson as { error?: string }).error || "Error",
        message:
          (errJson as { message?: string; detail?: string }).message ||
          (errJson as { detail?: string }).detail ||
          `HTTP ${response.status}`,
        statusCode: response.status,
        code: (errJson as { code?: string }).code,
      };
      throw Object.assign(new Error(err.message), err);
    }

    if (response.status === 204) {
      return { data: undefined as T };
    }

    const json = await response.json();
    if (json && typeof json === "object" && "data" in json) {
      return json as ApiResponse<T>;
    }
    return { data: json as T };
  }

  get = <T>(endpoint: string, options?: RequestOptions) =>
    this.request<T>(endpoint, { ...options, method: "GET" });

  post = <T>(endpoint: string, options?: RequestOptions) =>
    this.request<T>(endpoint, { ...options, method: "POST" });

  put = <T>(endpoint: string, options?: RequestOptions) =>
    this.request<T>(endpoint, { ...options, method: "PUT" });

  patch = <T>(endpoint: string, options?: RequestOptions) =>
    this.request<T>(endpoint, { ...options, method: "PATCH" });

  delete = <T>(endpoint: string, options?: RequestOptions) =>
    this.request<T>(endpoint, { ...options, method: "DELETE" });
}

export const apiClient = new ApiClient();
