import Header from "./layouts/Header/Header";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Form from "./components/Form/Form";
import Footer from "./layouts/Footer/Footer";
import './App.css';

const App = () => {

  return (
    <div>
      <Header/>
      <main>
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Form />
      </main>
      <Footer />
    </div>
  )
};

export default App;
