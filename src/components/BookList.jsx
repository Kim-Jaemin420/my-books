import React, { Component } from 'react';
import axios from "axios";
import { sleep } from '../utils';
import { Button } from "antd";

import Header from "./Header";
import { GlobalStyle } from "../style/GlobalStyle";

// loading 아이콘
import { LoadingOutlined, ReloadOutlined } from "@ant-design/icons";
import BookItem from './BookItem';


class BookList extends Component {
  state = {
    loading: false,
    error: null,
  };

  render() {
    const { loading, error } = this.state;
    // BookListContainer가 props를 통해 books 전달
    const {books} = this.props;

    // error 객체가 어디 담겨있는지 확인하기 위한 콘솔로그
    // console.log(error.response.data);

    if (error !== null) {
      const errorType = error.response.data.error;

      if (errorType !== 'INVALID_TOKEN') {
        return (
          <div>
            <h1>Book List {loading && <LoadingOutlined />}</h1>
            <p>유효하지 않은 토큰입니다.
              <Button
                shape="circle"
                icon={<ReloadOutlined />}
                onClick={this.reload}
              />
            </p>
          </div>
        );
      }
    }


    return (
      <>
      <GlobalStyle />
      {<Header>Jaime'S Library{loading && <LoadingOutlined />}</Header>}
      {books.length === 0 && <p>데이터가 없습니다.</p>}
      <div className="content">
        {books.length !== 0 && books.map((book, i) => <BookItem {...book} index={i} />)}
      </div>
    </>
    );
  }


  getBooks = async () => {
    // 최초 렌더링시 서버에 책 리스트 요청한다.
    try {
      this.setState({ loading: true });

      await sleep(2000);

      const response = await axios.get('https://api.marktube.tv/v1/book', {
        headers: {
          Authorization: `Bearer ${this.props.token}`,
        }
      });
      console.log(response.data);
      this.setState({
        loading: false,
      });
      // 리덕스한테 books: response.data를 넣어줘야 한다.
      this.props.setBooks(response.data);

    } catch (error) {
      console.log(error);
      this.setState({ loading: false, error })
    }
  };

  async componentDidMount() {
    await this.getBooks();
  }

  reload = async () => {
    this.setState({ error: null });
    await this.getBooks();
  }

}

export default BookList;