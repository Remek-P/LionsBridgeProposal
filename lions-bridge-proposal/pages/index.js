import Head from "next/head";
import Header from "@/pages/header/header";
import Grid from "@/pages/grid/grid";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lion's Bridge</title>
        <meta name="description" content="Lion's Bridge home page"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <link rel="icon" href="/favicon.jpg"/>
      </Head>
      <main>
        <Header/>
        <Grid/>
      </main>
    </>
  );
}
