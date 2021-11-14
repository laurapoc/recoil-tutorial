import { useEffect } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";

const repoState = atom({
  key: "repos",
  default: [],
});

export const viewAtom = atom({
  key: "view",
  default: "5",
});

function App(): JSX.Element {
  const [repos, setRepos] = useRecoilState(repoState);
  const view = useRecoilValue(viewAtom)

  useEffect(() => {
    const getRepos = async () => {
      const url = `https://api.github.com/users/laurapoc/repos?per_page=${view}`;
      const resp = await fetch(url);
      const body = await resp.json();
      setRepos(body);
    };

    getRepos();
  }, [setRepos, view]);

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
