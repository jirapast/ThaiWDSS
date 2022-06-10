import { FunctionComponent, useEffect } from "react";
import styles from "./css/FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("styles.animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <header
      className={styles.frameHeader}
      id="navbar"
      Wildfire="Hello"
      data-animate-on-scroll
    >
      <div className={styles.bgDiv}>
        <div className={styles.rectangleDiv} />
      </div>
      <div className={styles.languageDiv} />
      <div className={styles.engDiv}>Eng</div>
      <div className={styles.wildFireSituation}>
        <div className={styles.wildFireSituation1}>Wild Fire Situation</div>
      </div>
      <div className={styles.rectangleDiv1} />
      <div className={styles.dashboardDiv}>Dashboard</div>
      <div className={styles.logoDiv}>
        <div className={styles.rectangleDiv2} />
        <div className={styles.lOGODiv}>LOGO</div>
      </div>
      <div className={styles.mapDiv}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="rectangle-12@2x.png"
        />
      </div>
      <div className={styles.rectangleDiv3} />
      <div className={styles.searchAreaDiv}>Search area</div>
      <div className={styles.wildfirePointDiv}>Wildfire point</div>
      <div className={styles.weatherDiv}>Weather</div>
      <div className={styles.rectangleDiv4} />
      <div className={styles.windVelocityDiv}>Wind Velocity</div>
      <div className={styles.windDirection}>Wind Direction (....)</div>
      <div className={styles.typeAreaOrLATLONG}>Type area or LAT,LONG</div>
      <div className={styles.rectangleDiv5} />
      <div className={styles.rectangleDiv6} />
      <div className={styles.xXDiv}>XX</div>
      <div className={styles.degreeDiv}>degree</div>
      <div className={styles.xXDiv1}>XX</div>
      <div className={styles.kmhrDiv}>km/hr</div>
      <img className={styles.inDecreaseIcon} alt="" src="indecrease.svg" />
      <img className={styles.inDecreaseIcon1} alt="" src="indecrease.svg" />
      <div className={styles.rectangleDiv7} />
      <div className={styles.rectangleDiv8} />
      <div className={styles.rectangleDiv9} />
      <div className={styles.importFromFIRMS}>import from FIRMS</div>
      <div className={styles.customDiv}>custom</div>
      <div className={styles.rectangleDiv10} />
      <img className={styles.vectorIcon} alt="" src="vector.svg" />
      <div className={styles.frameDiv}>
        <div className={styles.fbDiv}>
          <div className={styles.rectangleDiv11} />
          <div className={styles.firebreakDiv}>Firebreak</div>
          <img className={styles.vectorIcon1} alt="" src="vector1.svg" />
        </div>
        <div className={styles.uaDiv}>
          <div className={styles.rectangleDiv12} />
          <div className={styles.urbanAreaDiv}>Urban Area</div>
          <img className={styles.vectorIcon2} alt="" src="vector1.svg" />
        </div>
        <div className={styles.uaDiv}>
          <div className={styles.rectangleDiv13} />
          <div className={styles.urbanAreaDiv}>Land Cover</div>
          <img className={styles.vectorIcon2} alt="" src="vector1.svg" />
        </div>
      </div>
      <div className={styles.useToolAboveToSetWildfire}>
        use tool above to set wildfire point
      </div>
      <div className={styles.rectangleDiv14} />
      <img className={styles.windowCloseIcon} alt="" src="windowclose.svg" />
    </header>
  );
};


export default FrameComponent