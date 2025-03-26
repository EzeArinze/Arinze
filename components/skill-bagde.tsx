interface SkillBadgeProps {
  name: string;
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <div className="bg-background border rounded-lg p-4 flex items-center justify-center text-center h-24">
      <div>
        <div className="text-2xl mb-1">{getIconForSkill(name)}</div>
        <div className="font-medium">{name}</div>
      </div>
    </div>
  );
}

function getIconForSkill(skill: string): string {
  const icons: Record<string, string> = {
    React: "⚛️",
    "Next.js": "▲",
    TypeScript: "TS",
    JavaScript: "JS",
    "Tailwind CSS": "🌊",
    Supabase: "⚡",
    MongoDB: "🍃",
    "Auth.js": "🔐",
    "Better Auth": "🔒",
    CMS: "📝",
    Git: "🔄",
    "REST API": "🌐",
  };

  return icons[skill] || "🔧";
}
