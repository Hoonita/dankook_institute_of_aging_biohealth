"use client";

import { useState } from "react";
import Image from "next/image";

const researchAreas = [
  { code: "A01", ko: "세포 내 분자기전", en: "Molecular mechanisms", text: "세포 안에서 신호와 물질이 이동하고 기능을 조절하는 원리를 탐구합니다." },
  { code: "A02", ko: "축삭수송·단백질 항상성", en: "Axonal transport & proteostasis", text: "신경세포의 긴 축삭을 따라 일어나는 수송과 단백질 품질 관리 체계를 연구합니다." },
  { code: "A03", ko: "신경세포 기능과 퇴행", en: "Neuronal function & degeneration", text: "세포 수준의 변화가 신경퇴행성질환으로 이어지는 초기 기전을 규명합니다." },
  { code: "A04", ko: "줄기세포 기반 질환모델", en: "Human disease modeling", text: "인간 줄기세포와 조직 모델을 활용해 질환 발생과 치료 반응을 재현합니다." },
  { code: "A05", ko: "디지털 바이오마커·임상중개", en: "Digital biomarkers & translation", text: "기초연구의 발견을 임상 평가와 바이오헬스 기술로 연결합니다." },
];

const tracks = [
  {
    no: "01", short: "MOLECULAR / CELLULAR", title: "인간질환의 고급 분자·세포생물학적 기전",
    en: "Advanced Molecular and Cellular Mechanisms of Human Disease",
    goal: "MD 참여자가 임상현장의 미충족 수요를 세포 신호전달, 물질수송, 소기관 기능, 단백질 항상성, 염증과 세포 스트레스에 기반한 검증 가능한 연구질문으로 전환합니다.",
    result: "분자·세포기전 연구계획서 · 조별 연구발표 또는 포스터 · 내러티브/스코핑 리뷰 초안",
    weeks: [
      ["01", "9월 1주", "오리엔테이션 및 그룹 편성", "개인별 임상질문 2–3개와 관심 질환 목록"],
      ["02", "9월 2주", "연구계획 초안 구성", "연구질문·목적·잠정 가설"],
      ["03", "9월 3주", "멘토링 1 및 컨설팅 1", "중심가설과 기전 개념도 초안"],
      ["04", "9월 4주", "기조강연 1 및 네트워킹 1", "세포 내 수송·소기관 기능 연계 메모"],
      ["05", "10월 1주", "실습 1 — Genotyping", "APOE PCR·gel image와 genotype 판정표"],
      ["06", "10월 2주", "실습 2 — Cell Culture", "배양 기록과 세포 품질관리 체크리스트"],
      ["07", "10월 3주", "실습 3 — Protein Analysis", "SDS-PAGE 및 band 정량·해석 결과"],
      ["08", "10월 4주", "멘토링 2 및 컨설팅 2", "수정 Specific aims와 실험군 구성"],
      ["09", "11월 1주", "기조강연 2 및 네트워킹 2", "인과성·재현성 기반 중간 연구설계"],
      ["10", "11월 2주", "AI 학술발표 특강 및 특별네트워킹", "학술발표 초안과 기전·실험 흐름도"],
      ["11", "11월 3주", "AI 학술논문 특강 및 특별네트워킹", "연구계획서와 Review article 초안"],
      ["12", "11월 4주", "멘토링 3 및 컨설팅 3", "최종 연구계획서와 멘토링 결과보고서"],
      ["13", "12월 1주", "국제학술세미나", "구두/포스터 발표와 최종 성과물"],
    ],
  },
  {
    no: "02", short: "DISEASE MODELING", title: "인간 질환모델링과 실험적 중개연구",
    en: "Human Disease Modeling and Experimental Translation",
    goal: "MD 참여자가 임상질환을 재현할 2D·primary cell, iPSC, 오가노이드, 동물·조직공학 모델을 선택하고 타당성, 한계와 재현성을 검증합니다.",
    result: "질환모델 연구계획서 · 조별 발표 또는 포스터 · 모델 품질관리표 · 전임상–임상 translation map",
    weeks: [
      ["01", "9월 1주", "오리엔테이션 및 그룹 편성", "관심 질환과 후보 질환모델 목록"],
      ["02", "9월 2주", "연구계획 초안 구성", "질환기전–표현형–후보 모델 연결표"],
      ["03", "9월 3주", "멘토링 1 및 컨설팅 1", "중심가설과 모델 선정기준"],
      ["04", "9월 4주", "기조강연 1 및 네트워킹 1", "질환기전–모델 연계와 모델링 전략"],
      ["05", "10월 1주", "실습 1 — Genotyping", "APOE 유전형–질환표현형 연계표"],
      ["06", "10월 2주", "실습 2 — Cell Culture", "세포모델 품질관리 체크리스트"],
      ["07", "10월 3주", "실습 3 — Protein Analysis", "분자표현형과 후보 바이오마커 분석"],
      ["08", "10월 4주", "멘토링 2 및 컨설팅 2", "최종 모델·대조군·endpoint·Specific aims"],
      ["09", "11월 1주", "기조강연 2 및 네트워킹 2", "기전 검증과 재현성 기반 실험 흐름도"],
      ["10", "11월 2주", "AI 학술발표 특강 및 특별네트워킹", "질환모델 연구발표와 연구모식도"],
      ["11", "11월 3주", "AI 학술논문 특강 및 특별네트워킹", "재현성·편향 관리계획과 논문 초안"],
      ["12", "11월 4주", "멘토링 3 및 컨설팅 3", "최종 프로토콜과 translation map"],
      ["13", "12월 1주", "국제학술세미나", "모델 타당성·재현성·임상중개 평가"],
    ],
  },
];

const scholars = [
  { no: "01", status: "핵심 Global Research Mentor", name: "Giampietro Schiavo", org: "UCL · UK Dementia Research Institute", image: "/mentors/giampietro-schiavo.png", fields: ["Molecular & Cellular Biology", "Axonal Transport", "Neurodegeneration"], role: "공개강연 · 소그룹 멘토링 · 연구설계 컨설팅 · 기조강연" },
  { no: "02", status: "", name: "Dennis Chan", org: "University College London", image: "/mentors/dennis-chan.png", fields: ["Cognitive Neuroscience", "Translational Research", "Digital Biomarkers"], role: "국제학술세미나 · 온라인 연구교류 · 네트워킹" },
  { no: "03", status: "", name: "Tiago Rito", org: "The University of Hong Kong", image: "/mentors/tiago-rito.png", fields: ["Stem Cell Biology", "Tissue Engineering", "Human Disease Modeling"], role: "국제학술세미나 · 온라인 연구교류 · 네트워킹" },
];

const selectionCriteria = [
  { weight: "40", code: "RESEARCH FIT", title: "연구 분야 적합성", text: "분자·세포생물학 핵심 개념에 대한 이해도와 연구계획의 구체성, 임상 또는 생명과학적 질문을 검증 가능한 연구주제로 발전시킬 가능성을 종합적으로 평가합니다." },
  { weight: "30", code: "GLOBAL READINESS", title: "국제 연구 역량", text: "해외 연구자와 학술적으로 소통할 수 있는 기본 역량, 국제 공동연구 활동에 대한 준비도와 새로운 연구환경에 적극적으로 참여하는 태도를 평가합니다." },
  { weight: "30", code: "CAREER COMMITMENT", title: "연구 진로 계획", text: "분자·세포생물학 및 바이오헬스 분야의 중장기 목표가 구체적인지, 프로그램 성과를 후속 연구와 학술활동으로 이어갈 의지가 있는지를 평가합니다." },
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
  const [activeTrack, setActiveTrack] = useState(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      <a className="skip-link" href="#content">본문으로 바로가기</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="단국대학교 단국노화연구소 홈" onClick={closeMenu}>
          <Image className="dku-logo" src="/logos/dku-logo.jpg" alt="단국대학교 DKU" width={435} height={263} unoptimized />
          <span className="brand-divider" aria-hidden="true" />
          <Image className="dia-logo" src="/logos/dia-logo.png" alt="단국노화연구소 DIA" width={149} height={43} unoptimized />
          <span className="brand-name"><strong>DANKOOK UNIVERSITY</strong><small>DANKOOK INSTITUTE OF AGING</small></span>
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
          <a href="#selection" onClick={closeMenu}>선발 기준</a>
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
          <span className="atlas-index">DANKOOK UNIVERSITY / DIA / 2026</span>
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
            <p className="large-copy">단국대학교의 국제공동연구 경험과 단국노화연구소(Dankook Institute of Aging)의 연구 네트워크를 바탕으로 해외 석학과 국내 대학(원)생, 의대생, 전공의, 박사후연구원을 연결합니다. 연구주제 발굴부터 계획서, 논문, 학술발표까지 한 사람의 연구가 성장하는 전 과정을 함께합니다.</p>
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
            <p className="kicker">02 / TWO INTENSIVE TRACKS · 13 WEEKS</p>
            <h2>임상의 질문을<br /><em>검증 가능한 연구로</em></h2>
            <p>9월부터 12월까지 두 개의 13주 트랙을 운영합니다. 국내 연구진의 설계 지도, 3회의 글로벌 멘토링, Wet-lab 실습과 국제학술세미나가 하나의 과정으로 이어집니다.</p>
            <div className="program-key"><span>5 GROUPS</span> 순환·동시 실습 <span>3 VISITS</span> 글로벌 석학 집중 멘토링</div>
          </div>
          <div className="track-panel">
            <div className="track-tabs" role="tablist" aria-label="13주 프로그램 선택">
              {tracks.map((track, index) => <button key={track.no} type="button" role="tab" aria-selected={activeTrack === index} aria-controls={`track-${track.no}`} onClick={() => setActiveTrack(index)}><span>PROGRAM {track.no}</span>{track.short}</button>)}
            </div>
            {tracks.map((track, index) => <article id={`track-${track.no}`} role="tabpanel" hidden={activeTrack !== index} className="track-detail" key={track.no}>
              <header><span>PROGRAM {track.no} / SEP — DEC 2026</span><h3>{track.title}</h3><p className="track-en">{track.en}</p><p>{track.goal}</p><div><b>FINAL OUTPUT</b>{track.result}</div></header>
              <div className="week-list">
                {track.weeks.map(([week, date, title, output]) => <div className="week-row" key={week}><span>{week}</span><time>{date}</time><h4>{title}</h4><p>{output}</p></div>)}
              </div>
              <aside className="lab-note"><b>WET-LAB OPERATING PRINCIPLE</b><p>5개 그룹이 순환 또는 동시 참여하며, 오전에는 실험원리·안전교육·SOP를 익히고 오후에는 직접 실험과 결과 정리를 수행합니다.</p><span>GENOTYPING</span><span>CELL CULTURE</span><span>PROTEIN ANALYSIS</span></aside>
            </article>)}
          </div>
        </section>
      </div>

      <section id="scholars" className="dark-section scholars-section">
        <header className="dark-heading"><div><span>03</span><p>GLOBAL<br />RESEARCH MENTORS</p></div><div><p className="kicker">THREE PERSPECTIVES, ONE RESEARCH JOURNEY</p><h2>세계의 연구 현장과<br />당신의 질문을 연결합니다</h2></div></header>
        <div className="scholar-grid">
          {scholars.map((scholar) => <article key={scholar.no}>
            <div className="scholar-top"><span>MENTOR / {scholar.no}</span>{scholar.status && <small>{scholar.status}</small>}</div>
            <div className={`portrait portrait-${scholar.no}`}><Image src={scholar.image} alt={`${scholar.name} 교수`} fill sizes="(max-width: 720px) 100vw, (max-width: 1000px) 50vw, 33vw" unoptimized /><span aria-hidden="true">{scholar.no}</span></div>
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

      <section id="selection" className="selection-section">
        <header><p className="kicker">SELECTION CRITERIA</p><h2>선발 기준</h2><p>연구 적합성과 국제 협업 준비도, 지속적인 연구 성장 가능성을 균형 있게 살펴봅니다.</p></header>
        <div className="criteria-grid">
          {selectionCriteria.map((criterion, index) => <article key={criterion.code}>
            <div><strong>{criterion.weight}<small>%</small></strong><span>0{index + 1} / {criterion.code}</span></div>
            <h3>{criterion.title}</h3><p>{criterion.text}</p>
          </article>)}
        </div>
        <p className="criteria-note">※ 선발 세부 기준은 내규에 따르며, 제출된 신청서 내용에 따라 선발 예정</p>
      </section>

      <section id="apply" className="apply-section">
        <div className="apply-atlas" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="apply-copy"><p className="kicker">05 / FOR EMERGING RESEARCHERS</p><h2>당신의 연구 질문을<br /><em>세계와 연결할 차례</em></h2><p>만 40세 미만 대학(원)생, 의대생, 전공의(MD), 박사후연구원 및 젊은 연구자를 대상으로 약 25명을 선발할 예정입니다.</p><div className="apply-notes"><span>1:5 소그룹</span><span>그룹별 3회</span><span>회차별 2시간 이상</span><span>성과물 1건 이상</span></div><div className="apply-actions"><a className="button button-primary" href="mailto:dku_gm2026@gmail.com?subject=글로벌 분자·세포생물학 멘토십 프로그램 신청 문의">프로그램 문의하기 <span>↗</span></a><a className="button button-download" href="/downloads/dku-global-mentorship-application-2026.docx" download="[서식1-4] 2026년_바이오헬스_글로벌_석학_멘토십_프로그램_지원서식_v1.docx">멘토링 프로그램 참여신청서 양식 다운로드 <span>DOCX ↓</span></a></div><div className="application-guide"><span>신청 이메일</span><a href="mailto:dku_gm2026@gmail.com?subject=글로벌 분자·세포생물학 멘토십 프로그램 신청">dku_gm2026@gmail.com</a><p>신청서 작성 후 첨부하여 제출</p></div></div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><Image className="dku-logo" src="/logos/dku-logo.jpg" alt="단국대학교 DKU" width={435} height={263} unoptimized /><span className="brand-divider" aria-hidden="true" /><Image className="dia-logo" src="/logos/dia-logo.png" alt="단국노화연구소 DIA" width={149} height={43} unoptimized /><span className="brand-name"><strong>DANKOOK UNIVERSITY</strong><small>DANKOOK INSTITUTE OF AGING · v3.1</small></span></a>
        <div className="footer-info"><strong>글로벌 분자·세포생물학 미래인재 양성 멘토십 프로그램</strong><p><b>주관</b> 단국대학교 <span>(단국노화연구소 DIA · 의과대학 · 단국대학교병원 · 의학융합학과)</span></p><p><b>지원</b> 보건복지부 · 한국보건산업진흥원</p><p><b>문의</b> <a href="mailto:dku_gm2026@dankook.ac.kr">dku_gm2026@dankook.ac.kr</a></p><p>충청남도 천안시 동남구 단대로 119</p></div>
        <div className="footer-meta"><p>GLOBAL MENTORSHIP PROGRAM<br />FOR FUTURE LEADERS IN<br />MOLECULAR &amp; CELLULAR BIOLOGY</p><a href="#top">TOP ↑</a></div>
        <p className="copyright">© 2026 DANKOOK UNIVERSITY. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
