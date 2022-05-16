import type { NextPage } from "next";
import { getSortedPostsData } from "../lib/posts";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
interface Props {
  allPostsData: Array<{
    id: string;
    date: string;
    title: string;
  }>;
}

const Home: NextPage<Props> = ({ allPostsData }) => {
  console.log("allPostsData", allPostsData);
  return (
    <Layout home={false}>
      <>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>…</section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
          <p>啥东dsf西啊</p>
        </section>
      </>
    </Layout>
  );
};

export async function getStaticProps() {
  // await new Promise((resolve) =>
  //   setTimeout(() => {
  //     resolve(null);
  //   }, 1000)
  // );
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Home;
