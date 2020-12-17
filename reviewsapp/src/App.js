import './App.css';
import React, { useState } from 'react';
import Instructor from './components/instructors'
// import Reviews from './components/reviews'
import { lightTheme, darkTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import Switch from "react-switch";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
    button{
      background: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.body};
      margin: 0 0.5rem;
    }
  }`

function App() {
  const [theme, setTheme] = useState('light')
  const [checked, setChecked] = useState(false)

  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
      // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }

  const toggleButton = () => {
    setChecked(!checked)
    toggleTheme()
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <div className="App">
    <GlobalStyles />
      <main>
      <section className="container">
      <div className='title'>
          <h2>Our Instructors</h2>
          <div className='underline'></div>         
      </div>   
      <Instructor/>
      </section>
      </main>
      {/* <section className="reviews">
        <Reviews/>
      </section> */}
      
    <br></br>
       <Switch checked={checked} onChange={toggleButton} checkedIcon={
          <span
            style={{ fontSize: "0.8rem", marginLeft: "0.2rem" }}
            role="img"
            aria-label="sun"
          >
            🌞
          </span>
        }
          onColor="#242424"
          uncheckedIcon={
            <span
              style={{ fontSize: "0.8rem", marginLeft: "0.2rem" }}
              role="img"
              aria-label="moon"
            >
              🦉
                    </span>
          }
        />
    </div>
    </ThemeProvider>
  );
}

export default App;
