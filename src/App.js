import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("# Markdown Preview");
  return (
    <div className="app">
      <textarea
        className="markdown"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <section className="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </section>
    </div>
  );
}

export default App;
