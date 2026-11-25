import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Github, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { DeveloperTerminal } from "@/components/DeveloperTerminal";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { certificates, education, experience, profile, skillGroups } from "@/data/portfolio";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Nguyễn Đức Anh home"><span className="brand-mark" aria-hidden="true"><Code2 size={17} strokeWidth={2.3} /></span><span>{profile.name}<small>JUNIOR FULL-STACK DEVELOPER</small></span></a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#skills">Tech stack</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
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
        <div className="hero-footnote"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /><span className="footnote-rule" /><span>01 — 05</span></div>
      </section>

      <section className="intro-strip">
        <div className="section-wrap intro-inner">
          <Reveal className="intro-label" id="about"><span className="section-kicker">PROFILE / AT A GLANCE</span><span className="intro-star">✳</span></Reveal>
          <Reveal delay={0.08} className="intro-content"><p>{profile.introduction}</p><div className="metrics"><div><strong>{profile.yearsExperience}</strong><span>PROFESSIONAL<br />EXPERIENCE</span></div><div><strong>{profile.gpa}</strong><span>FPT POLYTECHNIC<br />GPA</span></div><div><strong>{profile.certificates}</strong><span>COMPLETED<br />CERTIFICATES</span></div><div><strong>Full<span>-</span>Stack</strong><span>CAREER<br />FOCUS</span></div></div></Reveal>
        </div>
      </section>

      <section className="skills-section">
        <div className="section-wrap skills-inner"><Reveal className="skills-heading" id="skills"><div><span className="section-kicker">02 / TECH STACK <span>✳</span></span><h2>Tools I work with<span className="title-period">.</span></h2></div><p>Technologies and tools used across my professional work and development workflow.</p></Reveal>
          <div className="skill-groups">{skillGroups.map((group, index) => <Reveal key={group.title} delay={index * 0.06} className="skill-group"><div className="skill-group-title"><span className="skill-bullet">0{index + 1}</span><h3>{group.title}</h3></div><div className="skill-chips">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></Reveal>)}</div>
          <div className="skills-footer"><span><i /> DEV WORKFLOW</span><span>Version control, containers &amp; API documentation <ArrowUpRight size={13} /></span></div>
        </div>
      </section>

      <section className="section-wrap projects-section">
        <Reveal className="section-heading projects-heading" id="projects"><div><span className="section-kicker">03 / SELECTED WORK <span>✳</span></span><h2>Projects in practice<span className="title-period">.</span></h2></div><p>Professional work and my graduation project, presented with details from my CV.</p></Reveal>
        <ProjectsShowcase />
      </section>

        <section className="experience-section">
          <div className="section-wrap experience-inner">
            <Reveal className="section-heading experience-heading" id="experience"><div><span className="section-kicker">04 / CAREER &amp; EDUCATION <span>✳</span></span><h2>Experience &amp; education<span className="title-period">.</span></h2></div><a className="resume-link" href={`mailto:${profile.email}?subject=Request%20for%20full%20CV`}>Request official resume (PDF) <ArrowUpRight size={14} /></a></Reveal>
            <Reveal className="resume-card"><div className="resume-card-heading"><div><span className="resume-symbol">↗</span><h3>{experience.role}</h3><span className="resume-company">— {experience.company}</span></div><time>{experience.period}</time></div><ul className="experience-bullets">{experience.bullets.map(item => <li key={item}>{item}</li>)}</ul></Reveal>
            <Reveal delay={0.08} className="resume-card education-card"><div className="resume-card-heading"><div><span className="resume-symbol education-symbol">⌂</span><h3>{education.school}</h3><span className="resume-company">— Major: {education.major}</span></div><time>{education.period}</time></div><div className="education-details"><span className="gpa-pill">GPA&nbsp; {education.gpa}</span>{education.highlights.map(item => <p key={item}><span>↗</span>{item}</p>)}</div></Reveal>
            <Reveal delay={0.14} className="resume-card certificates-card"><div className="certificate-heading"><span>◉</span><h3>Certificates &amp; continuous learning</h3></div><div className="certificate-list">{certificates.map(item => <div key={item.title}><strong>{item.title}</strong><small>{item.provider}</small><time>{item.date}</time></div>)}</div></Reveal>
          </div>
        </section>

        <section className="contact-section"><div className="section-wrap contact-card"><Reveal className="contact-details" id="contact"><span className="section-kicker">05 / LET&apos;S BUILD SOMETHING <span>✳</span></span><h2>Have a role in mind?<br />Let&apos;s talk<span className="title-period">.</span></h2><p>I am available for interviews and open to Junior Full-Stack Developer opportunities. Reach out to discuss a role or collaboration.</p><a className="contact-detail" href={`mailto:${profile.email}`}><span className="contact-icon"><Mail size={15} /></span><span><small>EMAIL</small><strong>{profile.email}</strong></span></a><a className="contact-detail" href={`tel:${profile.phone.replaceAll(" ", "")}`}><span className="contact-icon"><Phone size={15} /></span><span><small>PHONE &amp; ZALO</small><strong>{profile.phone}</strong></span></a><a className="contact-detail" href={profile.github} target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={15} /></span><span><small>GITHUB PROFILE</small><strong>github.com/DEVducanh</strong></span></a><div className="contact-detail"><span className="contact-icon location-icon"><MapPin size={15} /></span><span><small>LOCATION</small><strong>{profile.location}</strong></span></div><a className="cv-request" href={`mailto:${profile.email}?subject=Request%20for%20complete%20CV`}>Request complete CV (PDF) <ArrowUpRight size={13} /></a></Reveal><ContactForm /></div></section>

      <footer className="site-footer">
        <div className="section-wrap footer-shell">
          <div className="footer-top">
            <div className="footer-identity">
              <a className="brand footer-brand" href="#home"><span className="brand-mark" aria-hidden="true"><Code2 size={17} strokeWidth={2.3} /></span><span>{profile.name}<small>JUNIOR FULL-STACK DEVELOPER</small></span></a>
              <p>Building thoughtful web products, from interface to API.</p>
              <span className="footer-availability"><i /> OPEN TO OPPORTUNITIES</span>
            </div>
            <nav className="footer-nav" aria-label="Footer navigation">
              <h3>EXPLORE</h3><a href="#about">About me</a><a href="#skills">Tech stack</a><a href="#projects">Selected projects</a><a href="#experience">Experience &amp; education</a>
            </nav>
            <div className="footer-connect">
              <h3>LET&apos;S CONNECT</h3>
              <a href={`mailto:${profile.email}`}><Mail size={15} /><span>{profile.email}</span><ArrowUpRight size={13} /></a>
              <a href={`tel:${profile.phone.replaceAll(" ", "")}`}><Phone size={15} /><span>{profile.phone}</span><ArrowUpRight size={13} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={15} /><span>github.com/DEVducanh</span><ArrowUpRight size={13} /></a>
              <span className="footer-location"><MapPin size={14} /> {profile.location}</span>
            </div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><span className="footer-made">Designed &amp; built with care <i>✳</i></span><a href="#home">BACK TO TOP <ArrowUpRight size={13} /></a></div>
        </div>
      </footer>
    </main>
  );
}
