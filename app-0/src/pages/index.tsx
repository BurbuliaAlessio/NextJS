import { Layout } from "@/components/layout/Layout";
import { JSX, useTransition } from "react";
import { useTranslation } from "react-i18next";


export default function Home(): JSX.Element {
  const {t} = useTranslation("common");

  return (
    <div>
      {t("title")}
    </div>
  );
}

Home.getLayout = function getLayout(page: JSX.Element) {
    return (
            <Layout>
                    {page}
            </Layout>
    )
}