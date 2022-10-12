import './App.css';
import Row from './components/Row';
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row 
      title="Netflix Originals"
      fetchUrl={requests.fetchNetflixOriginals}
      />
            <Row 
      title="Netflix Trending"
      fetchUrl={requests.fetchTrending}
      />
      <Row 
      title="Netflix Top Rated"
      fetchUrl={requests.fetchTopRated}
      />
      <Row 
      title="Netflix Action Movies"
      fetchUrl={requests.fetchActionMovies}
      />
      <Row 
      title="Netflix Comedy Movies"
      fetchUrl={requests.fetchComedyMovies}
      />
      <Row 
      title="Netflix HorrorMovies"
      fetchUrl={requests.fetchHorrorMovies}
      />
      <Row 
      title="Netflix Romance Movies"
      fetchUrl={requests.fetchRomanceMovies}
      />
      <Row 
      title="Netflix Documentaries"
      fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
