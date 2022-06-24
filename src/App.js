import "./App.css";
import Comments from "./Comments.js";
import { useState } from "react";

function App() {
  const [state, setState] = useState("desktop");
  return (
    <div className="full">
      <div className="App">
        <button onClick={() => setState("desktop")}>Desktop</button>
        <button onClick={() => setState("tablet")}>Tablet</button>
        <button onClick={() => setState("phone")}>Phone</button>
        <div className={`container ${state}`}>
          <div className="image-container" >
            <img src="/insta-pic3.png" />
          </div>
          <div className="div2" >
            <Comments
              commentsUrl="http://localhost:3004/comments"
              currentUserId="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
