import './App.css';
import './components/counter/Counter'
import Counter from './components/counter/Counter';
import Form from './components/form/Form';

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
        <h1>Покупка мороженого</h1>
        <div className='Card-wrapper'>
          <Counter />
          <Form />
        </div>
      </div>
    </div >
  );
}

export default App;
