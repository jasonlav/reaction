type Props = {
  title: string;
  tags?: string[];
  description: string;
  className?: string;
};

export default function Feature({
  title,
  tags,
  description,
  className,
}: Props) {
  return (
    <article className={className}>
      <h3>{title}</h3>
      <p>{description}</p>
      {tags && (
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
