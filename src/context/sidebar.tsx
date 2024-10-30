'use client';
import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext({
  isOpen: false,
  setOpen: (newState: boolean) => {
    void newState;
  },
});

export default function SidebarContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarContext() {
  return useContext(SidebarContext);
}
