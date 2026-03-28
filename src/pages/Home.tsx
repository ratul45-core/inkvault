import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Mail, BookOpen, Star, ShieldCheck, TrendingUp } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AdSlot } from '@/components/AdSlot';
import { FEATURED_ARTICLES, TRENDING_ARTICLES, LATEST_ARTICLES, CATEGORIES } from '@/data/mock';
import { formatDate } from '@/lib/utils';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>InkVault — Premium Content, Trusted Voices</title>
        <meta name="description" content="InkVault is a curated destination for insightful articles, exploring culture, technology, and lifestyle." />
      </Helmet>

      <Navbar />

      <main className="flex-1 pt-24 pb-12">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Star className="w-4 h-4" />
                  <span>Award-winning journalism</span>
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground mb-6">
                  Stories Worth <span className="text-primary italic">Reading.</span><br />
                  Ideas Worth <span className="text-accent italic">Sharing.</span>
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                  InkVault is your sanctuary for deep dives and nuanced perspectives.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-sm shadow-lg flex items-center justify-center gap-2 group">
                    Explore Articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 bg-background border border-border text-foreground font-medium rounded-sm hover:bg-secondary transition-all">
                    Subscribe Free
                  </button>
                </motion.div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2000" alt="Abstract composition" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* AD SLOT */}
        <div className="container-custom py-8">
          <AdSlot type="leaderboard" />
        </div>

        {/* FEATURED POSTS */}
        <section id="featured" className="py-16 bg-secondary/30">
          <div className="container-custom">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Featured Editorials</h2>
                <p className="mt-2 text-muted-foreground">Handpicked selections by our editorial board.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {FEATURED_ARTICLES.map((article) => (
                <article key={article.id} className="group cursor-pointer flex flex-col h-full bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-bold uppercase tracking-wider rounded-sm">
                        {article.category}
                      </span>
                    </div>
                    <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <span>{formatDate(article.date)}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold font-display leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3 mb-6 flex-1">{article.excerpt}</p>
                    
                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/50">
                      <img src={article.author.avatarUrl} alt={article.author.name} className="w-8 h-8 rounded-full object-cover" loading="lazy" />
                      <span className="text-sm font-medium text-foreground">{article.author.name}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TOPICS & TRENDING */}
        <section id="topics" className="py-20 border-b border-border">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
              <div className="lg:col-span-7">
                <h2 className="text-3xl font-bold mb-8">Explore by Topic</h2>
                <div className="flex flex-wrap gap-3">
                  {CATEGORIES.map((topic) => (
                    <button key={topic} className="px-5 py-2.5 rounded-full border border-border bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors font-medium">
                      {topic}
                    </button>
                  ))}
                </div>
                <div className="mt-12">
                  <AdSlot type="responsive" />
                </div>
              </div>

              <div className="lg:col-span-5 lg:pl-8 lg:border-l border-border">
                <div className="flex items-center gap-2 mb-8">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <h2 className="text-2xl font-bold">Trending Now</h2>
                </div>
                
                <div className="flex flex-col gap-6">
                  {TRENDING_ARTICLES.map((article) => (
                    <article key={article.id} className="group cursor-pointer flex gap-5 items-center">
                      <span className="text-4xl font-display font-bold text-muted-foreground/30 w-8 text-center">
                        {article.rank}
                      </span>
                      <div className="flex-1">
                        <span className="text-xs text-accent font-bold uppercase tracking-wider mb-1 block">
                          {article.category}
                        </span>
                        <h4 className="text-lg font-bold font-display leading-snug group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                        <span className="text-xs text-muted-foreground mt-2 block">
                          {article.author.name} • {article.readTime}
                        </span>
                      </div>
                      <div className="w-20 h-20 shrink-0 rounded-md overflow-hidden">
                        <img src={article.imageUrl} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform" loading="lazy" />
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LATEST ARTICLES */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <div className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold">Latest Stories</h2>
                  <div className="w-16 h-1 bg-primary mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {LATEST_ARTICLES.map((article) => (
                    <article key={article.id} className="group cursor-pointer flex flex-col">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4">
                        <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" loading="lazy" />
                      </div>
                      <span className="text-xs text-primary font-bold uppercase tracking-wider mb-2 block">
                        {article.category}
                      </span>
                      <h3 className="text-xl font-bold font-display leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{article.excerpt}</p>
                      <div className="mt-auto text-xs text-muted-foreground/80 flex items-center gap-2">
                        <span className="font-medium text-foreground">{article.author.name}</span>
                        <span>•</span>
                        <span>{formatDate(article.date)}</span>
                      </div>
                    </article>
                  ))}
                </div>
                
                <div className="mt-12 flex justify-center">
                  <button className="px-6 py-3 border border-border rounded-sm hover:bg-secondary transition-colors font-medium">
                    Load More Articles
                  </button>
                </div>
              </div>

              <aside className="lg:col-span-4 space-y-12">
                <div id="about" className="bg-foreground text-background p-8 rounded-xl relative overflow-hidden">
                  <BookOpen className="w-10 h-10 text-primary mb-4 opacity-50 absolute -top-2 -right-2 rotate-12 scale-150" />
                  <h3 className="font-display font-bold text-2xl mb-4 relative z-10">About InkVault</h3>
                  <p className="text-background/80 leading-relaxed mb-6 relative z-10">
                    We believe in the power of well-crafted narratives. InkVault is dedicated to publishing essays, investigations, and insights.
                  </p>
                </div>

                <div className="sticky top-24">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2">Advertisement</span>
                    <AdSlot type="rectangle" />
                  </div>
                  
                  <div className="mt-12 p-6 border border-border rounded-xl bg-card text-center">
                    <ShieldCheck className="w-8 h-8 text-accent mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Editorial Integrity</h4>
                    <p className="text-sm text-muted-foreground">Every piece is fact-checked by our expert editorial board.</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section id="newsletter" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <Mail className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Join 50,000+ Discerning Readers</h2>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Get our flagship essays delivered to your inbox every Sunday morning.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" className="flex-1 px-5 py-4 rounded-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-accent" required />
              <button type="submit" className="px-8 py-4 bg-accent text-accent-foreground font-bold rounded-sm hover:bg-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* BOTTOM AD */}
        <div className="container-custom py-12">
          <AdSlot type="leaderboard" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
