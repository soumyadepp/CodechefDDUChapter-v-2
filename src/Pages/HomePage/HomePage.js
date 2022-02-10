import "./HomePage.scss";
import img1 from "../../Images/img1.webp";
import { useEffect } from "react";
import AOS from "aos";
import Footer from "../../Components/Footer/Footer";
import "aos/dist/aos.css";
import InfoPage from "../../Components/InfoPage/InfoPage";
function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <div className="homepage-main">
      <div className="homepage-main-content">
        <div className="text">
          <h1 className="header" data-aos={"fade-up"}>
            CodeChef DDU Chapter
          </h1>
          <p className="text-para" data-aos={"zoom-out"}>
            CodeChef is a platform for programmers to practice their coding
            skills and build their coding skills. It is a platform for
            programmers to practice their coding skills and build their coding
            skills. It is a platform for programmers to practice their coding
            skills and build their coding skills.
          </p>
        </div>
        <div className="scroll">
          <div className="card blue" data-aos={"fade-up"}>
            <h2>Seminars</h2>
          </div>
          <div className="card red" data-aos={"fade-up"}>
            <h2>Webinars</h2>
          </div>
          <div className="card dark-blue" data-aos={"fade-up"}>
            <h2>Guest talks</h2>
          </div>
          <div className="card premium" data-aos={"fade-up"}>
            <h2>Contests</h2>
          </div>
        </div>
      </div>

      <div className="info-page">
        <InfoPage />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
