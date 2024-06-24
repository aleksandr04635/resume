import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {};

/* function calculateTeamFinanceReport1(salaries: any, team: any) {
  const costObj: any = { totalBudgetTeam: 0 };
  for (let x in salaries) {
    costObj["totalBudget" + x] = 0;
  }
  team.forEach((member: any) => {
    if (salaries[member.specialization]) {
      console.log(salaries[member.specialization]);
      console.log(Number(salaries[member.specialization].tax.slice(0, -1)));

      let num =
        Math.round(
          (salaries[member.specialization].salary /
            (1 -
              Number(salaries[member.specialization].tax.slice(0, -1)) / 100)) *
            100
        ) / 100;

      console.log(num);
      costObj.totalBudgetTeam += num;
      costObj["totalBudget" + member.specialization] += num;
    }
  });
  costObj.totalBudgetTeam = Math.trunc(costObj.totalBudgetTeam);
  for (let x in salaries) {
    costObj["totalBudget" + x] = Math.trunc(costObj["totalBudget" + x]);
  }
  return costObj;
}
const salaries1 = {
  Manager: { salary: 1000, tax: "10%" },
  Designer: { salary: 600, tax: "30%" },
  Artist: { salary: 1500, tax: "15%" },
};
const team1 = [
  { name: "Misha", specialization: "Manager" },
  { name: "Max", specialization: "Designer" },
  { name: "Vova", specialization: "Designer" },
  { name: "Leo", specialization: "Artist" },
];
const financeReport1 = calculateTeamFinanceReport1(salaries1, team1);
console.log(JSON.stringify(financeReport1));

const salaries2 = {
  TeamLead: { salary: 1000, tax: "99%" },
  Architect: { salary: 9000, tax: "34%" },
};
const team2 = [
  { name: "Alexander", specialization: "TeamLead" },
  { name: "Gaudi", specialization: "Architect" },
  { name: "Koolhas", specialization: "Architect" },
  { name: "Foster", specialization: "Architect" },
  { name: "Napoleon", specialization: "General" },
];
const financeReport2 = calculateTeamFinanceReport1(salaries2, team2);
console.log(JSON.stringify(financeReport2)); */

//max-w-[1050px]
function MainContent({}: Props) {
  return (
    <div className="mx-auto  px-1 py-4   text-justify ">
      <div className=" flex flex-row gap-5 mt-0 max-w-[1150px] mx-auto">
        <div className=" flex flex-col gap-2 mt-2 min-w-[220px]">
          <h2 className=" mt-0  text-base font-semibold">Skills</h2>
          <h3 className=" mt-0  text-base font-semibold">Web Development</h3>
          <div className=" mt-0 text-left text-sm">
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
                UI features: dark theme, horizontal swiping, pagination,
                comments tree, tooltips
              </li>
              <li>Forms: react-hook-form, Zod, input masking</li>
              <li>
                Tables: tanstack/react-table, sorting, filtering, pagination
              </li>
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
          <h3 className=" mt-0   font-semibold text-left">Data analysis</h3>
          <div className=" mt-0  text-sm text-left">
            <ul>
              <li>Python: Pandas, NumPy, Matplotlib, SciPy</li>
              <li>Mathematica, Maple</li>
              <li>Tableau</li>
              <li>Excel, PowerPoint</li>
            </ul>
          </div>
          <h3 className=" mt-0   font-semibold">Languages</h3>
          <div className=" mt-0  text-sm">
            <ul>
              <li>Ukrainian, Russian: native</li>
              <li>English: C1-C2</li>
              <li>Polish: B1-B2</li>
            </ul>
          </div>
          <h3 className=" mt-0   font-semibold">Soft skills</h3>
          <div className=" mt-0  text-sm">
            <ul>
              <li>Kanban, Scrum</li>
              <li>Teamwork</li>
              <li>GTD</li>
            </ul>
          </div>
          <h3 className=" mt-0   font-semibold text-left ">Science</h3>
          <div className=" mt-0  text-sm text-left ">
            <ul>
              <li>
                Theoretical Physics: Quantum Mechanics in non-linear spaces
              </li>
              <li>
                Mathematics in the volume, necessary for theoretical physics:
                Calculus, Linear algebra, Group Theory
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col ">
          <div className=" flex flex-row gap-6 mt-0">
            <div className="relative w-[200px] h-[200px] ">
              <Image
                fill
                className="object-cover"
                alt="Image"
                src={"/my-photo.jpg"}
              />
            </div>
            <div className="flex flex-col w-full">
              <h1 className=" mb-2  text-xl font-semibold">
                Oleksandr Liashchenko
              </h1>
              <h3 className=" mb-2  text-base font-semibold">
                Full Stack Web Developer
              </h3>
              <div className=" mb-2 w-full text-sm flex flex-row">
                <div>Kyiv, Ukraine; </div>
                <div className=" ml-4">Remote</div>
              </div>

              <div className="w-full flex justify-between text-sm">
                <div>Phone:</div>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                  href={`tel:+38 097 835 91 43`}
                >
                  <h3 className="link-stand  text-sm ">
                    <div>+38 097 835 91 43 (Telegram, Viber)</div>
                  </h3>
                </Link>
              </div>
              <div className="w-full flex justify-between text-sm">
                <div>E-mail:</div>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                  href={`mailto:oleksandr.liashchenko.1988@gmail.com`}
                >
                  <h3 className="link-stand text-center text-sm ">
                    <div>oleksandr.liashchenko.1988@gmail.com</div>
                  </h3>
                </Link>
              </div>
              <div className="w-full flex justify-between text-sm">
                <div>Telegram:</div>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                  href={`https://t.me/OleksandrLiashcheko`}
                >
                  <h3 className="link-stand text-center text-sm ">
                    <div>@OleksandrLiashcheko </div>
                  </h3>
                </Link>
              </div>
              <div className="w-full flex justify-between text-sm">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                  href={`https://www.linkedin.com/in/oleksandr-liashchenko-9b4740305`}
                >
                  <h3 className="link-stand text-center text-sm ">
                    <div>LinkedIn</div>
                  </h3>
                </Link>
              </div>

              <div className="w-full flex justify-between text-sm">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                  href={`https://github.com/aleksandr04635`}
                >
                  <h3 className="link-stand text-center text-sm ">
                    <div>Github</div>
                  </h3>
                </Link>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-2 mt-0">
            <div>
              <h2 className=" mt-2  text-base font-semibold">Summary</h2>
              <p className="text-sm">
                I&apos;m a Web Developer with teamwork experience, proficient in
                the full stack of skills, necessary for web apps creation, from
                various UI tools to databases, specializing in MERN stack, with
                testing skills, and with English on the level C1-C2.
              </p>
            </div>
            <div className="text-sm">
              <h2 className=" mt-1  text-base font-semibold">My Projects</h2>
              <p>
                I have made both these projects myself, starting from the user
                stories made up by me, and then from the database structure to
                the UI design I created and integrated both elements of the
                existing projects and materials directly from the technical
                documentation of used libraries. You can become sure of it just
                by looking at these sites.
              </p>

              <Link
                target="_blank"
                rel="noopener noreferrer"
                className=""
                href={`https://oleksandrs-mern-blog.vercel.app`}
              >
                <h3 className="link-stand mt-2  !text-base font-semibold">
                  My Blog
                </h3>
              </Link>
              <div className="text-sm flex flex-col gap-1">
                <p>
                  React and Express blog with Mongo/Mongoose DB and extensive
                  use of Redux Toolkit Querry with redux-persist for user
                  persistence, pagination, theme switching, and comments CRUD
                  via optimistic or pessimistic cache updates.
                </p>
                <p>
                  A full authentication system with Google Oauth and
                  email/password options with email sending from template for
                  email verification and password resetting, as well as a
                  commenting tree, tags system, voting system, pagination with
                  variable page size, and search are implemented.
                </p>
                <p>
                  A rich text editor with images uploading immediately from it
                  is used for posts and comments.
                </p>
                <p> Flowbite UI library is used.</p>
                <p>
                  The full description is
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-stand pl-1 "
                    href={`https://oleksandrs-mern-blog.vercel.app/about`}
                  >
                    here
                  </Link>
                  .
                </p>
              </div>

              <Link
                target="_blank"
                rel="noopener noreferrer"
                className=""
                href={`https://oleksandrs-next-marketplace.vercel.app`}
              >
                <h3 className="link-stand mt-2  !text-base font-semibold">
                  My Marketplace
                </h3>
              </Link>
              <div className="text-sm flex flex-col gap-1">
                <p>
                  Next.js 14 marketplace with Postgres via Prisma DB, which not
                  only allows users to create products, but create whole
                  categories of products with arbitrary structure of product
                  properties. Moreover, full product filtering with pagination
                  over this user-created structure is implemented, and over
                  prices as well.
                </p>
                <p>
                  For authentication Auth.js (Next-Auth V5) is used with options
                  of Google and Github OAuth and email-password authentication,
                  with emails sending for email verification, password
                  resetting, and optional 2-factor authentication.
                </p>
                <p>Redux is used for the product card.</p>
                <p> Shadcn-ui is used for UI everywhere. </p>
                <p>
                  A rich text editor is integrated for product descriptions.
                </p>
                <p>
                  Stripe integration allows for simulating payments and changing
                  order status via the webhook both for buyer and seller.
                </p>
                <p>
                  Forms use the combination of react-hook-form, Zod, and
                  Shadcn-UI.
                </p>
                <p>The entire project is written in Typescript. </p>
                <p>
                  The full description is
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-stand pl-1 "
                    href={`https://oleksandrs-next-marketplace.vercel.app/about`}
                  >
                    here
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className=" space-y-1 mt-2 text-sm">
              <h2 className="   text-base font-semibold">Experience</h2>
              <div>
                <h3 className="  text-base font-semibold">
                  Front-End Web Developer in{" "}
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-stand pl-1 !text-lg !font-semibold"
                    href={`https://www.linkedin.com/company/fernir/`}
                  >
                    Fernir
                  </Link>
                </h3>
                <p>
                  Working in a team on a shared Gitlab repository with workflow
                  focused around a Gitlab task board and with Gitlab CI/CD
                  integration I worked on remaking an Angular front part of an
                  application to Next.js. The work was complicated by the
                  application architecture being inherited from Angular to a
                  great extent, with all the functions being provided by
                  services with dependencies injections, but I managed to
                  familiarize myself with the extensive project, develop quite a
                  few components and services, and implement the Zod forms
                  validation system for the application and tables resizing
                  system. I cannot show the particulars of my work due to a
                  non-disclosure agreement.
                </p>
                <p>
                  I have been promoted to a supervisor and performed the reviews
                  of code, created by two other junior developers, merged merge
                  requests, created by them, created and destributed tasks.
                </p>
                <p>05.2024-Now</p>
              </div>
              <div className="pt-2">
                <h3 className="  text-base font-semibold">
                  Full-Stack Web Developer in SMM Oksima Group
                </h3>
                <p>
                  I created a
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-stand pl-1 "
                    href={`https://oleksandrs-test-landing-page.vercel.app/`}
                  >
                    landing page
                  </Link>{" "}
                  based on this
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-stand pl-1 "
                    href={`https://www.figma.com/design/E1Uy4MnJgSpWoDv6XTc8Rz/Bloggers-platform?node-id=0-1&t=AhUii3sjs3fhZmRf-0`}
                  >
                    Figma wireframe
                  </Link>{" "}
                  and then, working on this
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-stand pl-1 "
                    href={`https://www.figma.com/design/9lKt9ETfOEyiA4H1MU0HFv/%D0%A6%D0%9F%D0%90-%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0-(Copy)?m=dev&node-id=0-1&t=BCix09wwPlWuvMe0-1`}
                  >
                    Figma design
                  </Link>
                  , which had been developed in parallel to my work on it, in
                  close communication with the product owner and the graphical
                  designer on constantly changing requirements and design ideas,
                  I created
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-stand pl-1 "
                    href={`https://neurolide-cpa.vercel.app`}
                  >
                    this CPA
                  </Link>
                  &nbsp;myself.
                </p>
                <p>
                  Working on Next.js 14 with PostgreSQL/Prisma ORM, it enables
                  user authentication with the role of a Brand or an Affiliate,
                  with the combination of email and password using Auth.js, with
                  email verification and password resetting via email sending,
                  inputs user data in forms made with react-hook-form with user
                  input masking and Zod input validation, and outputs them in
                  the form of tables on wide screens, which are shown as
                  horizontally swipeable by gestures lists on mobile devices for
                  creation of advertisement Offers by the users with the status
                  of Brand, and Media Channels, by the users with the status of
                  Affiliate, which they own and offer the placement of the
                  advertisements there, and with the ability of Affiliates to
                  accept advertisement Offers from Brands. Users with the status
                  of Manager in the current version manage all the financial
                  operations manually, and verify the status of Offers and Media
                  Channels, being able to edit them as well as all the financial
                  properties of the users.
                </p>
                <p>04.2024-05.2024 </p>
              </div>
              <div>
                <h3 className=" pt-2 text-base font-semibold">
                  Junior Researcher in Particles Physics in Non-linear Spaces
                </h3>
                <p>
                  Bogolyubov Institute for Theoretical Physics of the National
                  Academy of Sciences of Ukraine, Kyiv
                </p>
                <p>09.2011-10.2023 </p>
              </div>
            </div>

            <div className=" space-y-1 mt-2 text-sm">
              <h2 className=" mt-1  text-base font-semibold">Education</h2>
              <p>Master of Science in Particle Physics </p>
              <p>
                Taras Shevchenko National University of Kyiv, Faculty of Physics
              </p>
              <p>09.2005-06.2011 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
