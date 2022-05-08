import { useEffect, useState } from 'react';
import Repo from '../components/Repo';
// import RepoDetails from '../components/RepoDetails';

export function Repos() {
  const [repos, setRepos] = useState([]);
  const [filter, setFilter] = useState('');
  //sorts data in reverse chronological order by creation date.
  const sortData = (data: any) => {
    const orderedData = data.sort((a: any, b: any) => {
      if (a.created_at > b.created_at) {
        return -1;
      } else {
        return 1;
      }
    });
    console.log(orderedData);
  };

  const getRepos = () => {
    fetch('http://localhost:4000/repos')
      .then((res) => res.json())
      .then((data) => {
        sortData(data);
        setRepos(data);
      });
  };

  useEffect(() => {
    //fetchs data from API
    if (!repos.length) {
      getRepos();
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        {filter && (
          <p>
            filter: {filter} <span onClick={() => setFilter('')}>X</span>
          </p>
        )}
        {repos ? (
          repos
            .filter((repo: any) => repo.language.includes(filter))
            .map((repo: any) => (
              <Repo key={repo.id} repo={repo} setFilter={setFilter} />
            ))
        ) : (
          <p>no repos found</p>
        )}
      </header>
    </div>
  );
}
