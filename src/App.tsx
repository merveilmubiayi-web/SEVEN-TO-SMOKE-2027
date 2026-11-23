import { useState } from 'react'
import { ArrowUpRight, Menu, X, Play, Instagram, Mail, MapPin, Zap, Trophy, Users, CalendarDays, CheckCircle2 } from 'lucide-react'

const nav = ['Accueil', 'Le championnat', 'Les organisateurs', 'Partenaires', 'Contact']

export default function App() {
  const [active, setActive] = useState('Accueil')
  const [menuOpen, setMenuOpen] = useState(false)
  const go = (label: string) => {
    setActive(label); setMenuOpen(false)
    document.getElementById(label.toLowerCase().replaceAll(' ', '-'))?.scrollIntoView({ behavior: 'smooth' })
  }
  return <main>
    <header className="topbar">
      <a className="brand" href="#accueil" onClick={() => setActive('Accueil')}><span className="brand-mark">7</span><span>SEVEN <b>TO SMOKE</b><small>AFRICAN URBAN DANCE CHAMPIONSHIP</small></span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'}>{nav.map(n => <button className={active === n ? 'nav-link selected' : 'nav-link'} key={n} onClick={() => go(n)}>{n}</button>)}</nav>
      <button className="header-cta" onClick={() => go('Contact')}>Devenir partenaire <ArrowUpRight size={16}/></button>
      <button className="mobile-toggle" aria-label="Ouvrir le menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <section className="hero" id="accueil">
      <div className="hero-image"/>
      <div className="hero-overlay"/>
      <div className="hero-content">
        <div className="eyebrow"><span/> ÉDITION 2027 <i/> KINSHASA, RDC</div>
        <h1>THE FLOOR<br/>IS <em>YOURS.</em></h1>
        <p className="hero-copy">Une scène. Une culture. Sept danseurs.<br/>L'énergie urbaine africaine au sommet.</p>
        <div className="hero-actions"><button className="primary-btn" onClick={() => go('Le championnat')}>Découvrir le championnat <ArrowUpRight size={17}/></button><button className="play-btn" onClick={() => go('Les organisateurs')}><span><Play size={15} fill="currentColor"/></span> Notre vision</button></div>
        <div className="hero-foot"><span>01 / 07 — AFRICAN URBAN CULTURE</span><span>SCROLL TO EXPLORE ↓</span></div>
      </div>
      <div className="vertical-label">DANCE • CULTURE • COMMUNITY •</div>
    </section>

    <section className="intro section" id="le-championnat">
      <div className="section-kicker">01 — LE CONCEPT</div>
      <div className="intro-grid"><h2>PLUS QU'UNE<br/>COMPÉTITION.<br/><em>UN MOUVEMENT.</em></h2><div className="intro-text"><p className="lead">SEVEN TO SMOKE célèbre la créativité, la discipline et la puissance de la danse urbaine africaine.</p><p>Un rendez-vous où les meilleurs talents se rencontrent, s'affrontent et repoussent les limites du mouvement. Une plateforme de visibilité pour une génération qui fait vibrer la culture.</p><a className="text-link" href="#contact" onClick={() => setActive('Contact')}>Construisons cette scène ensemble <ArrowUpRight size={16}/></a></div></div>
      <div className="stats"><div><strong>07</strong><span>FINALISTES</span></div><div><strong>20</strong><span>DANSEURS SÉLECTIONNÉS*</span></div><div><strong>01</strong><span>SCÈNE CONTINENTALE</span></div><div><strong>3.5M</strong><span>FC — DOTATION ANNONCÉE*</span></div></div>
      <p className="fineprint">*Chiffres issus des éléments de présentation du projet, à confirmer par l'organisation avant publication officielle.</p>
    </section>

    <section className="dark-section section">
      <div className="section-kicker">02 — L'EXPÉRIENCE</div><div className="section-heading"><h2>THE ART OF<br/><em>THE SMOKE.</em></h2><p>La compétition met à l'honneur la technique, le style, la présence scénique et l'identité de chaque danseur.</p></div>
      <div className="experience-grid">
        <article className="experience-card"><span>01 / QUALIFICATION</span><Trophy/><h3>Le talent<br/>se révèle.</h3><p>Une sélection exigeante pour réunir les personnalités les plus fortes de la scène.</p></article>
        <article className="experience-card"><span>02 / PERFORMANCE</span><Zap/><h3>L'énergie<br/>prend place.</h3><p>Des face-à-face intenses où chaque passage raconte une histoire.</p></article>
        <article className="experience-card"><span>03 / FINAL</span><Users/><h3>Un seul<br/>vainqueur.</h3><p>Les finalistes donnent tout pour inscrire leur nom dans l'histoire.</p></article>
      </div>
    </section>

    <section className="partners section" id="partenaires">
      <div className="section-kicker">03 — OPPORTUNITÉS DE PARTENARIAT</div><div className="section-heading"><h2>BRANDS THAT<br/><em>MOVE CULTURE.</em></h2><p>Associez votre marque à une plateforme de culture urbaine, de créativité et de connexion avec la jeunesse.</p></div>
      <div className="partner-grid">
        <article className="partner-card"><div className="partner-top"><span>PROPOSITION DE PARTENARIAT</span><span className="partner-symbol">A</span></div><h3>AFRICELL</h3><h4>Digital Experience Partner</h4><p>Connectivité, expériences digitales, campagnes communautaires et activations pensées pour rapprocher la marque des talents et du public.</p><ul><li><CheckCircle2/> Expériences connectées sur site</li><li><CheckCircle2/> Contenus digitaux &amp; visibilité</li><li><CheckCircle2/> Activations communautaires</li></ul><span className="status">PROPOSITION — NON CONFIRMÉE</span></article>
        <article className="partner-card gold"><div className="partner-top"><span>PROPOSITION DE PARTENARIAT</span><span className="partner-symbol">B</span></div><h3>BRACONGO</h3><h4>Street Culture Experience</h4><p>Une présence au cœur de l'expérience : rencontres, espaces de marque, contenus et moments forts autour de la culture urbaine.</p><ul><li><CheckCircle2/> Brand activation &amp; visibilité</li><li><CheckCircle2/> Expériences physiques</li><li><CheckCircle2/> Contenus &amp; codes promotionnels</li></ul><span className="status">PROPOSITION — NON CONFIRMÉE</span></article>
      </div>
      <p className="fineprint">Africell et Bracongo sont présentées ici comme partenaires potentiels. Aucune collaboration n'est annoncée comme conclue.</p>
    </section>

    <section className="organizers section" id="les-organisateurs"><div className="section-kicker">04 — CEUX QUI PORTENT LA VISION</div><h2>ROOTED IN CULTURE.<br/><em>BUILT FOR THE FUTURE.</em></h2><div className="org-grid"><div><span className="org-index">01 / INITIATIVE</span><h3>MÀFIKIRI<br/>PROJECT</h3><p>Une initiative portée par la créativité, l'innovation et la valorisation des talents.</p></div><div><span className="org-index">02 / CO-ORGANISATION</span><h3>BALLET<br/>UMOJA</h3><p>Un engagement artistique et culturel au service de la transmission et de la scène.</p></div></div></section>

    <section className="contact section" id="contact"><div className="section-kicker">05 — ENTRER EN CONTACT</div><div className="contact-grid"><div><h2>LET'S MAKE<br/><em>HISTORY.</em></h2><p>Vous souhaitez soutenir le projet, proposer une collaboration ou en savoir plus sur les opportunités de partenariat ? Parlons-en.</p><div className="contact-line"><Mail size={17}/> partenariats@seven-to-smoke.com</div><div className="contact-line"><MapPin size={17}/> Kinshasa, République démocratique du Congo</div></div><form onSubmit={e => {e.preventDefault(); const d = new FormData(e.currentTarget); const subject = encodeURIComponent('Partenariat — SEVEN TO SMOKE 2027'); const body = encodeURIComponent('Nom : '+d.get('name')+'\nOrganisation : '+d.get('org')+'\nEmail : '+d.get('email')+'\nMessage : '+d.get('message')); window.location.href='mailto:partenariats@seven-to-smoke.com?subject='+subject+'&body='+body}}><label>Votre nom<input name="name" required placeholder="Nom et prénom"/></label><label>Organisation<input name="org" placeholder="Entreprise / organisation"/></label><label>Adresse e-mail<input name="email" type="email" required placeholder="vous@exemple.com"/></label><label>Votre message<textarea name="message" rows={4} required placeholder="Parlons de votre projet..."/></label><button className="primary-btn" type="submit">Envoyer une demande <ArrowUpRight size={17}/></button><small>Le formulaire ouvre votre application e-mail. L'adresse de contact devra être validée avant lancement.</small></form></div></section>
    <footer><a className="brand" href="#accueil"><span className="brand-mark">7</span><span>SEVEN <b>TO SMOKE</b><small>AFRICAN URBAN DANCE CHAMPIONSHIP</small></span></a><span>© 2027 MÀFIKIRI PROJECT × BALLET UMOJA</span><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18}/></a></footer>
  </main>
}