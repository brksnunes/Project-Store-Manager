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

});