import { useEffect, useState } from "react";
import "./EventsPage.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { dataImported } from "../../Data/SidebarData";
import Footer from "../../Components/Footer/Footer";
function EventsPage() {
  const [data, setData] = useState([dataImported]);
  const [clickedOne, setClickedOne] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [clickedTwo, setClickedTwo] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
    data.sort((a, b) => {
      return b.date - a.date;
    });
  }, []);
  //handler functions
  useEffect(() => {
    if (userInput.length > 0) {
      setData(
        dataImported.filter((item) =>
          item.name.toLowerCase().includes(userInput.toLowerCase())
        )
      );
    } else {
      setData(dataImported);
    }
  }, [userInput]);
  const search = (e) => {
    setUserInput(e.target.value);
    let filteredData = dataImported.filter((item) => {
      return item.name.toLowerCase().includes(userInput.toLowerCase());
    });
    setData(filteredData);
  };
  const handleClick = (value) => {
    if (value === "all") {
      setData(dataImported);
    } else setData(dataImported.filter((item) => item.year === value));
  };
  const handleClickType = (type) => {
    if (type === "all") {
      setData(dataImported);
    } else setData(dataImported.filter((item) => item.type === type));
  };
  return (
    <div className="EventsPage">
      <div className="sidebar-events">
        <input
          type="search"
          placeholder="Search"
          className="search-input"
          value={userInput}
          onChange={(e) => search(e)}
        />
        <h3
          className="filter-head"
          onClick={() => {
            setClickedOne(!clickedOne);
            setClickedTwo(false);
          }}
        >
          By Year
        </h3>
        {clickedOne && (
          <>
            <button
              className="sidebar-event"
              data-aos={"fade-down"}
              onClick={() => handleClick("all")}
            >
              All
            </button>
            <button
              className="sidebar-event"
              data-aos={"fade-down"}
              onClick={() => handleClick(2018)}
            >
              2018
            </button>
            <button
              className="sidebar-event"
              data-aos={"fade-down"}
              onClick={() => handleClick(2019)}
            >
              2019
            </button>
            <button
              className="sidebar-event"
              data-aos={"fade-down"}
              onClick={() => handleClick(2020)}
            >
              2020
            </button>
            <button
              className="sidebar-event"
              data-aos={"fade-down"}
              onClick={() => handleClick(2021)}
            >
              2021
            </button>
          </>
        )}
        <h3
          className="filter-head"
          onClick={() => {
            setClickedOne(false);
            setClickedTwo(!clickedTwo);
          }}
        >
          By Type
        </h3>
        {clickedTwo && (
          <>
            <button
              className="sidebar-event"
              data-aos={"fade-down"}
              onClick={() => handleClickType("Knowledge Sharing")}
            >
              Knowledge Sharing
            </button>
            <button
              className="sidebar-event"
              data-aos={"fade-down"}
              onClick={() => handleClickType("Coding Contests")}
            >
              Coding Contests
            </button>
          </>
        )}
      </div>
      <div className="main-events">
        <div className="card-container">
          {data.map((item) => {
            return (
              <ul class="cards" style={{ listStyle: "none" }}>
                <li key={item.id}>
                  <div class="card">
                    <img src={item.imageUrl} class="card__image" alt="" />
                    <div class="card__overlay">
                      <div class="card__header">
                        <div class="card__header-text">
                          <h3 class="card__title">{item.name}</h3>
                          <span class="card__status">{item.year}</span>
                        </div>
                      </div>
                      <p class="card__description">{item.description}</p>
                      <div className="card__button-div">
                        <button className="card__button">Read More</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
