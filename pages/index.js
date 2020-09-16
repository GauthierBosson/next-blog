import Head from "next/head";
import styles from "../styles/Home.module.css";

import useSWR from "swr";

export default function Home() {
  const { data, error } = useSWR("/api/users");

  if (error) return <div>Fail</div>;

  if (!data) return <div>Loading</div>;

  if (data) console.log(data);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        lol
      </div>
    </div>
  );
}
