import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen scroll-mt-20 flex-col justify-center border-b border-line px-6 py-24 md:px-16"
    >
      <p className="animate-[fadein_0.6s_ease-out] font-mono text-sm text-signal">
        {profile.location}
      </p>
      <h1 className="mt-4 max-w-3xl animate-[fadein_0.6s_ease-out_0.1s_both] font-mono text-4xl font-medium leading-[1.15] text-paper sm:text-5xl md:text-6xl">
        {profile.tagline}
      </h1>
      <p className="mt-6 max-w-prose animate-[fadein_0.6s_ease-out_0.2s_both] text-base leading-relaxed text-muted">
        {profile.summary}
      </p>
      <div className="mt-10 flex animate-[fadein_0.6s_ease-out_0.3s_both] flex-wrap gap-4">
        <p className="border border-line px-5 py-2.5 font-mono text-sm text-muted transition-colors hover:border-muted hover:text-paper">Current GPA: 3.61</p>
        <p
          className="border border-line px-5 py-2.5 font-mono text-sm text-muted transition-colors hover:border-muted hover:text-paper"
        >
          {profile.major}
        </p>
      </div>
    </section>
  );
}
