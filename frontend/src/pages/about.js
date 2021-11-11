import { connect } from "react-redux";
import { Container } from "../elements";
import React from "react";

const About = ({ userInfo, setUserInfo }) => {
  return <Container> Hello About </Container>;
};
const mapStateToProps = (state) => ({
  userInfo: state.apiPages,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
