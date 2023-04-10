import React from 'react'
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { LoginPage } from "./LoginPage";

const MainApp = () => {
  return (
    <div>
      <h1>MainApp</h1>
      <hr/>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="login" element={ <LoginPage/> } />
        <Route path="about" element={ <AboutPage/> } />
      </Routes>
    </div>
  )
}

export default MainApp