import { Header } from './components/Header'
import { Body } from './components/Body'

import { Footer } from './components/Footer'
import { Search } from './components/Search'
import { useState } from 'react'
import './App.css'

function App() {
  const [userText, setUserText] = useState(''); 

  return (
    <>
      <Header />
      <Search setUserText={setUserText} />
      <Body userText={userText} />
      <Footer />
    </>
  )
}

export default App
