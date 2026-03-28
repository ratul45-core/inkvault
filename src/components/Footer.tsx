import { Link } from 'wouter';
import { Feather, Twitter, Linkedin, Instagram, Rss } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-24 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-sm">
                <Feather className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-background">
                InkVault
              </span>
            </Link>
            <p className="text-muted-foreground/80 leading-relaxed mb-8 max-w-sm">
              A curated destination for insightful articles, exploring the intersections of culture,
              technology, and human experience through exceptional writing.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2.5 bg-background/5 rounded-full text-background/80 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-background/5 rounded-full text-background/80 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-background/5 rounded-full text-background/80 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-background/5 rounded-full text-background/80 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Rss className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="font-display font-semibold text-lg mb-6 text-background">Topics</h4>
            <ul className="space-y-4">
              {['Culture', 'Technology', 'Lifestyle', 'Science'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground/80 hover:text-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-lg mb-6 text-background">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Masthead', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground/80 hover:text-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-lg mb-6 text-background">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground/80 hover:text-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground/60">
          <p>© {new Date().getFullYear()} InkVault Publishing. All rights reserved.</p>
          <p>Designed with intentionality.</p>
        </div>
      </div>
    </footer>
  );
}
