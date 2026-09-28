import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { TeamMember } from "@/dummy-data/about-data";

// Checked at build time so a missing photo falls back to initials, not a broken image.
function photoExists(src?: string): src is string {
  return !!src && fs.existsSync(path.join(process.cwd(), "public", src));
}

interface TeamAvatarProps {
  member: TeamMember;
  /** Tailwind size + text classes, e.g. "h-24 w-24 text-2xl". */
  className: string;
  sizes: string;
  priority?: boolean;
}

export default function TeamAvatar({
  member,
  className,
  sizes,
  priority,
}: TeamAvatarProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-full bg-gradient-primary font-semibold text-primary-foreground ${className}`}
    >
      {photoExists(member.image) ? (
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-[50%_20%]"
        />
      ) : (
        member.initials
      )}
    </div>
  );
}
