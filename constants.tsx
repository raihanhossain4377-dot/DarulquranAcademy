
import React from 'react';
import { BookOpen, Users, GraduationCap, Globe, ShieldCheck, Heart } from 'lucide-react';
import { Course, Testimonial, Stat } from './types';

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Quran Reading (Noorani Qaida)',
    description: 'Perfect for beginners. Learn the basics of Arabic letters and pronunciation rules.',
    duration: '3 Months',
    category: 'Quran',
    imageUrl: 'https://picsum.photos/seed/quran1/800/600'
  },
  {
    id: '2',
    title: 'Tajweed Mastery',
    description: 'Learn the intricate rules of Quranic recitation with expert instructors.',
    duration: '6 Months',
    category: 'Quran',
    imageUrl: 'https://picsum.photos/seed/quran2/800/600'
  },
  {
    id: '3',
    title: 'Hifz (Memorization)',
    description: 'A structured program for those wishing to commit the Holy Quran to memory.',
    duration: 'Flexible',
    category: 'Quran',
    imageUrl: 'https://picsum.photos/seed/quran3/800/600'
  },
  {
    id: '4',
    title: 'Arabic Language Basics',
    description: 'Introduction to modern standard Arabic for daily conversation and understanding.',
    duration: '4 Months',
    category: 'Arabic',
    imageUrl: 'https://picsum.photos/seed/arabic/800/600'
  },
  {
    id: '5',
    title: 'Islamic Jurisprudence (Fiqh)',
    description: 'Understand the practical application of Islamic laws in everyday life.',
    duration: '5 Months',
    category: 'Islamic Studies',
    imageUrl: 'https://picsum.photos/seed/fiqh/800/600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmed Khan',
    role: 'Student, USA',
    content: 'The one-on-one sessions at Darul Quran Academy have transformed my recitation. Highly recommended!',
    avatar: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    id: '2',
    name: 'Sarah Fatima',
    role: 'Parent, UK',
    content: 'My children love their teachers. The curriculum is engaging and very well organized.',
    avatar: 'https://picsum.photos/seed/user2/100/100'
  }
];

export const STATS: Stat[] = [
  { label: 'Active Students', value: '1,500+', icon: <Users className="w-6 h-6" /> },
  { label: 'Certified Teachers', value: '50+', icon: <GraduationCap className="w-6 h-6" /> },
  { label: 'Countries Reached', value: '25+', icon: <Globe className="w-6 h-6" /> },
  { label: 'Courses Completed', value: '3,000+', icon: <BookOpen className="w-6 h-6" /> }
];

export const FEATURES = [
  {
    title: 'One-on-One Learning',
    description: 'Personalized attention from expert teachers tailored to your pace.',
    icon: <Users className="w-10 h-10 text-emerald-600" />
  },
  {
    title: 'Flexible Scheduling',
    description: 'Choose timings that fit your busy lifestyle, anywhere in the world.',
    icon: <ShieldCheck className="w-10 h-10 text-emerald-600" />
  },
  {
    title: 'Structured Curriculum',
    description: 'Systematic learning paths from foundational to advanced levels.',
    icon: <BookOpen className="w-10 h-10 text-emerald-600" />
  },
  {
    title: 'Spirituality Focused',
    description: 'Beyond reading, we focus on understanding and spiritual connection.',
    icon: <Heart className="w-10 h-10 text-emerald-600" />
  }
];
