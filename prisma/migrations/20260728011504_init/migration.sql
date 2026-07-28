-- CreateTable
CREATE TABLE "Dragao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "apelido" TEXT,
    "imagem" TEXT,
    "cor" TEXT NOT NULL,
    "cavaleiro" TEXT,
    "especie" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dragao_pkey" PRIMARY KEY ("id")
);
