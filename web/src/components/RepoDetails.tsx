import { useEffect, useState } from 'react';
export default function RepoDetails({ repoName, fullName }: any) {
  const [readmeFile, setReadmeFile] = useState('');

  useEffect(() => {
    if (!readmeFile) {
      //get readme File from api using the repo fullName
      //variable and set it using setReadmeFile
      setReadmeFile('');
    }
  }, [readmeFile, fullName]);
  return (
    <>
      <div className="repo-details-content">
        <h3>{repoName}</h3>
        <p>commit Date:</p>
        <p>Author:</p>
        <p>message:</p>
        {/* render readme file if exists  */}
        {readmeFile && <p>Readme</p>}
      </div>
    </>
  );
}
