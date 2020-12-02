import CvGeneratorHeader from "./cv-generator-header/cv-generator-header";
import CvGeneratorExperience from "./cv-generator-experience/cv-generator-experience";


const CvGenerator = function() {
    return(
        <form>
            <CvGeneratorHeader />
            <CvGeneratorExperience />
        </form>
    );
};

export default CvGenerator;