import Header from "./components/Header"
import Search from "./components/Search"

import "./App.css"

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient'></div>
      </div>

      <div className='app'>
        <Header />
        <Search />
      </div>
    </main>
  )
}

export default App
