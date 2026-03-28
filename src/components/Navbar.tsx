import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Search, Menu, X, Moon, Sun, Feather } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [location] = useLocation();

  // Check scroll position for navbar style and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detect which section is in view
      const sections = ['home', 'topics', 'featured', 'newsletter', 'about'];
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section === 'home' ? 'hero' : section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark/light mode
  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Smooth scroll to section
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (targetId === '/') {
      if (location !== '/') {
        window.location.href = '/';
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setActiveSection('home');
      setIsMobileMenuOpen(false);
      return;
    }
    
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId.replace('#', ''));
      setIsMobileMenuOpen(false);
    }
  };

  // Handle subscribe button click
  const handleSubscribe = () => {
    alert('🎉 Thank you for your interest! Newsletter subscription will be available soon.');
  };

  // Handle search button click
  const handleSearch = () => {
    alert('🔍 Search functionality coming soon!');
  };

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'Topics', href: '#topics', id: 'topics' },
    { name: 'Featured', href: '#featured', id: 'featured' },
    { name: 'Newsletter', href: '#newsletter', id: 'newsletter' },
    { name: 'About', href: '#about', id: 'about' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-default'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('home');
            }}
          >
            <div className="bg-primary text-primary-foreground p-1.5 rounded-sm transition-all duration-300 group-hover:bg-accent group-hover:scale-110 group-hover:rotate-6">
              <Feather className="w-5 h-5" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-foreground transition-all duration-300 group-hover:tracking-wider">
              InkVault
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <button 
              onClick={handleSearch}
              className="p-2 text-muted-foreground hover:text-primary transition-all duration-300 rounded-full hover:bg-muted hover:scale-110"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-primary transition-all duration-300 rounded-full hover:bg-muted hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={handleSubscribe}
              className="btn-primary"
            >
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors rounded-full hover:bg-muted"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-2 animate-in slide-in-from-top-2 duration-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block py-3 px-2 text-lg font-display rounded-lg transition-all duration-200 ${
                  activeSection === link.id 
                    ? 'bg-primary/10 text-primary font-semibold' 
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex items-center justify-between border-t border-border mt-2">
              <button 
                onClick={toggleTheme}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-2 py-2 rounded-lg hover:bg-muted"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              <button 
                onClick={handleSubscribe}
                className="btn-primary"
              >
                Subscribe
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Add CSS for active link */}
      <style>{`
        .nav-link {
          position: relative;
          color: hsl(var(--muted-foreground));
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.3s ease;
          padding: 0.25rem 0;
        }
        
        .nav-link:hover {
          color: hsl(var(--primary));
        }
        
        .nav-link.active {
          color: hsl(var(--primary));
        }
        
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: hsl(var(--primary));
          border-radius: 2px;
          animation: slideIn 0.3s ease forwards;
        }
        
        @keyframes slideIn {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }
        
        .animate-in {
          animation: fadeIn 0.3s ease forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
