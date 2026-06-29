import Link from "next/link";
import { ArrowRight } from "lucide-react";
import content from "@/lib/content.json";

export function Announcement() {
  const { text, link } = content.announcement;

  return (
    <div className="bg-secondary text-secondary-foreground px-4 py-2 text-sm font-medium text-center flex items-center justify-center gap-2 hover:bg-secondary/80 transition-colors border-b border-border">
      <Link href={link} className="flex items-center gap-2">
        <span>{text.replace(" →", "")}</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
