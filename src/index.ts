import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

app.get('/dragoes', async (req, res) => {
    const dragoes = await prisma.dragao.findMany()
    res.json(dragoes)
})

app.post('/dragoes', async (req, res) => {
    const { nome, cor, montador, vivo } = req.body
    const dragao = await prisma.dragao.create({
        data: { nome, cor, montador, vivo }
    })
    res.json(dragao)
})

// insere vários dragões de uma vez
app.post('/dragoes/batch', async (req, res) => {
  const dragoes = req.body
  const resultado = await prisma.dragao.createMany({
    data: dragoes
  })
  res.json(resultado)
})

app.patch('/dragoes/:id', async(req, res) => {
    const { id } = req.params
    const { nome, cor, montador, vivo } = req.body
    const dragao = await prisma.dragao.update({
        where: { id: Number(id) },
        data: { nome, cor, montador, vivo }
    })
    res.json(dragao)
})

app.delete('/dragoes/:id', async (req, res) => {
    const { id } = req.params
    await prisma.dragao.delete({
        where: { id:Number(id) }
    })
    res.json({ message: 'Dragão deletado!' })
})

app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333')
})