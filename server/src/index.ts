import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();
const PORT = process.env.PORT;

const app = express();
// support parsing of application/json type post data
app.use(bodyParser.json());

app.get('/', (request: Request, response: Response) => {
    response.status(200).send('Hello World');
});

app.post('/', (request: Request, response: Response) => {
    const { body } = request;
    console.log(body);
    response.status(200).send('That was a post request');
});

app.listen(PORT, () => {
    console.log('Server running at PORT: ', PORT);
}).on('error', (error) => {
    throw new Error(error.message);
});
