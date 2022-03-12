import HttpClient from './utils/HttpClient';

class MealsService {
  constructor() {
    this.httpClient = new HttpClient('https://food-app-cc068-default-rtdb.firebaseio.com/');
  }

  async listMeals() {
    return this.httpClient.get('meals.json');
  }
  async orderMeal(userData, orderItems) {
    return this.httpClient.post('orders.json', {
        user: userData,
        orderItems: orderItems
    });
  }
}

export default new MealsService();
