import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../src/components/Navbar";
import styles from "../styles/Crew.module.css";

const Crew = () => {
  const crewMembers = [
    {
      id: 1,
      name: "Douglas Hurley",
      occupation: "Commander",
      about:
        " Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2",
      image: "/assets/crew/image-douglas-hurley.png",
    },

    {
      id: 2,
      name: "anousheh ansari",
      occupation: "flight engineer ",
      about:
        " Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image: "/assets/crew/image-anousheh-ansari.png",
    },

    {
      id: 3,
      name: "Victor Glover",
      occupation: "Pilot ",
      about:
        " Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      image: "/assets/crew/image-victor-glover.png",
    },

    {
      id: 4,
      name: "Mark Shuttleworth",
      occupation: "Mission Specialist ",
      about:
        " Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: "/assets/crew/image-mark-shuttleworth.png",
    },
  ];

  const [filteredState, setFilteredState] = useState([]);

  const filterDetails = (name) => {
    const filterData = crewMembers.filter((item) => {
      return item.name.toLowerCase() === name.toLowerCase();
    });

    setFilteredState([...filterData]);
  };

  const activeClass = (detail) => {
    const selectName =
      filteredState.length > 0
        ? filteredState.map((item) => {
            return item.name.toLowerCase();
          })
        : ["anousheh ansari"];

    if (selectName.includes(detail.toLowerCase())) {
      return "white";
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />

      <section className={styles.crewContainer}>
        <div className={styles.crew}>
          <h1>
            02 <span>meet your crew</span>
          </h1>

          <div className={styles.crewInfo}>
            <div className={styles.crewDetails}>
              {filteredState.length > 0 ? (
                <>
                  {filteredState.map((item, index) => {
                    return (
                      <div className={styles.aboutCrewMember} key={index}>
                        <div className={styles.nameAndOccupation}>
                          <h4>{item.occupation}</h4>

                          <h2>{item.name}</h2>
                        </div>

                        <p>{item.about}</p>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <div className={styles.aboutCrewMember}>
                    <div className={styles.nameAndOccupation}>
                      <h4>flight engineer</h4>

                      <h2>anousheh ansari</h2>
                    </div>

                    <p>
                      Anousheh Ansari is an Iranian American engineer and
                      co-founder of Prodea Systems. Ansari was the fourth
                      self-funded space tourist, the first self-funded woman to
                      fly to the ISS, and the first Iranian in space.
                    </p>
                  </div>
                </>
              )}

              <ul className={styles.dots}>
                <li
                  onClick={() => filterDetails("douglas hurley")}
                  style={{ backgroundColor: activeClass("douglas hurley") }}
                ></li>
                <li
                  onClick={() => filterDetails("anousheh ansari")}
                  style={{ backgroundColor: activeClass("anousheh ansari") }}
                ></li>
                <li
                  onClick={() => filterDetails("Victor Glover")}
                  style={{ backgroundColor: activeClass("Victor Glover") }}
                ></li>
                <li
                  onClick={() => filterDetails("Mark Shuttleworth")}
                  style={{ backgroundColor: activeClass("Mark Shuttleworth") }}
                ></li>
              </ul>
            </div>

            <div className={styles.crewImages}>
              {filteredState.length > 0 ? (
                <>
                  {filteredState.map((item, index) => {
                    return (
                      <div className={styles.imageContainer} key={index}>
                        <Image
                          src={item.image}
                          width="100%"
                          height="100%"
                          alt={item.name}
                        />
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/assets/crew/image-anousheh-ansari.png"
                      width="100%"
                      height="100%"
                      alt="image"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Crew;
