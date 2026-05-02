import type { AuditFirm } from "@/lib/types";
import { firmLogoUrl } from "@/lib/logo";

interface FirmCardProps {
  readonly firm: AuditFirm;
}

export function FirmCard({ firm }: FirmCardProps) {
  const logo = firmLogoUrl(firm.website, 64, firm.name);
  return (
    <a
      href={firm.website}
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
            {firm.name}
          </h3>
        </div>
        <span className="text-neutral-300 group-hover:text-neutral-900 transition-colors text-sm shrink-0">
          →
        </span>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {firm.specialty.map((tag) => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-neutral-200 text-neutral-600 bg-neutral-50"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
        {firm.notes}
      </p>
      {firm.notableClients.length > 0 && (
        <p className="mt-3 pt-3 border-t border-neutral-100 text-[11px] text-neutral-500">
          <span className="text-neutral-400">Clients </span>
          {firm.notableClients.join(", ")}
        </p>
      )}
    </a>
  );
}
