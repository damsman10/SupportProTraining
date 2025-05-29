export default function Footer() {
  return (
    <div className="bg-[#D9D9D9] flex flex-col justify-center items-center text-center w-full max-w-[1337px] mx-auto py-10 px-4 mt-20">
      
      <div className="font-poppins text-[24px] md:text-[32px] font-semibold text-black mb-12">
        #Learn | #Grow | #Lead
      </div>

      <p className="text-black text-[20px] md:text-[32px] font-poppins font-normal mb-12 px-4">
        Our refund policy for our students is{' '}
        <a href="/refund-policy" className="text-[#F21F1F] font-medium hover:text-red-800">
          here
        </a>
      </p>

      <div className="bg-[#101828] w-full max-w-[1110px] h-[60px] text-white flex items-center justify-center text-[20px] md:text-[32px] font-semibold">
        Copyright © {new Date().getFullYear()}
      </div>
    </div>
  );
}
