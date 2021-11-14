import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

const repoState = atom({
  key: "repos",
  default: [],
});

function App(): JSX.Element {
  const [repos, setRepos] = useRecoilState(repoState);

  useEffect(() => {
    const getRepos = async () => {
      const url = "https://api.github.com/users/laurapoc/repos";
      const resp = await fetch(url);
      const body = await resp.json();
      setRepos(body);
    };

    getRepos();
  }, [setRepos]);

  console.log(repos);

  return (
    <>
      {repos.map((repo: any) => {
        console.log(repo);
        return (
          <div key={repo.url}>
            <a href={repo.url}>
              {repo.url} / {repo.name}
            </a>
            <div style={{ fontWeight: "bold" }}>{repo.description}</div>
            <div>{repo.forks} forks</div>
          </div>
        );
      })}
    </>
  );
}

export default App;
