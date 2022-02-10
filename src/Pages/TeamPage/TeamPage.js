import { useState } from "react";
import teamMembers from "../../Data/teamData";
import Footer from "../../Components/Footer/Footer";
import faceBook from "../../Images/linkedin.png";
import instagram from "../../Images/instagram.png";
import "./TeamPage.scss";

function TeamPage() {
  const [data, setData] = useState(teamMembers);
  return (
    <div className="teamPage">
      <div className="teamPage__body">
        <div className="teamPage__header">
          <h1> Our Team</h1>
          <h3>We are a results driven team</h3>
        </div>
        <div className="card-container">
          {data.map((member, index) => {
            return (
              <div className="member-card" key={index}>
                <div className="member-card-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-card-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-designation">{member.designation}</p>
                </div>
                <div className="member-card-socials">
                  <a href={member.linkedInLink}>
                    <img
                      src={faceBook}
                      className="member-social-icon"
                      style={{ height: "3vmin", width: "3vmin" }}
                      alt="facebook"
                    />
                  </a>
                  <a href={member.instagramLink}>
                    <img
                      className="member-social-icon"
                      src={instagram}
                      style={{ height: "3vmin", width: "3vmin" }}
                      alt="facebook"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TeamPage;
