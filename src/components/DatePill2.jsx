const DatePill2 = () => {
    return (
      <div className="date-pill2 mt-12 flex justify-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-center bg-[#101828] py-6 px-4 md:px-6 gap-10 w-full max-w-[1272px] rounded-[30px]">
          
          <div className="text-center space-y-4">
            <p className="text-white text-[22px] md:text-[26px] lg:text-[30px] font-semibold font-poppins">NOW OPEN</p>
            <div className="bg-[#07937C] border-[4px] md:border-[6px] border-white text-white text-[20px] md:text-[26px] lg:text-[30px] font-poppins px-4 py-3 font-semibold w-full max-w-[316px] h-[96px] md:h-[112px] rounded-2xl flex justify-center items-center">
              Register Now !!!
            </div>
          </div>
  
          <div className="text-center space-y-4">
            <p className="text-white text-[22px] md:text-[26px] lg:text-[30px] font-semibold font-poppins">MAY 30th 2025</p>
            <div className="bg-red-600 border-[4px] md:border-[6px] border-white text-white text-[20px] md:text-[26px] lg:text-[30px] font-poppins px-4 py-3 font-semibold w-full max-w-[340px] h-[96px] md:h-[112px] rounded-2xl flex justify-center items-center">
              Registration closes
            </div>
          </div>
  
          <div className="text-center space-y-4">
            <p className="text-white text-[22px] md:text-[26px] lg:text-[30px] font-semibold font-poppins">JUNE 2nd 2025</p>
            <div className="bg-blue-500 border-[4px] md:border-[6px] border-white text-white text-[20px] md:text-[26px] lg:text-[30px] font-poppins px-4 py-3 font-semibold w-full max-w-[316px] h-[96px] md:h-[112px] rounded-2xl flex justify-center items-center">
              Cohort starts
            </div>
          </div>
          
        </div>
      </div>
    );
  };
  
  export default DatePill2;
  