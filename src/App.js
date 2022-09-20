import './App.css';
import About from './components/about/about';
import Intro from './components/intro/intro';
import ProjectList from './components/projectList/Projectlist';
import Contact from './contact/contact';
function App() {
  return (
    <div className="App">
    <Intro/>
    <About/>
    <ProjectList/>
    <Contact/>
    </div>
  );
}

export default App;
