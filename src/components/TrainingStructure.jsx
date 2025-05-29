import trainees from '../assets/trainees.png';

const TrainingStructure = () => {
  return (
    <div className="py-12 px-6 bg-white">
      <div className="flex flex-wrap justify-center gap-3 px-6 mb-20">
        <button className="bg-green-500 text-white text-sm px-4 py-1 rounded-full shadow-sm">
          Now open ✅
        </button>
        <button className="bg-red-500 text-white text-sm px-4 py-1 rounded-full shadow-sm">
          Now closed 🔒
        </button>
        <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded-full shadow-sm">
          Resume ➝
        </button>
        <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded-full shadow-sm">
          Enroll here ➝
        </button>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-18">
        <div className="left w-full md:w-1/2 flex items-stretch">
          <img
            src={trainees}
            alt="Happy trainees walking together"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="right w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-[36px] font-raleway font-semibold mb-4">
              How are the classes structured?
            </h2>
            <p className="mb-6 font-medium font-raleway text-[24px]">
              Here is the Schedule for the Training:
            </p>
            <h3 className="text-[36px] font-raleway font-semibold mb-4">
              Training Format & Duration
            </h3>

            <div className="space-y-3 text-[18px] font-raleway font-normal">
              <p><span className="font-extrabold text-[22px]">Mode:</span> Hybrid (Online & In-Person)</p>
              <p><span className="font-extrabold text-[22px]">Duration:</span> 4 to 8 Weeks (depending on depth)</p>
              <p><span className="font-extrabold text-[22px]">Sessions:</span> 2 to 3 sessions per week (1.5 – 2 hours per session)</p>
              <p><span className="font-extrabold text-[22px]">Assessment:</span> Weekly quizzes, practical tasks, and final project</p>
            </div>

            <div className="mt-6 p-4 border-4 border-[#101828] rounded-[20px] bg-white px-6 md:px-16 py-6 w-full md:w-[458px]">
              <p className="font-raleway text-[18px] font-medium">
                The Training is a mix of pre-recorded and live sessions. <br />
                Everything is recorded. <br />
                You will never miss anything.
              </p>
            </div>
          </div>

        </div>
      </div>
          <div className="button text-center mt-10">
            <button className="border-4 border-[#4884DF] rounded-[20px] bg-[#101828] text-white px-10 py-2 hover:bg-[#596298] transition duration-200 font-raleway text-[18px]">
              Enroll here
            </button>
          </div>
    </div>
  );
};

export default TrainingStructure;
