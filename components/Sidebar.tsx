"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/data";

export default function Sidebar() {
  const [active, setActive] = useState(navItems[0].id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b border-line bg-ink/95 px-5 py-4 backdrop-blur md:hidden">
        <span className="font-mono text-sm text-paper">{profile.name}</span>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="font-mono text-sm text-signal"
        >
          {open ? "close()" : "menu()"}
        </button>
      </div>

      {open && (
        <nav className="fixed inset-x-0 top-[57px] z-30 border-b border-line bg-ink px-5 py-4 md:hidden">
          <NavList active={active} onNavigate={handleNavigate} />
        </nav>
      )}

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col justify-between border-r border-line bg-ink px-8 py-10 md:flex">
        <div>
          <p className="font-mono text-sm text-paper">{profile.name}</p>
          <p className="mt-1 text-xs text-muted">{profile.role}</p>

          <nav className="mt-12">
            <NavList active={active} onNavigate={handleNavigate} />
          </nav>
        </div>

        <div className="space-y-2">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="block font-mono text-xs text-muted transition-colors hover:text-signal"
            >
              {social.label}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}

function NavList({
  active,
  onNavigate,
}: {
  active: string;
  onNavigate: (id: string) => void;
}) {
  return (
    <ul className="space-y-1">
      {navItems.map((item) => {
        const isActive = active === item.id;
        return (
          <li key={item.id}>
            <button
              onClick={() => onNavigate(item.id)}
              className={`group flex w-full items-center gap-2 rounded-sm px-3 py-2 text-left font-mono text-sm transition-colors ${
                isActive
                  ? "bg-panel text-signal"
                  : "text-muted hover:text-paper"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                  isActive ? "bg-signal" : "bg-line group-hover:bg-muted"
                }`}
              />
              {item.file}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
