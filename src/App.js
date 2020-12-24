import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(5);
  const styles = {
    gridTemplateColumns: `repeat(${count}, 1fr)`,
    gridTemplateRows: `repeat(${count}, 1fr)`,
  };

  return (
    <>
      <div className="rotate-x">
        <div className="rotate-y">
          <div className="rotate-z">
            <div className="cube">
              <div style={styles} className="panel panel-top">
                {[...new Array(count * count)].map(() => (
                  <div></div>
                ))}
              </div>
              <div style={styles} className="panel panel-bottom">
                {[...new Array(count * count)].map(() => (
                  <div></div>
                ))}
              </div>
              <div style={styles} className="panel panel-left">
                {[...new Array(count * count)].map(() => (
                  <div></div>
                ))}
              </div>
              <div style={styles} className="panel panel-right">
                {[...new Array(count * count)].map(() => (
                  <div></div>
                ))}
              </div>
              <div style={styles} className="panel panel-back">
                {[...new Array(count * count)].map(() => (
                  <div></div>
                ))}
              </div>
              <div style={styles} className="panel panel-front">
                {[...new Array(count * count)].map(() => (
                  <div></div>
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
