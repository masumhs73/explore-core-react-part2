
import './App.css'
import Counter from './Count';
import Batsman from './Batsman';

function App() {

  function handleClick () {
    alert('I am clicked!');
  }

  const handleClick3 = () => {
    alert('Click 3');
  }

  const handleAdd5 = (num) => {
    const newNum = num +5;
    alert(newNum);
  }

  return (
    <>
      <h1>Vite + React</h1>

      <Batsman></Batsman>

      <Counter></Counter>


      <button onClick={handleClick}>Click me</button>
      <button onClick={function () {
        alert('Click 2');
      }}>Click 2</button>
      <button onClick={handleClick3}>Click 3</button>
      <button onClick={() => {
        alert('Click 4')
      }}>Click 4</button>

      <button onClick={() => {handleAdd5(10)}}>Add number</button>
    </>
  )
}

export default App
