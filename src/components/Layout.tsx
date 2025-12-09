import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
  fullWidth?: boolean;
}

// Standard responsive padding: 16px mobile, 24px sm, 32px md, 48px lg, 64px xl
const STANDARD_PADDING = 'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16';

export default function Layout({ children, className = '', noPadding = false, fullWidth = false }: LayoutProps) {
  const paddingClasses = noPadding ? '' : STANDARD_PADDING;
  const widthClasses = fullWidth ? 'w-full' : 'w-full max-w-7xl mx-auto';
  
  return (
    <div className={`${widthClasses} ${paddingClasses} ${className}`}>
      {children}
    </div>
  );
}

// Export the standard padding for use in other components
export const standardPadding = STANDARD_PADDING;
