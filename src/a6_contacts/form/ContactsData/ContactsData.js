import React from 'react'
import styles from './ContactsData.module.scss';
import { faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faHome} from "@fortawesome/free-solid-svg-icons";
import DataBlock from "./DataBlock/DataBlock";



function ContactsData() {
    return (
            <div className={styles.data}>
                <DataBlock iconTitle={faTelegramPlane} contactTitle={'Phone'} data={'+375-29-886-88-46'} a={"tel:+375-29-886-88-46"}/>
                <DataBlock iconTitle={faEnvelope} contactTitle={'Email'} data={'maks.mashko@gmail.com'} a={""}/>
                <DataBlock iconTitle={faHome} contactTitle={'My Location'} data={'Minsk, Belarus'} a={""}/>
            </div>
    );
}

export default ContactsData;