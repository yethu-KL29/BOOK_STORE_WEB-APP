import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import AddBook from './components/AddBook';
import Header from './components/Header';
import Home from './components/Home';
import Books from './components/Book/Books'
import Details from './components/Book/Details';
function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/add" element = {<AddBook/>}></Route>
        <Route path="/books" element = {<Books/>}></Route>
        <Route path="/about" element = {<About/>}></Route>
        <Route path="/books/:id" element = {<Details/>}></Route>

     </Routes>
    </div>
  );
}

export default App;
