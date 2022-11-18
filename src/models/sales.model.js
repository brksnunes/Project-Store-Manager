const connection = require('./database/connection');

const getAll = async () => {
  const [result] = await connection.execute(`
  SELECT 
    sales_prod.sale_id AS saleId,
    sales_prod.product_id AS productId,
    sales_prod.quantity,
    sales.date
FROM
    StoreManager.sales_products AS sales_prod
        INNER JOIN
    StoreManager.sales AS sales ON sales.id = sales_prod.sale_id
ORDER BY sales_prod.sale_id , sales_prod.product_id`);
  return result;
};

const getById = async (id) => { 
  const [result] = await connection.execute(`
  SELECT 
    sales_prod.product_id AS productId,
    sales_prod.quantity,
    sales.date
FROM
    StoreManager.sales_products AS sales_prod
        INNER JOIN
    StoreManager.sales AS sales ON sales.id = sales_prod.sale_id
        WHERE sales.id = ?
ORDER BY sales_prod.sale_id , sales_prod.product_id`, [id]);
  return result;
};

module.exports = {
  getAll,
  getById,
};