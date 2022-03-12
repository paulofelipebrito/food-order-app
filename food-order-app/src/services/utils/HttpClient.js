
class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);
    let body = null;

    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    const loadedMeals = [];

    if (response.ok) {
      for(const key in body){
        loadedMeals.push({
          id: key,
          name: body[key].name,
          description: body[key].description,
          price: body[key].price
        })
      }

      return loadedMeals;
    } 

    throw new Error("Something went wrong");

  }
  async post(path, body) {
    const response = await fetch(`${this.baseURL}${path}`,{
      method: 'POST',
      body: JSON.stringify({
        user: body.user,
        orderItems: body.orderItems
      })
    });   
     
  }
}

export default HttpClient;