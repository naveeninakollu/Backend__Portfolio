import { useState, useEffect } from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Home from "./components/Home";
import Exp from "./components/Exp";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Cert from "./components/Cert";

function App() {
  const [list, setList] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/personal') 
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        if (data.length > 0) {
          setList(data[0]); 
        }
      })
      .catch(error => {
        console.error("Error fetching personal details:", error);
      });
  }, []);

  if (!list) {
    return (
      <div className="text-white p-8 bg-black h-screen">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Header />
      <Home list={list} />
      <About list={list} />
      <Education />
      <Cert />
      <Exp />
      <Skills />
      <Projects />
      <Contact list={list} />
    </>
  );
}

export default App;
