import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserDetails } from "../pages/UserDetails/userDetails";
import { UsersList } from "../pages/UsersList/usersList";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/user/:username/details" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
