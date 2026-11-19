import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Selected Work — Auranza®",
  description: "Explore Auranza's creative direction across brand thinking, digital campaigns and web experiences. Concept explorations, clearly labelled.",
};

const explorations = [
  {
    number: "01",
    category: "BRAND DIRECTION",
    title: "A clearer point of view.",
    description: "A concept identity exploration showing how a focused positioning, confident typography and a flexible visual system can give a brand a more recognisable presence.",
    note: "CONCEPT EXPLORATION",
    visual: "work-visual-brand",
    mark: "A—",
    detail: "POSITIONING · IDENTITY · ART DIRECTION",
  },
  {
    number: "02",
    category: "CAMPAIGN THINKING",
    title: "Make every message matter.",
    description: "A campaign concept built around one strong idea, with a modular creative direction designed to adapt across social placements and paid media formats.",
    note: "CONCEPT EXPLORATION",
    visual: "work-visual-campaign",
    mark: "MOVE.",
    detail: "CAMPAIGN IDEA · SOCIAL · PAID CREATIVE",
  },
  {
    number: "03",
    category: "WEB EXPERIENCE",
    title: "A better kind of first impression.",
    description: "A digital experience concept focused on clear hierarchy, purposeful interaction and a considered path from first visit to meaningful action.",
    note: "CONCEPT EXPLORATION",
    visual: "work-visual-web",
    mark: "NEXT /",
    detail: "UX DIRECTION · WEB DESIGN · EXPERIENCE",
  },
];

export default function WorkPage() {
  return (
    <main className="inner-page">
      <header className="site-header"><nav className="nav shell">
        <Link className="wordmark" href="/">auranza<span>®</span></Link>
        <div className="nav-center"><Link href="/work">Work</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
        <Link className="nav-contact" href="/contact">Start a project <ArrowUpRight size={15}/></Link>
        <Link className="mobile-contact" href="/contact">Let’s talk ↗</Link>
      </nav></header>

      <section className="inner-hero shell work-page-hero">
        <p className="eyebrow">[ IDEAS IN PROGRESS. POSSIBILITIES IN VIEW. ]</p>
        <h1>Good thinking.<br/><em>Made visible.</em></h1>
        <div className="inner-hero-aside"><p>A look at the kind of strategic and creative thinking we bring to brand, campaign and digital challenges.</p></div>
      </section>

      <section className="work-showcase">
        <div className="shell">
          <div className="work-showcase-intro"><span className="side-label">[ SELECTED EXPLORATIONS ]</span><p>These are concept explorations created to demonstrate our approach and creative direction. They are not commissioned client projects or claims of client results.</p></div>
          <div className="work-projects">
            {explorations.map((item) => (
              <article className="work-project" key={item.number}>
                <div className={`work-project-visual ${item.visual}`}>
                  <span className="work-project-index">{item.number} / AURANZA</span>
                  <span className="work-project-mark">{item.mark}</span>
                  <span className="work-project-note">{item.note}</span>
                  <span className="work-project-orbit" />
                </div>
                <div className="work-project-copy">
                  <div><span className="eyebrow">{item.category}</span><h2>{item.title}</h2><p>{item.description}</p></div>
                  <span className="work-project-detail">{item.detail}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-cta"><div className="shell">
        <p className="eyebrow">YOUR CHALLENGE COULD BE NEXT.</p>
        <h2>Let’s make<br/><em>something matter.</em></h2>
        <Link className="contact-button" href="/contact">Talk about a project <ArrowUpRight size={18}/></Link>
      </div></section>

      <footer className="footer"><div className="shell footer-top">
        <Link className="wordmark" href="/">auranza<span>®</span></Link><p>Independent by nature.<br/>Intentional by design.</p>
        <div className="footer-nav"><Link href="/work">Work</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
        <Link className="back-top" href="/">BACK HOME ↑</Link>
      </div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} AURANZA STUDIO</span><span>MADE WITH INTENTION.</span><span><Link href="/privacy-policy">PRIVACY</Link> · <Link href="/terms">TERMS</Link></span></div></footer>
    </main>
  );
}
