import { useState } from "react";
import {Loop} from "../../shared/utility";

const CvGeneratorExperience = function() {

    const [forms, setForms] = useState([
        {
            company: 'BMW',
            dateOfStart: 1987,
            dateOfEnd: 1997
        },
        {
            company: 'Nokia',
            dateOfStart: 1991,
            dateOfEnd: 1999
        }
    ]);

    const newForm = function() {
        setForms([
            ...forms,
            {
                company: '',
                dateOfStart: null,
                dateOfEnd: null
            }
        ]);
    };

    const type = function(event, index) {
        const changedForms = [...forms];
        changedForms[index][event.target.name] = event.target.value;
        setForms(changedForms);
    };

    return(
        <div>
            <h2>Experiences</h2>
            <button type="button" onClick={newForm}>New form</button>
            <Loop forEach={forms}>
                {(form, index) => (
                    <fieldset key={index} >
                        <label>Company name:
                            <input type="text" name="company" value={form.company} onChange={(event) => type(event, index)}/>
                        </label>
                        <select value={form.dateOfStart} name="dateOfStart" onChange={(event) => type(event, index)}>
                            <option value={null}>Year</option>
                            <Loop for={70}>
                                {n => (
                                    <option key={n} value={n + 1950}>{n + 1950}</option>
                                )}
                            </Loop>
                        </select>
                        -
                        <select value={form.dateOfEnd} name="dateOfEnd" onChange={(event) => type(event, index)}>
                            <option value={null}>Year</option>
                            <Loop for={70}>
                                {n => (
                                    <option key={n} value={n + 1950}>{n + 1950}</option>
                                )}
                            </Loop>
                        </select>
                    </fieldset>
                )}
            </Loop>
            
        </div>

    );
};

export default CvGeneratorExperience;