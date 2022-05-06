import { Router, Request, Response } from 'express';
import * as fs from 'fs';
const fetch = require('node-fetch');
export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);

  //fetching data from github api
  const response = await fetch(
    'https://api.github.com/users/silverorange/repos'
  );
  const data = await response.json();

  //fetching data from repos.json
  try {
    const fileData = fs.readFileSync('data/repos.json', 'utf-8');
    //combinds both datas gahterd
    const tempData = [...data, ...JSON.parse(fileData)]
    //returns repositories where `repository.fork` is `false`.
    const aggergateData = tempData.filter(repo => !repo.fork)
    
    res.setHeader('content-type', 'application/json');
    res.json(aggergateData);
  } catch (err) {
    console.log(err);
  }
});
