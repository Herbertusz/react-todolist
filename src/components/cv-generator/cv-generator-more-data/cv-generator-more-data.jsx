import { useState } from "react";

const CvGeneratorMoreData = function() {

    const [licenses, setLicenses] = useState([]);

    const type = function(event) {
        if (event.target.checked) {
            setLicenses([
                ...licenses,
                event.target.value
            ]);
        }
        else {
            setLicenses(licenses.filter(item => item !== event.target.value));
        }
    };

    return (
        <fieldset>
            <h2>Driving-licenses:</h2>
            <label><input type="checkbox" name="license" value="A" checked={licenses.includes('A')} onChange={type}/>A</label>
            <label><input type="checkbox" name="license" value="B" checked={licenses.includes('B')} onChange={type}/>B</label>
            <label><input type="checkbox" name="license" value="C" checked={licenses.includes('C')} onChange={type}/>C</label>
            <label><input type="checkbox" name="license" value="D" checked={licenses.includes('D')} onChange={type}/>D</label>
            <label><input type="checkbox" name="license" value="E" checked={licenses.includes('E')} onChange={type}/>E</label>
        </fieldset>
    );
};

export default CvGeneratorMoreData;
