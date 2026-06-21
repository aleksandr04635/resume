"use client";
import Link from "next/link";
/* with more than a year of teamwork experience */
export const mainList = [
  { type: "h2", text: "Summary", textUA: "Резюме", textDE: "Berufsprofil" },
  {
    text: "Experienced Full-Stack Web Developer proficient in building end-to-end web applications, from modern UI frameworks to databases and testing. Specialized in Next.js. Effectively communicates in English (C1-C2) and possesses a solid professional foundation in German (B1).",
    textUA:
      "Досвідчений Full-Stack веброзробник із глибокими знаннями у створенні комплексних (end-to-end) вебзастосунків — від сучасних UI-фреймворків до баз даних та тестування. Спеціалізуюся на Next.js. Вільно спілкуюся англійською мовою (C1-C2) та маю міцну професійну базу німецької (B1).",
    textDE:
      "Erfahrener Full-Stack Webentwickler mit fundierten Kenntnissen in der Entwicklung kompletter Webanwendungen — von modernen UI-Tools bis hin zu Datenbanken und Testing. Mein klarer Fokus liegt auf Next.js. Kommunikationssicher auf Englisch (C1-C2) mit soliden Deutschkenntnissen (B1).",
  },
  {
    type: "h2",
    text: "Experience",
    textUA: "Досвід",
    textDE: "Berufserfahrung",
  },
  {
    type: "header-node",
    Comp: () => (
      <h3 className="text-base font-semibold">
        Full-Stack Web Developer at{" "}
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
    CompUA: () => (
      <h3 className="text-base font-semibold">
        Фул-стек Веб-розробник в{" "}
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
    CompDE: () => (
      <h3 className="text-base font-semibold">
        Full-Stack-Webentwickler bei{" "}
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
    text: "07.2024-09.2025",
    textUA: "07.2024-09.2025",
    textDE: "07.2024-09.2025",
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
        you see there were created by me. I created a new set of services and
        their prices in Stripe and integrated them into frontend and admin
        applications. For WordPress, which is used as a source of information,
        inputted by the Client, I created a few types of custom posts, custom
        WordPress components, to be used in them, and custom API endpoints to
        extract the data from these posts and their sets, for the information
        from them to be independently rendered on the frontend.
      </>
    ),
    CompUA: () => (
      <>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1 !text-base !font-semibold"
          href={`https://emigral.uk/`}
        >
          {"Emigral: "}
        </Link>
        Базуючись на цьому
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://www.figma.com/design/hAphGx4KSZeDqhcbF6bBLA/Emigral-Main-Layout-(Copy)?node-id=0-1&node-type=canvas&t=Cm0KBx0xRJBAoN6F-0`}
        >
          Figma дизайні
        </Link>{" "}
        працюючи в команді з Проджект Менеджером, Дизайнером та колишнім
        Розробником, я значно модифікував{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand"
          href={`https://emigral.uk/`}
        >
          фронтенд
        </Link>
        ,{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand"
          href={`https://crm.emigral.uk/login`}
        >
          адмін застосунок
        </Link>{" "}
        та Express бекенд застосунку з базою даних Mongo та виправив багато
        помилок в них. Більшість контенту та багато функцій інтерфейсу, які ви
        бачите там, були створені мною. Я створив новий набір послуг і їхні ціни
        в Stripe та інтегрував їх в сайт і застосунок адміністратора. Для
        ВордПрессу, що використовується як джерело інформації, що вводиться
        Замовником, я створив кілька кастомних типів постів, кастомні компоненти
        ВордПрессу, що використовуються в них, і кастомні АПІ ендпоінти для
        взяття інформації з цих постів і їх наборів для її незалежного
        відображення на фронтенді.
      </>
    ),
    CompDE: () => (
      <>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1 !text-base !font-semibold"
          href={`https://emigral.uk/`}
        >
          {"Emigral: "}
        </Link>
        Basierend auf diesem{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://www.figma.com/design/hAphGx4KSZeDqhcbF6bBLA/Emigral-Main-Layout-(Copy)?node-id=0-1&node-type=canvas&t=Cm0KBx0xRJBAoN6F-0`}
        >
          Figma-Design
        </Link>{" "}
        und bei der Arbeit im Team mit dem Project Manager, Designer und
        ehemaligen Entwickler, habe ich{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://emigral.uk/`}
        >
          das Frontend
        </Link>
        ,{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://crm.emigral.uk/login`}
        >
          das Admin-Panel
        </Link>{" "}
        und das Express-Backend der Anwendung mit der Mongo-Datenbank
        signifikant modifiziert und viele Bugs darin behoben. Die Mehrheit des
        Contents und viele UI-Features, die Sie dort sehen, wurden von mir
        erstellt. Ich habe ein neues Set von Services und deren Preise in Stripe
        erstellt und sie in die Frontend- und Admin- Anwendungen integriert. Für
        WordPress, das als vom Kunden eingegebene Informationsquelle genutzt
        wird, habe ich ein paar Arten von Custom Posts, Custom
        WordPress-Komponenten zur Verwendung darin und Custom API-Endpunkte
        erstellt, um die Daten aus diesen Posts und deren Sets zu extrahieren,
        damit die Informationen daraus unabhängig auf dem Frontend gerendert
        werden.
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
          an admin app
        </Link>
        , an Express backend for Firebase notifications sending via Agenda an
        auxiliary Mongo DB, and Hasura and Firebase databases for data storage,
        with test versions of all the above, I implemented a lot of features and
        new pages for the application and admin app with the corresponding
        changes to two databases, and fixed quite a few errors in almost all of
        the services, mentioned above. I extensively used react-admin in admin
        app and i18next for translations in this project.
      </>
    ),
    CompUA: () => (
      <>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1 !text-base !font-semibold"
          href={`https://churchonline.com.ua/`}
        >
          {"Hillsong: "}
        </Link>
        Працюючи над цим
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://www.figma.com/design/FBXFgE7GfewBxfF0msberK/Hillsong-Design-Daria?node-id=196-20448&t=QnJPh5GPMsU9gkxr-4`}
        >
          Figma дизайном
        </Link>{" "}
        в команді з Проджект Менеджером, Дизайнером, іншим Фронтенд Розробником,
        Мобільним Розробником і Тестером, над проектом, що є системою
        мікросервісів: мобільного застосунку,{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand"
          href={`https://hillsong.com/ukraine`}
        >
          візитної сторінки
        </Link>
        ,{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand"
          href={`https://churchonline.com.ua/`}
        >
          веб-застосунку
        </Link>
        ,{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand"
          href={`https://admin.churchonline.com.ua/`}
        >
          адмін-застосунку
        </Link>
        , Express бекенду для розсилки Firebase повідомлень через Agenda і
        допоміжну БД Mongo, і Hasura та Firebase баз данних, з тестовими
        версіями всього цього, Я реалізував багато функцій і нові сторінки для
        веб-застосунку та застосунку адміністратора з відповідними змінами в
        двох базах даних і виправив чимало помилок майже в усіх сервісах,
        зазначених вище. Я широко використовував react-admin в додатку адміна і
        i18next для перекладів у цьому проекті.
      </>
    ),
    CompDE: () => (
      <>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1 !text-base !font-semibold"
          href={`https://churchonline.com.ua/`}
        >
          {"Hillsong: "}
        </Link>
        Bei der Arbeit an diesem{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://www.figma.com/design/FBXFgE7GfewBxfF0msberK/Hillsong-Design-Daria?node-id=196-20448&t=QnJPh5GPMsU9gkxr-4`}
        >
          Figma-Design
        </Link>{" "}
        im Team mit dem Project Manager, Designer, einem weiteren Front-End-
        Entwickler, Mobile-Entwickler und Tester, an dem Projekt, das aus einem
        System von Mikroservices besteht: einer mobilen Anwendung,{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand"
          href={`https://hillsong.com/ukraine`}
        >
          einer Landingpage
        </Link>
        ,{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand"
          href={`https://churchonline.com.ua/`}
        >
          einer Web-Anwendung
        </Link>
        ,{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand"
          href={`https://admin.churchonline.com.ua/`}
        >
          einer Admin-App
        </Link>
        , einem Express-Backend für den Versand von Firebase-Benachrichtigungen
        über Agenda, einer zusätzlichen MongoDB und Hasura- sowie
        Firebase-Datenbanken für die Datenspeicherung, mit Testversionen von all
        dem oben Genannten, habe ich viele Features und neue Seiten für die
        Anwendung und die Admin-App mit den entsprechenden Änderungen an zwei
        Datenbanken implementiert und ziemlich viele Fehler in fast allen oben
        genannten Services behoben. Ich habe react-admin in der Admin-App und
        i18next für Übersetzungen in diesem Projekt intensiv genutzt.
      </>
    ),
  },
  {
    text: "Two last two projects utilize Next.js 12, SCSS styling, and MobX stores.",
    textUA:
      "У двох останніх проектах використовується Next.js 12, стилі SCSS і MobX стори.",
    textDE:
      "Die letzten beiden Projekte nutzen Next.js 12, SCSS-Styling und MobX-Stores.",
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
        full functionality for authentication via email and password with the
        full set of necessary emails sending, and a combination of JWT and
        refresh token, stored by Next-auth, users invitations and management for
        the admins, changing users&apos; data by admins and users, and retrieves
        from the post services APIs the data about parcels, their batches, and
        manifests, shows them in tables and allows for editing of them to the
        necessary extent. It utilizes Next.js 14, Next-auth authentication
        system, Tailwind styling, and Shadcn/ui components. The project had been
        discontinued by the Customer.
      </>
    ),
    CompUA: () => (
      <>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1 !text-base !font-semibold"
          href={`https://metagistics-admin-frontend-test.vercel.app/new-post/batches`}
        >
          {"Metagistics: "}
        </Link>
        Базуючись на цьому
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://www.figma.com/design/4EIUD68xoSZkpKQdjMRcBP/Metagistics-Design-(Copy)?node-id=0-1&node-type=canvas&t=mAJok0UNXWMJHz1z-0`}
        >
          Figma дизайні
        </Link>{" "}
        в команді з Проджект Менеджером, Дизайнером та Бекенд Розробником, я
        створив{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://metagistics-admin-frontend-test.vercel.app/new-post/batches`}
        >
          цей
        </Link>{" "}
        фронт для застосунку до Dotnet бекенду, що забезпечує повну
        функціональність для автентифікації за допомогою електронної пошти та
        пароля за допомогою повного набору необхідних електронних листів, а
        також комбінації JWT і refresh токенів, збережених з допомогою
        Next-auth, запрошення нових користувачів і керування ними
        адміністраторами, зміну даних користувачів адміністраторами та
        користувачами, а також отримання з API поштових служб данних про
        посилки, їх партії та маніфести, показує їх у таблицях і дозволяє
        редагувати їх у необхідній мірі. Він використовує автентифікацію Next.js
        14, Next-auth систему авторизації, стилі через Tailwind і компоненти
        Shadcn/ui. Проект був призупинений Замовником.
      </>
    ),

    CompDE: () => (
      <>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1 !text-base !font-semibold"
          href={`https://metagistics-admin-frontend-test.vercel.app/new-post/batches`}
        >
          {"Metagistics: "}
        </Link>
        Basierend auf diesem{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://www.figma.com/design/4EIUD68xoSZkpKQdjMRcBP/Metagistics-Design-(Copy)?node-id=0-1&node-type=canvas&t=mAJok0UNXWMJHz1z-0`}
        >
          Figma-Wireframe
        </Link>{" "}
        und im Team mit einem Project Manager, Designer und Backend-Entwickler,
        wurde{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://metagistics-admin-frontend-test.vercel.app/new-post/batches`}
        >
          dieser
        </Link>{" "}
        Frontend-Teil der Anwendung für ein .NET-Backend entwickelt. Die
        Anwendung bietet vollständige Funktionalität für
        E-Mail/Passwort-Authentifizierung inklusive des erforderlichen
        E-Mail-Versands, Verwaltung von JWT und Refresh-Token (gespeichert über
        Next-auth), Benutzereinladungen und -verwaltung für Admins, sowie
        Datenänderungen durch Admins und Nutzer. Zudem ruft sie über
        Postdienst-APIs Daten zu Paketen, Chargen (Batches) und Manifesten ab,
        stellt diese in Tabellen dar und ermöglicht deren Bearbeitung im
        erforderlichen Umfang. Technologiestack: Next.js 14, Next-auth, Tailwind
        CSS und Shadcn/ui. Das Projekt wurde vom Kunden eingestellt.
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
          /* href={`https://staging.stjohnsbuilding.co.uk/`} */
          href={`https://stjohnsbuilding.co.uk `}
        >
          {"St. John’s: "}
        </Link>
        Working together with another developer on a project, consisting of a
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://stjohnsbuilding.co.uk `}
        >
          notion board
        </Link>
        , with the access via admin-granted credentials, utilizing a Redux
        store, an
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://admin.stjohnsbuilding.co.uk`}
        >
          admin panel
        </Link>{" "}
        to it, and Express backend of the application with a Mongo database I
        made a lot of functionality of it.
      </>
    ),
    CompUA: () => (
      <>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1 !text-base !font-semibold"
          href={`https://stjohnsbuilding.co.uk `}
        >
          {"St. John’s: "}
        </Link>
        Працюючи з іншим розробником над проектом, що складаеться з
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://stjohnsbuilding.co.uk `}
        >
          дошки оголошень
        </Link>
        , з доступом через надані адміном логін і пароль, що використовує Redux
        store,
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://admin.stjohnsbuilding.co.uk `}
        >
          адмін панелі
        </Link>{" "}
        для неї, і Express бекенду з Mongo базою данних, я розробив значну
        частину функціоналу в них.
      </>
    ),
    CompDE: () => (
      <>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1 !text-base !font-semibold"
          /* href={`https://staging.stjohnsbuilding.co.uk/`} */
          href={`https://stjohnsbuilding.co.uk `}
        >
          {"St. John’s: "}
        </Link>
        In Zusammenarbeit mit einem weiteren Entwickler habe ich an diesem
        Projekt gearbeitet. Es umfasst ein{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://stjohnsbuilding.co.uk `}
        >
          Notion-Board
        </Link>
        , den zugangsgeschützten Bereich (mittels Admin-Credentials) unter
        Verwendung eines Redux-Stores, ein dazugehöriges{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://admin.stjohnsbuilding.co.uk`}
        >
          Admin-Panel
        </Link>{" "}
        und ein Express-Backend mit einer MongoDB-Datenbank. Dabei habe ich
        einen Großteil der Funktionalität erfolgreich implementiert.
      </>
    ),
  },

  {
    text: "I left the company because, due to the conditions in Ukraine, it was unable to secure new projects.",
    textUA:
      "Я припинив роботу в компанії, оскільки через умови в Україні вона не могла знайти нові проєкти.",
    textDE:
      "Ich habe meine Tätigkeit im Unternehmen beendet, da es aufgrund der Lage in der Ukraine keine neuen Projekte finden konnte.",
  },

  {
    type: "header-node",
    Comp: () => (
      <h3 className="text-base font-semibold">
        Front-End Web Developer at{" "}
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
    CompUA: () => (
      <h3 className="text-base font-semibold">
        Фронт-енд Розробник в{" "}
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
    CompDE: () => (
      <h3 className="text-base font-semibold">
        Front-End-Webentwickler bei{" "}
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
            "Working in a team of up to 15 developers on a shared Gitlab repository with workflow focused around a Gitlab task board  I worked on remaking an Angular front part of a big learning platform application into Next.js 14. The work was complicated by the application architecture being inherited from Angular to a great extent, with all the functions being provided by services with dependencies injections, but I managed to  develop quite a few components and services, and implement the Zod forms validation system for the application and tables resizing system. "
          }
        </span>
      </>
    ),
    CompUA: () => (
      <>
        <span className="text-base font-semibold">
          {"Навчальна платформа: "}
        </span>

        <span>
          {
            "Працюючи в команді до 15 розробників над спільним репозиторієм Gitlab із робочим процесом, зосередженим навколо дошки завдань Gitlab, я працював над переробкою Angular фронту  великої навчальної платформи на Next.js 14. Роботу ускладнювала архітектура програми значною мірою успадкована від Angular, усі функції надаються сервісами з ін’єкціями залежностей, але мені вдалося розробити чимало компонентів і служб, а також реалізувати систему перевірки форм Zod для програми та системи зміни розміру таблиць. "
          }
        </span>
      </>
    ),
    CompDE: () => (
      <>
        <span className="text-base font-semibold">{"Lernplattform: "}</span>

        <span>
          {
            "Bei der Arbeit in einem Team von bis zu 15 Entwicklern an einem gemeinsamen GitLab-Repository mit einem Workflow, der auf ein GitLab-Taskboard ausgerichtet war, habe ich an der Neugestaltung eines Angular-Frontends einer großen Lernplattform-Anwendung in Next.js 14 gearbeitet. Die Arbeit wurde dadurch erschwert, dass die Anwendungsarchitektur zu einem großen Teil von Angular übernommen wurde, wobei alle Funktionen durch Services mit Dependency Injections bereitgestellt wurden, aber ich habe es geschafft, etliche Komponenten und Services zu entwickeln sowie das Zod-Formularvalidierungssystem für die Anwendung und das System zur Größenänderung von Tabellen zu implementieren."
          }
        </span>
      </>
    ),
  },
  {
    text: "I also performed tasks related to translation from Ukrainian into English and proofreading/editing of English texts.",
    textUA:
      "Також я виконував завдання з перекладу з української на англійську та редагування англомовних текстів.",
    textDE:
      "Zudem habe ich Aufgaben zur Übersetzung vom Ukrainischen ins Englische sowie zur Korrektur und Bearbeitung englischsprachiger Texte übernommen.",
  },
  {
    text: "Being the first of many junior developers, hired by the company, I was promoted to Supervisor, and introduced into the company workflow three more junior developers, divided the tasks, received by me from the Project Coordinator, into the tasks for them, performed the reviews of their code, and merged their branches into higher order branches corresponding to higher order tasks.",
    textUA:
      "Будучи першим з багатьох джуніор розробників, прийнятих компанією, мене підвищили до Супервайзера, я ввів у робочий процес компанії ще трьох молодших розробників, розділяв завдання, отримані мною від координатора проекту, на завдання для них, виконував перевірки їх код і об’єднання їх гілок в гілки вищого порядку, що відповідали завданням вищого порядку.",
    textDE:
      "Als erster von vielen Junior-Entwicklern, die vom Unternehmen eingestellt wurden, wurde ich zum Supervisor befördert und habe drei weitere Junior-Entwickler in den Arbeitsablauf des Unternehmens eingeführt, die Aufgaben, die ich vom Projektkoordinator erhalten habe, in Aufgaben für sie aufgeteilt, die Reviews ihres Codes durchgeführt und ihre Branches in übergeordnete Branches gemergt, die den übergeordneten Aufgaben entsprachen.",
  },
  {
    text: "I left this job because a recruiter from another company offered me a much better salary.",
    textUA:
      "Я звільнився з цієї роботи, тому що рекрутер з іншої компанії запропонував мені набагато кращу зарплату.",
    textDE:
      "Ich habe diesen Job gekündigt, weil mir ein Recruiter von einem anderen Unternehmen ein viel besseres Gehalt angeboten hat.",
  },
  {
    type: "h3",
    text: "Full-Stack Web Developer at SMM Oksima Group",
    textUA: "Фул-стек Веб-розробник в SMM Oksima Group",
    textDE: "Full-Stack-Webentwickler bei SMM Oksima Group",
  },
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
        communication with the Product Owner and the Graphical Designer on
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
    CompUA: () => (
      <>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1 !text-base !font-semibold"
          href={`https://neurolide-cpa.vercel.app/`}
        >
          {"Neurolide: "}
        </Link>
        Я створив
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://oleksandrs-test-landing-page.vercel.app/`}
        >
          візитну сторінку
        </Link>{" "}
        базуючись на цьому
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://www.figma.com/design/E1Uy4MnJgSpWoDv6XTc8Rz/Bloggers-platform?node-id=0-1&t=AhUii3sjs3fhZmRf-0`}
        >
          Figma дизайні
        </Link>{" "}
        і працюючи над цим
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://www.figma.com/design/9lKt9ETfOEyiA4H1MU0HFv/%D0%A6%D0%9F%D0%90-%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0-(Copy)?m=dev&node-id=0-1&t=BCix09wwPlWuvMe0-1`}
        >
          Figma дизайном
        </Link>
        ,що було створоно паралельно до моєї роботи, в коммунікації з Хозяїном
        Продукту і Графічним Дизайнером над постійно змінними технічними
        вимогами і графічними ідеями, я створив
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://neurolide-cpa.vercel.app`}
        >
          цю ЦПА
        </Link>
        .
      </>
    ),
    CompDE: () => (
      <>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1 !text-base !font-semibold"
          href={`https://neurolide-cpa.vercel.app/`}
        >
          {"Neurolide: "}
        </Link>
        Ich habe eine
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://oleksandrs-test-landing-page.vercel.app/`}
        >
          Landingpage
        </Link>{" "}
        basierend auf diesem
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://www.figma.com/design/E1Uy4MnJgSpWoDv6XTc8Rz/Bloggers-platform?node-id=0-1&t=AhUii3sjs3fhZmRf-0`}
        >
          Figma-Wireframe
        </Link>{" "}
        erstellt und dann, während ich an diesem
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://www.figma.com/design/9lKt9ETfOEyiA4H1MU0HFv/%D0%A6%D0%9F%D0%90-%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0-(Copy)?m=dev&node-id=0-1&t=BCix09wwPlWuvMe0-1`}
        >
          Figma-Design
        </Link>
        gearbeitet habe, das parallel zu meiner Arbeit daran entwickelt wurde,
        in enger Abstimmung mit dem Product Owner und dem Grafikdesigner bei
        sich ständig ändernden Anforderungen und Designideen, habe ich
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://neurolide-cpa.vercel.app`}
        >
          diese CPA
        </Link>
        &nbsp;selbst erstellt.
      </>
    ),
  },
  {
    text: "Working on Next.js 14 with PostgreSQL/Prisma ORM, it enables user authentication with the role of a Brand or an Affiliate, with the combination of email and password using Auth.js, with email verification and password resetting via email sending, inputs user data in forms made with react-hook-form with user input masking and Zod input validation, and outputs them in the form of tables on wide screens, which are shown as horizontally swipeable by gestures lists on mobile devices for creation of advertisement Offers by the users with the status of Brand, and Media Channels, by the users with the status of Affiliate, which they own and offer the placement of the advertisements there, and with the ability of Affiliates to accept advertisement Offers from Brands. Users with the status of Manager in the current version manage all the financial operations manually, and verify the status of Offers and Media Channels, being able to edit them as well as all the financial properties of the users.",
    textUA:
      "Працюючи на Next.js 14 з PostgreSQL/Prisma ORM, вона дає змогу автентифікувати користувача в ролі Бренду або Афіліата, з комбінацією адреси електронної пошти та пароля за допомогою Auth.js, з підтвердженням електронної пошти та скиданням пароля через надсилання емейла, приймає дані користувача у формах, створених за допомогою react-hook-form з маскуванням вводу та перевіркою введення через Zod, і виводить дані у вигляді таблиць на широких екранах, які відображаються горизонтально свайпаними списками  на мобільних пристроях для створення рекламних Оферів користувачами зі статусом Бренд і Медіа-каналів користувачами зі статусом Афіліат, якими вони володіють і пропонують розміщення там реклами , а також з можливістю Афіліатів приймати рекламні офери від Брендів. Користувачі зі статусом Менеджера в поточній версії керують усіма фінансовими операціями вручну, а також перевіряють статус пропозицій і медіа-каналів, маючи можливість редагувати їх, а також усі фінансові властивості користувачів.",
    textDE:
      "Bei der Arbeit mit Next.js 14 mit PostgreSQL/Prisma ORM ermöglicht es die Benutzerauthentifizierung mit der Rolle einer Marke (Brand) oder eines Partners (Affiliate) durch die Kombination von E-Mail und Passwort unter Verwendung von Auth.js, mit E-Mail-Verifizierung und Zurücksetzen des Passworts via E-Mail-Versand, erfasst Benutzerdaten in Formularen, die mit react-hook-form mit Eingabemaskierung und Zod-Eingabevalidierung erstellt wurden, und gibt diese in Form von Tabellen auf breiten Bildschirmen aus, die auf Mobilgeräten als durch Gesten horizontal wischbare Listen dargestellt werden, für die Erstellung von Werbeangeboten (Offers) durch Benutzer mit dem Status Brand und Medienkanälen (Media Channels) durch Benutzer mit dem Status Affiliate, die sie besitzen und in denen sie die Platzierung von Werbung anbieten, sowie mit der Möglichkeit für Affiliates, Werbeangebote von Brands anzunehmen, wobei Benutzer mit dem Status Manager in der aktuellen Version alle Finanztransaktionen manuell verwalten und den Status von Offers und Media Channels verifizieren, mit der Möglichkeit, diese sowie alle Finanzeigenschaften der Benutzer zu bearbeiten.",
  },
  {
    text: "I quit the job when it became clear that they weren't going to pay me.",
    textUA: "Я звільнився, коли стало зрозуміло, що мені не будуть платити.",
    textDE:
      "Ich habe gekündigt, als klar wurde, dass sie mich nicht bezahlen würden.",
  },
  /*   {
    type: "h3",
    text: "Junior Researcher in Particles Physics in Non-linear Spaces in Bogolyubov Institute for Theoretical Physics of the National Academy of Sciences of Ukraine, Kyiv",
    textUA:
      "Молодший Науковий Співробітник відділу Фізики елементарних частинок у нелінійних просторах Інституту теоретичної фізики ім. Боголюбова НАН України, Київ",
  }, */
  {
    type: "h3",
    text: "Junior Research Fellow at Bogolyubov Institute for Theoretical Physics, NAS of Ukraine",
    textUA:
      "Молодший Науковий Співробітник в Інституты теоретичної фізики ім. Боголюбова НАН України",
    textDE:
      "Junior Research Fellow am Bogolyubov Institute for Theoretical Physics, NAS of Ukraine",
  },
  {
    text: "09.2011-10.2023",
  },
  {
    text: "Among other things, I performed analytical calculations for quantized fields in various closed and curved spaces, carried out numerical simulations based on the derived formulas, co-authored research papers in English, and taught theoretical physics to undergraduate students.",
    textUA:
      "Серед іншого, я виконував теоретичні розрахунки в аналітичному вигляді для квантованих полів у різних замкнених та криволінійних просторах, здійснював на базі отриманих формул чисельні моделювання, брав участь у написанні статей англійською мовою та викладав теоретичну фізику студентам.",
    textDE:
      "Unter anderem habe ich analytische Berechnungen für quantisierte Felder in verschiedenen geschlossenen und gekrümmten Räumen durchgeführt, basierend auf den hergeleiteten Formeln numerische Simulationen erstellt, am Verfassen von wissenschaftlichen Artikeln auf Englisch mitgewirkt und Studierenden theoretische Physik vermittelt.",
  },
  {
    type: "h2",
    text: "Education",
    textUA: "Освіта",
    textDE: "Ausbildung",
  },
  {
    text: "Master of Science in Particle Physics (cum laude) ",
    textUA: "Магістр Наук з фізики елементарних частинок (диплом з відзнакою)",
    textDE: "Master of Science in Teilchenphysik (mit Auszeichnung)",
  },
  {
    text: "Taras Shevchenko National University of Kyiv, Faculty of Physics",
    textUA:
      "Київський Національний Університет імені Тараса Шевченка, Фізичний факультет",
    textDE: "Taras Shevchenko National University of Kyiv, Faculty of Physics",
  },
  {
    text: "09.2005-06.2011 ",
  },
  {
    type: "h2",
    text: "My Projects",
    textUA: "Мої проекти",
    textDE: "Eigene Projekte",
  },
  {
    text: "I have made both these projects myself, starting from the user stories made up by me, and then from the database structure to the UI design I created and integrated both elements of the existing projects and materials directly from the technical documentation of used libraries. You can become sure of it just by looking at these sites.",
    textUA:
      "Я створив обидва ці проекти самостійно, починаючи від створених мною історій користувачів, а потім від структури бази даних до дизайну інтерфейсу користувача, який я створив і інтегрував як елементи існуючих проектів, так і матеріали безпосередньо з технічної документації використаних бібліотек. Ви можете переконатися в цьому, переглянувши ці сайти.",
    textDE:
      "Ich habe beide Projekte selbstständig realisiert – angefangen bei den von mir erfundenen User Stories über die Datenbankstruktur до zum UI-Design. Dabei habe ich sowohl Elemente bestehender Projekte als auch Materialien direkt aus der technischen Dokumentation der verwendeten Bibliotheken kreiert und integriert. Davon können Sie sich selbst überzeugen, indem Sie einfach einen Blick auf diese Websites werfen.",
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
    CompUA: () => (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className=""
        href={`https://oleksandrs-mern-blog.vercel.app`}
      >
        <h3 className="link-stand mt-2 !text-base font-semibold">Мій Блог</h3>
      </Link>
    ),
    CompDE: () => (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className=""
        href={`https://oleksandrs-mern-blog.vercel.app`}
      >
        <h3 className="link-stand mt-2 !text-base font-semibold">Mein Blog</h3>
      </Link>
    ),
  },
  {
    text: "React and Express blog with Mongo/Mongoose DB and extensive use of Redux Toolkit Querry with redux-persist for user persistence, pagination, theme switching, and comments CRUD via optimistic or pessimistic cache updates.",
    textUA:
      "Блог на React та Express із базою даних Mongo/Mongoose та широким використанням Redux Toolkit Querry з redux-persist для збереження користувачів, розбиття сторінок, перемикання тем і  CRUD коментарів через оптимістичні чи песимістичні оновлення кешу.",
    textDE:
      "React- und Express-Blog mit Mongo/Mongoose DB und umfassender Nutzung von Redux Toolkit Query mit redux-persist für User-Persistenz, Pagination, Theme-Switching und Comments-CRUD über optimistische oder pessimistische Cache-Updates.",
  },
  {
    text: "A full authentication system with Google Oauth and email/password options with email sending from template for email verification and password resetting, as well as a commenting tree, tags system, voting system, pagination with variable page size, and search are implemented.",
    textUA:
      "Реалізовано повну систему автентифікації з опціями Google Oauth і електронної пошти/пароля з надсиланням електронної пошти з шаблону для перевірки електронної пошти та скидання пароля, а також реалізовано дерево коментарів, систему тегів, систему оцінок постів та коментарів, паджинацію зі змінним розміром сторінки та пошук.",
    textDE:
      "Ein vollständiges Authentifizierungssystem mit Google OAuth und E-Mail/Passwort-Optionen inklusive E-Mail-Versand aus Templates für E-Mail-Verifizierung und Passwort-Zurücksetzung sowie ein Kommentarbaum, ein Tag-System, ein Voting-System, eine Pagination mit variabler Seitengröße und eine Suche sind implementiert.",
  },
  {
    text: "A rich text editor, with Firebase images uploading immediately from it, is used for posts and comments.",
    textUA:
      "Для публікацій і коментарів використовується редактор форматованого тексту, безпосередньо з якого завантажуються зображення на Firebase.",
    textDE:
      "Ein Rich-Text-Editor, aus dem Firebase-Bilder sofort hochgeladen werden, wird für Beiträge und Kommentare verwendet.",
  },
  {
    text: "Flowbite UI library is used.",
    textUA: "Використовується бібліотека UI Flowbite",
    textDE: "Die Flowbite-UI-Bibliothek wird verwendet.",
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
    CompUA: () => (
      <>
        Повний опис
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://oleksandrs-mern-blog.vercel.app/about`}
        >
          тут
        </Link>
        .
      </>
    ),
    CompDE: () => (
      <>
        Die vollständige Beschreibung finden Sie
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://oleksandrs-mern-blog.vercel.app/about`}
        >
          hier
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
    CompUA: () => (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className=""
        href={`https://oleksandrs-next-marketplace.vercel.app`}
      >
        <h3 className="link-stand mt-2 !text-base font-semibold">Мій Ринок</h3>
      </Link>
    ),
    CompDE: () => (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className=""
        href={`https://oleksandrs-next-marketplace.vercel.app`}
      >
        <h3 className="link-stand mt-2 !text-base font-semibold">
          Mein Marktplatz
        </h3>
      </Link>
    ),
  },
  {
    text: "Next.js 14 marketplace with Postgres DB accessed via Prisma , which not only allows users to create products, but create whole categories of products with arbitrary structure of product properties. Moreover, full product filtering with pagination over this user-created structure is implemented, and over prices as well.",
    textUA:
      "Торговий майданчик на Next.js 14 з БД Postgres через Prisma DB, що дозволяє всім користувачам не тільки створювати продукти, але й створювати цілі категорії продуктів із довільною структурою властивостей продукту. Крім того, реалізована повна система фільтрація товарів із розбивкою на сторінки за цією створеною користувачем структурою, а також за цінами.",
  },
  {
    text: "For authentication Auth.js (Next-Auth V5) is used with options of Google and Github OAuth and email-password authentication, with emails sending for email verification, password resetting, and optional 2-factor authentication.",
    textUA:
      "Для автентифікації використовується Auth.js (Next-Auth V5)  з опціями Google і Github OAuth і комбінації пароля та електронної пошти, з надсиланням електронних листів для підтвердження електронної пошти, скидання пароля та додаткової 2-факторної автентифікації.",
  },
  {
    text: "Redux is used for the products cart.",
    textUA: "Redux використовується для кошика продуктів.",
  },
  {
    text: "Shadcn-ui is used for UI everywhere. ",
    textUA: "Shadcn-ui використовується для UI всюди.",
  },
  {
    text: "A rich text editor is integrated for product descriptions.",
    textUA: "Для описів продуктів інтегрований редактор форматованого тексту.",
  },
  {
    text: "Stripe integration allows for simulating payments and changing order status via the webhook both for buyer and seller.",
    textUA:
      "Інтеграція Stripe дозволяє імітувати платежі та змінювати статус замовлення через вебхук як для покупця, так і для продавця.",
  },
  {
    text: "Forms use the combination of react-hook-form, Zod, and Shadcn-UI.",
    textUA: "Форми використовують комбінацію react-hook-form, Zod і Shadcn-UI.",
  },
  {
    text: "The entire project is written in Typescript. ",
    textUA: "Весь проект написаний на Typescript.",
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
    CompUA: () => (
      <>
        Повний опис
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://oleksandrs-next-marketplace.vercel.app/about`}
        >
          тут
        </Link>
        .
      </>
    ),
    CompDE: () => (
      <>
        Die vollständige Beschreibung finden Sie
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="link-stand pl-1"
          href={`https://oleksandrs-next-marketplace.vercel.app/about`}
        >
          hier
        </Link>
        .
      </>
    ),
  },
];
