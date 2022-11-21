const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const productService = require('../../../src/services/products.service');
const productController = require('../../../src/controllers/products.controller');
const { productDatabase, product, id } = require('../mocks/product.mock');

const { expect } = chai;
chai.use(sinonChai);

describe('Tests for the Controller layer of "/products" route', function () { 
  afterEach(function () { sinon.restore() });
  describe('Tests for "getProducts" function', function () { 
    it('Retrieves all products', async function () { 
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, 'getAll').resolves({ type: 200, message: productDatabase });
      await productController.getProducts(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productDatabase);
    });
  });

  describe('Test for "getProductsById" function', function () {
    it('Retrieves a specific product based on its id', async function () {
      const req = { params: { id: 1 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'getById').resolves({ type: 200, message: product });
      await productController.getProductsById(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith({ message: product });
    });
    
  });

});