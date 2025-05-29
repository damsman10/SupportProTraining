import curr from '../assets/curr.svg';

const Curriculum = () => {
  return (
    <div className="bg-[#4E88E0] w-full max-w-[1268px] h-auto lg:h-[541px] rounded-[6px] mx-auto text-white px-4 sm:px-6 py-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-20 max-w-6xl mx-auto">
        
        <div className="w-full lg:w-auto flex justify-center">
          <img
            src={curr}
            alt="HR Training Group"
            className="rounded-md shadow-lg max-w-full"
          />
        </div>

        <div className="w-full lg:w-[472px]">
          <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] leading-snug font-raleway font-medium mb-4 text-center lg:text-left">
            Here's the curriculum for the <br />
            <span>HR training program</span> <br />
            <span className="bg-[#D9D9D9] inline-block rounded-[2px] text-[#E91403] text-[20px] lg:text-[24px] font-raleway font-semibold py-2 px-4 mt-2">
              30 Courses & more..
            </span>
          </h2>

          <ul className="space-y-6 text-white mt-8 lg:mt-12 font-raleway text-[16px] font-normal ml-0 lg:ml-4">
            <li className="flex items-start gap-2">
              <span className="w-3.5 h-3.5 bg-white rounded-full mt-1 shrink-0" />
              It is an 8 weeks academy that covers 30+ courses and teaches you over
            </li>
            <li className="flex items-start gap-2">
              <span className="w-3 h-3 bg-white rounded-full mt-1 shrink-0" />
              Workplace software
            </li>
            <li className="flex items-start gap-2">
              <span className="w-3 h-3 bg-white rounded-full mt-1 shrink-0" />
              Workplace skills
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
