import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../utils.js";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Want to land a Job"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
              I have a strong base in Web Development and have worked on multiple projects. While working on multiple projects I have gained experience in working with React and Tailwind. Currently I am working on a Project that Optimize the daily food intake of a person based on their BMI.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Competitive Programmer</h3>
              <p>
              I practise Competitive Programming regularly on Codeforces in which I am a Pupil and my max is Specialist. I have also participated in HackOn with Amazon Hackathons Organised by Amazon. Check my  <a href="https://codeforces.com/profile/Baski_Flex">Codeforces Profile</a>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
                I have a strong base in Data Analysis by performing excellent in my Big Data Analysis course offered in my college. I have worked on various projects which includes, Implement Locality Sensitive Hashing, Community Detection in Clusters and plotting them using Neo4j.               
                </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
