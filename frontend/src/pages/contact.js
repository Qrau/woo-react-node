import { connect } from "react-redux";
import { Container } from "../elements";
import React from "react";

const Contact = ({ userInfo, setUserInfo }) => {
  return <Container> Hello Contact </Container>;
};
const mapStateToProps = (state) => ({
  userInfo: state.apiPages,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
