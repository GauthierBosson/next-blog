import Head from "next/head";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { signOut } from "next-auth/client";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [session, loading] = useSession();
  const router = useRouter();

  if (typeof window !== "undefined" && loading) return null;

  if (typeof window !== "undefined" && !loading && !session)
    router.push("/auth/signin");

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Access granted</p>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}
