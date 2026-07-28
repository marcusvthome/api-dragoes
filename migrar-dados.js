const sql = require('mssql/msnodesqlv8');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient(); // aponta pro Postgres, via .env atual

// Conexão com o SQL Server local (Windows Authentication)
const configSqlServer = {
  connectionString:
    'Driver={ODBC Driver 17 for SQL Server};Server=localhost;Database=dragoes;Trusted_Connection=Yes;',
};

async function migrar() {
  try {
    console.log('Conectando no SQL Server local...');
    const pool = await sql.connect(configSqlServer);

    const result = await pool.query('SELECT * FROM Dragao');
    const dragoes = result.recordset;

    console.log(`Encontrados ${dragoes.length} dragões. Migrando...`);

    for (const d of dragoes) {
      await prisma.dragao.create({
        data: {
          nome: d.nome,
          apelido: d.apelido,
          imagem: d.imagem,
          cor: d.cor,
          cavaleiro: d.cavaleiro,
          especie: d.especie,
          status: d.status,
          tamanho: d.tamanho,
          descricao: d.descricao,
        },
      });
      console.log(`Migrado: ${d.nome}`);
    }

    console.log('Migração concluída!');
  } catch (err) {
    console.error('Erro:', err);
  } finally {
    await sql.close();
    await prisma.$disconnect();
  }
}

migrar();