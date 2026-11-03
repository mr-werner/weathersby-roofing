import React, { useEffect, useState } from "react";
import {
  ArrowRight, Check, ChevronLeft, ChevronRight, CloudHail, ThumbsUp, ExternalLink, Hammer, Home, Layers,
  Mail, MapPin, Menu, Phone, ShieldCheck, Wind, Wrench, X, Building2, PaintRoller,
} from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";
import logo from "./assets/wr-logo.png";
import heroTile from "./assets/hero-tile.jpg";
import badgeOC from "./assets/badge-preferred-badge.png";
import badgeMalarkey from "./assets/badge-malarkey-logo.png";
import badgeGAF from "./assets/badge-gaf.png";
import badgeRCAT from "./assets/badge-rcat_logo.png";
import badgeCT from "./assets/badge-shingle-master.png";
import badgeBBB from "./assets/badge-bbb-logo.png";

const roofs = import.meta.glob("./assets/roof-*.jpg", { eager: true, import: "default" });
const ROOFS = Object.keys(roofs).sort().map((k) => roofs[k]);

const COMPANY = "Weathersby Roofing";
const ABBR = "wr";
const END_DATE = "2026-12-08T23:59:59-06:00";
const PHONE = "(325) 690-0995";
const PHONE_TEL = "+13256900995";
const EMAIL = "russell@weathersbyroofinginc.com";
const OWNER = "Russel Weathersby";
const ADDRESS = ["2310 Oak Street", "Abilene, TX 79602"];
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Weathersby+Roofing+2310+Oak+Street+Abilene+TX+79602";
const FACEBOOK = "https://www.facebook.com/Weathersby-Roofing-847718941947426/";
const BBB = "https://www.bbb.org/abilene/business-reviews/roofing-contractors/weathersby-roofing-in-tuscola-tx-21469";
const FOUNDED = 1973;
const YEARS = new Date().getFullYear() - FOUNDED;

const NAV = [
  ["Roofing", "#roofing"],
  ["Before you sign", "#before-you-sign"],
  ["Our roofs", "#our-roofs"],
  ["Credentials", "#credentials"],
  ["Free estimate", "#estimate"],
];

const SERVICES = [
  { icon: Layers, title: "Composition roofing", text: "Every type of composition shingle roof, installed to the manufacturer's spec." },
  { icon: Building2, title: "Metal roofs", text: "Metal roofs for homes and buildings across the Big Country." },
  { icon: Home, title: "Reroofing", text: "Tear-off and replacement when an old roof has given all it can." },
  { icon: Hammer, title: "Redecking", text: "Replacing soft or damaged decking so the new roof sits on solid ground." },
  { icon: Building2, title: "New construction", text: "Roofing for new homes, working alongside Big Country builders." },
  { icon: Wrench, title: "Patching & repair", text: "Patching leaks and storm damage before they reach the ceiling." },
  { icon: PaintRoller, title: "Roof coatings", text: "Coatings that seal and extend the life of the right kind of roof." },
  { icon: Wind, title: "Roof ventilation", text: "Ventilation that lets the attic breathe through a West Texas summer." },
];

const QUESTIONS = [
  ["How long have you been in business?", `Since ${FOUNDED}. That is ${YEARS} years of roofs in Abilene and the Big Country.`],
  ["Who owns your business, and for how long have they owned it?", `${OWNER} owns Weathersby Roofing, and you can email him directly at ${EMAIL}. Ask him how long he has run it; he will tell you.`],
  ["How local is your business?", `Our office is at ${ADDRESS[0]} in Abilene, and we are a member of the Big Country Home Builders Association.`],
  ["What past customers can I talk to?", "Start with the finished roofs on this page, then ask us for references near your street when we come out to estimate."],
  ["When would you be able to schedule my job?", `Call ${PHONE} for a free estimate. We will give you a start date before you sign anything.`],
  ["How long will my project take?", "It depends on the size of the roof, the material and the weather. Your written estimate tells you what to expect."],
  ["Do you have proper licensing and certification? Insurance?", "We hold manufacturer credentials from Owens Corning, GAF, Malarkey and CertainTeed, belong to the Roofing Contractors Association of Texas, and have been rated A+ by the BBB since 1993. Ask us for proof of insurance with your estimate."],
  ["Is a building permit required for my project and, if so, will you be pulling one?", "We will tell you whether your job needs a permit and who pulls it, in writing, before work starts."],
  ["Will you provide me written warranties both for your workmanship and the product you will be installing?", "Yes, ask for both in writing. As a certified installer we can explain which manufacturer warranty options come with your shingles."],
];

const BADGES = [
  { img: badgeOC, name: "Owens Corning", title: "Preferred Contractor", href: "https://www.owenscorning.com/roofing/contractors", w: 197, h: 60 },
  { img: badgeGAF, name: "GAF", title: "Certified Roofer", w: 186, h: 59 },
  { img: badgeMalarkey, name: "Malarkey", title: "Certified Residential Contractor", w: 60, h: 60 },
  { img: badgeCT, name: "CertainTeed", title: "Select ShingleMaster", w: 60, h: 60 },
  { img: badgeRCAT, name: "Roofing Contractors Assoc. of Texas", title: "Member", w: 187, h: 60 },
  { img: badgeBBB, name: "Better Business Bureau", title: "Rated A+ since 1993", href: BBB, w: 270, h: 103 },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="topline">
        <div className="wrap topline-in">
          <span>Serving Abilene &amp; the Big Country since {FOUNDED}</span>
          <span className="topline-right">Free estimates · <a href={`tel:${PHONE_TEL}`}>{PHONE}</a></span>
        </div>
      </div>
      <div className="wrap nav-row">
        <a href="#top" className="brand" aria-label="Weathersby Roofing home">
          <img src={logo} alt="Weathersby Roofing" width="294" height="35" />
        </a>
        <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          {NAV.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-call" href={`tel:${PHONE_TEL}`}><Phone size={16} /> {PHONE}</a>
        </nav>
        <button className="menu-btn" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Weathersby Roofing · Abilene, Texas</p>
          <h1>Roofs over the Big Country <span>since {FOUNDED}.</span></h1>
          <p className="lede">Today's roofing systems deserve a competent professional. Metal, composition and impact-resistant roofs, reroofs, repairs and new construction from a name Abilene has trusted for {YEARS} years.</p>
          <div className="hero-actions">
            <a className="btn btn-copper" href={`tel:${PHONE_TEL}`}><Phone size={18} /> Call {PHONE}</a>
            <a className="btn btn-line" href="#estimate">Request a free estimate <ArrowRight size={18} /></a>
          </div>
          <ul className="hero-proof">
            <li><ShieldCheck size={18} /> BBB rated A+ since 1993</li>
            <li><Home size={18} /> Member, Big Country Home Builders Association</li>
          </ul>
        </div>
        <div className="hero-visual">
          <div className="gable">
            <img src={heroTile} alt="Stone home with a clay tile roof in Abilene" width="1277" height="683" />
          </div>
          <div className="since-tag" aria-label={`In business since ${FOUNDED}`}>
            <small>Est.</small><strong>{FOUNDED}</strong><small>{YEARS} years</small>
          </div>
        </div>
      </div>
      <div className="shingle-edge" aria-hidden="true" />
    </section>
  );
}

function BadgeStrip() {
  return (
    <section className="badge-strip" aria-label="Certifications and memberships">
      <div className="wrap badge-row">
        {BADGES.map((b) => (
          <div className="badge-chip" key={b.name}>
            <img src={b.img} alt={`${b.name} ${b.title}`} width={b.w} height={b.h} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="roofing">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">All types of roofing</p>
          <h2>One crew for every layer of the roof.</h2>
          <p>From the deck to the ridge vent, whatever your roof needs, call one number.</p>
        </div>
        <div className="courses">
          {SERVICES.map(({ icon: Icon, title, text }, i) => (
            <article className="shingle" key={title} style={{ "--i": i }}>
              <Icon size={26} strokeWidth={1.7} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <aside className="hail-card">
          <CloudHail size={44} strokeWidth={1.5} />
          <div>
            <p className="eyebrow">UL 2218 impact-resistant products</p>
            <h3>A tougher roof may lower your insurance bill.</h3>
            <p>UL 2218 impact-resistant roofing products may qualify for substantial homeowner insurance discounts. Ask us which products fit your home, then ask your agent what they will take off your premium.</p>
          </div>
          <a className="btn btn-copper" href="#estimate">Ask about impact-resistant roofs <ArrowRight size={18} /></a>
        </aside>
      </div>
    </section>
  );
}

function BeforeYouSign() {
  const [openIdx, setOpenIdx] = useState(0);
  const [seen, setSeen] = useState(() => new Set([0]));
  function toggle(i) {
    setOpenIdx((cur) => (cur === i ? -1 : i));
    setSeen((prev) => new Set(prev).add(i));
  }
  return (
    <section className="sign" id="before-you-sign">
      <div className="wrap sign-grid">
        <div className="sign-intro">
          <p className="eyebrow">Before you sign anything</p>
          <h2>Questions you need to ask a roofing contractor <em>before</em> signing a contract.</h2>
          <p>Ask every roofer who bids your job these nine questions. Here is how Weathersby answers each one.</p>
          <div className="sign-meter" aria-live="polite">
            <div className="meter-bar"><span style={{ width: `${(seen.size / QUESTIONS.length) * 100}%` }} /></div>
            <small>{seen.size} of {QUESTIONS.length} answers read</small>
          </div>
          <a className="btn btn-copper" href={`tel:${PHONE_TEL}`}><Phone size={18} /> Ask us yourself: {PHONE}</a>
        </div>
        <ol className="contract">
          {QUESTIONS.map(([q, a], i) => (
            <li key={q} className={`${openIdx === i ? "is-open" : ""}${seen.has(i) ? " is-seen" : ""}`}>
              <button type="button" onClick={() => toggle(i)} aria-expanded={openIdx === i}>
                <span className="box" aria-hidden="true">{seen.has(i) && <Check size={16} strokeWidth={3} />}</span>
                <span className="qnum">{String(i + 1).padStart(2, "0")}</span>
                <span className="qtext">{q}</span>
              </button>
              {openIdx === i && <p className="answer"><strong>Weathersby:</strong> {a}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Gallery() {
  const [view, setView] = useState(-1);
  useEffect(() => {
    if (view < 0) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setView(-1);
      if (e.key === "ArrowRight") setView((v) => (v + 1) % ROOFS.length);
      if (e.key === "ArrowLeft") setView((v) => (v - 1 + ROOFS.length) % ROOFS.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [view]);
  return (
    <section className="gallery" id="our-roofs">
      <div className="wrap">
        <div className="sec-head sec-head-row">
          <div>
            <p className="eyebrow">Example projects</p>
            <h2>Roofs we've put on Abilene homes.</h2>
          </div>
          <p>Tile, architectural shingle and hip roofs on stone and brick homes around town. Tap a photo to see it full size.</p>
        </div>
        <div className="photo-grid">
          {ROOFS.map((src, i) => (
            <button type="button" className={`photo p${i}`} key={src} onClick={() => setView(i)} aria-label={`View example project ${i + 1}`}>
              <img src={src} alt={`Example roofing project ${i + 1} by Weathersby Roofing`} loading="lazy" />
            </button>
          ))}
        </div>
      </div>
      {view >= 0 && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Project photo" onClick={() => setView(-1)}>
          <button type="button" className="lb-close" aria-label="Close" onClick={() => setView(-1)}><X size={28} /></button>
          <button type="button" className="lb-nav lb-prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); setView((v) => (v - 1 + ROOFS.length) % ROOFS.length); }}><ChevronLeft size={32} /></button>
          <img src={ROOFS[view]} alt={`Example roofing project ${view + 1}`} onClick={(e) => e.stopPropagation()} />
          <button type="button" className="lb-nav lb-next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); setView((v) => (v + 1) % ROOFS.length); }}><ChevronRight size={32} /></button>
          <span className="lb-count">{view + 1} / {ROOFS.length}</span>
        </div>
      )}
    </section>
  );
}

function Credentials() {
  return (
    <section className="creds" id="credentials">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Credentials</p>
          <h2>Certified by the shingle makers. Rated A+ by the BBB since 1993.</h2>
        </div>
        <div className="cred-grid">
          {BADGES.map((b) => {
            const body = (
              <>
                <span className="cred-img"><img src={b.img} alt="" width={b.w} height={b.h} loading="lazy" /></span>
                <span className="cred-text"><strong>{b.title}</strong><small>{b.name}</small></span>
                {b.href && <ExternalLink size={16} className="cred-link" />}
              </>
            );
            return b.href
              ? <a className="cred" key={b.name} href={b.href} target="_blank" rel="noopener noreferrer">{body}</a>
              : <div className="cred" key={b.name}>{body}</div>;
          })}
          <div className="cred cred-text-only">
            <span className="cred-img cred-mark"><Home size={34} strokeWidth={1.6} /></span>
            <span className="cred-text"><strong>Member</strong><small>Big Country Home Builders Association</small></span>
          </div>
        </div>
      </div>
    </section>
  );
}

function EstimateForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", location: "", service: "", insurance: "", notes: "", website: "" });
  const [status, setStatus] = useState("idle");
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  async function submit(e) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const d = await r.json().catch(() => ({}));
      setStatus(r.ok && d.success ? (d.demo ? "demo" : "sent") : "error");
    } catch {
      setStatus("error");
    }
  }
  if (status === "sent" || status === "demo") {
    return (
      <div className="form-done" role="status">
        <Check size={34} />
        <h3>Thanks, {form.name.split(" ")[0] || "neighbor"}.</h3>
        <p>{status === "demo" ? `This concept's form isn't connected yet. Please call ${PHONE} for your free estimate.` : "We'll call you to set up a time to look at your roof."}</p>
      </div>
    );
  }
  return (
    <form className="est-form" onSubmit={submit}>
      <div className="row2">
        <label>Name<input required value={form.name} onChange={update("name")} autoComplete="name" /></label>
        <label>Phone<input required type="tel" value={form.phone} onChange={update("phone")} autoComplete="tel" /></label>
      </div>
      <div className="row2">
        <label><span>Email <small>(optional)</small></span><input type="email" value={form.email} onChange={update("email")} autoComplete="email" /></label>
        <label>Property address<input value={form.location} onChange={update("location")} autoComplete="street-address" placeholder="Street, town" /></label>
      </div>
      <div className="row2">
        <label>What does the roof need?
          <select value={form.service} onChange={update("service")}>
            <option value="">Choose one...</option>
            <option>Reroof / full replacement</option>
            <option>Metal roof</option>
            <option>Leak, patch or storm repair</option>
            <option>Impact-resistant (UL 2218) upgrade</option>
            <option>Roof coating</option>
            <option>Ventilation</option>
            <option>New construction</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label>Insurance claim?
          <select value={form.insurance} onChange={update("insurance")}>
            <option value="">Choose one...</option>
            <option>Yes, filed or filing a claim</option>
            <option>No</option>
            <option>Not sure</option>
          </select>
        </label>
      </div>
      <label><span>About the roof <small>(optional)</small></span><textarea rows={4} value={form.notes} onChange={update("notes")} placeholder="Age of the roof, leaks, hail, best time to call..." /></label>
      <div className="hp" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={update("website")} /></label></div>
      {status === "error" && <p className="form-error" role="alert">That didn't go through. Please call {PHONE}.</p>}
      <button className="btn btn-copper btn-block" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Request my free estimate"} <ArrowRight size={18} /></button>
    </form>
  );
}

function Estimate() {
  return (
    <section className="estimate" id="estimate">
      <div className="wrap est-grid">
        <div className="est-info">
          <p className="eyebrow">Free estimates</p>
          <h2>Ready to talk about your roofing project?</h2>
          <p className="est-lede">Call us today, or send a few details and we'll call you back.</p>
          <a className="big-phone" href={`tel:${PHONE_TEL}`}><Phone size={28} /> {PHONE}</a>
          <ul className="contact-list">
            <li><MapPin size={20} /><span><strong>Office</strong><a href={MAP_URL} target="_blank" rel="noopener noreferrer">{ADDRESS[0]}, {ADDRESS[1]}</a></span></li>
            <li><Mail size={20} /><span><strong>{OWNER}, Owner</strong><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span></li>
            <li><ThumbsUp size={20} /><span><strong>Like us on Facebook</strong><a href={FACEBOOK} target="_blank" rel="noopener noreferrer">Weathersby Roofing on Facebook</a></span></li>
          </ul>
        </div>
        <div className="est-card">
          <h3>Request a free estimate</h3>
          <EstimateForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shingle-edge shingle-edge-top" aria-hidden="true" />
      <div className="wrap footer-grid">
        <div>
          <span className="logo-plate"><img src={logo} alt="Weathersby Roofing" width="294" height="35" loading="lazy" /></span>
          <p>Serving Abilene and the Big Country since {FOUNDED}. Member of the Big Country Home Builders Association.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>{ADDRESS[0]}<br />{ADDRESS[1]}</p>
          <p><a href={`tel:${PHONE_TEL}`}>{PHONE}</a><br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </div>
        <div>
          <h4>On this page</h4>
          {NAV.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
        </div>
      </div>
      <div className="wrap footer-line">
        <span>© {new Date().getFullYear()} Weathersby Roofing Inc. · Concept redesign by Blueprint WebStudio · Independent concept, not for official use</span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BadgeStrip />
        <Services />
        <BeforeYouSign />
        <Gallery />
        <Credentials />
        <Estimate />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
