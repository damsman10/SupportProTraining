import { useState } from 'react';
import logo from '../assets/SupportProLogo.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 md:px-12 flex items-center justify-between shadow-md bg-white sticky top-0 z-50 h-[100px]">
      {/* Logo */}
      <div className="logo h-20 flex items-center">
        <img src={logo} alt="SupportPro Logo" className="max-h-32" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 text-[20px] font-poppins font-medium text-gray-700">
        <a href="#course-outline" className="hover:text-blue-600">Course outline</a>
        <a href="#testimonial" className="hover:text-blue-600">Testimonial</a>
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </nav>

      {/* Desktop CTA Buttons */}
      <div className="hidden md:flex gap-4 font-semibold">
        <button className="border-[2px] border-black h-[60px] w-[120px] rounded-[20px] px-4 py-1 text-[20px] hover:bg-gray-100">
          Login
        </button>
        <button className="h-[60px] w-[120px] rounded-[20px] bg-[#4E88E0] text-black px-4 py-1 text-[20px] hover:bg-blue-700">
          Enroll →
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-gray-800 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 z-40 md:hidden">
          <a href="#course-outline" className="text-[18px] text-gray-700 hover:text-blue-600">Course outline</a>
          <a href="#testimonial" className="text-[18px] text-gray-700 hover:text-blue-600">Testimonial</a>
          <a href="#about" className="text-[18px] text-gray-700 hover:text-blue-600">About</a>
          <a href="#contact" className="text-[18px] text-gray-700 hover:text-blue-600">Contact</a>
          <button className="border-[2px] border-black w-[120px] h-[50px] rounded-[20px] px-4 py-1 text-[18px] hover:bg-gray-100">
            Login
          </button>
          <button className="w-[120px] h-[50px] rounded-[20px] bg-[#4E88E0] text-black px-4 py-1 text-[18px] hover:bg-blue-700">
            Enroll →
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
