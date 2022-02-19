import React from 'react'
import styles from './Footer.module.scss';


function Footer() {
    return (
        <div className={styles.footerContainer}>
            <p className={styles.copyRightBlock}>© 2022, All Rights Reserved.</p>
            <ul>
                <li><a href={"https://github.com/kontrast7"} target="_blank" rel="noreferrer">GitHub</a></li>
               <li ><a href={'https://www.linkedin.com/in/maksim-mashko-859500217/'} target="_blank" rel="noreferrer">Linkedin</a></li>
               <li ><a href={"https://www.instagram.com/maks.mashko"} target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
        </div>
    );
}

export default Footer;