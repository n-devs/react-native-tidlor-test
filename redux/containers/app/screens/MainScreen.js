import { connect } from 'react-redux';

import MainScreen from '../../../../screens/MainScreen';

import {
  updateNavigation
} from '../../../actions/nav';
import {
  updateEditOnIdState,
  updateEditOnState,
  updateDBState
} from '../../../actions/dataState';

function mapStateToProps(props) {
  const { navigationRedux, dataStateRedux } = props;
  return {
    navigationRedux, dataStateRedux
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleUpdateNavigation(data) {
      dispatch(updateNavigation(data));
    },
    handleUpdateDBState(data) {
      dispatch(updateDBState(data));
    },
    handleUpdateEditOnIdState(data) {
      dispatch(updateEditOnIdState(data));
    },
    handleUpdateEditOnState(data) {
      dispatch(updateEditOnState(data));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);