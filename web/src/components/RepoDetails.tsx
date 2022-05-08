import { useEffect, useState } from 'react';
export default function RepoDetails({ repoName, fullName }: any) {
  const [readmeFile, setReadmeFile] = useState('');

  useEffect(() => {
    if (!readmeFile) {
      setReadmeFile(
        `https://raw.githubusercontent.com/${fullName}/master/README.md.`
      );
    }
  }, [readmeFile, fullName]);
  return (
    <>
      <div className="repo-details-content">
        <h3>{repoName}</h3>
        <p>commit Date:</p>
        <p>Author:</p>
        <p>message:</p>
        {readmeFile && <p>Readme</p>}
      </div>
    </>
  );
}
