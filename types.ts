export interface User {
  id: string;
  name: string;
  email: string;
  barRegistrationNumber: string;
  avatar?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  category: 'Notice' | 'Event' | 'News';
}

export interface ExecutiveMember {
  id: string;
  name: string;
  position: string;
  image: string;
  email?: string;
}

export interface DocumentResource {
  id: string;
  title: string;
  type: 'PDF' | 'DOC' | 'LINK';
  date: string;
  size?: string;
}