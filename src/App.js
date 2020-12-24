import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(3);
  const styles = {
    gridTemplateColumns: `repeat(${count}, 1fr)`,
    gridTemplateRows: `repeat(${count}, 1fr)`,
  };
  const array = [...new Array(count * count)];

  return (
    <>
      <div className="rotate-x">
        <div className="rotate-y">
          <div className="rotate-z">
            <div className="cube">
              <div style={styles} className="panel panel-top">
                {array.map(() => (
                  <div />
                ))}
              </div>
              <div style={styles} className="panel panel-bottom">
                {array.map(() => (
                  <div />
                ))}
              </div>
              <div style={styles} className="panel panel-left">
                {array.map(() => (
                  <div />
                ))}
              </div>
              <div style={styles} className="panel panel-right">
                {array.map(() => (
                  <div />
                ))}
              </div>
              <div style={styles} className="panel panel-back">
                {array.map(() => (
                  <div />
                ))}
              </div>
              <div style={styles} className="panel panel-front">
                {array.map(() => (
                  <div />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <input
        style={{
          position: "fixed",
          bottom: 10,
        }}
        type="range"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        min={2}
        max={10}
      />
    </>
  );
};

export default App;
