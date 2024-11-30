"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { sideList } from "@/lib/data";
import { cn } from "@/lib/utils";

type Props = { pageType: "site" | "pdf" };

export function SideList({ pageType }: Props) {
  return (
    <div
      className={cn(
        "pl-5 pr-3",
        pageType === "site" ? "min-w-[290px]" : "min-w-[220px]",
      )}
    >
      <ul className={cn("", pageType === "site" ? "text-base" : "text-sm")}>
        {sideList.map((item, i) => {
          switch (item.type) {
            case "h2":
              return (
                <li
                  key={i}
                  className="mb-0 mt-0 list-none p-0 text-lg font-semibold"
                >
                  {item.text}
                </li>
              );
            case "h3":
              return (
                <li
                  key={i}
                  className={cn(
                    "mb-0 mt-2 list-none p-0 text-base font-semibold",
                    pageType === "site" ? "mt-5 text-lg" : "mt-1 text-base",
                  )}
                >
                  {item.text}
                </li>
              );
            default:
              return (
                <li
                  key={i}
                  className="mt-0 list-image-[url(/li-for-light.svg)] p-0 text-left dark:list-image-[url(/li-for-dark.svg)]"
                >
                  {item.text}
                </li>
              );
          }
        })}
      </ul>
      {/*  <h2 className="mt-0 text-base font-semibold">Skills</h2>
      <h3 className="mt-0 text-base font-semibold">Web Development</h3>
      <div className="mt-0 text-left text-sm">
        <ul>
          <li>html</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>Javascript, Typescript</li>
          <li>React.js</li>
          <li>Node.js, Express.js</li>
          <li>Next.js</li>
          <li>Mongo/Mongoose</li>
          <li>MySQL, Postgres</li>
          <li>Prisma ORM</li>
          <li>Redux Toolkit Query</li>
          <li>React Query</li>
          <li>UI libraries: Tailwind, Shadcn/ui, Flowbite</li>
          <li>
            UI features: dark theme, horizontal swiping, pagination, comments
            tree, tooltips
          </li>
          <li>Forms: react-hook-form, Zod, input masking</li>
          <li>Tables: tanstack/react-table, sorting, filtering, pagination</li>
          <li>WebSockets</li>
          <li>TinyMCE rich text editor</li>
          <li>Image uploading: Cloudinary, Firebase</li>
          <li>Email sending: Nodemailer, Resend</li>
          <li>Template engines: Handlebars, Pug</li>
          <li>Manual QA/QC, TestRail</li>
          <li>React Testing Library, Jest</li>
          <li>Postman, Insomnia, Thunder Client</li>
          <li>Gulp</li>
          <li>Figma</li>
          <li>JS parsing, Puppeteer</li>
          <li>Stripe</li>
          <li>Jira</li>
          <li>Git: Github, Gitlab</li>
          <li>Docker</li>
        </ul>
      </div>
      <h3 className="mt-0 text-left font-semibold">Data analysis</h3>
      <div className="mt-0 text-left text-sm">
        <ul>
          <li>Python: Pandas, NumPy, Matplotlib, SciPy</li>
          <li>Mathematica, Maple</li>
          <li>Tableau</li>
          <li>Excel, PowerPoint</li>
        </ul>
      </div>
      <h3 className="mt-0 font-semibold">Languages</h3>
      <div className="mt-0 text-sm">
        <ul>
          <li>Ukrainian, Russian: native</li>
          <li>English: C1-C2</li>
          <li>Polish: B1-B2</li>
        </ul>
      </div>
      <h3 className="mt-0 font-semibold">Soft skills</h3>
      <div className="mt-0 text-sm">
        <ul>
          <li>Kanban, Scrum</li>
          <li>Teamwork</li>
          <li>GTD</li>
        </ul>
      </div>
      <h3 className="mt-0 text-left font-semibold">Science</h3>
      <div className="mt-0 text-left text-sm">
        <ul>
          <li>Theoretical Physics: Quantum Mechanics in non-linear spaces</li>
          <li>
            Mathematics in the volume, necessary for theoretical physics:
            Calculus, Linear algebra, Group Theory
          </li>
        </ul>
      </div> */}
    </div>
  );
}
