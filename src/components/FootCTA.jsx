import trophy from '../assets/trophy.png'
import learning from '../assets/learning.png'
import meeting from '../assets/meeting.png'

export default function FootCTA() {
  return (
    <div className="bg-[#4884DF] w-full text-white pt-20 px-4">
      <div className="max-w-[1227px] mx-auto">
        <h2 className="text-[32px] md:text-[40px] font-normal mb-10 text-left md:pl-20">
          Join us today and take the next step toward becoming an HR professional who drives workplace excellence!
        </h2>

        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-6">
          <img
            src={trophy}
            style={{ transform: 'rotate(-6.87deg)' }}
            className="w-full max-w-[623px] h-auto rotate-[6.87deg] object-contain"
          />
          <img
            src={learning}
            style={{ transform: 'rotate(-8.68deg)' }}
            className="w-full max-w-[554px] h-auto rotate-[8.68deg] object-contain"
          />
          <img
            src={meeting}
            style={{ transform: 'rotate(-0.22deg)' }}
            className="w-full max-w-[642px] h-auto rotate-[-0.22deg] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
