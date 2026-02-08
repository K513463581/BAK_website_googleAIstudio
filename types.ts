import React, { useState, useEffect, createContext, useContext } from 'react';

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

// --- Mock Router Implementation to replace react-router-dom ---

const RouterContext = createContext<{
  path: string;
  navigate: (to: string) => void;
}>({ path: '/', navigate: () => {} });

export const HashRouter = ({ children }: { children: React.ReactNode }) => {
  const [path, setPath] = useState(typeof window !== 'undefined' ? (window.location.hash.slice(1) || '/') : '/');

  useEffect(() => {
    const handleHashChange = () => {
      setPath(window.location.hash.slice(1) || '/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (to: string) => {
    window.location.hash = to;
  };

  return React.createElement(RouterContext.Provider, { value: { path, navigate } }, children);
};

export const Routes = ({ children }: { children: React.ReactNode }) => {
  return React.createElement(React.Fragment, null, children);
};

export const Route = ({ path, element }: { path: string, element: React.ReactNode }) => {
  const { path: currentPath } = useContext(RouterContext);
  if (currentPath === path) {
    return React.createElement(React.Fragment, null, element);
  }
  return null;
};

export const Link = ({ to, children, className, onClick }: { to: string, children: React.ReactNode, className?: string, onClick?: () => void }) => {
  return React.createElement('a', {
    href: `#${to}`,
    className: className,
    onClick: (e: React.MouseEvent) => {
      if (onClick) onClick();
    }
  }, children);
};

export const useLocation = () => {
  const { path } = useContext(RouterContext);
  return { pathname: path };
};

export const useNavigate = () => {
  const { navigate } = useContext(RouterContext);
  return navigate;
};

export const Navigate = ({ to }: { to: string }) => {
  const { navigate } = useContext(RouterContext);
  useEffect(() => {
    navigate(to);
  }, [to, navigate]);
  return null;
};
