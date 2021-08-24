import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar';
import MovieList from './components/MovieList';
import Myfooter from './components/Myfooter';
import MyJumbotron from './components/MyJumbotron';
import HistoryList from './components/HistoryList'
import FantasyList from './components/FantasyList'
import HorrorList from './components/HorrorList'
import RomanceList from './components/RomanceList'

function App() {
  return (
    <div className="App">
    
   
      <MyNavbar title="books" />
      <MyJumbotron/>
      <MovieList/>
      <HistoryList/>
     <FantasyList/>
       <HorrorList/>
       <RomanceList/>
      <Myfooter/>
     
     
    </div>
  );
}

export default App;
