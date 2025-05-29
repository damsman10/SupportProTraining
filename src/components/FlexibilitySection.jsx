import flexible from '../assets/flexible.png'

const FlexibilitySection = () => {
  return (
    <div className="my-10 py-12 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={flexible}
            alt="Man bending flexible bar"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="md:w-1/2 space-y-4">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-medium font-poppins">
            Flexibility <span className="font-normal">(For everyone)</span>
          </h2>
          <ul className="mt-2 font-poppins font-normal space-y-4 text-[18px] sm:text-[20px]">
            <li>
              <span className="font-medium">Fresh Graduates & Entry-Level Job Seekers</span> can register and attend.
            </li>
            <li>
              <span className="font-medium">Aspiring HR Professionals</span> can register and attend.
            </li>
            <li>
              <span className="font-medium">Young Entrepreneurs & Startup Founders</span> can register and attend.
            </li>
            <li>
              <span className="font-medium">Junior HR Officers & Assistants</span> can register and attend.
            </li>
            <li>
              <span className="font-medium">Freelancers & Virtual Assistants</span> can register and attend.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlexibilitySection;
