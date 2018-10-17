import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../App';

const mapStateToProps = (state) => {
  const { customDomain } = state.appInfo;
  return { customDomain };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  //getInAppEvent,
  //getInWebEvent,
}, dispatch);

const Allconnect = connect(mapStateToProps, mapDispatchToProps)(App);


export default Allconnect;
