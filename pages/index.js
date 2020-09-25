import Head from "next/head";
import styles from "../styles/Home.module.css";

import Link from "next/link";
import { signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading && !session && <p>Loading</p>}
      {!loading && !session && (
        <>
          <p>Not signed in</p>
          <Link href="/login">
            <a>Signin</a>
          </Link>
        </>
      )}
      {session && (
        <>
          <p>Signed in</p>
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </div>
  );
}
