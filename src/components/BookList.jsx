import React, { Component } from 'react';
import axios from "axios";
import { sleep } from '../utils';


class BookList extends Component {
  state = {
    books: [],
  };

  render() {
    const { books } = this.state;


    return (
      <div>
        {books.map(book => (
          <li>{book.title}</li>
        ))}
      </div>
    );
  }



  async componentDidMount() {
    // 최초 렌더링시 서버에 책 리스트 요청한다.
    try {
      const response = await axios.get('https://api.marktube.tv/v1/book', {
        headers: {
          Authorization: `Bearer ${this.props.token}`,
        }
      });
      console.log(response.data);
      await sleep(2000);
      this.setState({ books: response.data });

    } catch (error) {
      console.log(error);
    }

    /* 받아온 책 리스트를 렌더한다. => props 혹은 state 변경
       여기서는 props를 변경할 수 없으니 state로 관리하겠다.
    */
  }

}

export default BookList;