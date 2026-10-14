import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-b border-line px-6 py-24 md:px-16"
    >
      <h2 className="mt-8 font-mono text-2xl text-paper">
        Tools I reach for
      </h2>

      <div className="mt-12 grid gap-10 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="font-mono text-xs text-signal">{group.label}</p>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
