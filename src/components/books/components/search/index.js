import React from 'react'
import { Col, Row } from "react-bootstrap";
import { ReactComponent as SearchIcon } from "../../../../assets/search-icon.svg";

const Search = ({value, onChange}) => {
  return (
    <Row className="search">
    <Col md={6} >
      <span className="wrapper" tabIndex={0}>
        <SearchIcon className="search_icon" width={20} height={20} />
        <input
          type="text"
          value={value}
          placeholder="Search"
          onChange={onChange}
          aria-label="search"
          aria-describedby="search"
        />
      </span>
    </Col>
  </Row>
  )
}

export default Search
