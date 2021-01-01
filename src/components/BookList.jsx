import React, { Component } from 'react';
import axios from "axios";
import { sleep } from '../utils';

// loading 아이콘
import { LoadingOutlined } from "@ant-design/icons";


class BookList extends Component {
  state = {
    books: [],
    loading: false,
  };

  render() {
    const { books, loading } = this.state;


    return (
      <div>
        <h1>Book List {loading && <LoadingOutlined />}</h1>
        {books.length === 0 && <p>데이터가 없습니다.</p>}
        {books.length !== 0 && (<ul>
          {books.map(book => (
            <li>{book.title}</li>
          ))}
        </ul>)}
      </div>
    );
  }



  async componentDidMount() {
    this.setState({ loading: true });

    await sleep(2000);
    // 최초 렌더링시 서버에 책 리스트 요청한다.
    try {
      const response = await axios.get('https://api.marktube.tv/v1/book', {
        headers: {
          Authorization: `Bearer ${this.props.token}`,
        }
      });
      console.log(response.data);
      this.setState({
        books: response.data,
        loading: false,
      });

    } catch (error) {
      console.log(error);
    }

    /* 받아온 책 리스트를 렌더한다. => props 혹은 state 변경
       여기서는 props를 변경할 수 없으니 state로 관리하겠다.
    */
  }

}

export default BookList;