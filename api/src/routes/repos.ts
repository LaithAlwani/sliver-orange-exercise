import { Router, Request, Response } from 'express';
const fetch = require( 'node-fetch');
export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');
  
  res.status(200);
  
  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  //geting the data from github api
  const response = await fetch("https://api.github.com/users/silverorange/repos")
  const data = await response.json()
  console.log(data)
  res.setHeader("content-type","application/json")
  res.json([...data]);
});
