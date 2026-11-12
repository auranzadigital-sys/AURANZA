import { ArrowDownRight, ArrowUpRight, ArrowRight, Asterisk, MoveUpRight } from "lucide-react";

const services = [
  { n: "01", title: "Brand & digital strategy", copy: "A sharper point of view, a clearer position, and a plan built around where you want to go.", tags: "POSITIONING · STRATEGY · DIRECTION" },
  { n: "02", title: "Performance marketing", copy: "Paid media with purpose. We connect creative, audience insight and optimisation to make every spend work harder.", tags: "META ADS · GOOGLE ADS · OPTIMISATION" },
  { n: "03", title: "Search & organic growth", copy: "Build visibility that compounds with technical foundations, useful content and search intent.", tags: "SEO · CONTENT · SEARCH STRATEGY" },
  { n: "04", title: "Social & creative", copy: "A recognisable voice and a consistent stream of ideas worth stopping for.", tags: "SOCIAL · CREATIVE · CONTENT" },
  { n: "05", title: "Web experiences", copy: "Distinctive, considered websites that make the next step feel effortless.", tags: "WEB DESIGN · DEVELOPMENT · CRO" },
];

const principles = [
  ["01", "Curiosity before assumptions", "We ask better questions before reaching for familiar answers."],
  ["02", "Clarity over complexity", "A focused idea, expressed well, beats a dozen disconnected tactics."],
  ["03", "Progress you can understand", "We make the work visible, the thinking clear and the next move intentional."],
];

export default function Home() {
  return <main>
    <header className="site-header"><nav className="nav shell"><a className="wordmark" href="#" aria-label="Auranza home">auranza<span>®</span></a><div className="nav-center"><a href="#work">What we do</a><a href="#thinking">Our thinking</a><a href="#about">About</a></div><a className="nav-contact" href="#contact">Start a project <MoveUpRight size={15}/></a><a className="mobile-contact" href="#contact">Let’s talk ↗</a></nav></header>

    <section className="hero shell">
      <div className="hero-meta"><span><i/> INDEPENDENT DIGITAL STUDIO</span><span>STRATEGY / CREATIVE / GROWTH</span></div>
      <div className="hero-grid">
        <div className="hero-copy"><p className="overline">GOOD IDEAS DESERVE TO GO FURTHER.</p><h1>Make<br/>meaningful<br/><em>moves.</em></h1><div className="hero-bottom"><p>We bring strategy, creativity and digital performance together to help ambitious brands move forward.</p><a className="round-link" href="#work" aria-label="Explore our services"><ArrowDownRight size={22}/></a></div></div>
        <div className="hero-visual"><div className="visual-top"><span>AZ—001</span><span>THE ART OF WHAT’S NEXT</span></div><div className="sun-disc"/><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="visual-cross">✳</div><div className="visual-word">A<span>.</span></div><div className="visual-caption">THINK CLEAR.<br/>MOVE DIFFERENT.</div><div className="visual-index">01 / 05</div></div>
      </div>
      <div className="hero-foot"><span>SCROLL TO EXPLORE <ArrowDownRight size={13}/></span><span>BASED ON CURIOSITY. BUILT FOR IMPACT.</span></div>
    </section>

    <section className="marquee"><div className="marquee-track">{Array.from({length:2},(_,i)=><div className="marquee-set" key={i}><span>THINK</span><Asterisk/><span>CREATE</span><Asterisk/><span>CONNECT</span><Asterisk/><span>GROW</span><Asterisk/></div>)}</div></section>

    <section className="intro shell section" id="about"><div className="side-label">[ A LITTLE ABOUT US ]</div><div className="intro-main"><p className="eyebrow">NOT ANOTHER AGENCY PLAYBOOK.</p><h2>The digital world<br/>doesn’t need more<br/><em>noise. It needs</em><br/><em>better ideas.</em></h2></div><div className="intro-aside"><span className="asterisk">✳</span><p>Auranza is an independent digital growth agency for brands ready to think beyond the obvious.</p><p>We connect sharp strategy with thoughtful creative and focused execution — making the complicated feel clear, and the next step feel possible.</p><a className="inline-link" href="#thinking">A little more about how we think <ArrowUpRight size={16}/></a></div></section>

    <section className="work section" id="work"><div className="shell"><div className="work-heading"><div><div className="side-label">[ WHAT WE BRING TO THE TABLE ]</div><h2>One direction.<br/><em>Many ways forward.</em></h2></div><p>From the first spark to the finer details, we bring the right disciplines together around the work that matters.</p></div><div className="service-list">{services.map(s=><article className="service" key={s.n}><span className="service-n">{s.n}</span><h3>{s.title}</h3><div className="service-detail"><p>{s.copy}</p><span>{s.tags}</span></div><a href="#contact" aria-label={`Discuss ${s.title}`}><ArrowUpRight/></a></article>)}</div><div className="work-note"><span>GOOD WORK STARTS WITH A GOOD QUESTION.</span><span>05 DISCIPLINES <Asterisk size={13}/></span></div></div></section>

    <section className="statement"><div className="shell statement-inner"><span className="side-label">[ OUR POINT OF VIEW ]</span><p>Less, but<br/><em>better.</em></p><div className="statement-bottom"><span>CLARITY IS A CREATIVE ADVANTAGE.</span><span>AZ® — EST. FOR WHAT’S NEXT</span></div><div className="statement-mark">✳</div></div></section>

    <section className="thinking shell section" id="thinking"><div className="work-heading"><div><div className="side-label">[ HOW WE APPROACH THE WORK ]</div><h2>Good thinking.<br/><em>Thoughtful doing.</em></h2></div><p>There’s no secret formula. Just a considered process, open collaboration and a commitment to making each move count.</p></div><div className="principles">{principles.map(([n,t,d])=><article key={n}><span>{n} / PRINCIPLE</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section className="contact" id="contact"><div className="shell contact-inner"><div className="side-label">[ HAVE SOMETHING IN MIND? ]</div><p className="contact-kicker">THE NEXT MOVE IS YOURS.</p><h2>Let’s make<br/><em>it matter.</em></h2><div className="contact-bottom"><p>Have a challenge, an idea, or just a feeling there’s a better way? We’d love to hear about it.</p><a href="mailto:hello@auranza.com?subject=Starting%20a%20conversation%20with%20Auranza" className="contact-button">Start a conversation <ArrowUpRight size={19}/></a></div><span className="contact-glyph">a.</span></div></section>

    <footer className="footer"><div className="shell footer-top"><a className="wordmark" href="#">auranza<span>®</span></a><p>Independent by nature.<br/>Intentional by design.</p><div className="footer-nav"><a href="#work">What we do</a><a href="#thinking">Our thinking</a><a href="#contact">Contact</a></div><a className="back-top" href="#">BACK TO TOP ↑</a></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} AURANZA STUDIO</span><span>MADE WITH INTENTION.</span><span>STRATEGY · CREATIVE · GROWTH</span></div></footer>
  </main>;
}
