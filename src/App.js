import './App.scss';
import { Routes, Route } from "react-router-dom";
import { Home } from './views/Home';
import { Resume } from './views/Resume';
import { Portfolio } from './views/Portfolio';
import { Contact } from './views/Contact';
import { NavBar } from './components';
//import { Footer } from './components';//

function App() {
  return (
    <main className="main-app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume/:name" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/*<Footer />*/}
    </main>
  );
}

export default App;
