export default function CoursesHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-gold/10" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            Learn with purpose
          </div>

          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Explore Our Courses
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            Build your knowledge of the Quran, Tajweed, Arabic, Fiqh, and
            Islamic history with structured courses and qualified teachers.
          </p>
        </div>
      </div>
    </section>
  );
}
