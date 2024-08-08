import { useState, useCallback, useEffect } from "react";
import { Link } from "react-scroll"; // For smooth scrolling
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger and close icons

const Header = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerClass, setHeaderClass] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollTop = window.pageYOffset;
    if (currentScrollTop > lastScrollTop) {
      // Scrolling down
      setHeaderClass("sticky");
    } else {
      // Scrolling up
      setHeaderClass("");
    }
    setLastScrollTop(currentScrollTop);
  }, [lastScrollTop]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${headerClass}`}>
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <div className="text-2xl font-bold text-gray-800">
          <a href="#home">Shevait Verma</a>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80} // Adjust this value based on your header height
            className="text-gray-800 hover:text-blue-500 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80} // Adjust this value based on your header height
            className="text-gray-800 hover:text-blue-500 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-80} // Adjust this value based on your header height
            className="text-gray-800 hover:text-blue-500 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80} // Adjust this value based on your header height
            className="text-gray-800 hover:text-blue-500 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80} // Adjust this value based on your header height
            className="text-gray-800 hover:text-blue-500 cursor-pointer"
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-800">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 px-4 py-6">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={toggleMobileMenu}
                className="text-gray-800 hover:text-blue-500 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={toggleMobileMenu}
                className="text-gray-800 hover:text-blue-500 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={toggleMobileMenu}
                className="text-gray-800 hover:text-blue-500 cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={toggleMobileMenu}
                className="text-gray-800 hover:text-blue-500 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={toggleMobileMenu}
                className="text-gray-800 hover:text-blue-500 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
