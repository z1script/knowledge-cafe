import React from "react";
import "./QNA.css";

const QNA = () => {
  return (
    <div className="qna-container">
      <h3>1. Props vs State</h3>
      <p>
        Props are passed from a parent component to a child component, and state
        is managed within a component and can be updated by the component itself
      </p>
      <h3>2. How does useState work?</h3>
      <p>
        useState is a React Hook. it takes an initial state value as an argument
        and return an updated state value whenever the setter function is
        called.
      </p>
      <h3>3. Purpose of useEffect other than fetching data.</h3>
      <p>
        useEffect allows to perform side effects in components like fetching
        data, directly updating the DOM, and timers.
      </p>
      <h3>4. How Does React work?</h3>
      <p>
        React is a JavaScript library that creates user interfaces. & ReacJS
        uses unidirectional data flow
      </p>
    </div>
  );
};

export default QNA;
