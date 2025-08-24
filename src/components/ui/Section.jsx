import Container from "./Container";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <Container>
        {(title || subtitle) && (
          <div className="mb-10 sm:mb-14 text-center">
            {subtitle && (
              <p className="uppercase tracking-widest text-xs text-neutral-500 mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
