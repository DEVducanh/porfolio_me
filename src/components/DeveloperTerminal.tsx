"use client";

import { motion } from "motion/react";
import { profile } from "@/data/portfolio";

const codeLines = [
  <><span className="terminal-keyword">const</span> developer = &#123;</>,
  <>&nbsp;&nbsp;name: <span className="terminal-string">&quot;{profile.name}&quot;</span>,</>,
  <>&nbsp;&nbsp;role: <span className="terminal-string">&quot;{profile.role}&quot;</span>,</>,
  <>&nbsp;&nbsp;stack: [<span className="terminal-blue">React.js</span>, <span className="terminal-blue">Next.js</span>,</>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="terminal-blue">Node.js</span>, <span className="terminal-blue">NestJS</span>],</>,
  <>&nbsp;&nbsp;location: <span className="terminal-string">&quot;{profile.location}&quot;</span>,</>,
  <> &#125;;</>,
];

export function DeveloperTerminal() {
  return (
    <div className="terminal-stage">
      <span className="terminal-orbit orbit-one" />
      <span className="terminal-orbit orbit-two" />
      <motion.div
        className="developer-terminal"
        initial={{ opacity: 0, y: 24, rotate: 1.5, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.16, ease: [0.2, 0.85, 0.25, 1] }}
      >
        <div className="terminal-titlebar">
          <div className="terminal-controls"><i /><i /><i /></div>
          <span>developer.ts</span>
          <span className="terminal-language">TS</span>
        </div>
        <div className="terminal-code">
          <div className="terminal-comment">// a little about me</div>
          {codeLines.map((line, index) => (
            <motion.div
              className="terminal-line"
              key={index}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.28, delay: 0.48 + index * 0.09 }}
            >
              <span className="line-number">{String(index + 1).padStart(2, "0")}</span>
              <code>{line}</code>
            </motion.div>
          ))}
          <div className="terminal-caret-row"><span className="line-number">08</span><span className="terminal-caret" /></div>
        </div>
        <div className="terminal-status"><span><i /> AVAILABLE FOR OPPORTUNITIES</span><span>UTF-8&nbsp; · &nbsp;TYPESCRIPT</span></div>
      </motion.div>
      <span className="floating-tech react-chip">React.js</span>
      <span className="floating-tech next-chip">Next.js</span>
      <span className="floating-tech nest-chip">NestJS</span>
      <span className="terminal-cross cross-one">+</span>
      <span className="terminal-cross cross-two">+</span>
    </div>
  );
}
