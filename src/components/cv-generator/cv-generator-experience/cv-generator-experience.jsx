import useDynamicForm from "../dynamic-form";

const CvGeneratorExperience = function() {

    const render = useDynamicForm({
        title: 'Experiences',
        inputLabel: 'Company name'
    });

    return render;
};

export default CvGeneratorExperience;
