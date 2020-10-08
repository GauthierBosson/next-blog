import Head from "next/head";
import Link from "next/link";
import { signOut } from "next-auth/client"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Dev Log</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>INDEX</h1>
      <ul>
        <li>
          <Link href="/auth/signup">
            <a>signup</a>
          </Link>
        </li>
        <li>
          <Link href="/auth/signin">
            <a>singin</a>
          </Link>
        </li>
        <li>
          <Link href="/post">
            <a>posts</a>
          </Link>
        </li>
        <li>
          <button onClick={signOut}>Signout</button>
        </li>
      </ul>
    </div>
  );
}
