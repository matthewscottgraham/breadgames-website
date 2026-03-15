import { useState } from "react";
import LanguagePicker from './components/LanguagePicker'
import Card from './components/Card'
import Footer from './components/Footer';
import './App.css'

function App() {
  const [language, setLanguage] = useState('EN');

  return (
    <div className="app">
      <LanguagePicker language={language} setLanguage={setLanguage} />
      <Card
          title='Plateau'
          subtitle='A stress-free sandbox'
          blurb="Build and sculpt your own peaceful settlement in this relaxing city builder. A sandbox that lets you freely edit the terrain, add forests, rivers, paths and buildings without the pressure of resource management, timers or a fail state. It's pure creation, relaxation and admiring your little plateau."
          background='lightBlue'
          imagePath='plateau'
          imageCount={4}
          trailerLink={''}
          steamLink={'https://store.steampowered.com/app/4463590/Plateau/'}
      />
      <Card
          title='Paddlin Upstream'
          blurb="A chaotic coop physics rage game about paddlin' a canoe up a mountain"
          background='coral'
          imagePath='paddlin'
          imageCount={4}
          trailerLink={''}
          steamLink={''}
      />
      <div className="spaceGrow" />
      <Footer />
    </div>
  )
}

export default App
