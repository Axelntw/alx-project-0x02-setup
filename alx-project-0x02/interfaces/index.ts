export interface LayoutProps {
  children: React.ReactNode;
}

export interface MetaProps {
  title: string;
  description?: string;
  keywords?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}
