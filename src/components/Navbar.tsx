import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Search, Menu, X, Moon, Sun, Feather } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDarkMode;
    setIsDarkMode(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/') return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Topics', href: '#topics' },
    { name: 'Featured', href: '#featured' },
    { name: 'Newsletter', href: '#newsletter' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-default'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary text-white p-1.5 rounded-sm">
              <Feather size={20} />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">InkVault</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
                onClick={e => handleSmoothScroll(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="nav-link">
              <Search size={20} />
            </button>
            <button onClick={toggleTheme} className="nav-link">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="btn-primary">Subscribe</button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            {links.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-lg font-display text-foreground hover:text-primary"
                onClick={e => handleSmoothScroll(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex items-center justify-between border-t border-border">
              <button onClick={toggleTheme} className="flex items-center gap-2">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
