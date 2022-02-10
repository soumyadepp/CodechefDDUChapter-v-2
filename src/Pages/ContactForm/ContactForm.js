import "./ContactForm.scss";
import Footer from "../../Components/Footer/Footer";
import image1 from "../../Images/email.png";
import image2 from "../../Images/instagram.png";
import image3 from "../../Images/linkedin.png";
import image4 from "../../Images/facebook.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function ContactForm() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <div>
      <div className="contact-form">
        <div className="contact-form-container" data-aos={"fade-up"}>
          <h1 className="contact-header">Get In Touch </h1>
          <h4 className="contact-subheader">(codechefdduchapter@gmail.com)</h4>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
              />
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              />
              <textarea
                className="form-control ta"
                style={{ resize: "none" }}
                id="message"
                placeholder="Message"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                href="mailto:codechefdduchapter@gmail.com"
              >
                Submit
              </a>
            </button>
          </form>
        </div>
        <div className="contact-text" data-aos={"fade-left"}>
          <ul className="contact-text-list">
            <a
              href="mailto:codechefdduchapter@gmail.com"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <li className="contact-text-item">
                <img src={image1} className="list-image" />
                codechefdduchapter@gmail.com
              </li>
            </a>
            <a
              href="https://www.instagram.com/codechef_ddu/"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <li className="contact-text-item">
                <img src={image2} className="list-image" />
                @codechef_ddu
              </li>
            </a>
            <a
              href="https://www.linkedin.com/company/codechef-ddu-chapter/?originalSubdomain=in"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <li className="contact-text-item">
                <img src={image3} className="list-image" />
                Codechef DDU Chapter
              </li>
            </a>
            <a
              href="https://www.linkedin.com/company/codechef-ddu-chapter/?originalSubdomain=in"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <li className="contact-text-item">
                <img src={image4} className="list-image" />D Coders (FaceBook
                Handle)
              </li>
            </a>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactForm;
