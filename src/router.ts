import {Request, Response} from 'express';
import CreateUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response){
  const user = CreateUser(
    {
      email:'email@email', 
      password: '123456',
      techs: [{title: 'ReacJS', experience: 100}, 'NodeJS']
    }
  );
  return response.json({message: 'Hello world again!', user})
}