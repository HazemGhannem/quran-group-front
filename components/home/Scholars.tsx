import Image from "next/image";
import { GraduationCap } from "lucide-react";
import type { Scholar } from "@/lib/home/data";

export default function Scholars({ scholars }: { scholars: Scholar[] }) {
  return (
    <section
      aria-labelledby="scholars-heading"
      className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <p className="font-label mb-2 text-xs font-semibold uppercase tracking-widest text-gold-ink">
            Our teachers
          </p>
          <h2
            id="scholars-heading"
            className="font-display text-4xl font-semibold"
          >
            Learn From Distinguished Scholars
          </h2>
        </div>

        {scholars.length === 0 ? (
          <div className="py-12 text-center text-muted-foreground">
            <GraduationCap
              className="mx-auto mb-3 h-10 w-10 opacity-30"
              aria-hidden="true"
            />
            <p className="text-sm">No featured scholars yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {scholars.map((scholar, i) => (
              <div
                key={scholar.id}
                className="animate-fade-up text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-gold/30 bg-primary/5">
                  {scholar.avatarUrl ? (
                    <Image
                      src={scholar.avatarUrl}
                      alt={`Portrait of ${scholar.fullName}`}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full items-center justify-center text-2xl font-bold text-primary/30"
                      aria-hidden="true"
                    >
                      {scholar.fullName[0]}
                    </div>
                  )}
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {scholar.fullName}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold-ink">
                  {scholar.specialization}
                </p>
                {scholar.bio && (
                  <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">
                    {scholar.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
