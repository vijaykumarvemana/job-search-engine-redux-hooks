import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addToFavoriteAction}  from '../actions'
// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = (dispatch) => ({
//   addToFavorite: (company) => {
//     dispatch(addToFavoriteAction(company))
//   }
// })

const Job =  ({ data}) => {

  const dispatch = useDispatch() // useDispatch() is redux hook

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "2px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
      <Button  variant="outline-dark" onClick={() => dispatch(addToFavoriteAction(data))}>add</Button>
        
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <Link to={{ pathname: data.url }} target="_blank">
          {data.title}
        </Link>
      </Col>
    </Row>
  );
}
export default Job