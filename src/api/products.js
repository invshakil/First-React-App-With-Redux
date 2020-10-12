import HttpClient from './index';

class ProductApi extends HttpClient {
    async getProducts(param = null) {
        param = param ? '?' + param : '';
        return this.requestType('get').request(`/products${param}`);
    }
}

const productApi = new ProductApi()
export default productApi;
