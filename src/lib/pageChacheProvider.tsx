"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define a proper type for the context
interface PageCacheContextType {
  cachedHome: boolean; // Changed from ReactNode to boolean
  setCachedHome: (value: boolean) => void;
}

const PageCacheContext = createContext<PageCacheContextType>({
  cachedHome: false,
  setCachedHome: () => {},
});

export function PageCacheProvider({ children }: { children: ReactNode }) {
  // Changed to store a boolean flag instead of a component
  const [cachedHome, setCachedHome] = useState<boolean>(false);
  
  useEffect(() => {
    // Set a timeout to mark the home as cached after 30 seconds
    if (!cachedHome) {
      const timer = setTimeout(() => {
        setCachedHome(true);
      }, 12000);
      
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageCacheContext.Provider value={{ cachedHome, setCachedHome }}>
      {children}
    </PageCacheContext.Provider>
  );
}

export function usePageCache() {
  return useContext(PageCacheContext);
}