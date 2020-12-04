import { useState } from "react";
import CvGeneratorPicUpload from "./cv-generator-pic-upload/cv-generator-pic-upload";
import styles from "./cv-generator-header.module.scss"

const CvGeneratorHeader = function() {
    const [baseData, setBaseData] = useState({
        name: '',
        sex: 'male',
        email: '',
        webpage: ''
    });

    const type = function(event) {
        setBaseData({
            ...baseData,
            [event.target.name]: event.target.value
        });
    };

    return(
        <fieldset className={styles.header}>
            <label>Name: <input name="name" type="text" value={baseData.name} onChange={type} /></label>
            <div>Sex: 
                <label><input type="radio" name="sex" value="male" checked={baseData.sex === "male"} onChange={type}/>Male</label>
                <label><input type="radio" name="sex" value="female" checked={baseData.sex === "female"} onChange={type}/>Female</label>
            </div>
            <label>Email: <input name="email" type="email" value={baseData.email} onChange={type} /></label>
            <label>Webpage: <input name="webpage" type="url" value={baseData.webpage} onChange={type} /></label>
            <CvGeneratorPicUpload />
        </fieldset>
    );
};

export default CvGeneratorHeader;