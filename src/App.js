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
      <Row title="TRENDING NOW" fetchUrl={request.fetchTrending}/>
      <Row title="TOP RATED" fetchUrl={request.fetchTopRated}/>
      <Row title="ACTION MOVIES" fetchUrl={request.fetchActionMovies}/>
      <Row title="COMEDY MOVIES" fetchUrl={request.fetchComedyMovies}/>
      <Row title="HORROR MOVIES" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="ROMANCE MOVIES" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="DOCUMENTARIES" fetchUrl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
