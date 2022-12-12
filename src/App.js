import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { CastList } from './components/CastList';
import { CastInfo } from './components/CastInfo';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/casts/page/:id" element={<CastList/>}/>
          <Route exact path="/cast/:id" element={<CastInfo/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
