import AllRoutes from './Components/AllRoutes';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './PageComponent/Footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
