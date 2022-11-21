const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../src/models/database/connection');
const productModel = require('../../../src/models/products.model');
const { productDatabase, product, id } = require('../mocks/product.mock');

describe('Tests for the Model layer of "/products" route', function () {
  afterEach(function () { sinon.restore() });
    describe('Tests for "getAll" function', function () {
    it('Retrieves all products', async function () {
      sinon.stub(connection, 'execute').resolves([productDatabase]);
      const response = await productModel.getAll();
      expect(response).to.be.deep.equal(productDatabase);
    });
    });
  
    describe('Tests for "getById" function', function () {
    it('Retrieves a specific product based on its id', async function () {
      sinon.stub(connection, 'execute').resolves([product]);
      const response = await productModel.getById(id);
      expect(response).to.be.deep.equal(product);
    });
  });

});