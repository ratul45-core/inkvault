import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Search, Menu, X, Moon, Sun, Feather } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

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
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out border-b',
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-border py-3 shadow-sm'
          : 'bg-background border-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-sm group-hover:bg-accent transition-colors">
              <Feather className="w-5 h-5" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-foreground">
              InkVault
            </span>
          </Link>

          {/* Desktop Navigation - FIXED */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-muted">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-muted"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="px-4 lg:px-5 py-2 lg:py-2.5 bg-foreground text-background font-medium text-sm rounded-sm hover:bg-primary transition-colors shadow-md hover:shadow-lg">
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-lg font-display text-foreground hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex items-center justify-between border-t border-border">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
                <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
