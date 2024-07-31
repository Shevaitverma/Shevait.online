import { useState, useCallback, useEffect } from "react";
import { Link } from "react-scroll"; // For smooth scrolling

const Header = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerClass, setHeaderClass] = useState("");

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
  }, [handleScroll]); // Include handleScroll in the dependency array

  return (
    <header className={headerClass}>
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <div className="text-2xl font-bold text-gray-800">
          <a href="#home">Shevait Verma</a>
        </div>
        <nav className="flex space-x-6">
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
      </div>
    </header>
  );
};

export default Header;
