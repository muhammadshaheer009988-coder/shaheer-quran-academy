import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-700 text-cream-50 shadow-sm hover:bg-brand-800 focus-visible:outline-brand-700",
  secondary:
    "bg-cream-50 text-brand-800 ring-1 ring-brand-800/15 hover:bg-cream-100 focus-visible:outline-brand-700",
  ghost:
    "text-brand-800 hover:bg-brand-800/5 focus-visible:outline-brand-700",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: Props) {
  const classes = `inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
