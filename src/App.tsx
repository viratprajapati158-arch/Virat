/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Wifi, 
  Coffee, 
  Waves, 
  Sparkles, 
  ChevronRight, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronDown, 
  ChevronUp,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-4">
      <button 
        id={`faq-btn-${question.replace(/\s+/g, '-').toLowerCase()}`}
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-white/90">{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-emerald-400" /> : <ChevronDown className="h-5 w-5 text-white/50" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-white/60 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold tracking-tighter text-white">
            VIRAT <span className="text-emerald-500">LUXURY</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden space-x-8 md:flex">
            <a href="#vibe" className="text-sm font-medium text-white/70 transition-colors hover:text-emerald-400">The Vibe</a>
            <a href="#amenities" className="text-sm font-medium text-white/70 transition-colors hover:text-emerald-400">Amenities</a>
            <a href="#rooms" className="text-sm font-medium text-white/70 transition-colors hover:text-emerald-400">Rooms</a>
            <a href="#offer" className="text-sm font-medium text-white/70 transition-colors hover:text-emerald-400">Offers</a>
          </div>

          <button 
            id="nav-book-btn"
            className="hidden rounded-full bg-emerald-600 px-6 py-2 text-sm font-semibold transition-all hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] md:block"
          >
            Book My Stay
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            id="mobile-menu-toggle"
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute w-full bg-black/95 px-6 py-8 md:hidden"
            >
              <div className="flex flex-col space-y-6">
                <a href="#vibe" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium">The Vibe</a>
                <a href="#amenities" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium">Amenities</a>
                <a href="#rooms" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium">Rooms</a>
                <a href="#offer" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium">Offers</a>
                <button className="w-full rounded-full bg-emerald-600 py-4 text-lg font-bold">Book My Stay</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920" 
            alt="Virat Luxury Hotel Exterior" 
            className="h-full w-full object-cover opacity-40 brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-light tracking-tight md:text-8xl">
              Where <span className="italic font-serif">Nizam’s Heritage</span> <br />
              Meets <span className="text-emerald-500 font-medium">Modern Opulence</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70 md:text-xl">
              Experience the soul of Hyderabad from our sky-high sanctuary. Stunning city views, personalized service, and a legacy of luxury await your arrival.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
              <button 
                id="hero-book-btn"
                className="group relative flex items-center space-x-2 overflow-hidden rounded-full bg-emerald-600 px-10 py-5 text-lg font-bold transition-all hover:bg-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
              >
                <span>Book My Stay</span>
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <a href="#rooms" className="text-sm font-semibold uppercase tracking-widest text-white/50 transition-colors hover:text-white">
                Explore Rooms
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* The Vibe (About Us) */}
      <section id="vibe" className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">The Vibe</h2>
            <p className="mt-8 text-2xl font-light leading-relaxed text-white/90 md:text-4xl">
              Virat Luxury isn’t just a stay; it’s a sensory journey through the heart of Hyderabad. 
              From the aroma of fresh Irani chai at dawn to the shimmering skyline views at dusk, 
              we curate moments that linger long after you check out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section id="amenities" className="bg-white/[0.02] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light md:text-5xl">Curated Comforts</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-emerald-500"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Waves, title: "Infinity Pool", desc: "Swim among the clouds with a panoramic view of the Hussain Sagar Lake." },
              { icon: Coffee, title: "Rooftop Cafe", desc: "Artisanal brews and local delicacies served with a side of breathtaking sunsets." },
              { icon: Sparkles, title: "Royal Spa", desc: "Ancient Ayurvedic rituals meet modern wellness in our tranquil sanctuary." },
              { icon: Wifi, title: "Ultra-Fast Wi-Fi", desc: "Stay connected with seamless, high-speed fiber internet throughout the property." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-white/5 bg-white/[0.03] p-8 transition-all hover:bg-white/[0.06] hover:border-emerald-500/30"
              >
                <div className="mb-6 inline-block rounded-xl bg-emerald-500/10 p-4 text-emerald-500 transition-transform group-hover:scale-110">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Showcase */}
      <section id="rooms" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col items-end justify-between md:flex-row">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-light md:text-5xl">Your Private Retreat</h2>
              <p className="mt-4 text-white/50">Designed for deep rest and effortless luxury.</p>
            </div>
            <div className="h-px flex-1 bg-white/10 mx-8 hidden md:block"></div>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Deluxe Room */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200" 
                  alt="Deluxe Room" 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 rounded-full bg-black/40 backdrop-blur-md px-4 py-1 text-xs font-bold uppercase tracking-widest">
                  Starting from ₹5,999
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold">Deluxe Sanctuary</h3>
                <p className="mt-4 leading-relaxed text-white/60">
                  A perfect blend of comfort and style, featuring premium linens, a walk-in rain shower, and floor-to-ceiling windows that flood the space with natural light.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/40">
                  <li className="flex items-center space-x-2"><Sparkles className="h-4 w-4 text-emerald-500" /> <span>King Size Bed</span></li>
                  <li className="flex items-center space-x-2"><Sparkles className="h-4 w-4 text-emerald-500" /> <span>City View</span></li>
                </ul>
              </div>
            </motion.div>

            {/* Executive Suite */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200" 
                  alt="Executive Suite" 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 rounded-full bg-black/40 backdrop-blur-md px-4 py-1 text-xs font-bold uppercase tracking-widest">
                  Starting from ₹9,999
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold">Executive Grand Suite</h3>
                <p className="mt-4 leading-relaxed text-white/60">
                  The pinnacle of luxury. Enjoy a separate living area, a deep-soaking marble tub, and exclusive access to our VIP lounge with complimentary evening cocktails.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/40">
                  <li className="flex items-center space-x-2"><Sparkles className="h-4 w-4 text-emerald-500" /> <span>VIP Lounge Access</span></li>
                  <li className="flex items-center space-x-2"><Sparkles className="h-4 w-4 text-emerald-500" /> <span>Marble Bath</span></li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-emerald-600 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold leading-tight text-white">Loved by Travelers from Around the Globe</h2>
              <div className="mt-6 flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-5 w-5 fill-white text-white" />)}
                <span className="font-bold">4.9/5 Rating</span>
              </div>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:col-span-2">
              {[
                {
                  name: "Ananya Sharma",
                  role: "Business Traveler",
                  text: "The attention to detail at Virat Luxury is unmatched. I've stayed at many 5-star hotels in Hyderabad, but the warmth of the staff and that rooftop view made this my favorite. It felt like a home away from home, only much more glamorous!"
                },
                {
                  name: "David Miller",
                  role: "Leisure Guest",
                  text: "We came for our anniversary and were blown away. The Executive Suite is stunning, and the spa treatment was the best I've ever had. If you're looking for true luxury in the city, this is the only place to be."
                }
              ].map((review, i) => (
                <div key={i} className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                  <p className="italic text-white/90">"{review.text}"</p>
                  <div className="mt-6">
                    <p className="font-bold">{review.name}</p>
                    <p className="text-sm text-white/60">{review.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Limited Time Offer */}
      <section id="offer" className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-900 to-black p-12 text-center border border-emerald-500/20">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-emerald-400">Exclusive Direct Booking Benefit</h2>
              <h3 className="mt-6 text-4xl font-bold md:text-6xl">Book Direct & Save More</h3>
              <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
                Skip the third-party sites. Book your stay directly through our website and unlock premium perks instantly.
              </p>
              
              <div className="mt-10 flex flex-wrap justify-center gap-6">
                <div className="flex items-center space-x-2 rounded-full bg-white/5 px-6 py-3 border border-white/10">
                  <Sparkles className="h-5 w-5 text-emerald-400" />
                  <span className="font-medium">15% Instant Discount</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-white/5 px-6 py-3 border border-white/10">
                  <Coffee className="h-5 w-5 text-emerald-400" />
                  <span className="font-medium">Free Gourmet Breakfast</span>
                </div>
                <div className="flex items-center space-x-2 rounded-full bg-white/5 px-6 py-3 border border-white/10">
                  <Sparkles className="h-5 w-5 text-emerald-400" />
                  <span className="font-medium">Early Check-in (Subject to availability)</span>
                </div>
              </div>

              <button 
                id="offer-book-btn"
                className="mt-12 rounded-full bg-white px-12 py-5 text-lg font-bold text-black transition-transform hover:scale-105 active:scale-95"
              >
                Claim My Offer Now
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer & Contact */}
      <footer className="border-t border-white/5 bg-black pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <div className="text-3xl font-bold tracking-tighter">
                VIRAT <span className="text-emerald-500">LUXURY</span>
              </div>
              <p className="mt-6 max-w-md text-white/50 leading-relaxed">
                Hyderabad's premier destination for the discerning traveler. Experience luxury that speaks to the soul.
              </p>
              
              <div className="mt-10 space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="mt-1 h-6 w-6 text-emerald-500" />
                  <div>
                    <p className="font-bold">Address</p>
                    <p className="text-white/50">Road No. 12, Banjara Hills, Hyderabad, Telangana 500034</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="mt-1 h-6 w-6 text-emerald-500" />
                  <div>
                    <p className="font-bold">Phone</p>
                    <p className="text-white/50">+91 40 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="mt-1 h-6 w-6 text-emerald-500" />
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-white/50">reservations@viratluxury.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="mb-8 text-2xl font-bold">Frequently Asked Questions</h3>
              <div className="space-y-2">
                <FAQItem 
                  question="What are the standard check-in and check-out times?" 
                  answer="Our standard check-in time is 2:00 PM and check-out is at 12:00 PM. Early check-in or late check-out can be requested and is subject to availability." 
                />
                <FAQItem 
                  question="Do you provide airport transfers?" 
                  answer="Yes, we offer premium airport pick-up and drop-off services in our luxury fleet. Please contact our concierge desk 24 hours in advance to arrange your transfer." 
                />
                <FAQItem 
                  question="Is the infinity pool accessible to all guests?" 
                  answer="Absolutely! The infinity pool is open to all resident guests from 6:00 AM to 10:00 PM daily. We also provide complimentary towels and refreshments poolside." 
                />
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col items-center justify-between border-t border-white/5 pt-12 text-sm text-white/30 md:flex-row">
            <p>© 2026 Virat Luxury Hyderabad. All rights reserved.</p>
            <div className="mt-4 flex space-x-8 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
