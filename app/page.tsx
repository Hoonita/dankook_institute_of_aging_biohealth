"use client";

import { useState } from "react";

const researchAreas = [
  { code: "A01", ko: "세포 내 분자기전", en: "Molecular mechanisms", text: "세포 안에서 신호와 물질이 이동하고 기능을 조절하는 원리를 탐구합니다." },
  { code: "A02", ko: "축삭수송·단백질 항상성", en: "Axonal transport & proteostasis", text: "신경세포의 긴 축삭을 따라 일어나는 수송과 단백질 품질 관리 체계를 연구합니다." },
  { code: "A03", ko: "신경세포 기능과 퇴행", en: "Neuronal function & degeneration", text: "세포 수준의 변화가 신경퇴행성질환으로 이어지는 초기 기전을 규명합니다." },
  { code: "A04", ko: "줄기세포 기반 질환모델", en: "Human disease modeling", text: "인간 줄기세포와 조직 모델을 활용해 질환 발생과 치료 반응을 재현합니다." },
  { code: "A05", ko: "디지털 바이오마커·임상중개", en: "Digital biomarkers & translation", text: "기초연구의 발견을 임상 평가와 바이오헬스 기술로 연결합니다." },
];

const programs = [
  { no: "01", type: "LECTURE", title: "글로벌 석학 공개강연", en: "Global Scholar Lecture Series", date: "2026.08 — 11", desc: "최신 분자·세포생물학 연구성과와 글로벌 연구동향을 공유하는 공개형 강연입니다." },
  { no: "02", type: "MENTORING", title: "차세대 연구자 글로벌 멘토링", en: "Global Research Mentoring Program", date: "2026.09 — 11", desc: "연구 관심 분야에 따라 5개 그룹을 구성하고, 그룹별 3회의 1:5 소그룹 멘토링을 진행합니다." },
  { no: "03", type: "CLINIC", title: "연구설계 및 논문리뷰 컨설팅", en: "Research Design & Review Clinic", date: "2026.09 — 11", desc: "연구질문, 실험설계, 연구계획서와 학술발표 자료를 단계적으로 고도화합니다." },
  { no: "04", type: "NETWORK", title: "연구자 교류 및 네트워킹 포럼", en: "Global Research Networking Forum", date: "2026.11 — 12", desc: "해외 석학, 중점 양성자, 국내 연구자가 연구경험과 국제 진로를 나누는 교류의 장입니다." },
  { no: "05", type: "SYMPOSIUM", title: "바이오헬스 국제학술세미나", en: "Biohealth International Symposium", date: "2026.12", desc: "기조강연, Young Investigator Session, 패널토론과 연구자 라운드테이블을 연결합니다." },
];

const scholars = [
  { no: "01", status: "핵심 Global Research Mentor", name: "Giampietro Schiavo", org: "UCL · UK Dementia Research Institute", fields: ["Molecular & Cellular Biology", "Axonal Transport", "Neurodegeneration"], role: "공개강연 · 소그룹 멘토링 · 연구설계 컨설팅 · 기조강연" },
  { no: "02", status: "초빙 예정", name: "Dennis Chan", org: "University College London", fields: ["Cognitive Neuroscience", "Translational Research", "Digital Biomarkers"], role: "국제학술세미나 · 온라인 연구교류 · 네트워킹" },
  { no: "03", status: "초빙 예정", name: "Tiago Rito", org: "The University of Hong Kong", fields: ["Stem Cell Biology", "Tissue Engineering", "Human Disease Modeling"], role: "국제학술세미나 · 온라인 연구교류 · 네트워킹" },
];

const timeline = [
  ["07—08", "모집과 연결", "석학 일정 협의 · 중점 양성자 모집 · 연구수요 조사"],
  ["08—09", "첫 질문", "공개강연 · 멘토–멘티 매칭 · 1차 멘토링"],
  ["10", "설계와 검증", "논문 리뷰 · 연구방법론 자문 · 연구질문 구체화"],
  ["11", "발표 준비", "연구계획 발표 · 네트워킹 · Young Investigator 선발"],
  ["12", "성과와 확장", "국제학술세미나 · 성과 공유 · 후속 연구교류"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openProgram, setOpenProgram] = useState(1);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      <a className="skip-link" href="#content">본문으로 바로가기</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="단국 바이오 아틀라스 홈" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <span>DANKOOK<br />BIO ATLAS</span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span>{menuOpen ? "닫기" : "메뉴"}</span><i aria-hidden="true" />
        </button>
        <nav id="main-nav" className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="주요 메뉴">
          <a href="#about" onClick={closeMenu}>사업 소개</a>
          <a href="#research" onClick={closeMenu}>연구 분야</a>
          <a href="#programs" onClick={closeMenu}>프로그램</a>
          <a href="#scholars" onClick={closeMenu}>글로벌 석학</a>
          <a href="#schedule" onClick={closeMenu}>일정</a>
        </nav>
        <a className="header-cta" href="#apply">멘토십 안내 <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Global Molecular &amp; Cellular Biology Mentorship · 2026</p>
          <h1>세포 안의 움직임에서,<br /><em>미래 의생명 연구</em>의<br />방향을 찾다</h1>
          <p className="hero-lead">세계적 석학과 젊은 연구자가 함께 질문하고 설계하는 지속형 연구 멘토십. 분자 기전에서 인간 질환 모델까지, 연구의 다음 좌표를 연결합니다.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#programs">프로그램 탐색 <span>↘</span></a>
            <a className="button button-quiet" href="#research">연구 지도 보기</a>
          </div>
        </div>
        <div className="atlas" role="img" aria-label="세포 내 분자기전에서 임상중개로 확장되는 연구 아틀라스">
          <div className="atlas-grid" aria-hidden="true" />
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="cell-core"><span>CELLULAR<br />TRANSPORT</span><small>CORE / A01</small></div>
          <div className="cell-node node-one">PROTEIN</div>
          <div className="cell-node node-two" aria-hidden="true" />
          <div className="cell-node node-three" aria-hidden="true" />
          <p className="annotation annotation-one"><b>A01</b> Molecular mechanism<br />세포 내 분자기전</p>
          <p className="annotation annotation-two"><b>A03</b> Neurodegeneration<br />신경세포 기능과 퇴행</p>
          <p className="annotation annotation-three"><b>A05</b> Clinical translation<br />디지털 바이오마커</p>
          <span className="atlas-index">DKU / BIOHEALTH / 2026</span>
        </div>
      </section>

      <section className="metrics" aria-label="프로그램 주요 수치">
        <div><strong>3</strong><span>GLOBAL SCHOLARS</span><small>해외 석학</small></div>
        <div><strong>25</strong><span>EMERGING RESEARCHERS</span><small>선발 예정 인원</small></div>
        <div><strong>5</strong><span>MENTORING GROUPS</span><small>소그룹 연구 연결</small></div>
        <div><strong>3</strong><span>SESSIONS PER GROUP</span><small>그룹별 멘토링</small></div>
      </section>

      <div id="content" className="light-surface">
        <section id="about" className="section intro-section">
          <div className="section-label"><span>00</span><p>PROGRAM<br />ORIENTATION</p></div>
          <div className="intro-copy">
            <p className="kicker">GLOBAL MENTORSHIP, BUILT TO CONTINUE</p>
            <h2>듣고 끝나는 강연이 아닌,<br /><em>연구가 시작되는 관계</em></h2>
            <p className="large-copy">단국대학교의 국제공동연구 경험을 바탕으로 해외 석학과 국내 대학(원)생, 의대생, 전공의, 박사후연구원을 연결합니다. 연구주제 발굴부터 계획서, 논문, 학술발표까지 한 사람의 연구가 성장하는 전 과정을 함께합니다.</p>
            <div className="principles">
              <article><span>DEEP SCIENCE</span><h3>분자에서 질환까지</h3><p>기초 분자기전과 질환모델, 임상중개를 하나의 연구 시야로 연결합니다.</p></article>
              <article><span>GUIDED RESEARCH</span><h3>구체적인 결과물</h3><p>Research Proposal, 논문 초록 또는 연구발표 자료를 완성합니다.</p></article>
              <article><span>GLOBAL CONNECTION</span><h3>지속되는 네트워크</h3><p>UCL, UK DRI, HKU와의 교류를 후속 연구협력으로 확장합니다.</p></article>
            </div>
          </div>
        </section>

        <section id="research" className="section research-section">
          <header className="section-heading">
            <div><span>01 / RESEARCH COORDINATES</span><p>MOLECULAR → CELLULAR → TRANSLATIONAL</p></div>
            <h2>하나의 세포에서 시작해<br />임상 연구까지 이어지는 경로</h2>
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
            <p className="kicker">02 / FIVE CONNECTED PROGRAMS</p>
            <h2>듣는 강연에서<br /><em>설계하는 연구로</em></h2>
            <p>공개강연, 소그룹 멘토링, 연구설계 컨설팅, 네트워킹과 국제학술세미나가 하나의 성장 여정으로 연결됩니다.</p>
            <div className="program-key"><span>OPEN</span> 공개 프로그램 <span>SELECTED</span> 중점 양성자 프로그램</div>
          </div>
          <div className="program-list">
            {programs.map((program, index) => {
              const isOpen = openProgram === index;
              return <article className={isOpen ? "program-row is-open" : "program-row"} key={program.no}>
                <button type="button" aria-expanded={isOpen} onClick={() => setOpenProgram(isOpen ? -1 : index)}>
                  <span>{program.no}</span><div><small>{program.type}</small><h3>{program.title}</h3><p>{program.en}</p></div><time>{program.date}</time><i aria-hidden="true">{isOpen ? "−" : "+"}</i>
                </button>
                {isOpen && <div className="program-detail"><p>{program.desc}</p><a href="#schedule">연간 일정에서 확인 <span>→</span></a></div>}
              </article>;
            })}
          </div>
        </section>
      </div>

      <section id="scholars" className="dark-section scholars-section">
        <header className="dark-heading"><div><span>03</span><p>GLOBAL<br />RESEARCH MENTORS</p></div><div><p className="kicker">THREE PERSPECTIVES, ONE RESEARCH JOURNEY</p><h2>세계의 연구 현장과<br />당신의 질문을 연결합니다</h2></div></header>
        <div className="scholar-grid">
          {scholars.map((scholar) => <article key={scholar.no}>
            <div className="scholar-top"><span>MENTOR / {scholar.no}</span><small>{scholar.status}</small></div>
            <div className={`portrait portrait-${scholar.no}`} aria-hidden="true"><i /><b>{scholar.name.split(" ").map(n => n[0]).join("")}</b></div>
            <h3>{scholar.name}</h3><p className="org">{scholar.org}</p>
            <ul>{scholar.fields.map(field => <li key={field}>{field}</li>)}</ul>
            <p className="scholar-role"><span>ROLE</span>{scholar.role}</p>
          </article>)}
        </div>
      </section>

      <section id="schedule" className="timeline-section">
        <div className="timeline-intro"><p className="kicker">04 / 2026 FIELD LOG</p><h2>질문이 연구가 되는<br />여섯 달의 여정</h2><p>모집과 매칭부터 연구설계, 성과발표와 후속 네트워크까지 단계적으로 이어집니다.</p></div>
        <div className="timeline">
          {timeline.map(([month, title, desc], index) => <article key={month}><time>{month}</time><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{desc}</p></div></article>)}
        </div>
      </section>

      <section id="apply" className="apply-section">
        <div className="apply-atlas" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="apply-copy"><p className="kicker">05 / FOR EMERGING RESEARCHERS</p><h2>당신의 연구 질문을<br /><em>세계와 연결할 차례</em></h2><p>만 40세 미만 대학(원)생, 의대생, 전공의(MD), 박사후연구원 및 젊은 연구자를 대상으로 약 25명을 선발할 예정입니다.</p><div className="apply-notes"><span>1:5 소그룹</span><span>그룹별 3회</span><span>회차별 2시간 이상</span><span>성과물 1건 이상</span></div><a className="button button-primary" href="mailto:bumlee@dankook.ac.kr?subject=글로벌 분자·세포생물학 멘토십 문의">프로그램 문의하기 <span>↗</span></a></div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true"><i /></span><span>DANKOOK<br />BIO ATLAS</span></a>
        <div><strong>글로벌 분자·세포생물학 미래인재 양성 멘토십 프로그램</strong><p>단국대학교 의과대학 · 단국대학교병원 · 단국노화연구소</p><p>충청남도 천안시 동남구 단대로 119</p></div>
        <div className="footer-meta"><p>GLOBAL MENTORSHIP PROGRAM<br />FOR FUTURE LEADERS IN<br />MOLECULAR &amp; CELLULAR BIOLOGY</p><a href="#top">TOP ↑</a></div>
        <p className="copyright">© 2026 DANKOOK UNIVERSITY. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
