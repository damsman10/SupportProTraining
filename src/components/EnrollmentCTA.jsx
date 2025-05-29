import happyp from '../assets/happyp.png';

const EnrollmentCTA = () => {
  return (
    <div className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-center">

        <div className="w-full">
          <img
            src={happyp}
            alt="Happy professionals on laptop"
            className="w-full object-cover"
          />
        </div>

        <div className="space-y-4 text-[20px] sm:text-[24px] md:text-[28px] font-raleway font-medium text-center md:text-left">
          <p>Enrollment is currently on-going.</p>
          <p>
            Classes commence on <strong className="font-bold">June 2nd 2025</strong>
          </p>
          <p>
            Enrollment open till <span className="text-[#DD1212] font-bold">May 30th 2025</span>
          </p>
          <p>You should enroll now.</p>

          <div className="mt-12 flex justify-center md:justify-start">
            <button className="border-4 border-[#4884DF] w-[180px] h-[50px] bg-[#101828] text-white px-6 py-2 rounded-[20px] hover:bg-[#384862] font-raleway font-semibold text-[18px]">
              Enroll here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentCTA;
