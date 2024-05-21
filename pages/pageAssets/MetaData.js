import Head from 'next/head';

export default function Tags({ data }) {
  return (
    <Head>
      {data && data.metaTitle && <title>{data.metaTitle}</title>}
      {data && data.metaDescription && <meta name="description" content={data.metaDescription} />}
      {data && data.metaKeyword && <meta name="keywords" content={data.metaKeyword} />}
    </Head>
  );
}
