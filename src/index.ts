import express, { response } from 'express';
import {helloWorld} from './router';

const app = express();

app.get('/', helloWorld)

app.listen(3333);