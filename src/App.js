import './App.css';
import {Routes, Route} from 'react-router-dom'
import People from './components/People';
import Form from './components/Form';
import Planet from './components/Planet';

function App() {


  return (
    <div className="App">
      <h1>Luke APIwalker</h1>
      <Form/>
      <Routes>
        <Route path='/people/:id' element={<People/>} />
        <Route path='/planets/:id' element={<Planet/>}/>
      </Routes>
    </div>
  );
}

export default App;
