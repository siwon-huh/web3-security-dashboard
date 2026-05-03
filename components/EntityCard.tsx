import type { SecurityEntity } from "@/lib/ecosystem";
import { firmLogoUrl } from "@/lib/logo";
import type { Lang } from "@/lib/i18n";
import { ENTITY_NOTES_EN } from "@/lib/i18n/ecosystem-en";

interface EntityCardProps {
  readonly entity: SecurityEntity;
  readonly lang?: Lang;
}

export function EntityCard({ entity, lang = "ko" }: EntityCardProps) {
  const logo = firmLogoUrl(entity.website, 64, entity.name);
  const note =
    lang === "en"
      ? (ENTITY_NOTES_EN[entity.name] ?? entity.notes)
      : entity.notes;
  return (
    <a
      href={entity.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 hover:border-neutral-900 hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          {logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logo}
              alt=""
              loading="lazy"
              className="h-6 w-6 rounded shrink-0 object-contain bg-white dark:bg-neutral-900"
            />
          )}
          <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight truncate">
            {entity.name}
          </h3>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {entity.openSource && (
            <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-900 font-medium">
              OSS
            </span>
          )}
          <span className="text-neutral-300 dark:text-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-neutral-50 transition-colors text-sm">
            →
          </span>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {entity.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-3 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {note}
      </p>
    </a>
  );
}
