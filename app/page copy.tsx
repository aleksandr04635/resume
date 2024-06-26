import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {};

export const metadata = {
  title: "My Resume",
  description: "Oleksandr Liashchenko - Full-stack web-developer",
};

function page({}: Props) {
  return (
    <div className="mx-auto max-w-[1050px] px-1 py-4   text-justify ">
      <div className=" flex flex-row gap-6 mt-0">
        <div className="flex flex-col">
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
                Junior Full-stack Web Developer
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
              <h2 className=" mt-1  text-lg font-semibold">Summary</h2>
              <p>
                Web developer proficient in the full stack of skills, necessary
                for website creation, from various UI tools to databases,
                specializing in MERN stack, with testing skills, and with good
                English.
              </p>
            </div>
            <div className="text-sm">
              <h2 className=" mt-0  text-base font-semibold">My Projects</h2>
              <p>
                I have made both these projects myself, starting from the user
                stories made up by me, and then from the database structure to
                the UI design I created and integrated both elements of existing
                projects, which I used as a reference (5 projects, I brougth to
                full understanding and deployment for creation of the blog and 6
                for the marketplace), and materials directly from the technical
                documentation of used libraries. You can become sure of it just
                by looking at these sites.
              </p>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className=""
                href={`https://oleksandrs-mern-blog.vercel.app`}
              >
                <h3 className="link-stand mt-0  !text-base font-semibold">
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
                <h3 className="link-stand mt-0  !text-base font-semibold">
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
            <div>
              <h2 className=" mt-2  text-base font-semibold">Experience</h2>
              <p>Junior Researcher in Particles Physics in Non-linear Spaces</p>
              <p>
                Bogolyubov Institute for Theoretical Physics of the National
                Academy of Sciences of Ukraine, Kyiv
              </p>
              <p>09.2011-07.2023 </p>
            </div>
            <div>
              <h2 className=" mt-2  text-base font-semibold">Education</h2>
              <p>Master of Science in Particle Physics </p>
              <p>
                Taras Shevchenko National University of Kyiv, Faculty of Physics
              </p>
              <p>09.2005-06.2011 </p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-2 mt-2 min-w-[220px]">
          <h2 className=" mt-0  text-base font-semibold">Skills</h2>
          <h3 className=" mt-0  text-base font-semibold">Web Development</h3>
          <div className=" mt-0  text-sm">
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
                UI features: dark theme, horizontal swiping, pagination, comment
                tree, tooltips
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
              <li>Jest</li>
              <li>Postman, Insomnia</li>
              <li>Figma</li>
              <li>JS parsing, Puppeteer</li>
              <li>Git</li>
              <li>Docker</li>
            </ul>
          </div>
          <h3 className=" mt-0   font-semibold">Data analysis</h3>
          <div className=" mt-0  text-sm">
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
              <li>English: C1</li>
              <li>Polish: B1</li>
            </ul>
          </div>
          <h3 className=" mt-0   font-semibold">Soft skills</h3>
          <div className=" mt-0  text-sm">
            <ul>
              <li>Scrum, Kanban</li>
              <li>GTD</li>
              <li>Teamwork</li>
            </ul>
          </div>
          <h3 className=" mt-0   font-semibold">Science</h3>
          <div className=" mt-0  text-sm">
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
      </div>
    </div>
  );
}

export default page;
