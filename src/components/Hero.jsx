function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tagline">Justice. Resources. Access.</p>

        <h1>Justice Access America</h1>

        <p className="hero-description">
          Helping people understand their rights, find legal resources,
          and access information to navigate the justice system.
        </p>

        <div className="hero-buttons">
          <a href="#resources" className="btn btn-primary">
            Find Resources
          </a>

          <a href="#know-your-rights" className="btn btn-secondary">
            Know Your Rights
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
