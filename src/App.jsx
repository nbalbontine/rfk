import './App.css'
import { Header7 } from './components/Header7'
import { Layout354 } from './components/Layout354'


import { Header33New } from './components/Header33New'
import { Layout355 } from './components/Layout355'

import { HeaderFinal } from './components/HeaderFinal'
import { Header80 } from './components/Header80'
import { HeaderZoomIn } from './components/HeaderZoomIn'
import { Layout348 } from './components/Layout348'
import { CarsPassingBy } from './components/CarsPassingBy'


function App() {
  return (
    <div className="App">
      <Header7 />
      <Layout354 />
      <Layout348 />
      <CarsPassingBy />
      <Header80 />

      <Layout355 />
      <HeaderZoomIn />

      <Header33New />
      <HeaderFinal />
    </div>
  )
}

export default App