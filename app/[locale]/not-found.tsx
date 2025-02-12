import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFoundPage");
  return (
    <>
      <h1>{t("title")}</h1>
      <p>Could not find requested resource2</p>
    </>
  );
}
