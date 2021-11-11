import { connect } from "react-redux";
import { Container } from "../elements";
import React from "react";

const Offers = ({ userInfo, setUserInfo }) => {
  return <Container>Hello Offers </Container>;
};

const mapStateToProps = (state) => ({
  userInfo: state.apiPages,
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Offers);
