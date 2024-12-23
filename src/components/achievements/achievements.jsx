import React from "react";
import styles from "./achievements.module.css";
import { getImageUrl } from "../utils.js";

export const Achievements = () => {
  return (
    <section className={styles.container} id="achievements">
      <h2 className={styles.title}>Achievements</h2>
      <div className={styles.content}>
        <ul className={styles.achievementsItems}>
          <li className={styles.achievementsItem}>
          <img src={getImageUrl("achievements/React_icon.png")} alt="React icon" className={styles.ReactImage} />
            <div className={styles.achievementsItemText}>
              <h3>React Developer</h3>
              <p>
                Being a Fanatic of React, I have built multiple projects using React and its ecosystem. I have also contributed to open-source projects and have been engaged with projects on React development. In fact, the website you are currently viewing is built using React.
              </p>
            </div>
          </li>
          <li className={styles.achievementsItem}>
            <img src={getImageUrl("achievements/codeforces.png")} alt="Trophy icon" className={styles.codeforcesImage} />
            <div className={styles.achievementsItemText}>
              <h3 style={{ color: "cyan" }}>Codeforces Specialist</h3>
              <p>
                Achieved Codeforces "Specialist" title with consistent performance in competitive programming contests. With Constant dedication and daily practise, I have solved over 250+ problems and my next goal is to reach the Expert level.
              </p>
            </div>
          </li>
          <li className={styles.achievementsItem}>
          <img src={getImageUrl("achievements/blockchain.png")} alt="Trophy icon" className={styles.blockchainImage} />
            <div className={styles.achievementsItemText}>
              <h3>Excelled in Content Writing</h3>
              <p>
                With a interest in writing, I have written multiple articles on Codeforces and Math StackExchange.               
                </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
