import type { ReactNode } from 'react';

interface CtaButtonProps {
  children: ReactNode;
  href?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  variant?: 'hero' | 'join';
  className?: string;
}

const variantClasses: Record<NonNullable<CtaButtonProps['variant']>, string> = {
  hero: 'bg-gradient-cta-hero shadow-cta-hero rounded-cta px-[21.08px] py-[12.3px] text-3xl leading-[18px] [-webkit-text-stroke:0.62px_#32D769] [text-shadow:0px_0.88px_0px_#006B11,0px_1.76px_3.51px_rgba(0,107,17,0.4)]',
  join: 'bg-gradient-cta-join shadow-cta-join rounded-cta-sm px-6 py-3 text-base sm:text-lg [text-shadow:0px_1px_0px_#006B11,0px_2px_4px_rgba(0,107,17,0.4)]',
};

export default function CtaButton({
  children,
  href,
  type = 'button',
  onClick,
  variant = 'hero',
  className = '',
}: CtaButtonProps) {
  const classes = `inline-flex items-center justify-center gap-[7.03px] font-stolzl font-black text-white transition-transform hover:scale-[1.03] active:scale-[0.98] ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
