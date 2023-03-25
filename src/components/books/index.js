import React, { useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchBooks } from "../../redux";
import { StyledBook } from "./styled-component";
import CardWrapper from "./components/card";
import Search from "./components/search";

const Books = ({ booksData, fetchBooks }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    setSearchValue(event.currentTarget.value);
  };

  const bookList = useMemo(() => {
    return (
      booksData &&
      booksData.books.filter((book) => {
        return (
          book.volumeInfo.title
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          book.volumeInfo?.['authors']
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        );
      })
    );
  }, [booksData, searchValue]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return booksData.loading ? (
    <div className="">
      <h3>Loading...</h3>
    </div>
  ) : booksData.error ? (
    <h2>{booksData.error}</h2>
  ) : (
    <StyledBook>
      <div className="page_header">
        <div className="page_title">Books</div>
        <div>
        <Button className="create_button">Create New Book</Button>
        </div>
      </div>
      <Search value={searchValue} onChange={handleSearch} />
      <div className="title_allBooks">All Books</div>
      <CardWrapper bookList={bookList} />
    </StyledBook>
  );
};

const mapStateToProps = (state) => {
  return {
    booksData: state.book,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: () => dispatch(fetchBooks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
