import AcademyFees from "../components/AcademyFees"
import AccessAnywhere from "../components/AccessAnywhere"
import AnyQuestions from "../components/AnyQuestions"
import AuxHRSection from "../components/AuxHRSection"
import CertificationSection from "../components/CertificationSection"
import Criteria from "../components/Criteria"
import Curriculum from "../components/Curriculum"
import DatePill from "../components/DatePill"
import DatePill2 from "../components/DatePill2"
import DigitalSkills from "../components/DigitalSkills"
import Directors from "../components/Directors"
import EnrollmentCTA from "../components/EnrollmentCTA"
import EnrolmentInfo from "../components/EnrolmentInfo"
import FAQS from "../components/FAQS"
import FinalCTA from "../components/FinalCTA"
import FinalWeek from "../components/FinalWeek"
import FlexibilitySection from "../components/FlexibilitySection"
import FootCTA from "../components/FootCTA"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import HumanResources from "../components/HumanResources"
import LearningTools from "../components/LearningTools"
import Software from "../components/Software"
import TalentMgt from "../components/TalentMgt"
import Testimonials from "../components/Testimonials"
import Title from "../components/Title"
import Topics from "../components/Topics"
import TrainingAudience from "../components/TrainingAudience"
import TrainingOverview from "../components/TrainingOverview"
import TrainingStructure from "../components/TrainingStructure"
import Welcome from "../components/Welcome"


const Home = () => {
  return (
    <div>
        <Header />
        <div className="max-w-[1284px] m-auto">
          <Title />
          <Hero />
          <Welcome />
          <DatePill />
          <TalentMgt />
          <TrainingOverview />
          <TrainingAudience />
          <EnrolmentInfo />
          <Criteria />
          <Curriculum />
          <Topics />
        </div>

        <div className="overflow-hidden">
          <Software />
        </div>

        <div className="max-w-[1284px] m-auto">
          <HumanResources />
          <Directors />
          <TrainingStructure />
          <LearningTools />
          <FlexibilitySection />
          <AcademyFees />
          <AuxHRSection />
          <EnrollmentCTA />
        </div>

        <div className="overflow-hidden">
          <Testimonials />
        </div>

        <div>

          <CertificationSection />
          <AccessAnywhere />
          <DigitalSkills />
          <FinalWeek />
          <FAQS />
          <DatePill2 />
        </div>

        <div className="overflow-hidden">
          <FinalCTA />
          <AnyQuestions />
          <FootCTA />
        </div>
        
        <Footer />

    </div>
  )
}

export default Home