import { Button } from '@fluentui/react-button';
export function ButtonDefault({
  className,
  title,
  children,
  href
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  return (
    <Button>Hello</Button>
  );
}
