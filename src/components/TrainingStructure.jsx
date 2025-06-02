import trainees from '../assets/trainees.png';

const TrainingStructure = () => {
  return (
    <div className="py-6 px-6 bg-white">
      <div className="hidden flex flex-col sm:flex-row justify-between gap-10 sm:gap-2 px-20 mb-20">
        <button className="bg-[#1FAF38] w-full md:w-[130px] flex items-center justify-center gap-3 h-[40px] font-raleway text-center text-[12px] font-[900] text-white text-sm px-4 py-1 rounded-full shadow-sm">
          Now open 
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.64 0H2.35996C1.05849 0 0 1.11759 0 2.49167V16.508C0 17.8821 1.05849 19 2.35996 19H15.64C16.9412 19 18 17.8821 18 16.508V2.49167C18 1.11759 16.9412 0 15.64 0ZM12.623 2.52552C12.9159 2.52552 13.1969 2.64833 13.4041 2.86695C13.6114 3.08557 13.7279 3.3821 13.728 3.69136C13.728 4.33525 13.3377 4.85779 12.623 4.85779C12.4758 4.86131 12.3294 4.83375 12.1925 4.77673C12.0555 4.71971 11.9307 4.63438 11.8254 4.52574C11.7202 4.41711 11.6365 4.28736 11.5794 4.14413C11.5223 4.0009 11.4929 3.84706 11.4929 3.69166C11.4929 3.53625 11.5223 3.38242 11.5794 3.23918C11.6365 3.09595 11.7202 2.9662 11.8254 2.85757C11.9307 2.74894 12.0555 2.6636 12.1925 2.60658C12.3294 2.54956 12.4758 2.522 12.623 2.52552ZM10.2326 6.18902C10.3351 5.81179 10.7867 5.14333 11.569 5.14333H13.6761C14.4586 5.14333 14.9108 5.81179 15.0124 6.18902L15.782 8.92128H14.8245L14.2611 6.86197H13.8904L14.4337 8.92128H10.8114L11.3544 6.86197H10.984L10.4214 8.92128H9.46396L10.2326 6.18902ZM5.2669 2.51474C5.41209 2.51474 5.55586 2.54492 5.69 2.60357C5.82414 2.66222 5.94602 2.74818 6.04869 2.85655C6.15135 2.96492 6.23279 3.09357 6.28835 3.23517C6.34391 3.37676 6.37251 3.52851 6.37251 3.68177C6.37251 3.83503 6.34391 3.98678 6.28835 4.12837C6.23279 4.26996 6.15135 4.39862 6.04869 4.50699C5.94602 4.61535 5.82414 4.70132 5.69 4.75997C5.55586 4.81861 5.41209 4.8488 5.2669 4.8488C4.97368 4.8488 4.69246 4.72585 4.48512 4.50699C4.27778 4.28812 4.16129 3.99129 4.16129 3.68177C4.16129 3.37225 4.27778 3.07541 4.48512 2.85655C4.69246 2.63769 4.97368 2.51474 5.2669 2.51474ZM5.28393 8.26031C5.2493 8.19589 5.14371 7.92743 5.05827 7.70721L4.32735 10.9647L4.32848 16.0113C4.3299 16.5131 4.00489 16.9221 3.52972 16.9236C3.05426 16.9257 2.71052 16.5206 2.70683 16.0182L2.70228 10.061C2.70228 9.7806 2.80731 9.11513 2.86834 8.86944L3.55385 5.81958C3.67363 5.28745 4.18003 4.95307 4.68245 5.08401C4.84825 5.12451 5.00236 5.2066 5.13172 5.32332C5.26109 5.44005 5.36188 5.58798 5.42558 5.75456C5.52861 6.02572 5.98761 7.25178 6.0949 7.50556C6.13265 7.59305 6.21213 7.63949 6.22831 7.64728C6.31915 7.69013 6.54509 7.77342 6.95526 7.96848L7.1866 8.07844L6.98592 7.67335L6.66318 7.02347C6.66318 7.02347 6.62031 6.91021 6.71541 6.86167C6.82128 6.80744 6.87862 6.89882 6.87862 6.89882L7.85139 8.81311C7.85139 8.81311 7.932 8.99978 7.88602 9.15409C7.72479 9.1448 7.61607 8.94225 7.61607 8.94225L7.59847 8.9066L7.54738 9.01836C7.47744 9.1123 7.38088 9.18017 7.2718 9.21209C7.16273 9.244 7.04684 9.23827 6.94107 9.19573C6.57092 9.01746 5.61405 8.59948 5.61405 8.59948C5.448 8.51709 5.36682 8.41252 5.28422 8.26061L5.28393 8.26031ZM8.74382 8.86075L9.0237 9.17776L6.87039 11.2934L6.59051 10.9767L8.74382 8.86075ZM15.8245 10.3753H9.72738C9.51931 10.3753 9.4069 10.4991 9.34077 10.5641C9.07224 10.8275 7.28453 12.5692 7.28453 12.5692L6.74748 12.0101C6.74748 12.0101 8.75972 9.94928 9.01064 9.7027C9.15626 9.56097 9.33112 9.48457 9.51562 9.48457H15.8248L15.8245 10.3753Z" fill="white"/>
          </svg>

        </button>
        <button className="bg-[#b80b0b] w-full md:w-[130px] h-[40px] flex items-center justify-center gap-3 font-raleway text-white text-[12px] font-[900] px-4 py-1 rounded-full shadow-sm">
          Now closed 🔒
        </button>


        <button className="bg-[#2684FF] w-full md:w-[120px] h-[40px] flex items-center justify-center gap-3 font-raleway text-center text-[12px] font-[900] text-white text-sm px-4 py-1 rounded-full shadow-sm">
          Resume
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5438 1.29062L19.7198 7.83707C20.0988 8.23879 20.0804 8.87169 19.6787 9.25068L13.1322 15.4268C12.7305 15.8058 12.0976 15.7873 11.7186 15.3856C11.3396 14.9839 11.358 14.351 11.7598 13.972L16.5502 9.45262L0.970971 8.99909L1.02917 6.99994L16.6084 7.45347L12.089 2.66308C11.71 2.26136 11.7284 1.62846 12.1301 1.24946C12.5319 0.870468 13.1648 0.888893 13.5438 1.29062Z" fill="white"/>
          </svg>

        </button>
        <button className="bg-[#2684FF] w-full md:w-[120px] h-[40px] flex items-center justify-center gap-3 font-raleway text-white text-[12px] font-[900] px-4 py-1 rounded-full shadow-sm">
          Enroll here
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5438 1.29062L19.7198 7.83707C20.0988 8.23879 20.0804 8.87169 19.6787 9.25068L13.1322 15.4268C12.7305 15.8058 12.0976 15.7873 11.7186 15.3856C11.3396 14.9839 11.358 14.351 11.7598 13.972L16.5502 9.45262L0.970971 8.99909L1.02917 6.99994L16.6084 7.45347L12.089 2.66308C11.71 2.26136 11.7284 1.62846 12.1301 1.24946C12.5319 0.870468 13.1648 0.888893 13.5438 1.29062Z" fill="white"/>
          </svg>

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
