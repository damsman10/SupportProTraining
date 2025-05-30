import register from '../assets/register.svg'
import closed from '../assets/closed.svg'
import ready from '../assets/ready.svg'

const EnrolmentInfo = () => {
  return (
    <div className="px-4 md:px-6 lg:px-12 py-16 space-y-16 max-w-[1295px] mx-auto">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-12 text-center">
        
        <div className="space-y-2">
          <img
            src={register}
            alt="Register Now"
            className="w-full max-w-[300px] h-auto md:h-[250px] mx-auto"
          />
          <button className="!bg-[#1FAF38] text-black px-4 py-1 rounded-[10px] text-[20px] font-raleway w-full max-w-[300px] h-[50px] font-semibold">
            Register Now
          </button>
          <p className="text-[20px] font-semibold font-poppins mt-1">NOW OPEN</p>
        </div>

        <div className="space-y-2">
          <img
            src={closed}
            alt="Closed"
            className="w-full max-w-[300px] h-auto md:h-[250px] mx-auto"
          />
          <button className="!bg-[#CF3652CC] text-black px-4 py-1 rounded-[10px] text-[20px] font-raleway w-full max-w-[274px] h-[50px] font-semibold">
            Registration closed
          </button>
          <p className="text-[20px] font-semibold font-poppins mt-1">May 30th 2025</p>
        </div>

        <div className="space-y-2">
          <img
            src={ready}
            alt="Cohort Start"
            className="w-full max-w-[300px] h-auto md:h-[250px] mx-auto"
          />
          <button className="!bg-[#4E88E0] text-black px-4 py-1 rounded-[10px] text-[20px] font-raleway w-full max-w-[235px] h-[50px] font-semibold">
            Cohort start
          </button>
          <p className="text-[20px] font-semibold font-poppins mt-1">June 2nd 2025</p>
        </div>
        
      </div>
    </div>
  )
}

export default EnrolmentInfo
