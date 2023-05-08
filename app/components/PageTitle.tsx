import Head from "next/head";

interface PageTitleProps {
  title: string;
  template?: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title, template = "%s" }) => {
  const formattedTitle = template.replace("%s", title);

  return (
    <Head>
      <title>{formattedTitle}</title>
    </Head>
  );
};