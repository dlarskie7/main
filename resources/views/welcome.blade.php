@extends('layouts.app')

@section('content')
<main class="portfolio-shell" id="top">
    <nav class="portfolio-nav" aria-label="Primary navigation">
        <a class="brand-mark" href="#top" aria-label="Dlar portfolio home"><span class="brand-dot"></span>DLAR<span class="brand-muted">/DEV</span></a>
        <div class="nav-links">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
        </div>
        <a class="status-pill" href="#contact"><span></span> Available for select work</a>
    </nav>

    <section class="hero-section" aria-labelledby="hero-title">
        <div class="hero-copy">
            <p class="eyebrow"><span class="eyebrow-line"></span> Full-stack developer / Elementor expert</p>
            <h1 id="hero-title">Building digital<br><em>systems that think</em><span class="accent-mark">.</span></h1>
            <p class="hero-description">I turn ambitious ideas into fast, thoughtful web experiences — from custom Shopify builds to conversion-focused WordPress systems.</p>
            <div class="hero-actions">
                <a class="button button-primary" href="#work">Explore selected work <span aria-hidden="true">↘</span></a>
                <a class="text-link" href="#contact">Let's work together <span aria-hidden="true">→</span></a>
            </div>
        </div>
        <div class="hero-visual" aria-label="Abstract animated system visualization" role="img">
            <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="orbit orbit-three"></div>
            <div class="core"><span>AI</span><small>READY</small></div>
            <div class="signal signal-a">01 / BUILD</div><div class="signal signal-b">02 / REFINE</div><div class="signal signal-c">03 / LAUNCH</div>
        </div>
    </section>

    <section class="signal-strip" aria-label="Capabilities">
        <span>01 — Strategy</span><span>02 — Full-stack builds</span><span>03 — Intelligent interfaces</span><span>04 — Growth-ready systems</span>
    </section>

    <section class="work-section section-wrap" id="work" aria-labelledby="work-title">
        <div class="section-heading"><div><p class="eyebrow">Selected work</p><h2 id="work-title">Built for momentum.</h2></div><p class="section-note">A focused collection of commerce and digital experiences designed to move businesses forward.</p></div>
        <div class="project-grid">
            <a class="project-card project-featured" href="https://madalinacaminschi.com" target="_blank" rel="noreferrer"><div class="project-art art-shopify"><span class="art-label">SHOPIFY / 01</span><div class="art-window"><i></i><i></i><i></i><strong>madalina<br>caminschi<span>.com</span></strong><small>custom commerce experience</small></div></div><div class="project-meta"><div><h3>Madalinacaminschi.com</h3><p>Custom Shopify development</p></div><span class="project-arrow">↗</span></div></a>
            <a class="project-card" href="https://lubar.it" target="_blank" rel="noreferrer"><div class="project-art art-lubar"><span class="art-label">SHOPIFY / 02</span><div class="art-type">LUBAR<span>.IT</span></div><div class="art-grid"></div></div><div class="project-meta"><div><h3>Lubar.it</h3><p>Custom Shopify development</p></div><span class="project-arrow">↗</span></div></a>
            <a class="project-card" href="https://rigopest.com" target="_blank" rel="noreferrer"><div class="project-art art-rigo"><span class="art-label">ELEMENTOR / 01</span><div class="art-badge">RIGO<br><span>PEST CONTROL</span></div><div class="art-swoop"></div></div><div class="project-meta"><div><h3>Rigopest.com</h3><p>WordPress / Elementor</p></div><span class="project-arrow">↗</span></div></a>
            <a class="project-card" href="https://brandleypestcontrol.com" target="_blank" rel="noreferrer"><div class="project-art art-brandle"><span class="art-label">ELEMENTOR / 02</span><div class="art-type">BRANDLEY<br><span>PEST CONTROL</span></div><div class="art-cross">+</div></div><div class="project-meta"><div><h3>Brandleypestcontrol.com</h3><p>WordPress / Elementor</p></div><span class="project-arrow">↗</span></div></a>
            <a class="project-card" href="https://cleardefensepest.com" target="_blank" rel="noreferrer"><div class="project-art art-clear"><span class="art-label">ELEMENTOR / 03</span><div class="art-type">CLEAR<span>DEFENSE</span></div><div class="art-wave"></div></div><div class="project-meta"><div><h3>Cleardefensepest.com</h3><p>WordPress / Elementor</p></div><span class="project-arrow">↗</span></div></a>
        </div>
    </section>

    <section class="experience-section section-wrap" id="experience" aria-labelledby="experience-title"><div class="section-heading"><div><p class="eyebrow">Current chapter</p><h2 id="experience-title">Experience, in motion.</h2></div><span class="experience-count">02.01 years</span></div><div class="experience-row"><div class="experience-date">2024 — now</div><div><h3>Mid Full-Stack Developer / Elementor Expert</h3><p>Creating end-to-end web products across commerce, content, and service businesses. I bridge product thinking with hands-on implementation — building clean foundations, expressive frontends, and systems that are easy to grow.</p></div><div class="experience-tags"><span>Shopify</span><span>WordPress</span><span>Elementor</span><span>Full-stack</span></div></div></section>

    <section class="contact-section section-wrap" id="contact"><p class="eyebrow">Have a project in mind?</p><h2>Let's make the<br><em>next version</em> useful.</h2><a class="button button-primary" href="mailto:hello@dlarskie7.com">Start a conversation <span aria-hidden="true">↗</span></a></section>
    <footer class="portfolio-footer"><span>© {{ date('Y') }} DLAR / DEV</span><span>Built with intention.</span><a href="#top">Back to top ↑</a></footer>
</main>

<script src="{{ asset('assets/front/js/portfolio.js') }}"></script>
@endsection
