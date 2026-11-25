"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { ProjectVisual } from "@/components/ProjectVisual";

const pageSize = 2;
const pageCount = Math.ceil(projects.length / pageSize);

export function ProjectsShowcase() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const pageProjects = projects.slice(page * pageSize, (page + 1) * pageSize);
  const firstVisible = page * pageSize + 1;
  const lastVisible = Math.min((page + 1) * pageSize, projects.length);

  function goToPage(nextPage: number) {
    if (nextPage < 0 || nextPage >= pageCount || nextPage === page) return;
    setDirection(nextPage > page ? 1 : -1);
    setPage(nextPage);
  }

  return (
    <div className="projects-showcase">
      <div className="project-carousel" aria-live="polite">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            className="project-list"
            key={page}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={{
              enter: (slideDirection: number) => ({ opacity: 0, x: slideDirection * 76, filter: "blur(3px)" }),
              center: { opacity: 1, x: 0, filter: "blur(0px)" },
              exit: (slideDirection: number) => ({ opacity: 0, x: slideDirection * -54, filter: "blur(2px)" }),
            }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            {pageProjects.map(project => (
              <motion.article
                className={`project-card${project.featured ? " featured-project" : ""}`}
                key={project.number}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <div className="project-info">
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span className="project-number">{project.number} / {String(projects.length).padStart(2, "0")}</span>
                  </div>
                  {project.featured && <span className="featured-label"><i /> FEATURED PROJECT</span>}
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.stack.length > 0 && <div className="project-stack">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div>}
                  <a
                    className="project-link"
                    href={project.link}
                    target={project.link.startsWith("http") ? "_blank" : undefined}
                    rel={project.link.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {project.linkLabel} <ArrowUpRight size={15} />
                  </a>
                </div>
                <ProjectVisual type={project.visual} accent={project.accent} />
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="projects-pagination">
        <div className="pagination-count"><strong>{String(firstVisible).padStart(2, "0")}–{String(lastVisible).padStart(2, "0")}</strong><span>of {String(projects.length).padStart(2, "0")} projects</span></div>
        <div className="pagination-dots" role="group" aria-label="Project pages">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              aria-label={`Show project page ${index + 1}`}
              aria-current={page === index ? "page" : undefined}
              className={page === index ? "active" : ""}
              key={index}
              onClick={() => goToPage(index)}
              type="button"
            />
          ))}
        </div>
        <div className="pagination-actions">
          <button aria-label="Previous projects" className="pagination-arrow" disabled={page === 0} onClick={() => goToPage(page - 1)} type="button"><ArrowLeft size={16} /></button>
          <button className="pagination-next" disabled={page === pageCount - 1} onClick={() => goToPage(page + 1)} type="button">{page === pageCount - 1 ? "All projects shown" : "More projects"}<ArrowRight size={16} /></button>
        </div>
      </div>
    </div>
  );
}
