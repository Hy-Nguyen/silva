import * as LucideIcons from 'lucide-react'

type IconComponent = React.ComponentType<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }>

// Resolve a lucide icon by string name, with a fallback
export function getIcon(name: string, fallback: IconComponent = LucideIcons.Sparkles): IconComponent {
  const icons = LucideIcons as unknown as Record<string, IconComponent>
  return icons[name] ?? fallback
}
