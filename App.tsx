import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS, SERVICES, PACKAGES, TESTIMONIALS, GALLERY_IMAGES, FILMS, FAQS, HERO_CONTENT, CTA_SECTION } from './constants';
import { motion, AnimatePresence } from 'framer-motion';

// --- Shared Components ---

const Button: React.FC<{ 
  children: React.ReactNode; 
  variant?: 'primary' | 'outline'; 
  className?: string;
  onClick?: () => void;
  href?: string;
  external?: boolean;
}> = ({ children, variant = 'primary', className = '', onClick, href, external }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 font-serif font-medium tracking-wide transition-all duration-300 text-sm md:text-base";
  const variants = {
    primary: "bg-gold-500 hover:bg-gold-400 text-white shadow-lg hover:shadow-gold-500/20",
    outline: "border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white"
  };

  if (href) {
    if (external) {
      return <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</a>;
    }
    return <Link to={href} className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</Link>;
  }

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const SectionTitle: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">{title}</h2>
    {subtitle && <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">{subtitle}</p>}
    <div className={`h-1 w-20 bg-gold-500 mt-6 ${align === 'center' ? 'mx-auto' : ''}`}></div>
  </div>
);

// --- Layout Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-xl py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-white tracking-wider">
          RITIRIWAZ<span className="text-gold-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link key={item.path} to={item.path} className={`text-sm font-medium tracking-widest hover:text-gold-500 transition-colors ${location.pathname === item.path ? 'text-gold-500' : 'text-slate-300'}`}>
              {item.label.toUpperCase()}
            </Link>
          ))}
          <Button href={`https://wa.me/${COMPANY_INFO.whatsapp}`} external variant="primary" className="!px-4 !py-2 rounded-sm text-xs">
            Let's Talk
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-t border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {NAV_ITEMS.map((item) => (
                <Link key={item.path} to={item.path} className="text-xl font-serif text-slate-200 hover:text-gold-500">
                  {item.label}
                </Link>
              ))}
               <Button href={`https://wa.me/${COMPANY_INFO.whatsapp}`} external variant="primary" className="w-full">
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 mb-16">
      <div>
        <h3 className="text-2xl font-serif font-bold text-white mb-6">Ritiriwaz Wedding</h3>
        <p className="text-slate-400 mb-6 font-light leading-relaxed">
          {COMPANY_INFO.tagline}
        </p>
        <div className="flex space-x-4">
          <a href={COMPANY_INFO.instagramUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-gold-500 transition-colors">
            <Instagram size={24} />
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
        <ul className="space-y-3">
          {NAV_ITEMS.map(item => (
            <li key={item.path}>
              <Link to={item.path} className="text-slate-400 hover:text-gold-500 transition-colors text-sm tracking-wide">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-white font-serif text-lg mb-6">Contact Us</h4>
        <ul className="space-y-4 text-slate-400 text-sm">
          <li className="flex items-start space-x-3">
            <Phone size={18} className="mt-1 text-gold-500" />
            <div className="flex flex-col">
              {COMPANY_INFO.phones.map(p => <span key={p}>{p}</span>)}
            </div>
          </li>
          <li className="flex items-center space-x-3">
            <MessageCircle size={18} className="text-gold-500" />
            <span>{COMPANY_INFO.whatsapp} (WhatsApp)</span>
          </li>
          <li>{COMPANY_INFO.location}</li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto px-6 text-center border-t border-slate-900 pt-8">
      <p className="text-slate-600 text-xs">
        &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. <br/>
        <span className="opacity-70">{COMPANY_INFO.association}</span>
      </p>
    </div>
  </footer>
);

const WhatsAppFloat = () => (
  <a 
    href={`https://wa.me/${COMPANY_INFO.whatsapp}`} 
    target="_blank" 
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center"
    aria-label="Contact on WhatsApp"
  >
    <MessageCircle size={28} fill="currentColor" className="text-white" />
  </a>
);

// --- Page Components ---

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_CONTENT.backgroundImage}
          alt="Wedding Moments" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center pt-20">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold-400 text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-medium"
        >
          {COMPANY_INFO.name}
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight whitespace-pre-line"
        >
          {HERO_CONTENT.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
        >
          {HERO_CONTENT.subtitle}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-4"
        >
          <Button href="/contact">{HERO_CONTENT.buttonPrimary}</Button>
          <Button href="/gallery" variant="outline">{HERO_CONTENT.buttonSecondary}</Button>
        </motion.div>
      </div>
    </div>
  );
};

const ServicesSection = () => (
  <section className="py-20 bg-brand-dark">
    <div className="container mx-auto px-6">
      <SectionTitle title="Our Expertise" subtitle="We specialize in capturing the essence of Nepali weddings through various artistic lenses." />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, idx) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative overflow-hidden rounded-lg bg-slate-900 border border-slate-800 hover:border-gold-500/50 transition-all duration-500"
          >
            <div className="h-64 overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-white mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Process = () => (
  <section className="py-20 bg-slate-900 border-y border-slate-800">
    <div className="container mx-auto px-6">
      <SectionTitle title="The Process" subtitle="A seamless experience from the first hello to the final delivery." />
      <div className="flex flex-col md:flex-row justify-between items-center relative space-y-8 md:space-y-0">
        {['Inquiry', 'Consultation', 'The Shoot', 'Editing', 'Delivery'].map((step, index) => (
          <div key={step} className="flex flex-col items-center relative z-10 w-full md:w-1/5">
            <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-gold-500 flex items-center justify-center text-xl font-serif text-gold-500 mb-4 shadow-lg shadow-gold-500/10">
              {index + 1}
            </div>
            <h4 className="text-white font-medium tracking-wide text-sm md:text-base">{step}</h4>
            {index < 4 && (
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-slate-700 -z-10"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FilmsPreview = () => (
  <section className="py-20 bg-brand-dark">
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-end mb-12">
        <div className="text-left">
           <h2 className="text-3xl md:text-5xl font-serif text-white mb-2">Featured Films</h2>
           <p className="text-slate-400 font-light">Watch love come alive.</p>
        </div>
        <Link to="/films" className="hidden md:flex items-center text-gold-500 hover:text-white transition-colors">
          View All <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {FILMS.map((film, idx) => (
          <div key={film.id} className="group cursor-pointer">
             <div className="relative aspect-video overflow-hidden rounded-lg mb-4 bg-slate-800">
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/30 group-hover:bg-black/10 transition-colors">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-300">
                     <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent"></div>
                  </div>
                </div>
                <img src={film.src} alt={film.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             </div>
             <h3 className="text-xl font-serif text-white">{film.title}</h3>
             <p className="text-slate-500 text-sm">{film.category}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 md:hidden text-center">
        <Button href="/films" variant="outline">View All Films</Button>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-20 bg-slate-900">
    <div className="container mx-auto px-6">
      <SectionTitle title="Love Letters" />
      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-brand-dark p-8 rounded-xl border border-slate-800">
            <div className="flex items-center space-x-4 mb-6">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-gold-500" />
              <div>
                <h4 className="text-white font-serif">{t.name}</h4>
                <p className="text-slate-500 text-xs uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm font-light leading-relaxed italic">"{t.text}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Home = () => (
  <>
    <Hero />
    <ServicesSection />
    <FilmsPreview />
    <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <img src={CTA_SECTION.backgroundImage} className="w-full h-full object-cover grayscale" alt="texture"/>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">{CTA_SECTION.title}</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto font-light">
                {CTA_SECTION.subtitle}
            </p>
            <Button href="/contact">{CTA_SECTION.buttonText}</Button>
        </div>
    </section>
    <Process />
    <Testimonials />
  </>
);

const GalleryPage = () => {
    // A simplified masonry-like grid
    return (
        <div className="pt-32 pb-20 bg-brand-dark min-h-screen">
            <div className="container mx-auto px-6">
                <SectionTitle title="The Gallery" subtitle="A collection of fleeting moments frozen in time." />
                
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {GALLERY_IMAGES.map((img) => (
                        <motion.div 
                            key={img.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="break-inside-avoid relative group overflow-hidden rounded-lg cursor-zoom-in"
                        >
                            <img src={img.src} alt={img.category} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-serif tracking-widest uppercase text-sm border-b border-gold-500 pb-1">{img.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const FilmsPage = () => (
    <div className="pt-32 pb-20 bg-brand-dark min-h-screen">
        <div className="container mx-auto px-6">
            <SectionTitle title="Cinematic Films" subtitle="More than just video, we create heritage films for generations." />
            <div className="grid md:grid-cols-2 gap-12">
                {FILMS.map((film) => (
                    <div key={film.id} className="group">
                        <div className="aspect-video bg-slate-900 mb-6 relative overflow-hidden rounded-lg shadow-2xl">
                             <div className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center pl-2 hover:bg-gold-500 hover:border-gold-500 hover:text-white text-white transition-all duration-300">
                                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-current border-b-[12px] border-b-transparent"></div>
                                </div>
                            </div>
                            <img src={film.src} alt={film.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                        </div>
                        <h3 className="text-2xl font-serif text-white mb-1">{film.title}</h3>
                        <p className="text-gold-500 text-sm uppercase tracking-wide mb-3">{film.category}</p>
                        <p className="text-slate-400 font-light">{film.description}</p>
                    </div>
                ))}
                {/* Mock more films */}
                 <div className="group">
                        <div className="aspect-video bg-slate-900 mb-6 relative overflow-hidden rounded-lg shadow-2xl flex items-center justify-center">
                             <p className="text-slate-600">Additional Films Placeholder</p>
                        </div>
                        <h3 className="text-2xl font-serif text-white mb-1">Coming Soon</h3>
                 </div>
            </div>
        </div>
    </div>
);

const PackagesPage = () => (
    <div className="pt-32 pb-20 bg-brand-dark min-h-screen">
        <div className="container mx-auto px-6">
            <SectionTitle title="Investment" subtitle="Transparent packages designed to cover your most important memories." />
            
            <div className="grid lg:grid-cols-3 gap-8">
                {PACKAGES.map((pkg) => (
                    <div key={pkg.id} className={`relative p-8 rounded-2xl border ${pkg.isPopular ? 'border-gold-500 bg-slate-900/50' : 'border-slate-800 bg-brand-dark'} flex flex-col`}>
                        {pkg.isPopular && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
                        )}
                        <h3 className="text-2xl font-serif text-white text-center mb-2">{pkg.name}</h3>
                        <p className="text-gold-500 text-center font-medium mb-8">{pkg.priceRange}</p>
                        
                        <ul className="space-y-4 mb-10 flex-1">
                            {pkg.features.map((feature, i) => (
                                <li key={i} className="flex items-start text-slate-300 text-sm font-light">
                                    <span className="text-gold-500 mr-3">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        
                        <Button href="/contact" variant={pkg.isPopular ? 'primary' : 'outline'} className="w-full">
                            Inquire Now
                        </Button>
                    </div>
                ))}
            </div>

            <div className="mt-20 max-w-3xl mx-auto">
                <h3 className="text-2xl font-serif text-white text-center mb-8">Frequently Asked Questions</h3>
                <div className="space-y-6">
                    {FAQS.map((faq, i) => (
                        <div key={i} className="bg-slate-900 p-6 rounded-lg border border-slate-800">
                            <h4 className="text-white font-medium mb-2">{faq.question}</h4>
                            <p className="text-slate-400 text-sm font-light">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', date: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Construct WhatsApp Message
        const text = `Hi ${COMPANY_INFO.name}, I would like to inquire.\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\nMessage: ${formData.message}`;
        const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="pt-32 pb-20 bg-brand-dark min-h-screen">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Get in Touch</h2>
                        <p className="text-slate-400 mb-10 font-light text-lg">
                            We take a limited number of weddings each year to ensure quality. Tell us about your story.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 text-slate-300">
                                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-gold-500">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest">Call Us</p>
                                    <p className="text-lg">{COMPANY_INFO.phones[0]}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 text-slate-300">
                                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-gold-500">
                                    <MessageCircle size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest">WhatsApp</p>
                                    <p className="text-lg">Available 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-xl border border-slate-800">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">Name</label>
                                <input 
                                    type="text" 
                                    required
                                    className="w-full bg-brand-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                    placeholder="Your Full Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">Phone</label>
                                    <input 
                                        type="tel" 
                                        required
                                        className="w-full bg-brand-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                        placeholder="+977"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">Event Date</label>
                                    <input 
                                        type="date" 
                                        className="w-full bg-brand-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                        value={formData.date}
                                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">Your Story / Message</label>
                                <textarea 
                                    rows={4}
                                    className="w-full bg-brand-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                    placeholder="Tell us about your venue, events, or vision..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                ></textarea>
                            </div>
                            <Button className="w-full">Send Inquiry via WhatsApp</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

// --- Main App Component ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-dark text-slate-200 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/films" element={<FilmsPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/packages" element={<PackagesPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
};

export default App;