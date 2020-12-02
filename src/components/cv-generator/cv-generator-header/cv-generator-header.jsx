import { useState } from "react";
import CvGeneratorPicUpload from "./cv-generator-pic-upload/cv-generator-pic-upload";

const CvGeneratorHeader = function() {
    const [baseData, setBaseData] = useState({
        name: '',
        email: '',
        webpage: ''
    });

    const type = function(event) {
        setBaseData({
            ...baseData,
            [event.target.id]: event.target.value
        });
    };

    return(
        <fieldset>
            <label>Name: <input id="name" type="text" value={baseData.name} onChange={type} /></label>
            <label>Email: <input id="email" type="email" value={baseData.email} onChange={type} /></label>
            <label>Webpage: <input id="webpage" type="url" value={baseData.webpage} onChange={type} /></label>
            <CvGeneratorPicUpload />
        </fieldset>
    );
};

export default CvGeneratorHeader;