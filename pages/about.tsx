const about = ({
  title,
  author,
  preview,
}: {
  title: string;
  author: string;
  preview: string;
}) => (
  <div>
    <h3>{title}</h3>
    <h2>{preview}</h2>
    <p>By {author}</p>
  </div>
);

export default about;
