import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../src/components/Navbar";
import styles from "../styles/Technology.module.css";

const Technology = () => {
  const technology = [
    {
      name: "launch vehicle",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth&pos;s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it&apos;s quite an awe-inspiring sight on the launch pad!",
      mobileImage: "/assets/technology/image-launch-vehicle-portrait.jpg",
      desktopImage: "/assets/technology/image-launch-vehicle-landscape.jpg",
    },

    {
      name: "space capsule",
      description:
        " A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      mobileImage: "/assets/technology/image-space-capsule-portrait.jpg",
      desktopImage: "/assets/technology/image-space-capsule-landscape.jpg",
    },

    {
      name: "space port",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch",
      mobileImage: "/assets/technology/image-spaceport-portrait.jpg",
      desktopImage: "/assets/technology/image-spaceport-landscape.jpg",
    },
  ];

  const [filteredState, setFilteredState] = useState([]);

  const filterData = (name) => {
    const filteredData = technology.filter((item) => {
      return item.name.toLowerCase() === name.toLowerCase();
    });

    setFilteredState([...filteredData]);

    // console.log(filteredData);
  };

  const addActiveClass = (name) => {
    const newArr =
      filteredState.length > 0
        ? filteredState.map((item) => item.name.toLowerCase())
        : ["launch vehicle"];

    if (newArr.includes(name.toLowerCase())) {
      return {
        backgroundColor: "white",
        color: "black",
      };
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />

      <section className={styles.technology}>
        <div className={styles.technologyContainer}>
          <div className={styles.spaceLaunch}>
            <h1>
              03 <span>space launch 101</span>
            </h1>
          </div>

          <section className={styles.technologyInfo}>
            <div className={styles.technologyDescription}>
              <div className={styles.numbers}>
                <ul>
                  <li
                    onClick={() => filterData("launch vehicle")}
                    style={addActiveClass("launch vehicle")}
                  >
                    <span>1</span>
                  </li>
                  <li
                    onClick={() => filterData("space capsule")}
                    style={addActiveClass("space capsule")}
                  >
                    <span>2</span>
                  </li>
                  <li
                    onClick={() => filterData("space port")}
                    style={addActiveClass("space port")}
                  >
                    <span>3</span>
                  </li>
                </ul>
              </div>

              {filteredState.length > 0 ? (
                <>
                  {filteredState.map((item, index) => {
                    return (
                      <div className={styles.texts} key={index}>
                        <div className={styles.heading}>
                          <h4>the terminology...</h4>
                          <h2> {item.name}</h2>
                        </div>

                        <p>{item.description}</p>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <div className={styles.texts}>
                    <div className={styles.heading}>
                      <h4>the terminology...</h4>
                      <h2>launch vehicle</h2>
                    </div>

                    <p>
                      A launch vehicle or carrier rocket is a rocket-propelled
                      vehicle used to carry a payload from Earth&pos;s surface
                      to space, usually to Earth orbit or beyond. Our WEB-X
                      carrier rocket is the most powerful in operation. Standing
                      150 metres tall, it&apos;s quite an awe-inspiring sight on
                      the launch pad!
                    </p>
                  </div>
                </>
              )}
            </div>

            {filteredState.length > 0 ? (
              <>
                {filteredState.map((item, index) => {
                  return (
                    <div className={styles.technologyImage} key={index}>
                      <div className={styles.imageContainer}>
                        <Image
                          src={item.desktopImage}
                          alt="image"
                          width="100%"
                          height="100%"
                        />
                      </div>

                      <div className={styles.imageMobile}>
                        <Image
                          src={item.mobileImage}
                          alt="image"
                          width="100%"
                          height="100%"
                        />
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className={styles.technologyImage}>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/assets/technology/image-launch-vehicle-landscape.jpg"
                      alt="image"
                      width="100%"
                      height="100%"
                    />
                  </div>

                  <div className={styles.imageMobile}>
                    <Image
                      src="/assets/technology/image-launch-vehicle-portrait.jpg"
                      alt="image"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
              </>
            )}
          </section>
        </div>
      </section>
    </div>
  );
};

export default Technology;
