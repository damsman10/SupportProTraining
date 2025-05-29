import devices from '../assets/devices.png';
import study0 from '../assets/study0.png';
import study1 from '../assets/study1.png';
import study2 from '../assets/study2.png';
import mic from '../assets/mic.png';

const AccessAnywhere = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2">
            <img src={devices} alt="Devices" className="w-full object-contain" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[58px] font-raleway font-semibold text-black leading-tight">
              Attend classes using your phone,<br className="hidden sm:block" />
              computer, or any device.
            </h2>
            <p className="mt-6 sm:mt-8 font-raleway font-medium text-[20px] sm:text-[24px] md:text-[28px] leading-relaxed">
              Take classes anytime, anywhere—on your phone, tablet, or computer.
              Just stay connected and start learning.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-[160px] md:w-[196px] h-[110px] md:h-[136px]">
              <img src={mic} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-[32px] sm:text-[48px] md:text-[64px] font-poppins font-semibold leading-tight text-black">
                All sessions are recorded<br />
                never miss a thing.
              </h3>
              <p className="text-[18px] sm:text-[24px] md:text-[30px] font-poppins font-normal mt-3">
                ( Saturdays & Sundays are for the trainings live sessions )
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <div className="bg-[#D9EAFD] rounded-[20px] h-[352px] p-4 pb-0 flex items-end justify-center">
              <div
                className="w-full h-[306px] rounded-t-[60px] border-[10px] border-black/20 border-b-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${study0})` }}
              />
            </div>
            <div className="bg-[#FFCECE] rounded-[20px] h-[352px] p-4 pb-0 flex items-end justify-center">
              <div
                className="w-full h-[306px] rounded-t-[60px] border-[10px] border-black border-b-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${study1})` }}
              />
            </div>
            <div className="bg-[#F0CFE5] rounded-[20px] h-[352px] p-4 pb-0 flex items-end justify-center">
              <div
                className="w-full h-[306px] rounded-t-[60px] border-[10px] border-black border-b-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${study2})` }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AccessAnywhere;
