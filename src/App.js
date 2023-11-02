import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { AboutMe } from './AboutMe';
import { MyTown } from './MyTown';
import photo from './pic1.jpeg';

function App() {
  return (
    <> 
    <nav> 
        <ul>
          <li>
            <Link style={{textDecoration:'underline', color: 'rgb(151, 91, 6)'}} to="/"> 
            About Me </Link>
          </li>
          <li>
            <Link style={{textDecoration:'underline', color: 'rgb(151, 91, 6)'}} to="/mytown"> 
            My Town </Link>
          </li>
        </ul>
      </nav>
      <Routes> 
        <Route path = "/" element = {<AboutMe /> }/> 
        <Route path = "/mytown" element = {<MyTown /> }/> 

      </Routes>
    </>
  );
}

export default App;
