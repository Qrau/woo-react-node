import { connect } from "react-redux";
import { Container } from "../elements";
import React from "react";

const Welcome = ({ userInfo, setUserInfo }) => {
  return <Container> Hello Home </Container>;
};
const mapStateToProps = (state) => ({
  userInfo: state.apiPages,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
