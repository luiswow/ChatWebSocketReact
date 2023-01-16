import { Navigate, Route, Routes } from "react-router-dom";
import { BankAccountRoutesModule } from "../app/bankAccount/routes/bankAccountRoutesModule";

import ChatWebSocket from "../app/components/chatComponent/App";

export function RoutesHandler() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/bank" replace />} />
        <Route path="bank/*" element={<BankAccountRoutesModule />} />
        <Route path="/chat-web-socket" element={<ChatWebSocket />} />
      </Routes>
    </>
  );
}
