import React from 'react';
import { connect } from 'react-redux';
import { sawCats } from './actions';

@connect(({ amount }) => ({
  amount
}), {
  sawCats
})
export default class CatCounter extends React.Component {
  render() {
    ...
  }
}

// Alternative
export default connect(({ amount }) => ({
  amount
}), {
  sawCats
})(CatCounter);
