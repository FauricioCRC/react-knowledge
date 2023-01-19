import { useState } from 'react'
import reactLogo from './assets/react.svg'
import MyComponent from './components/MyComponent'

import './App.css'
import InputLiveChange from './components/InputLiveChange'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <MyComponent /> */}
      <InputLiveChange />
    </div>
  )
}

export default App
