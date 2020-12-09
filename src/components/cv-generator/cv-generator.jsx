import CvGeneratorHeader from "./cv-generator-header/cv-generator-header";
import CvGeneratorExperience from "./cv-generator-experience/cv-generator-experience";
import CvGeneratorStudies from "./cv-generator-studies/cv-generator-studies";
import CvGeneratorMoreData from "./cv-generator-more-data/cv-generator-more-data";


const CvGenerator = function() {
    return(
        <form>
            <CvGeneratorHeader />
            <CvGeneratorExperience />
            <CvGeneratorStudies />
            <CvGeneratorMoreData />
        </form>
    );
};

export default CvGenerator;
