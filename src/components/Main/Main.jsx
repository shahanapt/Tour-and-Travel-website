import React from "react";

import "./main.css";
import img from "../../Assets/img.jpeg";

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
    <section className="main-container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={img} alt="" />
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
