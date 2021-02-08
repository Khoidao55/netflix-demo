import './App.css';
import Row from './components/Row/Row.js';
import NavBar from './components/NavBar/NavBar.js';
import Banner from './components/Banner/Banner.js';
import request from './requests.js';

function App() {
  return (
    <div className="App">
      {/* nav bar */}
      <NavBar />
      {/* Banner */}
      <Banner />
      <Row title="NETFLIX ORIGINAL" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
