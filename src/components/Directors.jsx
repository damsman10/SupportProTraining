import bunmi from '../assets/bunmi.png';
import victor from '../assets/victor.png';
import bk from '../assets/bk.png';
import ebun from '../assets/ebun.png';

const Directors = () => {
  return (
    <div className="mt-20 px-4 md:px-0">
      <div className="max-w-[1280px] mx-auto">

        <div className="bg-[#101828] flex flex-wrap justify-center md:justify-between py-5 md:px-20 gap-8 mb-10">
          {[{ img: bunmi, name: "Oluwabunmi Akindahunsi", role: "Managing Consultant, Elizabeth Maddeux Limited." },
            { img: victor, name: "Olatunde, Victor Adeoluwa", role: "Founder, Salesplat & AuxHR" }]
            .map((director, index) => (
              <div key={index} className="w-full sm:w-[300px] md:w-[462.7px] h-[532px] rounded-[10px] flex flex-col bg-white">
                <div className="h-[459px]">
                  <img
                    src={director.img}
                    alt={director.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[73px] py-2 px-3 text-center">
                  <h3 className="font-semibold text-[20px] md:text-[24px] font-raleway">{director.name}</h3>
                  <p className="text-[14px] md:text-[16px] font-raleway font-normal">{director.role}</p>
                </div>
              </div>
            ))}
        </div>

        <div className="flex flex-wrap justify-center md:justify-between py-5 md:px-20 gap-8 mb-10">
          {[{ img: bk, name: "Bukola Akinsika", role: "HR Business Partner" },
            { img: ebun, name: "Ebunoluwa Helen", role: "HR Manager, Salesplat" }]
            .map((director, index) => (
              <div key={index} className="relative w-full sm:w-[300px] md:w-[462.7px] h-[532px] rounded-[10px] flex flex-col border-2 border-[#92AFFD]">
                <img
                  src={director.img}
                  alt={director.name}
                  className="w-full h-full object-cover rounded-[10px]"
                />
                <div className="absolute bottom-0 h-[81px] w-full rounded-b-[10px] py-2 px-3 text-center bg-[#101828] text-white">
                  <h3 className="font-semibold text-[20px] md:text-[24px] font-raleway">{director.name}</h3>
                  <p className="text-[14px] md:text-[16px] font-raleway font-normal">{director.role}</p>
                </div>
              </div>
            ))}
        </div>
        
      </div>
    </div>
  );
};

export default Directors;
