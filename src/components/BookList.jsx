import React, { useEffect } from 'react';
import axios from "axios";
import { sleep } from '../utils';
import { Button } from "antd";

import Header from "./Header";
import { GlobalStyle } from "../style/GlobalStyle";

// loading 아이콘
import { LoadingOutlined, ReloadOutlined } from "@ant-design/icons";
import BookItem from './BookItem';


function BookList({ books, loading, error, startBooks, successBooks, failBooks, token }) {

  useEffect(() => {
    async function getBooks() {
      try {
        startBooks();
  
        await sleep(2000);
  
        const response = await axios.get('https://api.marktube.tv/v1/book', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
  
        successBooks(response.data);
  
      } catch (error) {
        console.log(error);
        failBooks(error);
      }
    };

    getBooks();
  }, [startBooks, successBooks, failBooks, token]);

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
                onClick={this.getBooks()}
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

export default BookList;