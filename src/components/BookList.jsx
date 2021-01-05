import React, { Component } from 'react';
import axios from "axios";
import { sleep } from '../utils';
import { Button } from "antd";

import Header from "./Header";
import  { GlobalStyle }  from "../style/GlobalStyle";

// loading 아이콘
import { LoadingOutlined, ReloadOutlined } from "@ant-design/icons";
import BookItem from './BookItem';


class BookList extends Component {
  state = {
    books: [],
    loading: false,
    error: null,
  };

  render() {
    const { books, loading, error } = this.state;

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
        books: response.data,
        loading: false,
      });

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