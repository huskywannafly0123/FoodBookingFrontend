import './App.css';
import logo from './img/logo.png';
import Menu from './components/foodbooking/Menu'

function App() {
  document.body.style = 'background: #27272a;';
  return (
    <div className="App">
      <img src={logo} id='AppLogo'/>
      <h1 id='AppTitle'>Lunch Order Form</h1>
      <Menu/>
    </div>
  );
}

export default App;
