import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing, Error, Register } from "./pages";
import {
  SharedLayout,
  Profile,
  Stats,
  AddTrek,
  AllTreks,
} from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Stats />} />
          <Route path="all-treks" element={<AllTreks />} />
          <Route path="add-trek" element={<AddTrek />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
}

export default App;
