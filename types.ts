export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface MediaItem {
  id: string;
  type: 'photo' | 'video';
  src: string; // URL for image or thumbnail
  videoUrl?: string; // For video embeds
  category: string;
  title?: string;
  description?: string;
  orientation?: 'landscape' | 'portrait';
}

export interface Package {
  id: string;
  name: string;
  priceRange: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g., "Bride", "Groom's Mother"
  text: string;
  image?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  buttonPrimary: string;
  buttonSecondary: string;
  backgroundImage: string;
}

export interface CTAContent {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundImage: string;
}