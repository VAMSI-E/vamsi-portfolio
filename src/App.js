import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { SparkleEffect } from './components/SparkleEffect ';
import { About } from './components/About';
import { Animation } from './components/Animation';
function App() {
  return (
    <div className="App">
      <SparkleEffect/>
      <Banner />
      <About/>
      <NavBar />
      <Skills />
      <Animation/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
