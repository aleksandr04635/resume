"use client";
import Link from "next/link";

export const sideList = [
  { type: "h2", text: "Skills:" },
  { type: "h3", text: "Web Development:" },
  { text: "html" },
  { text: "CSS" },
  { text: "SASS" },
  { text: "Javascript, Typescript" },
  { text: "React.js" },
  { text: "Next.js: pages, app routers" },
  { text: "Node.js, Express.js" },
  { text: "Nest.js" },
  { text: "Mongo/Mongoose" },
  { text: "MySQL, Postgres" },
  { text: "Prisma ORM" },
  { text: "Redux Toolkit Query" },
  { text: "React Query" },
  { text: "MobX" },
  { text: "react-admin" },
  {
    text: "Firebase: Authentication, Storage, Firestore Database, Cloud Messaging",
  },
  { text: "GraphQL" },
  { text: "Hasura" },
  { text: "Agenda" },
  { text: "WebSockets" },
  { text: "i18next" },
  { text: "axios" },
  { text: "Tailwind" },
  { text: "Shadcn/ui" },
  { text: "Flowbite" },
  { text: "Material UI" },
  {
    text: "UI features: dark theme, horizontal swiping, pagination, comments tree, tooltips",
  },
  { text: "Forms: react-hook-form, Zod, input masking" },
  { text: "Tables: tanstack/react-table, sorting, filtering, pagination" },
  { text: "TinyMCE rich text editor" },
  { text: "Image uploading: Cloudinary, Firebase" },
  { text: "Email sending: Nodemailer, Resend, Mailersend" },
  { text: "Template engines: Handlebars, Pug" },
  { text: "Manual QA/QC, TestRail" },
  { text: "React Testing Library, Jest" },
  { text: "Postman, Insomnia, Thunder Client" },
  { text: "Gulp" },
  { text: "Figma" },
  { text: "JS parsing, Puppeteer" },
  { text: "Stripe" },
  { text: "Jira" },
  { text: "Git: Github, Gitlab" },
  { text: "Docker" },
  { type: "h3", text: "Data analysis:" },
  { text: "Python: Pandas, NumPy, Matplotlib, SciPy" },
  { text: "Mathematica, Maple" },
  { text: "Tableau" },
  { text: "Excel, Google Sheets, PowerPoint" },
  { type: "h3", text: "Science:" },
  {
    text: "Mathematics in the volume, necessary for theoretical physics: Calculus, Linear algebra, Group Theory",
  },
  { text: "Theoretical Physics: Quantum Mechanics in non-linear spaces" },
  { type: "h3", text: "Soft skills:" },
  { text: "Agile: Kanban, Scrum" },
  { text: "GTD" },
  { text: "Teamwork" },
  { text: "Cryptocurrencies" },
  { text: "Communications: Telegram, Discord, Google Meet" },
  { type: "h3", text: "Languages:" },
  {
    text: "Ukrainian, Russian: native",
  },
  { text: "English: C1-C2" },
  { text: "Polish: B1-B2" },
];

export const mainList = [
  { type: "h2", text: "Summary" },
  {
    text: "I'm a Web Developer with teamwork experience, proficient in the full stack of skills, necessary for web apps creation, from various UI tools to databases, specializing in MERN stack, with testing skills, and with English on the level C1-C2.",
  },
  { type: "h2", text: "My Projects" },
  {
    text: "I have made both these projects myself, starting from the user stories made up by me, and then from the database structure to the UI design I created and integrated both elements of the existing projects and materials directly from the technical documentation of used libraries. You can become sure of it just by looking at these sites.",
  },
  {
    type: "header-node",
    Comp: () => (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className=""
        href={`https://oleksandrs-mern-blog.vercel.app`}
      >
        <h3 className="link-stand mt-2 !text-base font-semibold">My Blog</h3>
      </Link>
    ),
  },
  {
    text: "React and Express blog with Mongo/Mongoose DB and extensive use of Redux Toolkit Querry with redux-persist for user persistence, pagination, theme switching, and comments CRUD via optimistic or pessimistic cache updates.",
  },
  {
    text: "A full authentication system with Google Oauth and email/password options with email sending from template for email verification and password resetting, as well as a commenting tree, tags system, voting system, pagination with variable page size, and search are implemented.",
  },
  {
    text: "A rich text editor with images uploading immediately from it is used for posts and comments.",
  },
  {
    text: "Flowbite UI library is used.",
  },
  {
    type: "p-node",
    Comp: () => (
      <>
        The full description is
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://oleksandrs-mern-blog.vercel.app/about`}
        >
          here
        </Link>
        .
      </>
    ),
  },
  {
    type: "header-node",
    Comp: () => (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className=""
        href={`https://oleksandrs-next-marketplace.vercel.app`}
      >
        <h3 className="link-stand mt-2 !text-base font-semibold">
          My Marketplace
        </h3>
      </Link>
    ),
  },
  {
    text: "Next.js 14 marketplace with Postgres via Prisma DB, which not only allows users to create products, but create whole categories of products with arbitrary structure of product properties. Moreover, full product filtering with pagination over this user-created structure is implemented, and over prices as well.",
  },
  {
    text: "For authentication Auth.js (Next-Auth V5) is used with options of Google and Github OAuth and email-password authentication, with emails sending for email verification, password resetting, and optional 2-factor authentication.",
  },
  {
    text: "Redux is used for the products cart.",
  },
  {
    text: "Shadcn-ui is used for UI everywhere. ",
  },
  {
    text: "A rich text editor is integrated for product descriptions.",
  },
  {
    text: "Stripe integration allows for simulating payments and changing order status via the webhook both for buyer and seller.",
  },
  {
    text: "Forms use the combination of react-hook-form, Zod, and Shadcn-UI.",
  },
  {
    text: "The entire project is written in Typescript. ",
  },
  {
    type: "p-node",
    Comp: () => (
      <>
        The full description is
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://oleksandrs-next-marketplace.vercel.app/about`}
        >
          here
        </Link>
        .
      </>
    ),
  },
  { type: "h2", text: "Experience" },
  {
    type: "header-node",
    Comp: () => (
      <h3 className="text-base font-semibold">
        Full-Stack Web Developer in{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1 !text-lg !font-semibold"
          href={`https://www.linkedin.com/company/proggenius/about/`}
        >
          ProgGenius
        </Link>
      </h3>
    ),
  },
  {
    text: "07.2024-now",
  },
  {
    type: "p-node",
    Comp: () => (
      <>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1 !text-base !font-semibold"
          href={`https://metagistics-admin-frontend-test.vercel.app/new-post/batches`}
        >
          {"Metagistics: "}
        </Link>
        Basing on this
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://www.figma.com/design/4EIUD68xoSZkpKQdjMRcBP/Metagistics-Design-(Copy)?node-id=0-1&node-type=canvas&t=mAJok0UNXWMJHz1z-0`}
        >
          Figma wireframe
        </Link>{" "}
        in the team with the Project Manager, Designer, and Backend Developer, I
        created{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://metagistics-admin-frontend-test.vercel.app/new-post/batches`}
        >
          this
        </Link>{" "}
        front part of the application for a Dotnet backend, that provides the
        full functionality for authentication, users invitations and management
        for the admins, and retrieves from the post services APIs the data about
        parcels, their batches, and manifests, show them it the tables and
        allows for the editing of them to the necessary extent. It utilizes
        Next.js 14, Tailwind styling and Shadcn/ui components.
      </>
    ),
  },
  {
    type: "p-node",
    Comp: () => (
      <>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1 !text-base !font-semibold"
          href={`https://emigral.uk/`}
        >
          {"Emigral: "}
        </Link>
        Basing on this
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://www.figma.com/design/hAphGx4KSZeDqhcbF6bBLA/Emigral-Main-Layout-(Copy)?node-id=0-1&node-type=canvas&t=Cm0KBx0xRJBAoN6F-0`}
        >
          Figma desing
        </Link>{" "}
        working in the team with the Project Manager, Designer, and former
        Developer, I signficantly modified{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://emigral.uk/`}
        >
          the front end
        </Link>
        ,{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://crm.emigral.uk/login`}
        >
          the admin panel
        </Link>{" "}
        and Express backend of the application with the Mongo database and fixed
        a lot of bugs in them. The majority of the content and many UI features
        you see there were created by me.
      </>
    ),
  },
  {
    type: "p-node",
    Comp: () => (
      <>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1 !text-base !font-semibold"
          href={`https://churchonline.com.ua/`}
        >
          {"Hillsong: "}
        </Link>
        Working on this
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://www.figma.com/design/FBXFgE7GfewBxfF0msberK/Hillsong-Design-Daria?node-id=196-20448&t=QnJPh5GPMsU9gkxr-4`}
        >
          Figma desing
        </Link>{" "}
        in the team with the Project Manager, Designer, another Front-End
        Developer, Mobile Developer and Tester, on the project that consists of
        a system of microservicas: a mobile application,{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand"
          href={`https://hillsong.com/ukraine`}
        >
          a landing page
        </Link>
        ,{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand"
          href={`https://churchonline.com.ua/`}
        >
          a web application
        </Link>
        ,{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand"
          href={`https://admin.churchonline.com.ua/`}
        >
          an admin panel
        </Link>
        , an Express backend for Firebase notifications sending, and Hasura and
        Firebase databases, I implemented a lot of features for the application
        and admin panel and fixed quite a few errors in almost all of the
        services, mentioned above.
      </>
    ),
  },
  {
    text: "Two last projects utilize Next.js 12, SCSS styling, and MobX stores.",
  },
  {
    text: "I'm searching for a new job because all my projects here are finished, the company cannot find new customers and I have no tasks.",
  },

  {
    type: "header-node",
    Comp: () => (
      <h3 className="text-base font-semibold">
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
    ),
  },
  {
    text: "05.2024-07.2024",
  },
  {
    type: "p-node",
    Comp: () => (
      <>
        <span className="text-base font-semibold">{"Learning Platform: "}</span>

        <span>
          {
            "Working in a team of up to 15 developers on a shared Gitlab repository with workflow focused around a Gitlab task board  I worked on remaking an Angular front part of a big learning platform application into Next.js 14. The work was complicated by the application architecture being inherited from Angular to a great extent, with all the functions being provided by services with dependencies injections, but I managed to familiarize myself with the extensive project, develop quite a few components and services, and implement the Zod forms validation system for the application and tables resizing system. "
          }
        </span>
      </>
    ),
  },
  {
    text: "Being the first of many junior developers, hired by the company, I was promoted to Supervisor, and introduced into the company workflow three more junior developers, divided the tasks, received by me from the Project Coordinator, into the tasks for them, performed the reviews of their code, and merged their branches into higher order branches corresponding to higher order tasks.",
  },
  {
    text: "I quit this job because a recruiter from ProgGenius came up on my LinkedIn page and offered me a much better salary.",
  },
  { type: "h3", text: "Full-Stack Web Developer in SMM Oksima Group" },
  {
    text: "04.2024-05.2024 ",
  },
  {
    type: "p-node",
    Comp: () => (
      <>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1 !text-base !font-semibold"
          href={`https://neurolide-cpa.vercel.app/`}
        >
          {"Neurolide: "}
        </Link>
        I created a
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://oleksandrs-test-landing-page.vercel.app/`}
        >
          landing page
        </Link>{" "}
        based on this
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://www.figma.com/design/E1Uy4MnJgSpWoDv6XTc8Rz/Bloggers-platform?node-id=0-1&t=AhUii3sjs3fhZmRf-0`}
        >
          Figma wireframe
        </Link>{" "}
        and then, working on this
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://www.figma.com/design/9lKt9ETfOEyiA4H1MU0HFv/%D0%A6%D0%9F%D0%90-%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0-(Copy)?m=dev&node-id=0-1&t=BCix09wwPlWuvMe0-1`}
        >
          Figma design
        </Link>
        , which had been developed in parallel to my work on it, in close
        communication with the product owner and the graphical designer on
        constantly changing requirements and design ideas, I created
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://neurolide-cpa.vercel.app`}
        >
          this CPA
        </Link>
        &nbsp;myself.
      </>
    ),
  },
  {
    text: "Working on Next.js 14 with PostgreSQL/Prisma ORM, it enables user authentication with the role of a Brand or an Affiliate, with the combination of email and password using Auth.js, with email verification and password resetting via email sending, inputs user data in forms made with react-hook-form with user input masking and Zod input validation, and outputs them in the form of tables on wide screens, which are shown as horizontally swipeable by gestures lists on mobile devices for creation of advertisement Offers by the users with the status of Brand, and Media Channels, by the users with the status of Affiliate, which they own and offer the placement of the advertisements there, and with the ability of Affiliates to accept advertisement Offers from Brands. Users with the status of Manager in the current version manage all the financial operations manually, and verify the status of Offers and Media Channels, being able to edit them as well as all the financial properties of the users.",
  },
  {
    text: "I quit the job when it became clear that they weren't going to pay me anything.",
  },
  {
    type: "h3",
    text: "Junior Researcher in Particles Physics in Non-linear Spaces in Bogolyubov Institute for Theoretical Physics of the National Academy of Sciences of Ukraine, Kyiv",
  },
  {
    text: "09.2011-10.2023",
  },
  {
    type: "h2",
    text: "Education",
  },
  {
    text: "Master of Science in Particle Physics ",
  },
  {
    text: "Taras Shevchenko National University of Kyiv, Faculty of Physics",
  },
  {
    text: "09.2005-06.2011 ",
  },
];
