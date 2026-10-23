import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 px-6 py-24 md:px-16"
    >
      <h2 className="mt-8 max-w-2xl font-mono text-3xl leading-tight text-paper sm:text-4xl">
        Have something worth building? Send a note.
      </h2>
      <dl className="mt-8 flex flex-col gap-3 font-mono text-lg text-muted">
        <div className="flex gap-4">
          <dt className="w-20 shrink-0 text-paper">Gmail</dt>
          <dd>
            <a
              href={`mailto:${profile.email}`}
              className="transition-opacity hover:text-paper"
            >
              {profile.email}
            </a>
          </dd>
        </div>

        <div className="flex gap-4">
          <dt className="w-20 shrink-0 text-paper">WhatsApp</dt>
          <dd>
            <a
              href={`tel:${profile.phone}`}
              className="transition-opacity hover:text-paper"
            >
              {profile.phone}
            </a>
          </dd>
        </div>

        <div className="flex gap-4">
          <dt className="w-20 shrink-0 text-paper">CV</dt>
          <dd>
            <a
              href="/CV.pdf"
              download="CV.pdf"
              className="transition-opacity hover:text-paper"
            >
              Download CV
            </a>
          </dd>
        </div>
      </dl>
      <div className="mt-16 flex flex-wrap gap-6 border-t border-line pt-8">
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-muted transition-colors hover:text-paper"
          >
            {social.label}
          </a>
        ))}
      </div>

      <p className="mt-16 font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  );
}
