"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PageCacheContext = createContext<any>(null);

export function PageCacheProvider({ children }: { children: ReactNode }) {
  const [cachedHome, setCachedHome] = useState<ReactNode | null>(null);

  return (
    <PageCacheContext.Provider value={{ cachedHome, setCachedHome }}>
      {children}
    </PageCacheContext.Provider>
  );
}

export function usePageCache() {
  return useContext(PageCacheContext);
}
