import React from "react";
import { useState } from "react";
import Navbar from "../src/components/Navbar";
import styles from "../styles/Destination.module.css";

const Destination = () => {
  const texts = [
    {
      id: 1,
      name: "moon",
      text: "i love the moon",
    },
    {
      id: 2,
      name: "mars",
      text: "i love mars",
    },

    {
      id: 3,
      name: "europa",
      text: "i love europa",
    },

    {
      id: 4,
      name: "earth",
      text: "i love earth",
    },
  ];

  const [filteredState, setFilteredState] = useState([]);

  const filtered = (e) => {
    const filterItem = texts.filter((item) => {
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
        : ["europa"];

    if (mapArr.includes(text)) {
      return "red";
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <p style={{ color: changeStyle("moon") }}>destination</p>
      <br />
      <br />
      <h4> destination</h4>
      <br />
      <br />

      <ul>
        <li
          className={styles.li}
          onClick={filtered}
          style={{ color: changeStyle("moon") }}
        >
          moon
        </li>
        <li
          className={styles.li}
          onClick={filtered}
          style={{ color: changeStyle("mars") }}
        >
          mars
        </li>
        <li
          className={styles.li}
          onClick={filtered}
          style={{ color: changeStyle("europa") }}
        >
          europa
        </li>
        <li
          className={styles.li}
          onClick={filtered}
          style={{ color: changeStyle("earth") }}
        >
          earth
        </li>
      </ul>

      <br />
      <br />

      <div className={styles.div}>
        {filteredState.length > 0 ? (
          <>
            {filteredState.map((item, index) => {
              return (
                <p className={styles.p} key={index}>
                  {item.text}
                </p>
              );
            })}
          </>
        ) : (
          <>
            {texts.map((item, index) => {
              return (
                <p className={styles.p} key={index}>
                  {item.text}
                </p>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

// export default Destination;
