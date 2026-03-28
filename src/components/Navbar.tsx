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

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (targetId === '/') return;
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Topics', href: '#topics' },
    { name: 'Featured', href: '#featured' },
    { name: 'Newsletter', href: '#newsletter' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-background/90 backdrop-blur-md border-border py-3 shadow-sm' : 'bg-background border-transparent py-5'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-sm group-hover:bg-accent transition-colors">
              <Feather size={20} />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-foreground">
              InkVault
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={(e) => link.href !== '/' && handleSmoothScroll(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-muted">
              <Search size={20} />
            </button>
            <button onClick={toggleTheme} className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-muted">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="btn-primary">
              Subscribe
            </button>
          </div>

          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-lg font-display text-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  if (link.href !== '/') {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                      setIsMobileMenuOpen(false);
                    }
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex items-center justify-between border-t border-border">
              <button onClick={toggleTheme} className="flex items-center gap-2 text-muted-foreground">
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
