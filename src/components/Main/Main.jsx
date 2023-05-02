import React, { useEffect } from "react";

import "./main.scss";
import img from "../../Assets/img.jpeg";
import img2 from "../../Assets/new-york-1745095__340.jpg";
import img3 from "../../Assets/et.jpg";
import img4 from "../../Assets/niagara.jpg";
import img5 from "../../Assets/bk.jpg";
import img6 from "../../Assets/twin tower.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "new Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Bora Bora island will make you feel love at first sight. With ocean views  of turquoise waters resembling an artist’s palette of bright blues and greens, romantics from around the world appreciate Bora Bora’s, lush, tropical vegetation circling the perimeter of the island and the valleys of Mount Otemanu blossom with hibiscus.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Statue of Liberty",
    location: "New York ",
    grade: "COLOSSAL NEOCLASSICAL SCULPTURE",
    fees: "$200",
    description:
      "The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.The copper statue, a gift from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Eiffel Tower",
    location: "France",
    grade: "WROUGHT-IRON LATTICE TOWER",
    fees: "$500",
    description:
      "The Eiffel Tower French: tour Eiffel [tuʁ ɛfɛl] (listen)) is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.Locally nicknamed - La dame de fer (French for Iron Lady) ",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Niagara Falls",
    location: "Canada",
    grade: "HORSESHOE FALLS",
    fees: "$300",
    description:
      "Niagara Falls (/naɪˈæɡərə/) is a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the province of Ontario in Canada and the state of New York in the United States. The largest of the three is Horseshoe Falls, which straddles the international border of the two countries",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Burj Khalifa",
    location: "new Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The Burj Khalifa (/ˈbɜːrdʒ kəˈliːfə/; Arabic: برج خليفة, Arabic pronunciation: [bʊrd͡ʒ xaˈliːfa], Khalifa Tower), known as the Burj Dubai prior to its inauguration in 2010, is a skyscraper in Dubai, United Arab Emirates. It is known for being the world's tallest building.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Petronas Towers",
    location: "Kuala Lumpur, Malaysia",
    grade: " SUPERTALL SKYSCRAPERS",
    fees: "$900",
    description:
      "The Petronas Towers are the world's tallest twin skyscrapers and remained the tallest buildings in Malaysia until 2019, when they were surpassed by The Exchange 106. The Petronas Towers are a major landmark of Kuala Lumpur, along with the nearby Kuala Lumpur Tower and Merdeka 118",
  },
  {
    id: 7,
    imgSrc: img2,
    destTitle: "Statue of Liberty",
    location: "New York ",
    grade: "COLOSSAL NEOCLASSICAL SCULPTURE",
    fees: "$200",
    description:
      "The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.The copper statue, a gift from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi",
  },
  {
    id: 8,
    imgSrc: img4,
    destTitle: "Niagara Falls",
    location: "Canada",
    grade: "HORSESHOE FALLS",
    fees: "$300",
    description:
      "Niagara Falls (/naɪˈæɡərə/) is a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the province of Ontario in Canada and the state of New York in the United States. The largest of the three is Horseshoe Falls, which straddles the international border of the two countries",
  },
  {
    id: 9,
    imgSrc: img3,
    destTitle: "Eiffel Tower",
    location: "France",
    grade: "WROUGHT-IRON LATTICE TOWER",
    fees: "$500",
    description:
      "The Eiffel Tower French: tour Eiffel [tuʁ ɛfɛl] (listen)) is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.Locally nicknamed - La dame de fer (French for Iron Lady) ",
  },
];

const Main = () => {
  // scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>

                    <div className="price">
                      <span>{fees}</span>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
