import { Request, Response } from "express"
import { Pool, Client } from "pg"

export let index = (req: Request, res: Response) => {
  res.send('HOME');
}

export let postgresTest = (req: Request, res: Response) => {

  const pool = new Pool({
    connectionString: process.env.DB_CONNECT 
  });

  pool.query('SELECT * FROM public."test-table"', (error, response) => {
    console.log(error, response);
    res.send(response);
    pool.end();
  })
}