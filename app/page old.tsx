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
    <div className="mx-auto max-w-2xl px-1 py-2 sm:px-3 sm:py-4 text-justify ">
      <div>
        {/*  <h1 className=" my-2 text-center text-lg font-semibold">My Resume</h1> */}
        <h1 className=" my-2 text-center text-lg font-semibold">
          Oleksandr Liashchenko
        </h1>
        <div className="relative w-[150px] h-[200px] ">
          <Image
            fill
            className="object-cover"
            alt="Image"
            src={"/my-photo.jpg"}
          />
        </div>
        <h3 className=" my-2 text-center text-base font-semibold">
          Junior Full-stack Web Developer
        </h3>
        <div className="w-full flex justify-between">
          <div>Kyiv, Remote</div>
        </div>
        <div className="w-full flex justify-between">
          <div>https://t.me/OleksandrLiashcheko</div>
        </div>
        <div className="w-full flex justify-between">
          <div>Phone:</div>
          <div>+38 097 835 91 43 (Telegram, Viber)</div>
        </div>
        <div className="w-full flex justify-between">
          <div>E-mail:</div>
          <div>oleksandr.liashchenko.1988@gmail.com</div>
        </div>
        <div className="w-full flex justify-between">
          <div>Github:</div>
          <div>https://github.com/aleksandr04635</div>
        </div>
        <div>
          <h2 className=" my-2 text-center text-lg font-semibold">Summary</h2>
          <p>
            Web developer proficient in all the skills, necessary for website
            creation, from various UI tools to databases and ORMs, testing
            included, with good English.
          </p>
        </div>
        <div>
          <h2 className=" my-2 text-center text-lg font-semibold">Skills</h2>
          <h3 className=" my-2 text-center  font-semibold">Web Development</h3>
          <div>
            <ul>
              <li>html</li>
              <li>CSS</li>
              <li>Javascript, Typescript</li>
              <li>React.js</li>
              <li>Node.js, Express.js</li>
              <li>Next.js</li>
              <li>Mongo/Mongoose</li>
              <li>MySQL, Postgres</li>
              <li>Prisma ORM</li>
              <li>Redux Toolkit Query</li>
              <li>React Query</li>
              <li>UI: Tailwind, Shadcn/ui, Flowbite</li>
              <li>WebSocket</li>
              <li>TinyMCE rich text editor</li>
              <li>Image uploading: Cloudinary, Firebase</li>
              <li>Email sending: Nodemailer, Resend</li>
              <li>Template engines: Handlebars, Pug</li>
              <li>Forms: Zod, react-hook-form</li>
              <li>Manual QA/QC, TestRail</li>
              <li>Jest</li>
              <li>Postman, Insomnia</li>
              <li>Figma</li>
              <li>JS parsing, Puppeteer</li>
              <li>Git</li>
            </ul>
          </div>
          <h3 className=" my-2 text-center  font-semibold">Data analysis</h3>
          <div>
            <ul>
              <li>
                Python: Jupyter Notebook, Pandas, NumPy, Matplotlib, SciPy
              </li>
              <li>Mathematica, Maple</li>
              <li>Tableau</li>
              <li>Excel, PowerPoint</li>
            </ul>
          </div>
          <h3 className=" my-2 text-center  font-semibold">Languages</h3>
          <div>
            <ul>
              <li>Ukrainian, Russian: native</li>
              <li>English: C1</li>
              <li>Polish: B1</li>
            </ul>
          </div>
          <h3 className=" my-2 text-center  font-semibold">Soft skills</h3>
          <div>
            <ul>
              <li>Scrum, Kanban</li>
              <li>GTD</li>
              <li>Teamwork</li>
            </ul>
          </div>
          <h3 className=" my-2 text-center  font-semibold">Science</h3>
          <div>
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

        <div>
          <h2 className=" my-2 text-center text-lg font-semibold">
            My Projects
          </h2>
          <p>
            I have made both these projects myself, starting from the user
            stories made up by me, and then from the database structure to the
            UI design I created and integrated both elements of existing
            projects, which I used as a reference (5 projects, I brougth to full
            understanding and deployment for creation of the blog and 6 for the
            marketplace), and materials directly from the technical
            documentation of used libraries. You can become sure of it just by
            looking at these sites.
          </p>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className=""
            href={`https://oleksandrs-mern-blog.vercel.app`}
          >
            <h3 className="link-stand my-2 text-center !text-xl font-semibold">
              My Blog
            </h3>
          </Link>
          <div className="text-md flex flex-col gap-1">
            <p>
              React and Express blog with Mongo/Mongoose DB and extensive use of
              Redux Toolkit Querry with redux-persist for user persistence,
              pagination, theme switching, and comments CRUD via optimistic or
              pessimistic cache updates.
            </p>
            <p>
              A full authentication system with Google Oauth and email/password
              options with email sending from template for email verification
              and password reset, as well as a commenting tree, tags system,
              voting system, pagination with variable page size, and search are
              implemented.
            </p>
            <p>
              A rich text editor with images uploading immediately from it is
              used for posts and comments.
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
            <h3 className="link-stand my-2 text-center !text-xl font-semibold">
              My Marketplace
            </h3>
          </Link>
          <div className="text-md flex flex-col gap-1">
            <p>
              Next.js 14 marketplace with Postgres via Prisma DB, which not only
              allows users to create products, but create whole categories of
              products with arbitrary structure of product properties. Moreover,
              full product filtering with pagination over this user-created
              structure is implemented, and over prices as well.
            </p>
            <p>
              For authentication Auth.js (Next-Auth V5) is used with options of
              Google and Github OAuth and email-password authentication, with
              emails sending for email verification, password resetting, and
              optional 2-factor authentication.
            </p>
            <p>Redux is used for the product card.</p>
            <p> Shadcn-ui is used for UI everywhere. </p>
            <p>A rich text editor is integrated for product descriptions.</p>
            <p>
              Stripe integration allows for simulating payments and changing
              order status via the webhook both for buyer and seller.
            </p>
            <p>
              Forms use the combination of react-hook-form, Zod, and Shadcn-UI.
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
          <h2 className=" my-2 text-center text-lg font-semibold">
            Experience
          </h2>
          <p>Junior Researcher in Particles Physics in Non-linear Spaces</p>
          <p>
            Bogolyubov Institute for Theoretical Physics of the National Academy
            of Sciences of Ukraine, Kyiv
          </p>
          <p>09.2011-07.2023 </p>
        </div>
        <div>
          <h2 className=" my-2 text-center text-lg font-semibold">Education</h2>
          <p>Master of Science in Particle Physics </p>
          <p>
            Taras Shevchenko National University of Kyiv, Faculty of Physics
          </p>
          <p>09.2005-06.2011 </p>
        </div>
      </div>
    </div>
  );
}

export default page;
