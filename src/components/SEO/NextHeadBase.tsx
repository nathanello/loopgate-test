import Head from "next/head";

const NextHeadBase = () => {
  const baseUrl = "https://downloads.notjustjpgs.com";
  const ogImgUrl = `${baseUrl}/images/splash.jpg`;
  const title = "NJJ Publishing — Token-Gated Video Game Downloads";
  const description =
    "Securely and easily access exclusive digital downloads using your Loopring NFTs. Powered by LoopGate.";

  return (
    <Head>
      <title>Token-Gated Video Game Downloads</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:image" content={ogImgUrl} />
      <meta property="og:site_name" content="NJJ Publishing — Token-Gated Video Game Downloads" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImgUrl} />
      <link rel="shortcut icon" href="/images/favicon.png" />
    </Head>
  );
};

export default NextHeadBase;
