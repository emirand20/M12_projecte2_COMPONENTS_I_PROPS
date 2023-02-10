import { useState } from "react"
import "./App.css";

function App() {
  const [issues, setIssues] = useState([
    'Python',
    'Vue',
    'React'
  ])

  const removeElement = (index) => {
    const newIssues = issues.filter((_, i) => i !== index);
    setIssues(newIssues);
  }
  return (
    <div className="App">
        {issues.map((issue, index) => (
        <div key={index}>
          <button
            onClick={() => removeElement(index)}
          >
            {issue}
          </button>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}

export default App;