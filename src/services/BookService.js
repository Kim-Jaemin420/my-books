import { Component } from 'react';

class BookService extends Component {
  static async getBooks(token) {
    const response = await axios.get('https://api.marktube.tv/v1/book', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
}

export default BookService;
