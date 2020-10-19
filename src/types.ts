type Theme = {
  color?: color,
  size?: size
};

type color = 'primary' | 'secondary'| 'success' | 'warning' | 'danger'
type size = 'sm' | 'md' | 'lg'
export type { Theme, color, size }