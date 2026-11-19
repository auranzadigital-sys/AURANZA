import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { posts } from "../posts";

export function generateStaticParams() { return posts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) return { title: "Article not found — Auranza®" };
  return { title: `${post.title} — Auranza®`, description: post.excerpt };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) notFound();
  return <main className="inner-page article-page">
    <header className="site-header"><nav className="nav shell"><Link className="wordmark" href="/">auranza<span>®</span></Link><div className="nav-center"><Link href="/work">Work</Link><Link href="/blog">Journal</Link><Link href="/services">Services</Link><Link href="/contact">Contact</Link></div><Link className="nav-contact" href="/contact">Start a project <ArrowUpRight size={15}/></Link><Link className="mobile-contact" href="/contact">Let’s talk ↗</Link></nav></header>
    <article className="shell article-shell"><Link className="article-back" href="/blog"><ArrowLeft size={15}/> BACK TO JOURNAL</Link><div className="article-heading"><p className="eyebrow">{post.category} / {post.readTime}</p><h1>{post.title}</h1><p className="article-deck">{post.excerpt}</p><span className="article-date">{post.date} · AURANZA EDITORIAL</span></div><div className="article-cover"><span>AZ—JOURNAL</span><strong>{post.category==="BRAND STRATEGY"?"THINK.":post.category==="SEARCH & ORGANIC"?"BE FOUND.":"MAKE IT CLEAR."}</strong><span>IDEAS FOR WHAT’S NEXT.</span></div><div className="article-content"><p className="article-intro">{post.intro}</p>{post.sections.map(([heading,body],i)=><section key={heading}><span className="article-section-no">0{i+1} / NOTE</span><h2>{heading}</h2><p>{body}</p></section>)}<blockquote>{post.takeaway}</blockquote><div className="article-end"><span>END OF ARTICLE</span><Link href="/blog">Explore more notes <ArrowUpRight size={15}/></Link></div></div></article>
    <section className="inner-cta"><div className="shell"><p className="eyebrow">PUT GOOD THINKING INTO MOTION.</p><h2>Let’s make<br/><em>it matter.</em></h2><Link className="contact-button" href="/contact">Talk to Auranza <ArrowUpRight size={18}/></Link></div></section>
    <footer className="footer"><div className="shell footer-top"><Link className="wordmark" href="/">auranza<span>®</span></Link><p>Independent by nature.<br/>Intentional by design.</p><div className="footer-nav"><Link href="/work">Work</Link><Link href="/blog">Journal</Link><Link href="/services">Services</Link><Link href="/contact">Contact</Link></div><Link className="back-top" href="/">BACK HOME ↑</Link></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} AURANZA STUDIO</span><span>MADE WITH INTENTION.</span><span><Link href="/privacy-policy">PRIVACY</Link> · <Link href="/terms">TERMS</Link></span></div></footer>
  </main>;
}
