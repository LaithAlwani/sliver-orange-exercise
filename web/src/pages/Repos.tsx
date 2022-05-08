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

  //fetchs data from API
  const getRepos = () => {
    fetch('http://localhost:4000/repos')
      .then((res) => res.json())
      .then((data) => {
        sortData(data);
        setRepos(data);
      });
  };

  useEffect(() => {
    if (!repos.length) {
      getRepos();
    }
  });

  return (
    <div className="content">
      <h1>Sliver Orange Repos</h1>
      {filter && (
        <p>
          filter:{' '}
          <button className="btn" onClick={() => setFilter('')}>
            {filter} X
          </button>
        </p>
      )}
      {repos ? (
        <ul className="repo-list">
          {repos
            .filter((repo: any) => repo.language.includes(filter))
            .map((repo: any) => (
              <li key={repo.id}>
                <Repo repo={repo} setFilter={setFilter} />
              </li>
            ))}
        </ul>
      ) : (
        <p>no repos found</p>
      )}
    </div>
  );
}
