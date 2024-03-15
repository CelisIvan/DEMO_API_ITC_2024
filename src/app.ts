import express from 'express';
import { ApolloServer } from 'apollo-server-express'
import { PingResolver } from './resolvers/ping'
import 'reflect-metadata'
import {buildSchema} from 'type-graphql'
import {getDataSource} from './config/typeorm'
import { StudentResolver } from './resolvers/studentResolver'


export async function startServer(){
    getDataSource();
    const app: any = express();
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                PingResolver,
                StudentResolver
            ]
        }),
        context: ({req, res}) => ({req, res})
    })

    server.applyMiddleware({app, path:'/graphql'})


    return app;
}


