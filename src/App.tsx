import { useState } from 'react'
import { ArrowUpRight, Menu, X, Play, Mail, MapPin, Zap, Trophy, Users, CheckCircle2, Video, CalendarDays, Medal, Smartphone, Radio, Star } from 'lucide-react'

const nav = [
  { label: 'Accueil', id: 'accueil' },
  { label: 'Championnat', id: 'le-championnat' },
  { label: 'Récompenses', id: 'recompenses' },
  { label: 'Vidéos', id: 'videos' },
  { label: 'Partenaires', id: 'partenaires' },
  { label: 'Contact', id: 'contact' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('accueil')
  const go = (id: string) => {
    setActive(id)
    setMenuOpen(false)
    scrollTo(id)
  }

  return <main>
    <header className="topbar">
      <a className="brand" href="#accueil" onClick={() => go('accueil')}><span className="brand-mark">7</span><span>SEVEN <b>TO SMOKE</b><small>AFRICAN URBAN DANCE CHAMPIONSHIP</small></span></a>
      <nav id="primary-navigation" aria-label="Navigation principale" className={menuOpen ? 'nav open' : 'nav'}>
        {nav.map(item => <button className={active === item.id ? 'nav-link selected' : 'nav-link'} key={item.id} onClick={() => go(item.id)}>{item.label}</button>)}
      </nav>
      <button className="header-cta" onClick={() => go('partenaires')}>Devenir partenaire <ArrowUpRight size={16}/></button>
      <button className="mobile-toggle" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <section className="hero" id="accueil">
      <div className="hero-image"/>
      <div className="hero-overlay"/>
      <div className="hero-content">
        <div className="eyebrow"><span/> ÉDITION 2027 <i/> KINSHASA, RDC</div>
        <h1>THE FLOOR<br/>IS <em>YOURS.</em></h1>
        <p className="hero-copy">Une scène. Une culture. Sept danseurs.<br/>L'énergie urbaine africaine au sommet.</p>
        <div className="hero-actions">
          <button className="primary-btn" onClick={() => go('le-championnat')}>Découvrir le championnat <ArrowUpRight size={17}/></button>
          <button className="play-btn" onClick={() => go('vision')}><span><Play size={15} fill="currentColor"/></span> Notre vision</button>
        </div>
        <div className="hero-foot"><span>01 / 07 — AFRICAN URBAN CULTURE</span><span>SCROLL TO EXPLORE ↓</span></div>
      </div>
      <div className="vertical-label">DANCE • CULTURE • COMMUNITY •</div>
    </section>

    <section className="intro section" id="le-championnat">
      <div className="section-kicker">01 — LE CONCEPT</div>
      <div className="intro-grid"><h2>PLUS QU'UNE<br/>COMPÉTITION.<br/><em>UN MOUVEMENT.</em></h2><div className="intro-text"><p className="lead">SEVEN TO SMOKE célèbre la créativité, la discipline et la puissance de la danse urbaine africaine.</p><p>Un rendez-vous où les meilleurs talents se rencontrent, s'affrontent et repoussent les limites du mouvement. Une plateforme de visibilité pour une génération qui fait vibrer la culture.</p><button className="text-link" onClick={() => go('vision')}>Découvrir notre vision <ArrowUpRight size={16}/></button></div></div>
      <div className="stats"><div><strong>07</strong><span>FINALISTES</span></div><div><strong>20</strong><span>DANSEURS SÉLECTIONNÉS*</span></div><div><strong>01</strong><span>SCÈNE CONTINENTALE</span></div><div><strong>3.5M</strong><span>FC — DOTATION INDICATIVE*</span></div></div>
      <p className="fineprint">*Chiffres du dossier de présentation à valider par l'organisation avant l'ouverture officielle des inscriptions.</p>
    </section>

    <section className="dark-section section" id="vision">
      <div className="section-kicker">02 — NOTRE VISION</div><div className="section-heading"><h2>THE ART OF<br/><em>THE SMOKE.</em></h2><p>Faire de Kinshasa un point de rencontre des cultures urbaines, révéler les talents, raconter leurs parcours et créer une expérience qui vit au-delà de la scène.</p></div>
      <div className="experience-grid">
        <article className="experience-card"><span>01 / TALENT</span><Trophy/><h3>Le talent<br/>se révèle.</h3><p>Une sélection exigeante pour mettre en lumière les personnalités les plus fortes de la scène.</p></article>
        <article className="experience-card"><span>02 / CULTURE</span><Zap/><h3>L'énergie<br/>prend place.</h3><p>Des battles, des performances et des rencontres qui font rayonner la culture urbaine.</p></article>
        <article className="experience-card"><span>03 / HÉRITAGE</span><Users/><h3>Un mouvement<br/>qui continue.</h3><p>Des histoires, des images et une communauté qui restent vivantes après l'événement.</p></article>
      </div>
    </section>

    <section className="prizes section" id="recompenses">
      <div className="section-kicker">03 — L'ENJEU</div>
      <div className="prize-layout">
        <div><p className="prize-overline">LA PERFORMANCE MÉRITE SA RÉCOMPENSE</p><h2>MORE THAN<br/>A <em>WIN.</em></h2><p className="prize-copy">Une scène pour se faire connaître. Une compétition pour repousser ses limites. Une récompense pour célébrer le travail et le talent.</p><div className="prize-amount"><strong>3 500 000</strong><span>FRANCS CONGOLAIS — DOTATION ANNONCÉE*</span></div><p className="fineprint">*Montant indicatif issu du dossier initial, répartition et modalités à confirmer par l'organisation.</p></div>
        <div className="prize-side"><div className="prize-icon"><Medal size={42}/></div><h3>SEVEN FINALISTS.<br/>ONE LEGACY.</h3><p>Les modalités de sélection, les récompenses par classement et les éventuels prix partenaires seront publiés dans cette rubrique après validation officielle.</p><span className="status">INFORMATIONS DÉTAILLÉES À VENIR</span></div>
      </div>
    </section>

    <section className="videos section" id="videos">
      <div className="section-kicker">04 — MEDIA ROOM</div>
      <div className="section-heading"><h2>FEEL THE<br/><em>MOVEMENT.</em></h2><p>Les battles, les performances, les portraits de danseurs et les meilleurs moments du championnat seront réunis ici.</p></div>
      <div className="media-grid">
        <article className="media-feature"><div className="media-placeholder"><Video size={42}/><span>VIDÉOS OFFICIELLES</span></div><div className="media-caption"><div><span>01 / BATTLES & PERFORMANCES</span><h3>THE FLOOR WILL SPEAK.</h3></div><Play size={22}/></div></article>
        <div className="media-stack"><article><span>02 / DANCER SPOTLIGHT</span><Users/><h3>LES TALENTS<br/>À L'HONNEUR.</h3><p>Portraits et parcours des danseurs sélectionnés.</p></article><article><span>03 / BACKSTAGE</span><Radio/><h3>BEHIND<br/>THE SCENE.</h3><p>Préparatifs, répétitions et coulisses du projet.</p></article></div>
      </div>
      <p className="media-note">Aucune vidéo n'est encore publiée. Les contenus officiels apparaîtront ici après validation et mise en place de l'espace média.</p>
    </section>

    <section className="registration section" id="inscriptions">
      <div className="section-kicker">05 — POUR LES DANSEURS</div>
      <div className="registration-layout"><div><p className="prize-overline">TA PLACE SUR LA SCÈNE COMMENCE ICI</p><h2>READY TO<br/><em>ENTER?</em></h2><p>Les informations d'inscription, les critères de sélection, le calendrier et les étapes de candidature seront publiés dans cet espace.</p></div><div className="registration-panel"><CalendarDays size={32}/><span className="status">INSCRIPTIONS NON OUVERTES</span><h3>LE PROCHAIN NOM<br/>PEUT ÊTRE LE TIEN.</h3><p>Prépare ton profil, tes coordonnées et tes vidéos de présentation. Le formulaire officiel sera activé dès que le règlement et le calendrier seront validés.</p><button className="primary-btn" onClick={() => go('contact')}>Être informé de l'ouverture <ArrowUpRight size={16}/></button></div></div>
    </section>

    <section className="partners section" id="partenaires">
      <div className="section-kicker">06 — OPPORTUNITÉS DE PARTENARIAT</div><div className="section-heading"><h2>BRANDS THAT<br/><em>MOVE CULTURE.</em></h2><p>Des propositions de collaboration conçues pour associer les marques à une audience jeune, créative et engagée, en ligne comme sur le terrain.</p></div>
      <div className="partner-grid">
        <article className="partner-card africell-card">
          <div className="partner-visual africell-visual"><span className="afri-word">africell</span><span className="afri-signal">)))</span><small>NA BISO</small></div>
          <div className="partner-top"><span>PROPOSITION DE PARTENARIAT</span><span className="partner-symbol">A</span></div><h3>AFRICELL</h3><h4>Official Connectivity & Digital Experience</h4><p>Faire vivre la proximité « Na Biso » à travers une expérience digitale dédiée à la jeunesse, aux danseurs et aux communautés urbaines.</p><ul><li><CheckCircle2/> Connectivité et expérience digitale sur site</li><li><CheckCircle2/> Capsules vidéo, visibilité et contenus sociaux</li><li><CheckCircle2/> Activations communautaires et engagement</li><li><CheckCircle2/> Parcours digital pour les inscriptions et le public</li></ul><span className="status">MARQUE CIBLÉE — PROPOSITION NON CONFIRMÉE</span>
        </article>
        <article className="partner-card doppel-card">
          <div className="doppel-visual"><span>NOUVEAU</span><strong>DOPPEL</strong><b>ENERGY MALT</b><small>0% ALCOOL · 100% ENDURANCE</small></div>
          <div className="partner-top"><span>PROPOSITION DE PARTENARIAT</span><span className="partner-symbol">D</span></div><h3>DOPPEL ENERGY MALT</h3><h4>Official Energy & Performance Experience</h4><p>Associer le lancement de Doppel Energy Malt à l'intensité de la danse urbaine, à la détermination et au dépassement de soi.</p><ul><li><CheckCircle2/> Présence de marque et expérience dédiée</li><li><CheckCircle2/> Contenus autour de l'effort et de la performance</li><li><CheckCircle2/> Animations et visibilité sur les temps forts</li><li><CheckCircle2/> Mise en avant du produit dans les espaces autorisés</li></ul><span className="status">MARQUE CIBLÉE — PROPOSITION NON CONFIRMÉE</span>
        </article>
      </div>
      <div className="commercial-note"><Star size={19}/><p><strong>Une visibilité mesurable, pas seulement un logo.</strong><br/>Le dossier partenaire détaillera les formats de visibilité, les activations, les contenus livrables, les indicateurs de performance et les niveaux de contribution, après échange avec chaque marque.</p></div>
      <p className="fineprint">Africell et Doppel Energy Malt / BRACONGO sont des marques ciblées. Aucune collaboration ni autorisation d'utilisation commerciale de leurs logos ou visuels n'est annoncée comme acquise.</p>
    </section>

    <section className="organizers section" id="organisateurs"><div className="section-kicker">07 — CEUX QUI PORTENT LA VISION</div><h2>ROOTED IN CULTURE.<br/><em>BUILT FOR THE FUTURE.</em></h2><div className="org-grid"><div><span className="org-index">01 / INITIATIVE</span><h3>MÀFIKIRI<br/>PROJECT</h3><p>Une initiative portée par la créativité, l'innovation et la valorisation des talents.</p></div><div><span className="org-index">02 / CO-ORGANISATION</span><h3>BALLET<br/>UMOJA</h3><p>Un engagement artistique et culturel au service de la transmission et de la scène.</p></div></div></section>

    <section className="contact section" id="contact"><div className="section-kicker">08 — ENTRER EN CONTACT</div><div className="contact-grid"><div><h2>LET'S MAKE<br/><em>HISTORY.</em></h2><p>Vous représentez une marque, un média, une institution ou vous êtes danseur ? Contactez l'équipe pour préparer la prochaine étape.</p><div className="contact-line"><Mail size={17}/> Adresse de contact à confirmer avec l’organisation</div><div className="contact-line"><MapPin size={17}/> Kinshasa, République démocratique du Congo</div></div><form onSubmit={e => {e.preventDefault(); const d = new FormData(e.currentTarget); const subject = encodeURIComponent('Contact — SEVEN TO SMOKE 2027'); const body = encodeURIComponent('Nom : '+d.get('name')+'\nOrganisation / profil : '+d.get('org')+'\nEmail : '+d.get('email')+'\nObjet : '+d.get('topic')+'\nMessage : '+d.get('message')); window.location.href='mailto:CONTACT_A_VALIDER?subject='+subject+'&body='+body}}><label>Votre nom<input name="name" required placeholder="Nom et prénom"/></label><label>Organisation / profil<input name="org" placeholder="Entreprise, média, danseur..."/></label><label>Votre adresse e-mail<input name="email" type="email" required placeholder="vous@exemple.com"/></label><label>Votre demande<select name="topic" defaultValue="Partenariat"><option>Partenariat</option><option>Inscription danseur</option><option>Presse et médias</option><option>Autre demande</option></select></label><label>Votre message<textarea name="message" rows={4} required placeholder="Parlons de votre projet..."/></label><button className="primary-btn" type="submit">Envoyer une demande <ArrowUpRight size={17}/></button><small>Formulaire de démonstration : l'adresse officielle et le traitement sécurisé des demandes doivent être configurés avant ouverture publique.</small></form></div></section>
    <footer><a className="brand" href="#accueil" onClick={() => go('accueil')}><span className="brand-mark">7</span><span>SEVEN <b>TO SMOKE</b><small>AFRICAN URBAN DANCE CHAMPIONSHIP</small></span></a><span>© 2027 MÀFIKIRI PROJECT × BALLET UMOJA</span><span>THE FLOOR IS YOURS.</span></footer>
  </main>
}
