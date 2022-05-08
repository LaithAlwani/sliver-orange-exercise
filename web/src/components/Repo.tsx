import { useState } from 'react';
import RepoDetails from './RepoDetails';

export default function Repo({ repo, setFilter }: any) {
  const [toggleDetials, setToggleDetails] = useState(false);

  return (
    <div onClick={() => setToggleDetails(!toggleDetials)} className="card">
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <p>{repo.created_at}</p>
      <button
        className="btn"
        onClick={(e) => {
          e.stopPropagation();
          setFilter(repo.language);
        }}
      >
        {repo.language}
      </button>
      <p>forks: {repo.forks_count}</p>
      {toggleDetials && <RepoDetails fullName={repo.full_name} />}
    </div>
  );
}
