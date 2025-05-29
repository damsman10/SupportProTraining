const DatePill = () => {
    return (
      <div className="date-pill mt-12 flex justify-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-center bg-[#101828] rounded-[60px] lg:rounded-[100%] py-6 px-4 gap-6 shadow-lg 
                        w-full max-w-[1312px] h-auto lg:h-[283px]">
  
          <div className="text-center now-open space-y-4">
            <p className="text-white text-[24px] lg:text-[30px] font-semibold font-poppins">NOW OPEN</p>
            <div className="bg-[#07937C] border-[6px] border-white text-white text-[24px] lg:text-[30px] font-poppins font-semibold 
                            w-full max-w-[316px] h-[96px] lg:h-[112px] rounded-2xl flex justify-center items-center mx-auto sm:w-[316px]">
              Register Now !!!
            </div>
          </div>
  
          <div className="text-center may-30th space-y-4">
            <p className="text-white text-[24px] lg:text-[30px] font-semibold font-poppins">MAY 30th 2025</p>
            <span className="bg-red-600 border-[6px] border-white text-white text-[24px] lg:text-[30px] font-poppins font-semibold 
                            w-full max-w-[316px] h-[96px] lg:h-[112px] rounded-2xl flex justify-center items-center mx-auto sm:w-[340px]">
              Registration closes
            </span>
          </div>
  
          <div className="text-center space-y-4">
            <p className="text-white text-[24px] lg:text-[30px] font-semibold font-poppins">JUNE 2nd 2025</p>
            <span className="bg-blue-500 border-[6px] border-white text-white text-[24px] lg:text-[30px] font-poppins font-semibold 
                            w-full max-w-[316px] h-[96px] lg:h-[112px] rounded-2xl flex justify-center items-center mx-auto sm:w-[316px]">
              Cohort starts
            </span>
          </div>
  
        </div>
      </div>
    )
  }
  
  export default DatePill;
  