import clsx from 'clsx';
import Link from 'next/link';
export async function HoverLink({
  href,
  text,
  className
}: {
  href: string;
  text: string;
  className: string;
}) {
  return (
    <Link href={href} className={clsx('group relative overflow-hidden ', className)}>
      <span className="invisible">{text}</span>
      <span
        className="absolute left-0 top-0 transition-transform duration-500 ease-in-out hover:duration-300 
      group-hover:-translate-y-full
      group-focus:-translate-y-full
      "
      >
        {text}
      </span>
      <span
        className="absolute left-0 top-0 translate-y-full transition-transform duration-500 ease-in-out 
      hover:duration-300 focus:duration-300
      group-hover:translate-y-0 group-focus:translate-y-0
      "
      >
        {text}
      </span>
    </Link>
  );
}
