const connection = require('./database/connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id',
  );
  return result;
};

const getById = async (id) => { 
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ? ORDER BY id', [id],
  );
  return result;
};

const insertProduct = async ({ name }) => { 
  await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [name],
  );
};

const updateProduct = async (id, { name }) => connection.execute(
  'UPDATE StoreManager.products SET name = (?) WHERE id = (?)',
  [name, id],
);

module.exports = {
  getAll,
  getById,
  insertProduct,
  updateProduct,
};
