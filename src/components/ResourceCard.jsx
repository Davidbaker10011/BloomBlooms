function ResourceCard({ title, description, linkText = "Learn More", href = "#" }) {
  return (
    <article className="resource-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <a href={href} className="resource-link">
        {linkText}
      </a>
    </article>
  );
}

export default ResourceCard;
