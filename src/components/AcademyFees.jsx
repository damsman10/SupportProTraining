const AcademyFees = () => {
  return (
    <div className="bg-[#4884DE] w-full px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-[1000px] mx-auto">
        <div className="w-full sm:w-[500px] mx-auto flex flex-col gap-0.5">
          <div className="px-6 pt-8 pb-6 bg-[#F1F6FD] rounded-t-2xl">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-raleway text-center font-semibold mb-6">
              The academy fees
            </h2>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-4">
              <span className="bg-[#09826E] text-white text-[14px] sm:text-[16px] font-raleway font-bold px-4 py-1 rounded-full">
                NGN
              </span>
              <span className="bg-[#FDA33C] text-black text-[14px] sm:text-[16px] font-raleway font-bold px-4 py-1 rounded-full">
                USD
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-2">
              <span className="text-[20px] sm:text-[24px] font-inter font-medium text-[#101828]">₦100,000</span>
              <span className="text-[20px] sm:text-[24px] font-inter font-bold text-[#101828] border-b-2">₦50,000</span>
              <span className="text-[20px] sm:text-[24px] font-inter font-semibold text-[#101828]">$50</span>
            </div>
            <p className="text-[18px] sm:text-[20px] font-raleway font-medium text-[#101828] mt-3 text-center mb-6">
              Can be paid in over 10 currencies
            </p>
            <ul className="text-left text-sm text-gray-800 space-y-3 max-w-xs mx-auto">
              {[
                'Over 30+ courses',
                'Access to the live recorded class',
                'Community & support',
                'World class facilitator',
                'Certification',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex font-raleway font-normal text-[16px] items-start gap-4"
                >
                  <svg
                    className="mt-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0C3.5816 0 0 3.58187 0 8C0 12.4181 3.58187 16 8 16C12.4181 16 16 12.4181 16 8C16 3.58187 12.4181 0 8 0ZM6.14 12.8L6.13467 12.7947L6.13013 12.8L2.4 8.96L4.2744 7.0496L6.13493 8.96533L11.7349 3.20027L13.6 5.11973L6.14 12.8Z"
                      fill="#4884DF"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="h-auto mt-2 bg-[#EDF4FF] px-6 py-6 rounded-b-[20px]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#09826E] h-[50px] w-full sm:w-[200px] text-[18px] sm:text-[20px] font-raleway font-bold text-white rounded-[10px] hover:bg-green-800 transition">
                Full payment ➡
              </button>
              <span className="text-[18px] sm:text-[20px] font-bold text-black font-raleway">OR</span>
              <button className="bg-[#FDA33B] h-[50px] w-full sm:w-[200px] text-[18px] sm:text-[20px] font-raleway font-bold text-black rounded-[10px] hover:bg-yellow-400 transition">
                Part payment ➡
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyFees;
