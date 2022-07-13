import Head from "next/head";
import MoviesContainer from "../../feature/movies/moviesContainer";
import Header from "../../shared/Header/header";

export default function Movies() {
  return (
    <div>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header/>
      </header>

      <main>

        <MoviesContainer/>

      </main>

      <footer></footer>
    </div>
  );
}
