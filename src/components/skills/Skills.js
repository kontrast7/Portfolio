import React from "react";
import classes from "./Skills.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export const Skills = () => {
    return (
      <div className={classes.box} id="skills">
        <ScrollAnimation
          offset={0}
          animateIn="fadeInLeft"
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >

          <span className={classes.head}>WHAT I DO?</span>
          <h2 className={classes.heading}>My skills</h2>
          <div className={classes.Interest}>
            <ScrollAnimation
              offset={0}
              animateIn="fadeInLeft"
              duration={2.4}
              animateOnce={true}
              initiallyVisible={true}
            >
              <div className={classes.container}>
              <div className={classes.web}>
                <h3>React</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              </div>

            </ScrollAnimation>
            <ScrollAnimation
              offset={0}
              animateIn="fadeInLeft"
              duration={2.4}
              animateOnce={true}
              initiallyVisible={true}
            >
              <div className={classes.container}>
              <div className={classes.app}>
                <h3>React</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              offset={0}
              animateIn="fadeInLeft"
              duration={2.4}
              animateOnce={true}
              initiallyVisible={true}
            >
              <div className={classes.container}>
              <div className={classes.other}>
                <h3>React</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    );
}

