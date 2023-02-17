import "./styles.css";
import { useState } from "react";
let iv;

export default function App() {
  const [o, n] = useState({ c: 0, times: "even" });
  const [vs, us] = useState(0);

  function i(e) {
    iv = parseInt(event.target.value);
  }
  function b() {
    us(iv);
  }
  function re() {
    n({ ...o, c: 0, times: "even" });
    console.log(o);
  }

  function r() {
    // console.log(o.c)
    const s = function () {
      if (o.c % 2 === 0 && o.c < vs) {
        return { ...o, c: o.c + 1, times: "odd" };
      } else if (o.c % 2 !== 0 && o.c < vs) {
        return { ...o, c: o.c + 1, times: "even" };
      } else {
        return { ...o };
      }
    };
    n(s);
  }

  return (
    <div className="App">
      <button onClick={r}> click</button>

      <h1>{o.c}</h1>
      <h1>{o.times}</h1>
      <input type="text" onChange={i} />
      <button onClick={b}> set limit</button>
      <button onClick={re}>reset</button>
    </div>
  );
}
