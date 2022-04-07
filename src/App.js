import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("resource changed");

    // clear last entry
    return () => {
      console.log("return from resource change");
    };
  }, [resourceType]);

  return (
    <main className="App">
      <button onClick={() => setResourceType("posts")}>posts</button>
      <button onClick={() => setResourceType("users")}>user</button>
      <button onClick={() => setResourceType("comments")}>comments</button>
      <h1>{resourceType}</h1>
    </main>
  );
}

export default App;
