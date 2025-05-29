import test1 from '../assets/test1.png'
import test2 from '../assets/test2.png'

const Testimonials = () => {
  return (
    <div className="py-16 px-4">
      <div className="w-full max-w-[1440px] mx-auto text-center">
        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-medium font-raleway mb-12">
          Testimonial from past participants?
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 w-full mx-auto rounded-[20px] p-6 sm:p-10 md:p-16 items-center"
          style={{
            background: 'linear-gradient(to right, #3000DC33 0%, #E6CFD5 30%, #F7E5F1 60%, #BFBCF3 100%)',
          }}
        >
          <div className="bg-white w-full max-w-[600px] rounded-[20px] p-6 shadow-md h-full mx-auto">
            <div className="flex justify-center mb-4">
              <img
                src={test1}
                alt="Participant 1"
                className="rounded-full w-[120px] sm:w-[140px] h-[140px] sm:h-[160px] mb-8 object-cover"
              />
            </div>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-raleway font-normal text-left sm:text-center md:text-left">
              I had an amazing time at the SupportPro HR & Revenue Operations Training.
              The sessions were practical, engaging, and far from boring—just the way I like it!
              The trainers shared real-world insights that were easy to apply on the job.
              Highly recommend this for anyone looking to upskill in HR and revenue ops!
            </p>
          </div>

          <div className="bg-white w-full max-w-[600px] rounded-[20px] p-6 shadow-md h-full mx-auto">
            <div className="flex justify-center mb-4">
              <img
                src={test2}
                alt="Participant 2"
                className="rounded-full w-[120px] sm:w-[140px] h-[140px] sm:h-[160px] mb-8 object-cover"
              />
            </div>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-raleway font-normal text-left sm:text-center md:text-left">
              The SupportPro HR & Revenue Operations Training was engaging, practical, and insightful.
              Expert trainers and hands-on exercises made complex topics easy to grasp.
              I highly recommend it for anyone looking to grow in HR and revenue operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
