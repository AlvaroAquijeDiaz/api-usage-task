import Head from "next/head";
import { Main } from "../components/Main";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Api usage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Using git</h1>
      <Main></Main>
    </div>
  );
}
