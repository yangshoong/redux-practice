import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from "./component/Box";

function App() {
  let count = useSelector(state => state.count)
  let id = useSelector(state => state.id)
  let password = useSelector(state => state.password)
  let dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } })
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "ost", password: "123" } })
  }

  const logout = () => {
    dispatch({ type: "LOGOUT", payload: { id: "", password: "" } })
  }

  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 5 } })
  }

  return (
    <div>
      <div className="print">
        <h3>
          id: {id}
        </h3>
        <h3>
          password: {password}
        </h3>
        <div>
          <h1>{count}</h1>
        </div>
      </div>
      <div className="box" >
        <Box />
      </div>
      <div className="buttons">
        <button onClick={increase}>증가</button>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
        <button onClick={decrease}>감소</button>
      </div>


    </div>
  );
}

export default App;
