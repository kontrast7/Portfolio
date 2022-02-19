import React from 'react'
import styles from './Main.module.scss';
import photo from '../assets/images/photo.jpg'
import Button from "../common/button/Button";


function Main() {

    return (
        <div className={styles.mainBlock} id='home'>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <h5>Hello, my name is</h5>
                    <h1>Maksim Mashko</h1>
                    <h5>Front-end Developer based in #Minsk</h5>
                    <a href={"https://drive.google.com/file/d/1cRIWrh3BhimAfilU2KwZKah9I4lK5-4h/view?usp=sharing"} download={true}>
                        <Button title={'download my cv'}/>
                    </a>
                </div>
                <div className={styles.photo}>
                    <img src={photo} alt="it's me"/>
                </div>
            </div>
        </div>
    );
}

export default Main;