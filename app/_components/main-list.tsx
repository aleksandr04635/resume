"use client";
import Link from "next/link";
import React from "react";
import { mainList } from "@/lib/data";
import { cn } from "@/lib/utils";

type Props = { pageType: "site" | "pdf"; locale: string };

export function MainList({ pageType, locale }: Props) {
  //console.log("pageType from MainList: ", pageType);

  return (
    <div
      className={cn(
        "mt-1 flex flex-col gap-2",
        pageType === "site" ? "text-base" : "text-sm",
      )}
    >
      {mainList.map(({ type, text, textUA, Comp, CompUA }, i) => {
        switch (type) {
          case "h2":
            return (
              <h2
                key={i}
                className={cn(
                  "mb-0 list-none p-0 font-semibold",
                  pageType === "site" ? "mt-5 text-xl" : "mt-1 text-lg",
                )}
              >
                {locale == "ua" && textUA ? textUA : text}
                {/*   {text} */}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className={cn(
                  "mb-0 list-none p-0 text-base font-semibold",
                  pageType === "site" ? "mt-6 text-base" : "mt-1 text-base",
                )}
              >
                {locale == "ua" && textUA ? textUA : text}
                {/*  {text} */}
              </h3>
            );
          case "header-node":
            return Comp ? (
              <div
                key={i}
                className={cn(
                  "mb-0 list-none p-0 text-base font-semibold",
                  pageType === "site" ? "mt-6 text-base" : "mt-1 text-base",
                )}
              >
                {locale == "ua" && CompUA ? <CompUA /> : <Comp />}
                {/*  <Comp />{" "} */}
              </div>
            ) : null;
          case "p-node":
            return Comp ? (
              <p
                key={i}
                className={cn(
                  "mt-0 p-0",
                  pageType === "site" ? "!text-base" : "",
                )}
              >
                {locale == "ua" && CompUA ? <CompUA /> : <Comp />}
                {/* <Comp /> */}
              </p>
            ) : null;
          default:
            return (
              <p key={i} className="mt-0 p-0">
                {locale == "ua" && textUA ? textUA : text}
                {/*  {text} */}
              </p>
            );
        }
      })}

      {/*   <div>
        
        <h2 className="mt-2 text-base font-semibold">Summary</h2>
        <p className="text-sm">
          I&apos;m a Web Developer with teamwork experience, proficient in the
          full stack of skills, necessary for web apps creation, from various UI
          tools to databases, specializing in MERN stack, with testing skills,
          and with English on the level C1-C2.
        </p>
      </div>
      <div className="text-sm">
        <h2 className="mt-1 text-base font-semibold">My Projects</h2>
        <p>
          I have made both these projects myself, starting from the user stories
          made up by me, and then from the database structure to the UI design I
          created and integrated both elements of the existing projects and
          materials directly from the technical documentation of used libraries.
          You can become sure of it just by looking at these sites.
        </p>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          className=""
          href={`https://oleksandrs-mern-blog.vercel.app`}
        >
          <h3 className="link-stand mt-2 !text-base font-semibold">My Blog</h3>
        </Link>
        <div className="flex flex-col gap-1 text-sm">
          <p>
            React and Express blog with Mongo/Mongoose DB and extensive use of
            Redux Toolkit Querry with redux-persist for user persistence,
            pagination, theme switching, and comments CRUD via optimistic or
            pessimistic cache updates.
          </p>
          <p>
            A full authentication system with Google Oauth and email/password
            options with email sending from template for email verification and
            password resetting, as well as a commenting tree, tags system,
            voting system, pagination with variable page size, and search are
            implemented.
          </p>
          <p>
            A rich text editor with images uploading immediately from it is used
            for posts and comments.
          </p>
          <p> Flowbite UI library is used.</p>
          <p>
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
          </p>
        </div>

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
        <div className="flex flex-col gap-1 text-sm">
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
            Stripe integration allows for simulating payments and changing order
            status via the webhook both for buyer and seller.
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
              className="link-stand pl-1"
              href={`https://oleksandrs-next-marketplace.vercel.app/about`}
            >
              here
            </Link>
            .
          </p>
        </div>
      </div> */}

      {/*  <div className="mt-2 space-y-1 text-sm">
        <h2 className="text-base font-semibold">Experience</h2>
          <div>
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
          <p>
            Working in a team on a shared Gitlab repository with workflow
            focused around a Gitlab task board and with Gitlab CI/CD integration
            I worked on remaking an Angular front part of an application to
            Next.js. The work was complicated by the application architecture
            being inherited from Angular to a great extent, with all the
            functions being provided by services with dependencies injections,
            but I managed to familiarize myself with the extensive project,
            develop quite a few components and services, and implement the Zod
            forms validation system for the application and tables resizing
            system. I cannot show the particulars of my work due to a
            non-disclosure agreement.
          </p>
          <p>
            I have been promoted to a supervisor and performed the reviews of
            the code, created by two other junior developers, merged merge
            requests, created by them, created and distributed tasks.
          </p>
          <p>05.2024-Now</p>
        </div> 
        <div className="pt-2">
          <h3 className="text-base font-semibold">
            Full-Stack Web Developer in SMM Oksima Group
          </h3>
          <p>
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
          </p>
          <p>
            Working on Next.js 14 with PostgreSQL/Prisma ORM, it enables user
            authentication with the role of a Brand or an Affiliate, with the
            combination of email and password using Auth.js, with email
            verification and password resetting via email sending, inputs user
            data in forms made with react-hook-form with user input masking and
            Zod input validation, and outputs them in the form of tables on wide
            screens, which are shown as horizontally swipeable by gestures lists
            on mobile devices for creation of advertisement Offers by the users
            with the status of Brand, and Media Channels, by the users with the
            status of Affiliate, which they own and offer the placement of the
            advertisements there, and with the ability of Affiliates to accept
            advertisement Offers from Brands. Users with the status of Manager
            in the current version manage all the financial operations manually,
            and verify the status of Offers and Media Channels, being able to
            edit them as well as all the financial properties of the users.
          </p>
          <p>04.2024-05.2024 </p>
        </div>
        <div>
          <h3 className="pt-2 text-base font-semibold">
            Junior Researcher in Particles Physics in Non-linear Spaces
          </h3>
          <h3>
            Bogolyubov Institute for Theoretical Physics of the National Academy
            of Sciences of Ukraine, Kyiv
          </h3>
          <p>09.2011-10.2023 </p>
        </div>
      </div> 

      <div className="mt-2 space-y-1 text-sm">
        <h2 className="mt-1 text-base font-semibold">Education</h2>
        <h3>Master of Science in Particle Physics </h3>
        <h3>
          Taras Shevchenko National University of Kyiv, Faculty of Physics
        </h3>
        <p>09.2005-06.2011 </p>
      </div> */}
    </div>
  );
}
