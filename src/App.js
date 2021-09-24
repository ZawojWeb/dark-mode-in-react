import React, {useContext, useState} from "react";
import './Main.css'


const themes = {
  light: {
    name: 'light'
  },
  dark: {
    name: 'dark'
  }
};

const ThemeContext  = React.createContext();



const ThemeContextProvider = props =>{
  const [mode, setMode] = useState(themes.dark)
  const value = [mode, setMode]

  return <ThemeContext.Provider value={value} {...props} />
}


function App() {

  return (
    <ThemeContextProvider >
      <Main>
        <Menu/>
      </Main>
    </ThemeContextProvider>
  )
}



function Menu() {
 
  const [mode, setMode]  = useContext(ThemeContext)

  const hanlderChangeMode = () =>{

    let theMode = mode.name === themes.dark.name ? themes.light : themes.dark;
    console.log(theMode);
    setMode(theMode)
    return

  }
  return (
    <nav>
     <h1>Dark Mode in React</h1>
      <div>
        <label className="switch">
          <input type="checkbox" onClick={hanlderChangeMode}/>
          <span className="slider round"></span>
        </label>
      </div>
      <h2>Mode: {mode.name}</h2>
    </nav>
  );
}

const Main = ({children}) => {
  const [mode, setMode]  = useContext(ThemeContext)

  return (
    <main className={mode.name}>
      {children}

      <section className="about">
        <div>
          <h2>Here is my little project where I use :</h2>
          <ul>
            <li>useState</li>
            <li>useContext</li>
          </ul>
            <a href="https://github.com/ZawojWeb/dark-mode-in-react/blob/master/src/App.js">Code Source</a>
        </div>
      </section>
   
    </main>
  )
}






export default App;
