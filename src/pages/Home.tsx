import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Mail, BookOpen, Star, ShieldCheck, TrendingUp, X } from 'lucide-react';
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
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(selectedTopic === topic ? null : topic);
    setTimeout(() => {
      const featuredSection = document.querySelector('#featured');
      if (featuredSection) featuredSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setShowNewsletterPopup(true);
    setTimeout(() => setShowNewsletterPopup(false), 3000);
  };

  const handleExploreArticles = () => {
    document.querySelector('#featured')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLoadMore = () => {
    alert('✨ More articles coming soon! Stay tuned for updates.');
  };

  const filteredFeatured = selectedTopic
    ? FEATURED_ARTICLES.filter(a => a.category === selectedTopic)
    : FEATURED_ARTICLES;

  const filteredLatest = selectedTopic
    ? LATEST_ARTICLES.filter(a => a.category === selectedTopic)
    : LATEST_ARTICLES;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>InkVault — Premium Content, Trusted Voices</title>
        <meta name="description" content="InkVault is a curated destination for insightful articles, exploring culture, technology, and lifestyle." />
        <meta property="og:title" content="InkVault — Premium Content, Trusted Voices" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://inkvault.vercel.app" />
      </Helmet>

      <Navbar />

      <main className="flex-1 pt-24 pb-12">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32">
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Star size={16} />
                  <span>Award-winning journalism since 2020</span>
                </motion.div>
                <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground mb-6">
                  Stories Worth <span className="text-primary italic">Reading.</span><br />
                  Ideas Worth <span className="text-accent italic">Sharing.</span>
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                  InkVault is your sanctuary for deep dives and nuanced perspectives. We curate the voices that matter.
                </motion.p>
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <button onClick={handleExploreArticles} className="btn-primary flex items-center gap-2 group">
                    Explore Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button onClick={() => setShowNewsletterPopup(true)} className="btn-secondary">
                    Subscribe Free
                  </button>
                </motion.div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2000" alt="Abstract composition" className="w-full h-full object-cover" loading="eager" />
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
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Featured Editorials</h2>
                <p className="mt-2 text-muted-foreground">
                  {selectedTopic ? `Showing articles in ${selectedTopic}` : 'Handpicked selections by our editorial board.'}
                </p>
              </div>
              {selectedTopic && (
                <button onClick={() => setSelectedTopic(null)} className="text-sm text-primary hover:text-primary/80 flex items-center gap-1">
                  Clear filter <X size={14} />
                </button>
              )}
            </div>

            {filteredFeatured.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No articles found in {selectedTopic}.</p>
                <button onClick={() => setSelectedTopic(null)} className="btn-primary">View all articles</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredFeatured.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="article-card group"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <span className="category-badge">{article.category}</span>
                      <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <span>{formatDate(article.date)}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold font-display leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-3 mb-6">{article.excerpt}</p>
                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <img src={article.author.avatarUrl} alt={article.author.name} className="w-8 h-8 rounded-full object-cover" loading="lazy" />
                        <span className="text-sm font-medium text-foreground">{article.author.name}</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* TOPICS & TRENDING */}
        <section id="topics" className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <h2 className="text-3xl font-bold mb-8">Explore by Topic</h2>
                <div className="flex flex-wrap gap-3">
                  {CATEGORIES.map((topic) => (
                    <button
                      key={topic}
                      onClick={() => handleTopicClick(topic)}
                      className={`topic-btn ${selectedTopic === topic ? 'topic-btn-active' : ''}`}
                    >
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
                  <TrendingUp size={20} className="text-accent" />
                  <h2 className="text-2xl font-bold">Trending Now</h2>
                </div>
                <div className="flex flex-col gap-6">
                  {TRENDING_ARTICLES.map((article) => (
                    <article key={article.id} className="group cursor-pointer flex gap-5 items-center">
                      <span className="text-4xl font-display font-bold text-muted-foreground/30 w-8 text-center">{article.rank}</span>
                      <div className="flex-1">
                        <span className="text-xs text-accent font-bold uppercase tracking-wider mb-1 block">{article.category}</span>
                        <h4 className="text-lg font-bold font-display leading-snug group-hover:text-primary transition-colors line-clamp-2">{article.title}</h4>
                        <span className="text-xs text-muted-foreground mt-2 block">{article.author.name} • {article.readTime}</span>
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
        <section className="py-20 bg-secondary/20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <div className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold">Latest Stories</h2>
                  <div className="w-16 h-1 bg-primary mt-4"></div>
                </div>

                {filteredLatest.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">No articles found in {selectedTopic}.</p>
                    <button onClick={() => setSelectedTopic(null)} className="btn-primary">View all articles</button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredLatest.map((article) => (
                      <article key={article.id} className="group cursor-pointer">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4">
                          <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" loading="lazy" />
                        </div>
                        <span className="text-xs text-primary font-bold uppercase tracking-wider mb-2 block">{article.category}</span>
                        <h3 className="text-xl font-bold font-display leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{article.excerpt}</p>
                        <div className="text-xs text-muted-foreground/80 flex items-center gap-2">
                          <span className="font-medium text-foreground">{article.author.name}</span>
                          <span>•</span>
                          <span>{formatDate(article.date)}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                )}

                <div className="mt-12 flex justify-center">
                  <button onClick={handleLoadMore} className="btn-secondary">
                    Load More Articles
                  </button>
                </div>
              </div>

              <aside className="lg:col-span-4 space-y-8">
                <div id="about" className="bg-foreground text-background p-8 rounded-xl relative overflow-hidden">
                  <BookOpen size={40} className="text-primary mb-4 opacity-50 absolute -top-2 -right-2 rotate-12 scale-150" />
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
                  <div className="mt-8 p-6 border border-border rounded-xl bg-card text-center">
                    <ShieldCheck size={32} className="text-accent mx-auto mb-3" />
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000')] opacity-5 mix-blend-overlay"></div>
          <div className="container-custom text-center relative z-10">
            <Mail size={48} className="mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 text-white">Join 50,000+ Discerning Readers</h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Get our flagship essays delivered to your inbox every Sunday morning. No noise, just signal.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubscribe}>
              <input type="email" placeholder="Enter your email address" className="flex-1 px-5 py-4 rounded-lg text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-accent" required />
              <button type="submit" className="btn-accent">Subscribe</button>
            </form>
            <p className="mt-4 text-sm text-white/60">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </section>

        {/* BOTTOM AD */}
        <div className="container-custom py-12">
          <AdSlot type="leaderboard" />
        </div>

        {/* Newsletter Popup */}
        {showNewsletterPopup && (
          <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
            <div className="bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-xl">
              <p className="font-medium">🎉 Thanks for subscribing!</p>
              <p className="text-sm opacity-90">Check your inbox for confirmation.</p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
