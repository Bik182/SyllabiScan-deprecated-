import React from 'react';
import { connect } from 'react-redux'
import { uploadPDFPending } from '../redux/actions/action.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './NavigationBar';
import { bindActionCreators } from "redux";

import { uploadPDF } from "../redux/fetch/upload.js";

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}


const numbers = {"test1": 5, "test2": 6};
class Home extends React.Component {
  handleClick = () => {
    console.log('this is:', this.props.calendarReducer);
    this.props.uploadPDF(numbers);
  }
  render() {

    return (
      <React.Fragment>

        <div>
          <button onClick={this.handleClick}>
            Click me
          </button>
            Hello
          </div>


      </React.Fragment>
    );
  }




}



const mapStateToProps = (state /*, ownProps*/) => {
  return {
    calendarReducer: state.calendarReducer,
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      uploadPDF: uploadPDF,

    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);

