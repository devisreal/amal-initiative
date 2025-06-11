import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Scholarship from "./pages/Scholarship";
import Team from "./pages/Team";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </BrowserRouter>
  );
}

export default App;
