import criteria from '../assets/criteria.svg';

const Criteria = () => {
  return (
    <div className="py-16 px-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-[288px] max-w-[1268px] mx-auto">
        <div className="left space-y-4 text-center lg:text-left">
          <h2 className="text-[24px] font-raleway font-semibold w-full lg:w-[576px] mx-auto lg:mx-0">
            What are the enrolment criteria into our HR training program?
          </h2>
          <img
            src={criteria}
            alt="Instructor teaching"
            className="w-full max-w-[484.4px] h-auto lg:h-[323px] mx-auto lg:mx-0"
          />
        </div>

        <div className="right space-y-4 text-center lg:text-left">
          <h3 className="text-[28px] lg:text-[34px] font-semibold text-[#101828] font-raleway">
            Only these simple criteria
          </h3>
          <p className="text-[16px] lg:text-[18px] w-full lg:w-[283px] mt-6 lg:mt-12 text-[#101828] font-normal font-raleway mx-auto lg:mx-0">
            Passionate about HR, recruitment, or business management; able to perform basic computer tasks (email, MS Office, web browsing); proficient in spoken and written English with a stable internet connection.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mt-10">
            <button className="bg-[#101828] font-bold font-raleway text-[20px] w-[180px] h-[60px] text-white px-6 py-2 rounded-[10px]">
              I want to enroll
            </button>

            <div className="relative text-sm text-yellow-600 font-semibold mt-8 sm:mt-0">
              <svg
                className="absolute -top-20 -left-12 sm:left-0"
                width="252"
                height="181"
                viewBox="0 0 252 181"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M107.307 4.70543L121.589 19.9546L133.529 0.845004L142.557 18.4272L159.44 0.907632L162.819 20.0543L183.907 4.89057L181.49 24.765L205.861 12.6198L197.753 32.3533L224.342 23.7574L210.898 42.4875L238.543 37.8167L220.351 54.7249L247.844 54.1832L225.698 68.5305L251.837 72.1417L226.705 83.301L250.348 90.9072L223.328 98.3908L243.442 109.66L215.716 113.14L231.422 127.579L204.201 126.905L214.811 143.883L189.285 139.084L194.337 157.859L171.622 149.144L170.895 168.895L151.982 156.645L145.508 176.51L131.225 161.261L119.286 180.37L110.257 162.788L93.3751 180.308L89.9953 161.161L68.9081 176.325L71.3246 156.45L46.9541 168.595L55.0613 148.862L28.4727 157.458L41.9162 138.728L14.2714 143.398L32.4638 126.49L4.971 127.032L27.1171 112.685L0.977968 109.074L26.1099 97.9142L2.46679 90.308L29.4862 82.8243L9.37242 71.5556L37.0984 68.0747L21.393 53.6359L48.6138 54.3098L38.0033 37.332L63.5292 42.1314L58.4772 23.3565L81.1926 32.0715L81.92 12.3202L100.832 24.57L107.307 4.70543Z"
                  fill="#FFFF01"
                  fillOpacity="0.8"
                />
              </svg>

              <div className="absolute -top-20 left-8 sm:left-20 font-bold text-[24px] font-inter text-[#101828] -rotate-[12.58deg]">
                <span className="font-raleway font-bold text-[24px] block">Just</span>
                <span className="text-[24px] font-inter font-bold block -mb-1.5">₦50,000</span>
                <span className="font-raleway font-bold text-[32px] block">or</span>
                <span className="font-inter font-semibold text-[24px] block">$50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Criteria;
