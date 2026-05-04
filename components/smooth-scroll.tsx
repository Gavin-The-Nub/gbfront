"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor && anchor.href) {
        try {
          const url = new URL(anchor.href);
          const isSamePage = 
            url.origin === window.location.origin && 
            url.pathname === window.location.pathname && 
            !url.hash;

          if (isSamePage) {
            // Give Next.js a moment to handle the navigation if any
            setTimeout(() => {
              lenis?.scrollTo(0);
            }, 10);
          }
        } catch (err) {
          // Ignore invalid URLs
        }
      }
    };

    window.addEventListener("click", handleAnchorClick, { capture: true });
    return () => window.removeEventListener("click", handleAnchorClick, { capture: true });
  }, [lenis]);

  return null;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.12, 
      duration: 1.1, 
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5
    }}>
      <ScrollReset />
      {children}
    </ReactLenis>
  );
}
