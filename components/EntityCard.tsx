import type { SecurityEntity } from "@/lib/ecosystem";
import { firmLogoUrl } from "@/lib/logo";

interface EntityCardProps {
  readonly entity: SecurityEntity;
}

export function EntityCard({ entity }: EntityCardProps) {
  const logo = firmLogoUrl(entity.website, 64, entity.name);
  return (
    <a
      href={entity.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-neutral-200 bg-white p-5 hover:border-neutral-900 hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          {logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logo}
              alt=""
              loading="lazy"
              className="h-6 w-6 rounded shrink-0 object-contain bg-white"
            />
          )}
          <h3 className="font-semibold text-neutral-900 tracking-tight truncate">
            {entity.name}
          </h3>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {entity.openSource && (
            <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border border-neutral-300 text-neutral-700 bg-neutral-50 font-medium">
              OSS
            </span>
          )}
          <span className="text-neutral-300 group-hover:text-neutral-900 transition-colors text-sm">
            →
          </span>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {entity.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-neutral-200 text-neutral-600 bg-neutral-50"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
        {entity.notes}
      </p>
    </a>
  );
}
