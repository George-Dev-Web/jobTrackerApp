import { useEffect, useState } from "react";
import Login from "./pages/Login";

const apiKey = import.meta.env.VITE_API_KEY;

const API_URL = "https://www.themuse.com/api/public/jobs?page=1";
function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => setJobs(data.results));
  }, []);
  return (
    <>
      <h1>Home page</h1>
    </>
  );
}

export default App;
