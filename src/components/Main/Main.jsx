import React from "react";

import "./main.scss";
import img from "../../Assets/img.jpeg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

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
  //   {
  //     id: 2,
  //     imgSrc: img,
  //     destTitle: "Bora Bora",
  //     location: "new Zealand",
  //     grade: "CULTURAL RELAX",
  //     fees: "$700",
  //     description:
  //       "Bora Bora island will make you feel love at first sight. With ocean views  of turquoise waters resembling an artist’s palette of bright blues and greens, romantics from around the world appreciate Bora Bora’s, lush, tropical vegetation circling the perimeter of the island and the valleys of Mount Otemanu blossom with hibiscus.",
  //   },
  //   {
  //     id: 3,
  //     imgSrc: img,
  //     destTitle: "Bora Bora",
  //     location: "new Zealand",
  //     grade: "CULTURAL RELAX",
  //     fees: "$700",
  //     description:
  //       "Bora Bora island will make you feel love at first sight. With ocean views  of turquoise waters resembling an artist’s palette of bright blues and greens, romantics from around the world appreciate Bora Bora’s, lush, tropical vegetation circling the perimeter of the island and the valleys of Mount Otemanu blossom with hibiscus.",
  //   },
  //   {
  //     id: 4,
  //     imgSrc: img,
  //     destTitle: "Bora Bora",
  //     location: "new Zealand",
  //     grade: "CULTURAL RELAX",
  //     fees: "$700",
  //     description:
  //       "Bora Bora island will make you feel love at first sight. With ocean views  of turquoise waters resembling an artist’s palette of bright blues and greens, romantics from around the world appreciate Bora Bora’s, lush, tropical vegetation circling the perimeter of the island and the valleys of Mount Otemanu blossom with hibiscus.",
  //   },
  //   {
  //     id: 5,
  //     imgSrc: img,
  //     destTitle: "Bora Bora",
  //     location: "new Zealand",
  //     grade: "CULTURAL RELAX",
  //     fees: "$700",
  //     description:
  //       "Bora Bora island will make you feel love at first sight. With ocean views  of turquoise waters resembling an artist’s palette of bright blues and greens, romantics from around the world appreciate Bora Bora’s, lush, tropical vegetation circling the perimeter of the island and the valleys of Mount Otemanu blossom with hibiscus.",
  //   },
  //   {
  //     id: 6,
  //     imgSrc: img,
  //     destTitle: "Bora Bora",
  //     location: "new Zealand",
  //     grade: "CULTURAL RELAX",
  //     fees: "$700",
  //     description:
  //       "Bora Bora island will make you feel love at first sight. With ocean views  of turquoise waters resembling an artist’s palette of bright blues and greens, romantics from around the world appreciate Bora Bora’s, lush, tropical vegetation circling the perimeter of the island and the valleys of Mount Otemanu blossom with hibiscus.",
  //   },
  //   {
  //     id: 7,
  //     imgSrc: img,
  //     destTitle: "Bora Bora",
  //     location: "new Zealand",
  //     grade: "CULTURAL RELAX",
  //     fees: "$700",
  //     description:
  //       "Bora Bora island will make you feel love at first sight. With ocean views  of turquoise waters resembling an artist’s palette of bright blues and greens, romantics from around the world appreciate Bora Bora’s, lush, tropical vegetation circling the perimeter of the island and the valleys of Mount Otemanu blossom with hibiscus.",
  //   },
  //   {
  //     id: 8,
  //     imgSrc: img,
  //     destTitle: "Bora Bora",
  //     location: "new Zealand",
  //     grade: "CULTURAL RELAX",
  //     fees: "$700",
  //     description:
  //       "Bora Bora island will make you feel love at first sight. With ocean views  of turquoise waters resembling an artist’s palette of bright blues and greens, romantics from around the world appreciate Bora Bora’s, lush, tropical vegetation circling the perimeter of the island and the valleys of Mount Otemanu blossom with hibiscus.",
  //   },
  //   {
  //     id: 9,
  //     imgSrc: img,
  //     destTitle: "Bora Bora",
  //     location: "new Zealand",
  //     grade: "CULTURAL RELAX",
  //     fees: "$700",
  //     description:
  //       "Bora Bora island will make you feel love at first sight. With ocean views  of turquoise waters resembling an artist’s palette of bright blues and greens, romantics from around the world appreciate Bora Bora’s, lush, tropical vegetation circling the perimeter of the island and the valleys of Mount Otemanu blossom with hibiscus.",
  //   },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">
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
