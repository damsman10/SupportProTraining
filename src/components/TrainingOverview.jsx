import smilegirl from '../assets/smilegirl.jpg'

const TrainingOverview = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center px-4 md:px-10 lg:px-16 py-16 gap-8">
      
      <div className="left flex-1 space-y-8">
        <div>
          <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-semibold font-raleway leading-[1.2] mb-4 lg:w-[433px] text-[#101828]">
            What the HR Training is all about ?
          </h2>
          <p className="text-[#101828] leading-[1.5] text-[16px] sm:text-[17px] lg:text-[18px] font-medium font-montserrat lg:w-[488px]">
            Our HR Training Program is designed to enhance employee skills, ensure compliance with company policies, and improve overall workplace efficiency.
            <br /><br />
            The program covers onboarding, skill-building, compliance, and leadership training. Whether you’re starting out or advancing your career, you'll gain practical learning through structured courses. With top tools and resources, we set you up for success.
          </p>
        </div>
      </div>

      <div className="right flex-1 flex justify-center">
        <img
          src={smilegirl}
          alt="HR Training"
          className="w-full max-w-[500px] object-cover"
        />
      </div>

    </div>
  )
}

export default TrainingOverview
