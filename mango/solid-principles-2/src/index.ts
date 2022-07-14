import express from 'express'
import { MongoHelper } from './mongo-helper'

const app = express();

app.get('/', async (req, res) => {
    const userModel = await MongoHelper.instance.getColletion('users')
    await userModel.insertOne({ name: 'Evandro' })
    res.send('Usuário criado')
})

app.get('/', async (req, res) => {
    const userModel = await MongoHelper.instance.getColletion('users')
    const users = await userModel.find().toArray()
    res.send({ users })
})

app.listen(5050, () => console.log('server running'))