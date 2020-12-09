import {useState} from 'react';
import {Loop} from "../shared/utility";

const useDynamicForm = function(labels) {
    const [forms, setForms] = useState([]);
    const [nextId, setNextId] = useState(1);

    const newForm = function() {
        setForms([
            ...forms,
            {
                id: nextId,
                company: '',
                dateOfStart: null,
                dateOfEnd: null
            }
        ]);
        setNextId(nextId + 1);
    };

    const deleteForm = function(index) {
        const changedForms = [...forms];
        changedForms.splice(index, 1);
        setForms(changedForms);
    }

    const type = function(event, index) {
        const changedForms = [...forms];
        changedForms[index][event.target.name] = event.target.value;
        setForms(changedForms);
    };

    return (
        <div>
            <h2>{labels.title}</h2>
            <button type="button" onClick={newForm}>New form</button>
            <Loop forEach={forms}>
                {(form, index) => (
                    <fieldset key={form.id} >
                        <label>
                            {labels.inputLabel}:
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
                        <span onClick={(event) => deleteForm(index)}>X</span>
                    </fieldset>
                )}
            </Loop>
        </div>
    );
};

export default useDynamicForm;
