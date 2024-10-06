import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  //todo: Test the onchange event with the input field.

  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  }
  return (
    <>
      <button onClick={handleClick}> Button</button>
      <h1>Couner:{counter}</h1>


      <h1>describe is use to group the related tests</h1>
      <input type="text" placeholder='Enter Your Phone Number'></input>
      <p>First react Test Case</p>
      <img title='AI image' src='https://img.freepik.com/premium-photo/view-3d-car-with-sky-background_1234738-251320.jpg?ga=GA1.1.507758659.1702233081&semt=ais_hybrid' alt='img'></img>

      <h1>Rom Rom ji</h1>
      <p>it is paragraph</p>
      <input type='text' placeholder='Enter Your Name' name='username' id='userId1'></input>



 
    </>
  );
}

export default App;
