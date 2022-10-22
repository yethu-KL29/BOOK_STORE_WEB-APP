import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import AddBook from './components/AddBook';
import Header from './components/Header';
import Home from './components/Home';
import AllBooks from './components/Book/AllBooks'
function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/add" element = {<AddBook/>}></Route>
        <Route path="/books" element = {<AllBooks/>}></Route>
        <Route path="/about" element = {<About/>}></Route>

     </Routes>
    </div>
  );
}

export default App;
