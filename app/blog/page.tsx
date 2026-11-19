import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { posts } from "./posts";

export const metadata = {
  title: "Journal — Auranza®",
  description: "Practical thinking on brand strategy, search, digital experiences and meaningful business growth from Auranza.",
};

export default function JournalPage() {
  return <main className="inner-page journal-page">
    <header className="site-header"><nav className="nav shell"><Link className="wordmark" href="/">auranza<span>®</span></Link><div className="nav-center"><Link href="/work">Work</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div><Link className="nav-contact" href="/contact">Start a project <ArrowUpRight size={15}/></Link><Link className="mobile-contact" href="/contact">Let’s talk ↗</Link></nav></header>
    <section className="inner-hero shell journal-hero"><p className="eyebrow">[ NOTES FOR WHAT’S NEXT ]</p><h1>Ideas worth<br/><em>thinking about.</em></h1><div className="inner-hero-aside"><p>Practical perspectives on building clearer brands, stronger digital experiences and more thoughtful growth.</p></div></section>
    <section className="journal-list"><div className="shell"><div className="journal-list-head"><span className="side-label">[ THE AURANZA JOURNAL ]</span><span className="journal-count">01 — 0{posts.length} / ARTICLES</span></div><div className="journal-grid">{posts.map((post,index)=><article className="journal-card" key={post.slug}><div className={`journal-art journal-art-${index+1}`}><span>{post.category}</span><strong>{index===0?"THINK.":index===1?"BE FOUND.":"MAKE IT CLEAR."}</strong><small>AURANZA / FIELD NOTES</small></div><div className="journal-card-meta"><span>{post.category}</span><span>{post.readTime}</span></div><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p><Link className="journal-read" href={`/blog/${post.slug}`}>Read article <ArrowUpRight size={15}/></Link></article>)}</div></div></section>
    <section className="inner-cta"><div className="shell"><p className="eyebrow">GOOD IDEAS START SOMEWHERE.</p><h2>Have one<br/><em>of your own?</em></h2><Link className="contact-button" href="/contact">Start a conversation <ArrowUpRight size={18}/></Link></div></section>
    <footer className="footer"><div className="shell footer-top"><Link className="wordmark" href="/">auranza<span>®</span></Link><p>Independent by nature.<br/>Intentional by design.</p><div className="footer-nav"><Link href="/work">Work</Link><Link href="/blog">Journal</Link><Link href="/services">Services</Link><Link href="/contact">Contact</Link></div><Link className="back-top" href="/">BACK HOME ↑</Link></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} AURANZA STUDIO</span><span>MADE WITH INTENTION.</span><span><Link href="/privacy-policy">PRIVACY</Link> · <Link href="/terms">TERMS</Link></span></div></footer>
  </main>;
}
