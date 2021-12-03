import React  from "react";
import classes from "./Works.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { MdAccountBox } from "react-icons/md";
import { MdList } from "react-icons/md";
import pensil from "../images/Pencil.jpg"


export const Works =() => {
    return (
      <div className={classes.box} id="works">
        <ScrollAnimation
          offset={0}
          animateIn="fadeInLeft"
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>MY PROJECT</span>
          <section className={classes.container}>
            <div className={classes.container_content}>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>

                    <ScrollAnimation
                      offset={0}
                      animateIn="fadeInLeft"
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}
                        >
                          <MdList />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            TODO <span>TS/REACT/REDUX</span>
                          </h2>
                          <img className={classes.img} src={pensil}/>
                          <p>
                           Lorem
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>


                    <ScrollAnimation
                      offset={0}
                      animateIn="fadeInLeft"
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={classes.timeline_icon}>
                          <MdAccountBox />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Social Network <span>TS/REACT/REDUX</span>
                          </h2>
                          <img className={classes.img} src={pensil}/>
                          <p>
                           Lorem
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>

                    {/*<ScrollAnimation*/}
                    {/*  offset={0}*/}
                    {/*  animateIn="fadeInLeft"*/}
                    {/*  duration={2.4}*/}
                    {/*  animateOnce={true}*/}
                    {/*  initiallyVisible={true}*/}
                    {/*>*/}
                    {/*  <article className={classes.timeline_entry}>*/}
                    {/*    <div*/}
                    {/*      className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}*/}
                    {/*    >*/}
                    {/*      <FaSchool />*/}
                    {/*    </div>*/}
                    {/*    <div className={classes.label}>*/}
                    {/*      <h2>*/}
                    {/*        ыкывпап <span>вапвапав</span>*/}
                    {/*      </h2>*/}
                    {/*      <p>вапвапавп</p>*/}
                    {/*    </div>*/}
                    {/*  </article>*/}
                    {/*</ScrollAnimation>*/}


                    <ScrollAnimation
                      offset={0}
                      animateIn="fadeInLeft"
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}
                        >
                          <MdList />
                        </div>
                        <div className={classes.label}>
                          <h2>Lorem</h2>
                          <img className={classes.img} src={pensil}/>
                          <p>
                           Lorem
                          </p>
                        </div>
                        <div className={classes.timeline_entry_inner}>
                          <div
                            className={
                              classes.timeline_icon_3 || classes.color_none
                            }
                          />
                        </div>
                      </article>
                    </ScrollAnimation>


                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    );
}

