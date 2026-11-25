import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Github, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { DeveloperTerminal } from "@/components/DeveloperTerminal";
import { ProjectVisual } from "@/components/ProjectVisual";
import { certificates, education, experience, profile, projects, skillGroups, strengths } from "@/data/portfolio";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Nguyễn Đức Anh home"><span className="brand-mark" aria-hidden="true"><Code2 size={17} strokeWidth={2.3} /></span><span>{profile.name}<small>JUNIOR FULL-STACK DEVELOPER</small></span></a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#strengths">What I bring</a><a href="#skills">Tech stack</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href={`mailto:${profile.email}`}>Let&apos;s talk <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero section-wrap" id="home">
        <Reveal className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> OPEN TO JUNIOR FULL-STACK ROLES <span className="eyebrow-line" /> HANOI, VIETNAM</div>
          <div className="hero-person">
            <span className="hero-photo-frame"><Image src="/images/profile.jpg" alt="Nguyễn Đức Anh" width={84} height={84} priority className="hero-photo" /></span>
            <span className="hero-person-details"><strong>{profile.name}</strong><small>{profile.role}</small></span>
            <span className="person-location"><MapPin size={12} /> HANOI, VN</span>
          </div>
          <h1>Building full-stack<br /><span>web experiences</span><br />from UI to API<span className="title-period">.</span></h1>
          <p className="hero-description">Với khoảng một năm kinh nghiệm phát triển và duy trì ứng dụng web, mình xây dựng giao diện bằng React.js, Next.js và phát triển API với Node.js, NestJS.</p>
          <div className="hero-links"><a className="button-primary" href="#projects">View selected work <ArrowRight size={16} /></a><a className="text-link" href={`mailto:${profile.email}`}><Mail size={15} /> Contact me</a></div>
        </Reveal>
        <Reveal delay={0.12} className="hero-aside">
          <DeveloperTerminal />
          <div className="hero-note"><Sparkles size={14} /><span>From interface to API.<br /><b>Built with care, end to end.</b></span></div>
        </Reveal>
        <div className="hero-footnote"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /><span className="footnote-rule" /><span>01 — 06</span></div>
      </section>

      <section className="intro-strip" id="about">
        <div className="section-wrap intro-inner">
          <Reveal className="intro-label"><span className="section-kicker">PROFILE / AT A GLANCE</span><span className="intro-star">✳</span></Reveal>
          <Reveal delay={0.08} className="intro-content"><p>{profile.introduction}</p><div className="metrics"><div><strong>{profile.yearsExperience}</strong><span>PROFESSIONAL<br />EXPERIENCE</span></div><div><strong>{profile.gpa}</strong><span>FPT POLYTECHNIC<br />GPA</span></div><div><strong>{profile.certificates}</strong><span>COMPLETED<br />CERTIFICATES</span></div><div><strong>Full<span>-</span>Stack</strong><span>CAREER<br />FOCUS</span></div></div></Reveal>
        </div>
      </section>

      <section className="section-wrap strengths-section" id="strengths">
        <Reveal className="section-heading"><div><span className="section-kicker">02 / CORE STRENGTHS <span>✳</span></span><h2>How I contribute<br />to a team<span className="title-period">.</span></h2></div><p>Frontend, backend, data, and deployment experience shaped by the work listed in my CV.</p></Reveal>
        <div className="strength-grid">{strengths.map((item, index) => <Reveal key={item.number} delay={index * 0.06}><article className="strength-card"><div className="strength-card-top"><span>{item.number} / 04</span><span className="strength-icon">{item.icon}</span></div><h3>{item.title}</h3><p>{item.description}</p><div className="tag-row">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article></Reveal>)}</div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-wrap skills-inner"><Reveal className="skills-heading"><div><span className="section-kicker">03 / TECH STACK <span>✳</span></span><h2>Tools I work with<span className="title-period">.</span></h2></div><p>Technologies and tools used across my professional work and development workflow.</p></Reveal>
          <div className="skill-groups">{skillGroups.map((group, index) => <Reveal key={group.title} delay={index * 0.06} className="skill-group"><div className="skill-group-title"><span className="skill-bullet">0{index + 1}</span><h3>{group.title}</h3></div><div className="skill-chips">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></Reveal>)}</div>
          <div className="skills-footer"><span><i /> DEV WORKFLOW</span><span>Version control, containers &amp; API documentation <ArrowUpRight size={13} /></span></div>
        </div>
      </section>

      <section className="section-wrap projects-section" id="projects">
        <Reveal className="section-heading projects-heading"><div><span className="section-kicker">04 / SELECTED WORK <span>✳</span></span><h2>Projects in practice<span className="title-period">.</span></h2></div><p>Professional work and my graduation project, presented with details from my CV.</p></Reveal>
        <div className="project-list">{projects.map((project, index) => <Reveal key={project.number} delay={index * 0.08}><article className="project-card"><div className="project-info"><div className="project-meta"><span>{project.category}</span><span>0{index + 1} — 03</span></div><h3>{project.title}</h3><p>{project.description}</p>{project.stack.length > 0 && <div className="project-stack">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div>}<a className="project-link" href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined} rel={project.link.startsWith("http") ? "noreferrer" : undefined}>{project.linkLabel} <ArrowUpRight size={15} /></a></div><ProjectVisual type={project.visual} accent={project.accent} /></article></Reveal>)}</div>
      </section>

        <section className="experience-section" id="experience">
          <div className="section-wrap experience-inner">
            <Reveal className="section-heading experience-heading"><div><span className="section-kicker">05 / CAREER &amp; EDUCATION <span>✳</span></span><h2>Experience &amp; education<span className="title-period">.</span></h2></div><a className="resume-link" href={`mailto:${profile.email}?subject=Request%20for%20full%20CV`}>Request official resume (PDF) <ArrowUpRight size={14} /></a></Reveal>
            <Reveal className="resume-card"><div className="resume-card-heading"><div><span className="resume-symbol">↗</span><h3>{experience.role}</h3><span className="resume-company">— {experience.company}</span></div><time>{experience.period}</time></div><ul className="experience-bullets">{experience.bullets.map(item => <li key={item}>{item}</li>)}</ul></Reveal>
            <Reveal delay={0.08} className="resume-card education-card"><div className="resume-card-heading"><div><span className="resume-symbol education-symbol">⌂</span><h3>{education.school}</h3><span className="resume-company">— Major: {education.major}</span></div><time>{education.period}</time></div><div className="education-details"><span className="gpa-pill">GPA&nbsp; {education.gpa}</span>{education.highlights.map(item => <p key={item}><span>↗</span>{item}</p>)}</div></Reveal>
            <Reveal delay={0.14} className="resume-card certificates-card"><div className="certificate-heading"><span>◉</span><h3>Certificates &amp; continuous learning</h3></div><div className="certificate-list">{certificates.map(item => <div key={item.title}><strong>{item.title}</strong><small>{item.provider}</small><time>{item.date}</time></div>)}</div></Reveal>
          </div>
        </section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-card"><Reveal className="contact-details"><span className="section-kicker">06 / LET&apos;S BUILD SOMETHING <span>✳</span></span><h2>Have a role in mind?<br />Let&apos;s talk<span className="title-period">.</span></h2><p>I am available for interviews and open to Junior Full-Stack Developer opportunities. Reach out to discuss a role or collaboration.</p><a className="contact-detail" href={`mailto:${profile.email}`}><span className="contact-icon"><Mail size={15} /></span><span><small>EMAIL</small><strong>{profile.email}</strong></span></a><a className="contact-detail" href={`tel:${profile.phone.replaceAll(" ", "")}`}><span className="contact-icon"><Phone size={15} /></span><span><small>PHONE &amp; ZALO</small><strong>{profile.phone}</strong></span></a><a className="contact-detail" href={profile.github} target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={15} /></span><span><small>GITHUB PROFILE</small><strong>github.com/DEVducanh</strong></span></a><div className="contact-detail"><span className="contact-icon location-icon"><MapPin size={15} /></span><span><small>LOCATION</small><strong>{profile.location}</strong></span></div><a className="cv-request" href={`mailto:${profile.email}?subject=Request%20for%20complete%20CV`}>Request complete CV (PDF) <ArrowUpRight size={13} /></a></Reveal><ContactForm /></div></section>

      <footer className="site-footer"><div className="section-wrap footer-inner"><a className="brand footer-brand" href="#home"><span className="brand-mark" aria-hidden="true"><Code2 size={17} strokeWidth={2.3} /></span><span>{profile.name}<small>JUNIOR FULL-STACK DEVELOPER · {profile.location}</small></span></a><span className="footer-note">{profile.email} &nbsp;·&nbsp; {profile.phone}</span><div className="social-links"><a href={profile.github} aria-label="GitHub"><Github size={17} /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17} /></a></div></div></footer>
    </main>
  );
}
