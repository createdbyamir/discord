function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <h1>About Nexa</h1>
        <p>
          Nexa is a powerful Discord bot designed to simplify server management and boost community engagement.
          With advanced moderation, fun interactive commands, and seamless integrations, Nexa helps you
          create a safe and thriving environment for your members.
        </p>
        <p>
          Built with a focus on reliability, customization, and user experience, Nexa evolves with your
          server’s needs — making it the ultimate assistant for Discord communities of all sizes.
        </p>
        <div className="features-list">
          <div className="feature-item">
            <h2>Reliable Moderation</h2>
            <p>Automate server rules and keep your community safe with easy-to-configure filters and logs.</p>
          </div>
          <div className="feature-item">
            <h2>Engaging Experience</h2>
            <p>From games to social features, keep your members entertained and connected.</p>
          </div>
          <div className="feature-item">
            <h2>Seamless Integration</h2>
            <p>Connect Nexa effortlessly with popular platforms and tools to extend functionality.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
