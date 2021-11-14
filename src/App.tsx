import { useEffect } from "react";

function App() {
  useEffect(() => {
    const getRepos = async () => {
      const url = "https://api.github.com/users/laurapoc/repos";
      const resp = await fetch(url);
      const body = await resp.json();
      console.log(body);
    };

    getRepos();
  }, []);

  return <div></div>;
}

export default App;
