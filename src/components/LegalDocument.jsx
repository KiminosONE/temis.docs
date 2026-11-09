export default function LegalDocument({ contentsLabel, sections }) {
  return (
    <div className="legal-layout">
      <aside className="toc">
        <strong>{contentsLabel}</strong>
        <ol>
          {sections.map((section) => (
            <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>
          ))}
        </ol>
      </aside>
      <div className="legal-content">
        {sections.map((section, index) => (
          <section className="legal-section" id={section.id} key={section.id}>
            <h2>{index + 1}. {section.title}</h2>
            {section.content}
          </section>
        ))}
      </div>
    </div>
  );
}
