import Image from "next/image";
import React from "react";
import { useState } from "react";
import Navbar from "../src/components/Navbar";
import styles from "../styles/Destination.module.css";

const Destination = () => {
  const destinations = [
    {
      id: 1,
      name: "moon",
      text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites",
      avgDist: "384,400 km",
      estTravel: " 3 days",
      img: "/assets/destination/image-moon.png",
    },
    {
      id: 2,
      name: "mars",
      text: "do not forget to pack your hiking boots. You will need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It is two and a half times the size of Everest!",
      avgDist: "225 mil. km",
      estTravel: "9 months",
      img: "/assets/destination/image-mars.png",
    },

    {
      id: 3,
      name: "europa",
      text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      avgDist: "628 mil. km ",
      estTravel: "3 years",
      img: "/assets/destination/image-europa.png",
    },

    {
      id: 4,
      name: "titan",
      text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn",
      avgDist: "1.6 bil. km ",
      estTravel: "7 years",
      img: "/assets/destination/image-titan.png",
    },
  ];

  const [filteredState, setFilteredState] = useState([]);

  const filtered = (e) => {
    const filterItem = destinations.filter((item) => {
      return item.name.toLowerCase() === e.target.innerText.toLowerCase();
    });

    console.log(filterItem);
    setFilteredState([...filterItem]);
  };

  const changeStyle = (text) => {
    const mapArr =
      filteredState.length > 0
        ? filteredState.map((item) => {
            return item.name;
          })
        : ["mars"];

    if (mapArr.includes(text)) {
      return "2px solid white";
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.destination}>
        <h1 className={styles.pickDestination}>
          01<span> pick your destination</span>
        </h1>
        <div className={styles.destinationInfo}>
          <section className={styles.destinationImage}>
            {filteredState.length > 0 ? (
              <>
                {filteredState.map((item, index) => {
                  return (
                    <div className={styles.imageContainer} key={index}>
                      <Image
                        src={item.img}
                        alt={item.name}
                        width="90%"
                        height="90%"
                      />
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className={styles.imageContainer}>
                  <Image
                    src="/assets/destination/image-mars.png"
                    alt="mars"
                    width="90%"
                    height="90%"
                  />
                </div>
              </>
            )}
          </section>

          <section className={styles.destinationText}>
            <div className={styles.destinationNav}>
              <ul className={styles.destinationNavigations}>
                {destinations.map((item, index) => {
                  return (
                    <li
                      className={styles.destinationNavigation}
                      key={index}
                      onClick={filtered}
                      style={{ borderBottom: changeStyle(item.name) }}
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>

            {filteredState.length > 0 ? (
              <>
                {filteredState.map((item, index) => {
                  return (
                    <div className={styles.destinationDescription} key={index}>
                      <div className={styles.description}>
                        <h1> {item.name} </h1>

                        <p>{item.text}</p>
                      </div>

                      <footer className={styles.destinationFooter}>
                        <div className={styles.avgDist}>
                          <p>Avg. distance </p>

                          <p> {item.avgDist} </p>
                        </div>

                        <div className={styles.estTravel}>
                          <p>Est. travel time</p>
                          <p> {item.estTravel} </p>
                        </div>
                      </footer>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className={styles.destinationDescription}>
                  <div className={styles.description}>
                    <h1>mars</h1>

                    <p>
                      do not forget to pack your hiking boots. You’ll need them
                      to tackle Olympus Mons, the tallest planetary mountain in
                      our solar system. It’s two and a half times the size of
                      Everest!
                    </p>
                  </div>

                  <footer className={styles.destinationFooter}>
                    <div className={styles.avgDist}>
                      <p>Avg. distance </p>

                      <p>225 mil. km </p>
                    </div>

                    <div className={styles.estTravel}>
                      <p>Est. travel time</p>
                      <p> 9 months</p>
                    </div>
                  </footer>
                </div>
              </>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Destination;
