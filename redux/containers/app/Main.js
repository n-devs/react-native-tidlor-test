import { connect } from 'react-redux';

import Main from '../../../Main';

import {
  updateNavigation
} from '../../actions/nav';


function mapStateToProps(props) {
  const { navigationRedux } = props;
  return {
    navigationRedux,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleUpdateNavigation(data) {
      dispatch(updateNavigation(data));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);