const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../src/models/database/connection');
const productModel = require('../../../src/models/products.model');
const productService = require('../../../src/services/products.service');
const { productDatabase, product, id } = require('../mocks/product.mock');

describe('Tests for the Service layer of "/products" route', function () {
  afterEach(function () { sinon.restore() });
    describe('Tests for "getAll" function', function () {
      it('Retrieves all products', async function () {
        const result = { type: null, message: productDatabase }
        sinon.stub(productModel, 'getAll').resolves(productDatabase);
        const response = await productService.getAll();
        expect(response).to.be.deep.equal(result);
    });
  });

    describe('Tests for "getById" function', function () {
    it('Retrieves a specific product based on its id', async function () {
      const result = { type: null, message: [product] }
      sinon.stub(productModel, 'getById').resolves([product]);
      const response = await productService.getById(id);
      expect(response).to.be.deep.equal(result);
    });
  });

});