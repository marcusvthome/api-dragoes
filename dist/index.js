"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/dragoes', async (req, res) => {
    const dragoes = await prisma.dragao.findMany();
    res.json(dragoes);
});
app.get('/dragoes/:id', async (req, res) => {
    const { id } = req.params;
    const dragao = await prisma.dragao.findUnique({
        where: { id: Number(id) }
    });
    res.json(dragao);
});
app.post('/dragoes', async (req, res) => {
    const { nome, apelido, imagem, cor, cavaleiro, especie, status, tamanho, descricao } = req.body;
    const dragao = await prisma.dragao.create({
        data: { nome, apelido, imagem, cor, cavaleiro, especie, status, tamanho, descricao }
    });
    res.json(dragao);
});
// insere vários dragões de uma vez
app.post('/dragoes/batch', async (req, res) => {
    const dragoes = req.body;
    const resultado = await prisma.dragao.createMany({
        data: dragoes
    });
    res.json(resultado);
});
app.patch('/dragoes/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, apelido, imagem, cor, cavaleiro, especie, status, tamanho, descricao } = req.body;
    const dragao = await prisma.dragao.update({
        where: { id: Number(id) },
        data: { nome, apelido, imagem, cor, cavaleiro, especie, status, tamanho, descricao }
    });
    res.json(dragao);
});
app.delete('/dragoes/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.dragao.delete({
        where: { id: Number(id) }
    });
    res.json({ message: 'Dragão deletado!' });
});
app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333');
});
