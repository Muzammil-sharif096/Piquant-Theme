import './App.css';
import CardData from './Components/CardData/CardData';
import Chief from './Components/Cheif/Chief';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Happy from './Components/Happy/Happy';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Parallel from './Components/Parallel/Parallel';
import SearchItem from './Components/SearchItem/SearchItem';
import Welcome from './Components/Welcome/Welcome';

function App() {
  return (
    <>
      <Navbar />
      <CardData />
      <Gallery />
      <Welcome />
      <Parallel />
      <SearchItem />
      <Chief />
      <News />
      <Happy />
      <Footer />
    </>
  );
}

export default App;
