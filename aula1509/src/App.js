import './App.css';
import Olamundo from './components/olaMundo';
import Frases from './components/frases';
import SayMyNome from './components/saymynome';

function App() {
  return (
    <div className="container">
      <h1> Ola mundo! </h1>
      <hr/>
      <Olamundo/>
      <hr/>
      <Frases/>
      <hr/>
      <SayMyNome nome="Kath" idade="8" prof="palhaço"/>
      <hr/>
    </div>
  );
}

export default App;
