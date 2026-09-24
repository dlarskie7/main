import Image from "next/image"

const projects = [
  { label: "SHOPIFY / 01", name: "Madalinacaminschi.com", type: "Custom Shopify development", href: "https://madalinacaminschi.com", art: "shopify" },
  { label: "SHOPIFY / 02", name: "Lubar.it", type: "Custom Shopify development", href: "https://lubar.it", art: "lubar" },
  { label: "ELEMENTOR / 01", name: "Rigopest.com", type: "WordPress / Elementor", href: "https://rigopest.com", art: "rigo" },
  { label: "ELEMENTOR / 02", name: "Brandleypestcontrol.com", type: "WordPress / Elementor", href: "https://brandleypestcontrol.com", art: "brandle" },
  { label: "ELEMENTOR / 03", name: "Cleardefensepest.com", type: "WordPress / Elementor", href: "https://cleardefensepest.com", art: "clear" },
]

const skills = ["JavaScript", "PHP", "HTML5", "CSS3", "Laravel", "MySQL", "Next.js", "TypeScript", "Shopify", "WordPress", "Elementor", "AI-assisted development", "Agentic engineering", "Loop engineering"]

export default function Home() {
  return (
    <main className="portfolio-shell" id="top">
      <nav className="portfolio-nav" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Dlar portfolio home"><span className="brand-dot" />DLAR<span className="brand-muted">/DEV</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
        <a className="status-pill" href="#contact"><span />Available for select work</a>
      </nav>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Freelance developer / Philippines</p>
          <h1 id="hero-title">I build digital<br /><em>systems that move.</em><span className="accent-mark">.</span></h1>
          <p className="hero-description">I&apos;m a freelance Mid Full-Stack Developer and Elementor Expert from the Philippines, combining thoughtful interfaces, reliable systems, and AI-assisted engineering to ship useful work.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore selected work <span aria-hidden="true">↘</span></a><a className="text-link" href="#contact">Let&apos;s work together <span aria-hidden="true">→</span></a></div>
        </div>
        <div className="hero-visual" aria-label="Developer profile and agentic engineering system" role="img">
          <div className="visual-grid" /><div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="profile-card"><div className="profile-image"><Image src="/assets/images/profile-icon.png" alt="Developer profile illustration" width={160} height={160} priority /></div><div><span className="profile-kicker">PH / 001</span><strong>AI-assisted builder</strong><small>Agentic + loop engineering</small></div></div>
          <div className="core"><span>AI</span><small>READY</small></div><div className="signal signal-a">01 / BUILD</div><div className="signal signal-b">02 / REFINE</div><div className="signal signal-c">03 / LAUNCH</div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Capabilities"><span>01 — Strategy</span><span>02 — Full-stack builds</span><span>03 — AI-assisted loops</span><span>04 — Growth-ready systems</span></section>

      <section className="work-section section-wrap" id="work" aria-labelledby="work-title"><div className="section-heading"><div><p className="eyebrow">Selected work</p><h2 id="work-title">Built for momentum.</h2></div><p className="section-note">Commerce and digital experiences designed to move businesses forward.</p></div><div className="project-grid">{projects.map((project) => <a className={`project-card project-${project.art}`} href={project.href} target="_blank" rel="noreferrer" key={project.name}><div className={`project-art art-${project.art}`}><span className="art-label">{project.label}</span><div className="art-window"><i /><i /><i /><strong>{project.name}</strong><small>{project.type.toLowerCase()}</small></div></div><div className="project-meta"><div><h3>{project.name}</h3><p>{project.type}</p></div><span className="project-arrow">↗</span></div></a>)}</div></section>

      <section className="skills-section section-wrap" id="skills" aria-labelledby="skills-title"><div className="section-heading"><div><p className="eyebrow">The toolkit</p><h2 id="skills-title">A practical stack.<br /><em>An adaptive mind.</em></h2></div><p className="section-note">I use familiar technology with an AI-assisted workflow to explore, build, test, and improve in tight loops.</p></div><div className="skills-cloud">{skills.map((skill, index) => <span className={index > 8 ? "skill-highlight" : ""} key={skill}>{skill}</span>)}</div></section>

      <section className="experience-section section-wrap" id="experience" aria-labelledby="experience-title"><div className="section-heading"><div><p className="eyebrow">Current chapter</p><h2 id="experience-title">Experience, in motion.</h2></div><span className="experience-count">02.01 years</span></div><div className="experience-row"><div className="experience-date">2024 — now</div><div><h3>Mid Full-Stack Developer / Elementor Expert</h3><p>Freelance developer from the Philippines creating end-to-end web products across commerce, content, and service businesses. I bridge product thinking with hands-on implementation, using agentic engineering and loop engineering to ship, learn, and iterate.</p></div><div className="experience-tags"><span>Shopify</span><span>WordPress</span><span>Elementor</span><span>Agentic AI</span></div></div></section>
      <section className="contact-section section-wrap" id="contact"><p className="eyebrow">Have a project in mind?</p><h2>Let&apos;s make the<br /><em>next version</em> useful.</h2><a className="button button-primary" href="mailto:hello@dlarskie7.com">Start a conversation <span aria-hidden="true">↗</span></a></section>
      <footer className="portfolio-footer"><span>© {new Date().getFullYear()} DLAR / DEV · PHILIPPINES</span><span>Built with intention.</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
