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

export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; content: string }) => void;
}

export interface Post {
  id: string;
  title: string;
  content: string;
}
