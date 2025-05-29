import hr from '../assets/hr.png';

const HumanResources = () => {
  return (
    <div className="bg-[#101828] w-full px-4 md:px-0 py-6 md:py-0">
      <div className="mx-auto w-full max-w-[1283px] h-auto md:h-[380px] flex flex-col-reverse md:flex-row items-stretch">
        
        
        <div className="text-white p-6 flex flex-col justify-center text-center md:text-left md:w-[756px]">
          <p className="text-[20px] md:text-[30px] leading-relaxed font-medium font-poppins">
            More than the aforementioned software used necessary for effective work will be learnt during the training. You would step out able to easily automate manual processes by deploying various software.
          </p>
        </div>

        
        <div
          className="md:w-[527px] w-full h-[200px] md:h-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${hr})` }}
        />
      </div>
    </div>
  );
};

export default HumanResources;
