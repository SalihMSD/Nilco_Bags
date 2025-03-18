
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/1a86d351-084d-44e6-88ed-74146d7de64d.png" 
            alt="Nilco Bags" 
            className="h-10 md:h-12"
          />
        </Link>
        
        <nav className="hidden md:flex space-x-6 items-center">
          <NavLink to="/" label="Home" pathname={location.pathname} />
          <NavLink to="/about" label="About" pathname={location.pathname} />
          <NavLink to="/contact" label="Contact" pathname={location.pathname} />
        </nav>

        <button 
          className="md:hidden text-nilco-navy focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <MobileNavLink to="/" label="Home" pathname={location.pathname} />
              <MobileNavLink to="/about" label="About" pathname={location.pathname} />
              <MobileNavLink to="/contact" label="Contact" pathname={location.pathname} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  pathname: string;
}

const NavLink = ({ to, label, pathname }: NavLinkProps) => {
  const isActive = pathname === to || (pathname.startsWith(to) && to !== '/');
  
  return (
    <Link
      to={to}
      className={`relative font-medium text-sm tracking-wide transition-colors duration-300 hover:text-nilco-red ${
        isActive ? 'text-nilco-red' : 'text-nilco-navy'
      }`}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="navbar-indicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-nilco-red"
          transition={{ type: "spring", duration: 0.5 }}
        />
      )}
    </Link>
  );
};

const MobileNavLink = ({ to, label, pathname }: NavLinkProps) => {
  const isActive = pathname === to || (pathname.startsWith(to) && to !== '/');
  
  return (
    <Link
      to={to}
      className={`block py-2 font-medium text-base transition-colors duration-300 ${
        isActive ? 'text-nilco-red' : 'text-nilco-navy'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;
