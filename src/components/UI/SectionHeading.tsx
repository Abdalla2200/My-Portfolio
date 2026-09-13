export default function SectionHeading({ title }: { title: string }) {
  return (
    <p className="mb-2 text-xl font-medium uppercase tracking-wider text-accent">
      {title}
    </p>
  );
}
