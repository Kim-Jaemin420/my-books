import axios from 'axios';

export default class BookService {
  static async getBokks(token) {
    const response = await axios.get('https://api.marktube.tv/v1/book', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
}