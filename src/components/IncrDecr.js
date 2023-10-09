import React, { useState } from "react";

export default function IncrDecr() {
  const [likes, setLikes] = useState(0);

  function decrement() {
    setLikes(likes - 1);
  }

  function increment() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <h1>{likes}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
