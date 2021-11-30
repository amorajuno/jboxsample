import './App.css';
import Navbar from './components/navbar/Navbar'
import Slider from './components/Slider/Slider'
import Games from './Pages/Games/Games'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Slider/>
        <p>
          Alou
        </p>
      </header>
      <Games/>
    </div>
  );
}

export default App;
