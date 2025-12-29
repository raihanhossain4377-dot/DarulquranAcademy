
export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: 'Quran' | 'Arabic' | 'Islamic Studies';
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
}
