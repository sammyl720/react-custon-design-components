type Theme = {
  color?: color,
  size?: size
};

type color = 'primary' | 'secondary'| 'success' | 'warning' | 'danger' | 'classic'
type size = 'sm' | 'md' | 'lg' | 'xl'
export type { Theme, color, size }