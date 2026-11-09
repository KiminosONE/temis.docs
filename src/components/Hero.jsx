export default function Hero({ eyebrow = "Temis", title, description, updated }) {
  return (
    <section className="hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="hero-copy">{description}</p>
      {updated && <p className="updated">{updated}</p>}
    </section>
  );
}
