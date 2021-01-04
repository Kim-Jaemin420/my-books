import { Component } from 'react';
import axios from 'axios';

class BookService extends Component {
  static async getBooks(token) {
    const response = await axios.get('https://api.marktube.tv/v1/book', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }

  static async getBook(token, bookId) {
    const response = await axios.get(
      `https://api.marktube.tv/v1/book/${bookId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }
}

export default BookService;
