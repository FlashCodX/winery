import Head from "next/head";

// This component represents the metadata of the App such as the title of it, and the icon.
export const Metadata = () => {
  return (
    <Head>
      <title>Winery</title>
      <meta name="description" content="Winery App" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
