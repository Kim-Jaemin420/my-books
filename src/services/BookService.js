import { Component } from 'react';
import axios from 'axios';

// 이렇게 변수로 선언하면, 환경에 따라 다르게 설정해줄 수도 있다.
// 예를 들어, 개발 모드일때는 dev.api.martube
// production 모드일때는 api.marktube
const BOOK_API_URL = 'https://api.marktube.tv/v1/book';

class BookService extends Component {
  static async getBooks(token) {
    const response = await axios.get(BOOK_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }

  static async getBook(token, bookId) {
    const response = await axios.get(`${BOOK_API_URL}/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
}

export default BookService;
