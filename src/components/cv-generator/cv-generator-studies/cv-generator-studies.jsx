import useDynamicForm from "../dynamic-form";

const CvGeneratorStudies = function() {

    const render = useDynamicForm({
        title: 'Studies',
        inputLabel: 'School name'
    });

    return render;
};

export default CvGeneratorStudies;
