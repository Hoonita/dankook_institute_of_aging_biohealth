"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const researchAreas = [
  { code: "A01", ko: "Intracellular Molecular Mechanisms", en: "Molecular mechanisms", text: "Explore how signals and materials move within cells and regulate cellular function." },
  { code: "A02", ko: "Axonal Transport & Proteostasis", en: "Axonal transport & proteostasis", text: "Study transport along neuronal axons and the systems that maintain protein quality." },
  { code: "A03", ko: "Neuronal Function & Degeneration", en: "Neuronal function & degeneration", text: "Identify the early mechanisms that link cellular changes to neurodegenerative disease." },
  { code: "A04", ko: "Stem Cell–Based Disease Models", en: "Human disease modeling", text: "Use human stem cells and tissue models to reproduce disease development and treatment responses." },
  { code: "A05", ko: "Digital Biomarkers & Translation", en: "Digital biomarkers & translation", text: "Connect discoveries in basic research with clinical evaluation and biohealth technologies." },
];

const program = {
  title: "Molecular and Cellular Mechanisms of Human Disease",
  en: "Molecular and Cellular Mechanisms of Human Disease",
  goal: "Transform clinical or life-science questions into testable research topics grounded in cell signaling, intracellular transport, organelle function, and proteostasis. Global mentoring and step-by-step research design guidance from Korean faculty are integrated into one program.",
  result: "Molecular and cellular research proposal · Mechanistic and experimental workflow · Poster presentation · Mentoring report",
  months: [
    ["09", "September", "Defining the Research Question", "First mentoring session · Consulting · Keynote lecture"],
    ["10", "October", "Refining the Research Design", "Second 1:1 online mentoring session · Domestic mini-program 1"],
    ["11", "November", "Validating the Design", "Domestic mini-programs 2 and 3 · Wet lab · Additional mentoring and consulting"],
    ["12", "December", "Presenting and Connecting", "Third mentoring session · Keynote lecture · Poster presentation · International symposium"],
  ],
};

const scholars = [
  { no: "01", status: "Lead Global Research Mentor", name: "Giampietro Schiavo", title: "Professor of Cellular Neuroscience", org: "UCL · UK Dementia Research Institute", image: "/mentors/giampietro-schiavo.png", naturalImage: "/mentors/profiles/giampietro-schiavo-natural.jpg", fields: ["Molecular & Cellular Biology", "Axonal Transport", "Neurodegeneration"], role: "Public lecture · Small-group mentoring · Research design consulting · Keynote lecture", profile: [
    ["Profile", "A globally influential researcher in cellular neurobiology, axonal transport, and neurodegenerative disease. He is a professor at the UCL Queen Square Institute of Neurology and a group leader at the UK Dementia Research Institute."],
    ["Leadership", "He leads work in cell biology and proteostasis at the UK DRI and serves as a senior academic scientist at the Alzheimer’s Research UK UCL Drug Discovery Institute, connecting basic science with therapeutic discovery."],
    ["Research Focus", "His research covers axonal transport, signaling endosomes, BDNF–TrkB signaling, and the molecular mechanisms of Alzheimer’s disease and motor neuron disease."],
    ["Academic Impact", "His CV lists 213 research papers, 108 reviews, more than 34,900 citations, and an h-index of 97. He is an EMBO member and a Fellow of the Academy of Medical Sciences."],
    ["Mentoring Value", "An established research leader who can guide world-class topic discovery, research organization, international collaboration, and the development of early-career researchers."],
  ] },
  { no: "02", status: "", name: "Dennis Chan", title: "Professor of Cognitive Neuroscience · Consultant Neurologist", org: "University College London · University Hospitals Sussex NHS Trust", image: "/mentors/dennis-chan.png", naturalImage: "/mentors/profiles/dennis-chan-natural.webp", fields: ["Cognitive Neuroscience", "Translational Research", "Digital Biomarkers"], role: "International symposium · Online research exchange · Networking", profile: [
    ["Profile", "A clinical neuroscientist studying the early diagnosis of Alzheimer’s disease and mild cognitive impairment. As a UCL professor and NHS consultant neurologist, he connects cognitive neuroscience with patient care."],
    ["Training and Expertise", "He studied neuroanatomy and hippocampal circuits at UCL and medicine and early dementia diagnosis at Cambridge. He is a Fellow of the Royal College of Physicians."],
    ["Research Focus", "He combines spatial memory, navigation, path integration, VR and mobile sensing, digital cognitive testing, neuroimaging, and blood biomarkers to detect early cognitive decline."],
    ["Selected Contributions", "He has led work on virtual-environment assessment of mild cognitive impairment, machine learning with real-world navigation data, and spatial-behavior tools such as the 4 Mountains Test."],
    ["Mentoring Value", "A translational researcher who turns clinical needs into digital and behavioral precision diagnostics and can advise on patient cohorts and international multicenter studies."],
  ] },
  { no: "03", status: "", name: "Tiago Rito", title: "Assistant Professor, School of Biomedical Sciences", org: "The University of Hong Kong", image: "/mentors/tiago-rito.png", naturalImage: "/mentors/profiles/tiago-rito-natural.jpg", fields: ["Stem Cell Biology", "Tissue Engineering", "Human Disease Modeling"], role: "International symposium · Online research exchange · Networking", profile: [
    ["Profile", "An emerging independent investigator studying human developmental biology, stem cell–based developmental models, and quantitative systems biology. He leads a laboratory at the University of Hong Kong."],
    ["Research Career", "Building on quantitative and statistical training at Oxford, he developed his research career at the Berlin Institute for Medical Systems Biology, Rockefeller University, and the Francis Crick Institute."],
    ["Research Focus", "His work spans human embryonic development, cell-fate decisions, stem cell–derived gastruloids and neuruloids, TGF-β/WNT signaling, and quantitative analysis of developmental models."],
    ["Selected Contributions", "He has published key findings on human development and stem-cell models in Nature, Nature Cell Biology, and Nature Biotechnology and received the IBRO Rising Star Award."],
    ["Mentoring Value", "A next-generation leader who connects advanced stem-cell models with quantitative biology and can introduce early-career researchers to new experimental and analytical approaches."],
  ] },
];

const selectionCriteria = [
  { weight: "40", code: "RESEARCH FIT", title: "Research Fit", text: "We assess your understanding of molecular and cellular biology, the specificity of your plan, and your potential to turn a clinical or life-science question into a testable research topic." },
  { weight: "30", code: "GLOBAL READINESS", title: "Global Readiness", text: "We assess your ability to communicate academically with international researchers, readiness for collaborative research, and willingness to engage in new research environments." },
  { weight: "30", code: "CAREER COMMITMENT", title: "Career Commitment", text: "We assess the clarity of your long-term goals in molecular and cellular biology or biohealth and your commitment to extending program outcomes into future research." },
];

const timeline = [
  ["07—08", "Recruit and Connect", "Scholar scheduling · Participant recruitment · Research needs assessment"],
  ["08—09", "Ask the First Question", "Public lecture · Mentor–mentee matching · First mentoring session"],
  ["10", "Design and Validate", "Literature review · Methods consulting · Research-question refinement"],
  ["11", "Prepare to Present", "Proposal presentation · Networking · Young Investigator selection"],
  ["12", "Share and Expand", "International symposium · Outcomes showcase · Follow-up collaboration"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeScholar, setActiveScholar] = useState<number | null>(null);
  const [posterOpen, setPosterOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const scholarTriggerRef = useRef<HTMLElement | null>(null);
  const posterDialogRef = useRef<HTMLDivElement>(null);
  const posterTriggerRef = useRef<HTMLButtonElement | null>(null);

  const closeMenu = () => setMenuOpen(false);
  const openScholar = (index: number, trigger: HTMLElement) => {
    scholarTriggerRef.current = trigger;
    setActiveScholar(index);
  };

  useEffect(() => {
    if (activeScholar === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLElement>(".profile-close")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveScholar(null);
        return;
      }
      if (event.key !== "Tab" || !dialog) return;
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      scholarTriggerRef.current?.focus();
    };
  }, [activeScholar]);

  useEffect(() => {
    if (!posterOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const dialog = posterDialogRef.current;
    const trigger = posterTriggerRef.current;
    dialog?.querySelector<HTMLElement>(".poster-close")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPosterOpen(false);
        return;
      }
      if (event.key !== "Tab" || !dialog) return;
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [posterOpen]);

  return (
    <main id="top">
      <a className="skip-link" href="#content">Skip to main content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Dankook University and Dankook Institute of Aging home" onClick={closeMenu}>
          <Image className="dku-logo" src="/logos/dku-logo-transparent.png" alt="Dankook University DKU" width={429} height={231} unoptimized />
          <span className="brand-divider" aria-hidden="true" />
          <Image className="dia-logo" src="/logos/dia-logo.png" alt="Dankook Institute of Aging DIA" width={149} height={43} unoptimized />
          <span className="brand-name"><strong>DANKOOK UNIVERSITY</strong><small>DANKOOK INSTITUTE OF AGING</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span>{menuOpen ? "Close" : "Menu"}</span><i aria-hidden="true" />
        </button>
        <nav id="main-nav" className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#research" onClick={closeMenu}>Research</a>
          <a href="#programs" onClick={closeMenu}>Program</a>
          <a href="#scholars" onClick={closeMenu}>Global Mentors</a>
          <a href="#schedule" onClick={closeMenu}>Schedule</a>
          <a href="#selection" onClick={closeMenu}>Selection</a>
        </nav>
        <a className="header-cta" href="#apply">Apply <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Global Molecular &amp; Cellular Biology Mentorship · 2026</p>
          <h1>From Motion Within Cells<br />to the Direction of<br /><em>Future Biomedical Research</em></h1>
          <p className="hero-lead">A sustained research mentorship in which world-class scholars and emerging researchers ask questions and design studies together—from molecular mechanisms to human disease models.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#programs">Explore the Program <span>↘</span></a>
            <a className="button button-quiet" href="#research">View Research Map</a>
          </div>
        </div>
        <div className="atlas" role="img" aria-label="Research atlas extending from intracellular molecular mechanisms to clinical translation">
          <div className="atlas-grid" aria-hidden="true" />
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="cell-core"><span>CELLULAR<br />TRANSPORT</span><small>CORE / A01</small></div>
          <div className="cell-node node-one">PROTEIN</div>
          <div className="cell-node node-two" aria-hidden="true" />
          <div className="cell-node node-three" aria-hidden="true" />
          <p className="annotation annotation-one"><b>A01</b> Molecular mechanism<br />Intracellular signaling</p>
          <p className="annotation annotation-two"><b>A03</b> Neurodegeneration<br />Neuronal function</p>
          <p className="annotation annotation-three"><b>A05</b> Clinical translation<br />Digital biomarkers</p>
          <span className="atlas-index">DANKOOK UNIVERSITY / DIA / 2026</span>
        </div>
      </section>

      <section className="metrics" aria-label="Program highlights">
        <div><strong>3</strong><span>GLOBAL SCHOLARS</span><small>International mentors</small></div>
        <div><strong>25</strong><span>EMERGING RESEARCHERS</span><small>Participants</small></div>
        <div><strong>5</strong><span>MENTORING GROUPS</span><small>Small research groups</small></div>
        <div><strong>3</strong><span>SESSIONS PER GROUP</span><small>Mentoring sessions</small></div>
      </section>

      <div id="content" className="light-surface">
        <section id="about" className="section intro-section">
          <div className="section-label"><span>00</span><p>PROGRAM<br />ORIENTATION</p></div>
          <div className="intro-copy">
            <p className="kicker">GLOBAL MENTORSHIP, BUILT TO CONTINUE</p>
            <h2>More Than a Lecture:<br /><em>A Relationship That Starts Research</em></h2>
            <p className="large-copy">Drawing on Dankook University’s international research experience and the network of the Dankook Institute of Aging, this program connects global scholars with Korean undergraduate and graduate students, medical students, residents, postdoctoral fellows, and early-career researchers. We support the full journey from identifying a topic to proposals, papers, and academic presentations.</p>
            <div className="principles">
              <article><span>DEEP SCIENCE</span><h3>From Molecules to Disease</h3><p>Connect basic mechanisms, disease models, and clinical translation in one research framework.</p></article>
              <article><span>GUIDED RESEARCH</span><h3>Concrete Outcomes</h3><p>Complete a research proposal, manuscript abstract, or research presentation.</p></article>
              <article><span>GLOBAL CONNECTION</span><h3>A Lasting Network</h3><p>Extend exchanges with UCL, UK DRI, and HKU into future research collaboration.</p></article>
            </div>
          </div>
        </section>

        <section id="research" className="section research-section">
          <header className="section-heading">
            <div><span>01 / RESEARCH COORDINATES</span><p>MOLECULAR → CELLULAR → TRANSLATIONAL</p></div>
            <h2>A Path from a Single Cell<br />to Clinical Research</h2>
          </header>
          <div className="research-flow">
            {researchAreas.map((area) => (
              <article key={area.code}>
                <span>{area.code}</span><i aria-hidden="true" />
                <h3>{area.ko}</h3><p className="research-en">{area.en}</p><p>{area.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="programs" className="section programs-section">
          <div className="program-intro">
            <p className="kicker">02 / INTEGRATED RESEARCH PROGRAM · SEP—DEC</p>
            <h2>Turn Clinical Questions into<br /><em>Testable Research</em></h2>
            <p>One integrated track runs from September through December, connecting research design guidance by Korean faculty, three global mentoring sessions, wet-lab training, and an international symposium.</p>
            <div className="program-key"><span>3 MENTORING</span> Global scholar sessions <span>3 MINI PROGRAMS</span> Research design guidance</div>
          </div>
          <div className="track-panel">
            <article className="track-detail">
              <header><span>INTEGRATED PROGRAM / SEP — DEC 2026</span><h3>{program.title}</h3><p className="track-en">{program.en}</p><p>{program.goal}</p><div><b>FINAL OUTPUT</b>{program.result}</div></header>
              <div className="month-list">
                {program.months.map(([index, month, title, activities]) => <div className="month-row" key={index}><span>{index}</span><time>{month}</time><h4>{title}</h4><p>{activities}</p></div>)}
              </div>
              <aside className="lab-note"><b>DOMESTIC RESEARCH DESIGN &amp; WET LAB</b><p>Three mini-programs led by Korean faculty progressively refine each research question and experimental design, while wet-lab training connects core experimental principles with interpretation.</p><span>3 MINI PROGRAMS</span><span>WET LAB</span><span>RESEARCH DESIGN</span></aside>
            </article>
          </div>
        </section>
      </div>

      <section id="scholars" className="dark-section scholars-section">
        <header className="dark-heading"><div><span>03</span><p>GLOBAL<br />RESEARCH MENTORS</p></div><div><p className="kicker">THREE PERSPECTIVES, ONE RESEARCH JOURNEY</p><h2>Connect Your Questions<br />with Global Research</h2></div></header>
        <div className="scholar-grid">
          {scholars.map((scholar, index) => <article key={scholar.no}>
            <div className="scholar-top"><span>MENTOR / {scholar.no}</span>{scholar.status && <small>{scholar.status}</small>}</div>
            <button className={`portrait portrait-${scholar.no}`} type="button" onClick={(event) => openScholar(index, event.currentTarget)} aria-label={`View the full profile of ${scholar.name}`}><Image src={scholar.image} alt={`${scholar.name} profile`} fill sizes="(max-width: 720px) 100vw, (max-width: 1000px) 50vw, 33vw" unoptimized /><span aria-hidden="true">{scholar.no}</span></button>
            <button className="scholar-name" type="button" onClick={(event) => openScholar(index, event.currentTarget)}><h3>{scholar.name}</h3><span>PROFILE ↗</span></button><p className="org">{scholar.org}</p>
            <ul>{scholar.fields.map(field => <li key={field}>{field}</li>)}</ul>
            <p className="scholar-role"><span>ROLE</span>{scholar.role}</p>
          </article>)}
        </div>
      </section>

      <section id="schedule" className="timeline-section">
        <div className="timeline-intro"><p className="kicker">04 / 2026 FIELD LOG</p><h2>A Six-Month Journey<br />from Question to Research</h2><p>Progress step by step from recruitment and matching to research design, presentation, and follow-up networking.</p></div>
        <div className="timeline">
          {timeline.map(([month, title, desc], index) => <article key={month}><time>{month}</time><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{desc}</p></div></article>)}
        </div>
      </section>

      <section id="participation" className="participation-section" aria-labelledby="participation-title">
        <div className="participation-heading">
          <p className="kicker">05 / MD PARTICIPATION GUIDE</p>
          <h2 id="participation-title">Medical Students and Residents<br />Can Participate with<br /><em>Flexible Scheduling</em></h2>
          <p className="participation-lead">This is not a conventional 13-week course with a fixed weekly meeting time. The program centers on key sessions with global mentors and operates flexibly around clinical duties, classes, and research schedules.</p>
          <p className="participation-message">Detailed schedules will be coordinated after participant selection based on each mentee’s availability.</p>
        </div>
        <div className="participation-details">
          <div className="participation-principles">
            <article><span>01 / CORE MENTORING</span><h3>In-Person Small Groups</h3><p>Core mentoring with global scholars is designed for in-person participation in small groups.</p></article>
            <article><span>02 / FLEXIBLE ACCESS</span><h3>Online and In-Person Options</h3><p>Research consulting and selected training may be joined online or through an alternative format when needed.</p></article>
            <article><span>03 / GROUP MATCHING</span><h3>Schedule-Aware Matching</h3><p>Groups are formed by considering both research interests and available days and times.</p></article>
          </div>
          <aside className="application-support" aria-labelledby="application-support-title">
            <span>APPLICATION &amp; PLANNING SUPPORT</span>
            <h3 id="application-support-title">Start with a Basic Application</h3>
            <p>To reduce the burden of preparing a full proposal, we first accept <strong>a basic application focused on your research interests and core idea</strong>. Your formal proposal will then be refined through <strong>a 1:1 preliminary consultation and planning support session with the program team</strong>. We welcome applications from students and researchers with curiosity and commitment.</p>
          </aside>
          <aside className="travel-support" aria-label="Travel and accommodation support for participants">
            <div><span>TRAVEL SUPPORT</span><strong>Transportation</strong><p>Reimbursement of eligible rail and bus fares</p></div>
            <div><span>STAY SUPPORT</span><strong>Accommodation</strong><p>Reimbursement up to KRW 100,000 per night</p></div>
          </aside>
          <p className="participation-encouragement">Medical students, residents, and researchers concerned about clinical duties or class schedules are encouraged to apply.</p>
        </div>
      </section>

      <section id="selection" className="selection-section">
        <header><p className="kicker">SELECTION CRITERIA</p><h2>How We Select</h2><p>We consider research fit, readiness for international collaboration, and the potential for sustained research growth.</p></header>
        <div className="criteria-grid">
          {selectionCriteria.map((criterion, index) => <article key={criterion.code}>
            <div><strong>{criterion.weight}<small>%</small></strong><span>0{index + 1} / {criterion.code}</span></div>
            <h3>{criterion.title}</h3><p>{criterion.text}</p>
          </article>)}
        </div>
        <p className="criteria-note">Selection follows internal guidelines and is based on the submitted application.</p>
      </section>

      <section id="apply" className="apply-section">
        <div className="apply-atlas" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="apply-copy"><p className="kicker">06 / FOR EMERGING RESEARCHERS</p><h2>Connect Your Research Question<br /><em>with the World</em></h2><p>We plan to select approximately 25 undergraduate and graduate students, medical students, residents, postdoctoral fellows, and early-career researchers under the age of 40.</p><div className="apply-notes"><span>1:5 SMALL GROUPS</span><span>3 SESSIONS PER GROUP</span><span>2+ HOURS PER SESSION</span><span>1+ RESEARCH OUTPUT</span></div><div className="deadline"><span>EXTENDED DEADLINE</span><b aria-hidden="true">/</b><strong>August 31, 2026</strong></div><div className="apply-actions"><a className="button button-primary" href="mailto:dku.gm2026@gmail.com?subject=Global Molecular and Cellular Biology Mentorship Inquiry">Contact the Program <span>↗</span></a><a className="button button-download" href="/downloads/dku-global-mentorship-application-2026.docx" download="2026_Global_Molecular_Cellular_Biology_Mentorship_Application.docx"><span className="download-label">Download the Mentorship<br />Application Form</span><span className="download-format">DOCX ↓</span></a><button className="button button-poster" ref={posterTriggerRef} type="button" onClick={() => setPosterOpen(true)}>View Recruitment Poster <span>VIEW ↗</span></button></div><div className="application-guide"><span>APPLICATION EMAIL</span><a href="mailto:dku.gm2026@gmail.com?subject=Global Molecular and Cellular Biology Mentorship Application">dku.gm2026@gmail.com</a><p>Complete the form and submit it as an email attachment.</p></div></div>
      </section>

      {activeScholar !== null && (() => {
        const scholar = scholars[activeScholar];
        return <div className="profile-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveScholar(null); }}>
          <div className="profile-dialog" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={`profile-title-${scholar.no}`}>
            <button className="profile-close" type="button" aria-label="Close profile" onClick={() => setActiveScholar(null)}>×</button>
            <div className={`profile-image profile-image-${scholar.no}`}><Image src={scholar.naturalImage} alt={`Portrait of ${scholar.name}`} fill sizes="(max-width: 800px) 100vw, 42vw" unoptimized /><span>MENTOR / {scholar.no}</span></div>
            <div className="profile-content">
              <p className="kicker">GLOBAL SCHOLAR · CORE PROFILE</p>
              <h2 id={`profile-title-${scholar.no}`}>{scholar.name}</h2>
              <p className="profile-title">{scholar.title}</p><p className="profile-org">{scholar.org}</p>
              <ul className="profile-fields">{scholar.fields.map(field => <li key={field}>{field}</li>)}</ul>
              <div className="profile-sections">{scholar.profile.map(([title, text]) => <section key={title}><h3>{title}</h3><p>{text}</p></section>)}</div>
            </div>
          </div>
        </div>;
      })()}

      {posterOpen && <div className="profile-backdrop poster-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setPosterOpen(false); }}>
        <div className="poster-dialog" ref={posterDialogRef} role="dialog" aria-modal="true" aria-labelledby="poster-title">
          <button className="profile-close poster-close" type="button" aria-label="Close recruitment poster" onClick={() => setPosterOpen(false)}>×</button>
          <header><p>2026 GLOBAL MENTORSHIP PROGRAM</p><h2 id="poster-title">Recruitment Poster</h2></header>
          <Image src="/posters/dku-mentorship-2026-poster.png" alt="2026 Global Molecular and Cellular Biology Mentorship recruitment poster" width={1240} height={1754} unoptimized />
        </div>
      </div>}

      <footer>
        <a className="brand footer-brand" href="#top"><Image className="dku-logo" src="/logos/dku-logo.jpg" alt="Dankook University DKU" width={435} height={263} unoptimized /><span className="brand-divider" aria-hidden="true" /><Image className="dia-logo" src="/logos/dia-logo.png" alt="Dankook Institute of Aging DIA" width={149} height={43} unoptimized /><span className="brand-name"><strong>DANKOOK UNIVERSITY</strong><small>DANKOOK INSTITUTE OF AGING · v6 ENG</small></span></a>
        <div className="footer-info"><strong>Global Mentorship Program for Future Leaders in Molecular and Cellular Biology</strong><p><b>HOST</b> Dankook University <span>(Dankook Institute of Aging · College of Medicine · Dankook University Hospital · Department of Medical Science)</span></p><p><b>SUPPORTED BY</b> Ministry of Health and Welfare · Korea Health Industry Development Institute</p><p><b>CONTACT</b> <a href="mailto:dku.gm2026@gmail.com">dku.gm2026@gmail.com</a></p><p>119 Dandae-ro, Dongnam-gu, Cheonan-si, Chungcheongnam-do, Republic of Korea</p></div>
        <div className="footer-meta"><p>GLOBAL MENTORSHIP PROGRAM<br />FOR FUTURE LEADERS IN<br />MOLECULAR &amp; CELLULAR BIOLOGY</p><a href="#top">TOP ↑</a></div>
        <p className="copyright">© 2026 DANKOOK UNIVERSITY. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
