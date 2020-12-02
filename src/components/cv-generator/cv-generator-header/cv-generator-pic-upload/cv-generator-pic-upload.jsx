import React, { useState } from "react";
import styles from "./cv-generator-pic-upload.module.scss";

const CvGeneratorPicUpload = function() {
    const [error, setError] = useState(false);
    const [image, setImage] = useState(null);

    const upload = function (event) {
        const file = event.target.files[0];
        if (file.type.indexOf('image/') === 0) {
            setError(false);
            const reader = new FileReader();
            reader.onload = function(readerEvent) {
                setImage(readerEvent.target.result);
            };
            reader.readAsDataURL(file);
        }
        else {
            setError(true);
        }
    };

    return(
        <React.Fragment>
            {error &&
                <span>Csak képfájl tölthető fel!</span>
            }
            <label>Upload a picture: <input type="file" onChange={upload}/></label>
            {image &&
                <img src={image} className={styles.image}/>
            }
        </React.Fragment>
    );
};

export default CvGeneratorPicUpload;