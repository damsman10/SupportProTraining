import grad from '../assets/grad.png';
import cert from '../assets/cert.png';
import group from '../assets/group.png';

const CertificationSection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 bg-white mt-10">
      <div className="max-w-7xl mx-auto space-y-16">

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <img
            src={grad}
            alt="Graduate"
            className="hidden object-cover rounded-md w-full max-w-[300px] lg:max-w-none"
          />

          <div className="text-center flex flex-col items-center">
            <h3 className="text-[40px] flex items-center w-2/4 sm:text-[48px] md:text-[60px] font-bold font-raleway text-center mb-4 tracking-widest leading-[1.2]">
              CER-<br />
              TI-FI-<br />
              CATE
            </h3>
            <p className="text-black font-raleway font-medium text-[18px] mx-auto lg:mx-0 w-[295px]">
              A certificate of attendance is awarded at the end of the training.
            </p>
          </div>

          <img
            src={cert}
            alt="Certificate"
            className="w-2/4 object-contain rounded-md w max-w-[300px] lg:max-w-none"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20">
          <div className="space-y-6 font-raleway text-[16px] sm:text-[18px] font-normal w-full max-w-[663px] mx-auto lg:mx-0">
            <p>Every Batch of this training has a **** group with all the participants.</p>
            <p>It will grow into an exciting and amazing family of friends pulling each other up.</p>
            <p>Even after the training, they form groups and do stuff together.</p>
            <div className="mt-8">
              <h4 className="font-raleway text-[24px] sm:text-[28px] md:text-[32px] font-medium leading-tight">
                Open internship placement<br />
                with performance based payment!
              </h4>
              <p className="font-raleway text-[18px] sm:text-[20px] md:text-[24px] font-normal mt-4">
                When you join the training,<br />
                You join an active community on ***** with your classmates.
              </p>
            </div>
          </div>

          <img
            src={group}
            alt="Participants group"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

      </div>
    </div>
  );
};

export default CertificationSection;
