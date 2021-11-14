import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { repos as reposAtom, view as viewAtom } from "./atoms";
import Menu from "./menu";

function App(): JSX.Element {
  const [repos, setRepos] = useRecoilState(reposAtom);
  const view = useRecoilValue(viewAtom);

  useEffect(() => {
    const getRepos = async () => {
      const url = `https://api.github.com/users/laurapoc/repos?per_page=${view}`;
      const resp = await fetch(url);
      const body = await resp.json();
      setRepos(body);
    };

    getRepos();
  }, [setRepos, view]);


  return (
    <>
      <Menu />
      {repos.map((repo: any) => {
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
