import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { AppShell } from "@/components/AppShell";
import { useAuth } from "@/lib/auth";
import { LoginPage } from "@/pages/LoginPage";
import { OperatorHomePage } from "@/pages/OperatorHomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { DropsPage, GaugeDetailPage } from "@/pages/DropsPage";
import {
  AgreementsPage,
  ProofsPage,
  RewardsPage,
} from "@/pages/OpsPages";
import {
  ArbitrationPage,
  GovernancePage,
  ParticipantsPage,
  ProvenancePage,
  SignalsPage,
} from "@/pages/RegistryPages";

function RequireAuth() {
  const { session } = useAuth();
  if (!session) return <Navigate to="/login" replace />;
  return <Outlet />;
}

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<RequireAuth />}>
        <Route element={<AppShell />}>
          <Route index element={<OperatorHomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="drops" element={<DropsPage />} />
          <Route path="gauge" element={<GaugeDetailPage />} />
          <Route path="agreements" element={<AgreementsPage />} />
          <Route path="proofs" element={<ProofsPage />} />
          <Route path="rewards" element={<RewardsPage />} />
          <Route path="participants" element={<ParticipantsPage />} />
          <Route path="provenance" element={<ProvenancePage />} />
          <Route path="arbitration" element={<ArbitrationPage />} />
          <Route path="governance" element={<GovernancePage />} />
          <Route path="signals" element={<SignalsPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
