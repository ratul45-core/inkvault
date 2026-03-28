import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ChevronRight, Mail, BookOpen, Star, ShieldCheck, TrendingUp } from 'lucide-react';
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
