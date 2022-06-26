import { connect } from 'react-redux';

import CreateScreen from '../../../../screens/CreateScreen';

import {
  updateNavigation
} from '../../../actions/nav';

import {
  updateDBState,
  updateEditOnIdState,
  updateEditOnState
} from '../../../actions/dataState';

function mapStateToProps(props) {
  const { navigationRedux, dataStateRedux } = props;
  return { navigationRedux, dataStateRedux };
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
)(CreateScreen);