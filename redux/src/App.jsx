import {useDispatch, useSelector} from "react-redux";

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const increment = () => {
      dispatch({ type: 'INCREMENT' });
  }

  const decrement = () => {
      dispatch({ type: 'DECREMENT' });
  }

  const reset = () => {
      dispatch({ type: 'RESET' });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 15, width: 200 }}>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
