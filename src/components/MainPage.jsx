
import Hero from "./Hero"
import NewCollection from "./NewCollection";
import News from "./News";
import Offers from "./Offers";
import Popular from "./Popular";

const MainPage = () => {
  return (
    <div className="main">
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <News/>
    </div>
  )
}

export default MainPage;