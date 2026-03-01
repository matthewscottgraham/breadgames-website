import Card from './components/Card'
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div className="app">
      <Card
          title='Plateau'
          blurb='A relaxing little city builder with no goals, no antagonist and no stress.'
          imagePath='plateau'
          imageCount={4}
          steamLink={''}
      />
      <Card
          title='Paddlin Upstream'
          blurb="A chaotic coop physics rage game about paddlin' a canoe up a mountain"
          imagePath='paddlin'
          imageCount={4}
          steamLink={''}
      />
      <div className="spaceGrow" />
      <Footer />
    </div>
  )
}

export default App
