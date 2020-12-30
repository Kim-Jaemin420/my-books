import React, { useEffect } from 'react';
import { LoadingOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import BookItem from './BookItem';
import Header from './Header';
import { GlobalStyle } from '../style/GlobalStyle';

export default function BookList({ books, loading, error, getBooks }) {
  useEffect(() => {
    getBooks();
  }, [getBooks]);

  if (error !== null) {
    const errorType = error.response.data.error;

    if (errorType === 'INVALID_TOKEN') {
      return (
        <div>
          <h1>Book List {loading && <LoadingOutlined />}</h1>
          <p>
            유효하지 않은 토큰 입니다.{' '}
            <Button
              shape="circle"
              icon={<ReloadOutlined />}
              onClick={this.getBooks}
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