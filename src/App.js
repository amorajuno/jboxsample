import './App.css';
import Navbar from './components/navbar/Navbar'
import Slider from './components/Slider/Slider'
// import Games from './Pages/Games/Games'
import Navlinks from './components/Navlinks/Navlinks'

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Slider />
      </header>
      <Navlinks />
      {/* <Games/> */}

    </div>
  );
}

export default App;
