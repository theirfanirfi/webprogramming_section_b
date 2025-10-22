import {useState, useEffect} from 'react'
import MobileComponent from './components/MobileComponent'
import LargeScreenComponent from './components/LargeScreenComponent'

function App(){
  const [counter, setCounter] = useState(10)
  const [control, setControl] = useState(false)
  const [mobile, setMobile] = useState(false)

  const incrementCounterHandler = () => {
    setCounter(counter+10)
    setMobile(!mobile);
  }

  useEffect(()=>{
  },[])

  const getView = () => {
    if(mobile){
      return <MobileComponent/>
    }
    return <LargeScreenComponent counterValue={counter} 
    name="Faizan"
    />
  }
  

  return (
    <>
  <h2>This is h2</h2>
  {getView()}
  <button onClick={incrementCounterHandler}>Increment</button>
  </>
  )
}

export default App;