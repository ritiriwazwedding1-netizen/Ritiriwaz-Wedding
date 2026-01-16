import { NavItem, Service, Package, Testimonial, MediaItem, FAQ, HeroContent, CTAContent } from './types';

// =============================================================================
// 🎨 SITE CONTENT SETTINGS
// =============================================================================
// 📸 GUIDE: HOW TO ADD YOUR OWN PHOTOS
// 
// Since this is a static website, your images need to be hosted on the internet.
//
// STEP 1: Upload your photo
//    Use a free hosting site like https://imgur.com/upload or https://imgbb.com/.
//    (You don't need an account).
//
// STEP 2: Get the DIRECT Link
//    Once uploaded, right-click the image and select "Copy Image Address" (Chrome) 
//    or "Copy Image Link" (Safari/Firefox).
//
// STEP 3: Verify the Link
//    Paste the link in a new tab. Does it end in .jpg, .png, or .webp?
//    ✅ GOOD: https://i.imgur.com/abc1234.jpg
//    ❌ BAD:  https://imgur.com/gallery/abc1234 (This is a webpage, not an image)
//    ❌ BAD:  https://instagram.com/p/xyz... (This is a webpage)
//
// STEP 4: Update this file
//    Replace the generic Unsplash links below with your new direct links.
// =============================================================================

// --- 1. COMPANY DETAILS ---
export const COMPANY_INFO = {
  name: "Ritiriwaz Wedding",
  tagline: "Every wedding has a story. We capture how it felt.",
  location: "Lalitpur, Nepal",
  phones: ["+977-9826189938", "+977-9825357865"],
  whatsapp: "9779826189938", // Number only, no symbols
  email: "hello@ritiriwaz.com",
  instagram: "@ritiriwazwedding",
  instagramUrl: "https://instagram.com/ritiriwazwedding",
  association: "In association with Kaji Production"
};

// --- 2. HOME PAGE: HERO SECTION ---
export const HERO_CONTENT: HeroContent = {
  title: "Framing Emotions \nin Every Ritual", // \n creates a new line
  subtitle: "Every wedding has a story. We don't just capture how it looked — we capture how it felt.",
  buttonPrimary: "Check Availability",
  buttonSecondary: "View Gallery",
  backgroundImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" // Cinematic Wedding Table/Vibe
};

// --- 3. HOME PAGE: CALL TO ACTION (Bottom) ---
export const CTA_SECTION: CTAContent = {
  title: "Let's Create Magic",
  subtitle: "Your wedding dates are special, and so are our slots. Let's start the conversation.",
  buttonText: "Book Your Date",
  backgroundImage: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=2070&auto=format&fit=crop" // Flowers/Texture
};

// --- 4. NAVIGATION MENU ---
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Films', path: '/films' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Packages', path: '/packages' },
  { label: 'Contact', path: '/contact' },
];

// --- 5. SERVICES ---
export const SERVICES: Service[] = [
  {
    id: 'films',
    title: 'Cinematic Films',
    description: '4K storytelling that weaves emotions and rituals into a timeless movie.',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1000&auto=format&fit=crop' // Camera/Film vibe
  },
  {
    id: 'photo',
    title: 'Wedding Photography',
    description: 'Candid moments and editorial portraits capturing the essence of your day.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=1000&auto=format&fit=crop' // Editorial Bride
  },
  {
    id: 'pre-wedding',
    title: 'Pre-Wedding',
    description: 'Conceptual outdoor shoots celebrating your chemistry before the big day.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop' // Couple outdoor
  },
  {
    id: 'traditional',
    title: 'Traditional',
    description: 'Documenting every ritual with precision and cultural respect.',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1000&auto=format&fit=crop' // Cultural/Traditional details
  }
];

// --- 6. PACKAGES ---
export const PACKAGES: Package[] = [
  {
    id: 'standard',
    name: 'Silver Story',
    priceRange: 'Starting @ NPR 85,000',
    features: [
      'Traditional Photography',
      'Traditional Videography',
      '1 Edited Full Video (1-2 hrs)',
      'Unlimited High-Res Photos',
      '1 Premium Photobook'
    ]
  },
  {
    id: 'premium',
    name: 'Gold Cinematic',
    priceRange: 'Starting @ NPR 150,000',
    features: [
      'Cinematic Videography (2 Shooters)',
      'Candid & Traditional Photography',
      'Wedding Highlight Film (3-5 mins)',
      'Full Documentary Film',
      'Drone Coverage (if permitted)',
      '2 Premium Photobooks',
      'Pre-wedding Session Discount'
    ],
    isPopular: true
  },
  {
    id: 'luxury',
    name: 'Platinum Legacy',
    priceRange: 'Custom Quote',
    features: [
      'Complete Team (3 Video, 3 Photo)',
      'Pre-Wedding Concept Video & Shoot',
      'Same Day Edit (Reel/Teaser)',
      'Master Documentary Film',
      'Drone & Gimbal Cinematography',
      'Luxury Leather Photobooks',
      'Raw Footage Delivery'
    ]
  }
];

// --- 7. TESTIMONIALS ---
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aarav & Sudeep',
    role: 'Couple',
    text: 'The team at Ritiriwaz didn’t just take photos, they became part of the family. The highlight video made us cry—it captured feelings we missed on the hectic day.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Bride',
    text: 'Cinematic genius. Looking at the photos feels like watching a movie. Highly recommended for anyone in Kathmandu looking for quality.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: '3',
    name: 'Ramesh Karki',
    role: 'Father of the Groom',
    text: 'Very professional behavior. They arrived on time, dressed well, and respected all our rituals while getting great shots.',
    image: 'https://randomuser.me/api/portraits/men/85.jpg'
  }
];

// --- 8. GALLERY (HOMEPAGE & GALLERY PAGE) ---
export const GALLERY_IMAGES: MediaItem[] = [
  { id: '1', type: 'photo', category: 'Couple', src: 'https://images.unsplash.com/photo-1623945417621-e0e64c3c3a9f?q=80&w=800&auto=format&fit=crop', orientation: 'portrait' }, // Nepali/Indian vibes
  { id: '2', type: 'photo', category: 'Ceremony', src: 'https://images.unsplash.com/photo-1587271407850-8d4389188265?q=80&w=1200&auto=format&fit=crop', orientation: 'landscape' }, // Ritual
  { id: '3', type: 'photo', category: 'Details', src: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=800&auto=format&fit=crop', orientation: 'landscape' }, // Hands/Mehndi
  { id: '4', type: 'photo', category: 'Bridal', src: 'https://images.unsplash.com/photo-1595954484701-3ad439e55a5d?q=80&w=800&auto=format&fit=crop', orientation: 'portrait' }, // Red Dress
  { id: '5', type: 'photo', category: 'Candid', src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop', orientation: 'landscape' }, // Wedding Party
  { id: '6', type: 'photo', category: 'Couple', src: 'https://images.unsplash.com/photo-1522673607200-1645062cd955?q=80&w=800&auto=format&fit=crop', orientation: 'portrait' },
  { id: '7', type: 'photo', category: 'Ceremony', src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800&auto=format&fit=crop', orientation: 'landscape' },
  { id: '8', type: 'photo', category: 'Groom', src: 'https://images.unsplash.com/photo-1596395819057-d37220556e69?q=80&w=800&auto=format&fit=crop', orientation: 'portrait' },
  { id: '9', type: 'photo', category: 'Details', src: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1200&auto=format&fit=crop', orientation: 'landscape' }, // Jewelry
];

// --- 9. FILMS ---
export const FILMS: MediaItem[] = [
  { id: 'f1', type: 'video', category: 'Highlight', src: 'https://images.unsplash.com/photo-1605900293796-03c62a87d092?q=80&w=800', title: 'Sita & Ram // Kathmandu', description: 'A royal celebration at Hyatt Regency.' },
  { id: 'f2', type: 'video', category: 'Wedding Film', src: 'https://images.unsplash.com/photo-1628151016024-5819d4246875?q=80&w=800', title: 'Anjali & Vivek // Pokhara', description: 'Lakeside vows and misty mountains.' },
  { id: 'f3', type: 'video', category: 'Teaser', src: 'https://images.unsplash.com/photo-1600350569724-4f04c6e93c6f?q=80&w=800', title: 'Rohan & Nita // Patan', description: 'Traditional Newari ceremony highlights.' },
];

// --- 10. FAQs ---
export const FAQS: FAQ[] = [
  { question: "How far in advance should we book?", answer: "We recommend booking at least 3-6 months in advance, especially for wedding seasons (Mangsir, Magh, Falgun)." },
  { question: "Do you travel outside Kathmandu Valley?", answer: "Yes! We love destination weddings. Travel and accommodation costs are additional." },
  { question: "When will we get our photos and videos?", answer: "Photos are delivered within 4-6 weeks. Cinematic films take 8-10 weeks due to intricate editing." },
  { question: "Can we customize packages?", answer: "Absolutely. Contact us for a consultation, and we can tailor a package to your specific events." }
];