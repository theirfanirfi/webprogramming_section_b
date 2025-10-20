import {useState} from 'react';

function App(){
  const [counter, setCounter] = useState(10)

  const clickHandler = () => {
    setCounter(counter+20)
    // alert('the button is clicked '+counter)

  }

  return (
    <>
    <h1>This is my first component {counter}</h1>
    <h2>this is h2</h2>
    <button onClick={clickHandler}>Click me</button>
    </>
  )
}

export default App;










