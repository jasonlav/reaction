type Props = {
  legalCopy: string;
  legalLinks: { title: string; url: string }[];
};

export default function Footer({ legalCopy, legalLinks }: Props) {
  return (
    <footer>
      <ul>
        {legalLinks.map((link) => (
          <li key={link.url}>
            <small>
              <a href={link.url}>{link.title}</a>
            </small>
          </li>
        ))}
      </ul>
      <p>
        <small>{legalCopy}</small>
      </p>
    </footer>
  );
}
