import dotenv, { config } from "dotenv"
import postgres from "postgres"
import Express from "express"
import { Pool } from "pg"

dotenv.config();
const PORT = process.env.PORT 
const app = Express;

app.use(bp.json());

app.post("/createTable" async (_, res) =>{
    try {
        `
        CREATE TABLE IF NOT EXIST users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL
        )
    `
    }
})

app.listen(PORT, () =>{
    console.log(`App running on port ${PORT}.`);
});

app.post("/user", async (req, res) =>{
    const tableQueryText = 
})
