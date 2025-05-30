import presentation from '../assets/presentation.png';
import tgroup from '../assets/tgroup.png';

const AuxHRSection = () => {
  return (
    <div className="py-12 px-4 sm:px-6 bg-white mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <img
            src={presentation}
            alt="Team presentation"
            className="w-full object-cover"
          />
        </div>

        <div className="AUX space-y-4">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-medium font-raleway mt-2">
            AUX HR Sessions (**Discretion)
          </h2>
          <p className="font-raleway text-[18px] sm:text-[20px] font-medium">
            Everyday, participants learn a new software that is used in the workplace.
          </p>
          <p className="font-raleway text-[18px] sm:text-[20px] font-medium">
            AUX HR is a <strong>short</strong> session where they learn a tool that solves a problem or automates a business process.
          </p>
          <p className="font-raleway text-[18px] sm:text-[20px] font-medium">
            Business Owners and Employees especially love the OBAD daily sessions.
          </p>

          <button className="bg-[#101828] w-full sm:w-[197px] h-[60px] sm:h-[79px] rounded-[20px] text-white px-6 py-4 hover:bg-[#1c2e4a] font-raleway text-[20px] sm:text-[24px] font-medium mt-10">
            Enroll here
          </button>
        </div>
      </div>

      <div className="registration mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[90px] items-start">
        <div className="reg-box bg-[#101828] w-full md:w-[628px] h-auto md:h-[496px] text-white p-6 sm:p-10 space-y-4">
          <h3 className="text-[18px] sm:text-[20px] font-semibold font-raleway">No previous experience is required</h3>
          <p className="font-raleway text-[16px] sm:text-[18px] font-normal leading-[28px] sm:leading-[30px]">
            You do NOT need any skills
          </p>
          <p className="font-raleway text-[16px] sm:text-[18px] font-medium leading-[28px] sm:leading-[30px] my-6 sm:my-10">
            Just be able to use a computer. That’s all you need to join the training.
          </p>

          <div className="text-sm space-y-1">
            <p className="font-raleway text-[18px] sm:text-[20px] font-normal">
              Batch: HR Training Program in <span className="font-semibold">2025</span>
            </p>
            <p className="font-raleway text-[18px] sm:text-[20px] font-normal">
              Registration closes: <span className="font-semibold">May 30th</span>
            </p>
            <p className="font-raleway text-[18px] sm:text-[20px] font-normal">
              Cohort starts: <span className="font-semibold">June 2nd</span>
            </p>
          </div>

          <div className="relative mt-10">
            <svg
              className="absolute z-30 -top-1 -left-6.5 hidden sm:block"
              width="60"
              height="67"
              viewBox="0 0 60 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 2C45.2621 2 58 15.8898 58 33.5C58 51.1102 45.2621 65 30 65C14.7379 65 2 51.1102 2 33.5C2 15.8898 14.7379 2 30 2Z"
                fill="white"
                stroke="white"
                strokeWidth="4"
              />
            </svg>

            <button className="bg-[#101828] text-white w-full sm:w-[359px] h-[50px] sm:h-[60px] rounded-[20px] border-4 border-white font-medium font-raleway text-[14px] sm:text-[18px] px-4 py-2 relative z-20">
              Plan ahead and enroll in any batch
            </button>
          </div>
        </div>

        <div>
          <img
            src={tgroup}
            alt="HR training group"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AuxHRSection;
