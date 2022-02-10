import "./InfoPage.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img2 from "../../Images/img2.svg";
import { useEffect } from "react";
function InfoPage({ headerText, bodyText, buttonText }) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <div className="info-main">
      <h1 className="info-header">What we do</h1>
      <div className="info-main-content">
        <div className="info-main-content-left">
          <img
            src="https://media2.giphy.com/media/L8K62iTDkzGX6/giphy.gif?cid=790b761185aec298a9397e5271b603bc94bc6941f0ac1762&rid=giphy.gif&ct=g"
            className="image-info"
            data-aos={"fade-right"}
          />
        </div>
        <div className="info-main-content-right">
          <p className="info-text" data-aos={"fade-left"}>
            <p style={{ padding: "5px" }}>
              Codechef DDU chapter is a community of students that gives the
              members a chance to learn and share knowledge.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
