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

    if (document.documentElement.classList.contains('dark')) {
      setIsDarkMode(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Topics', href: '#topics' },
    { name: 'Featured', href: '#featured' },
    { name: 'Newsletter', href: '#newsletter' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className={`fixed ${isScrolled ? 'py-3' : 'py-4'}`}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#8b3d4b', padding: '6px', borderRadius: '4px' }}>
              <Feather size={20} color="white" />
            </div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--foreground)' }}>
              InkVault
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div style={{ display: 'flex', gap: '2rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button style={{ padding: '8px', cursor: 'pointer', background: 'transparent', border: 'none' }}>
              <Search size={20} />
            </button>
            <button onClick={toggleTheme} style={{ padding: '8px', cursor: 'pointer', background: 'transparent', border: 'none' }}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="btn-primary">
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            style={{ display: 'none', padding: '8px', background: 'transparent', border: 'none', cursor: 'pointer' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
