import HomePage from "../constant/components/HomePage";
import { HomeStoreState } from "../providers/HomeStoreState";

function Home() {
  return (
    <HomeStoreState>
      <HomePage />
    </HomeStoreState>
  );
}

export default Home;
