
export interface Project {
  title: string;
  role: string;
  description: string;
  link?: string;
  impact?: string;
  isCurrent?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  designation: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
