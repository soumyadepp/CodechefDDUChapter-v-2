import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import ContactForm from "./Pages/ContactForm/ContactForm";
import EventsPage from "./Pages/EventsPage/EventsPage";
import TeamPage from "./Pages/TeamPage/TeamPage";
function App() {
  return (
    <Router>
      <div className="main-app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
