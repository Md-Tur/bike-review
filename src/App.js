import './App.css';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Reviews></Reviews>
      <Dashboard></Dashboard>
      <Blogs></Blogs>
      <About></About>
    </div>
  );
}

export default App;
