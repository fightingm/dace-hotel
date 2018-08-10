import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '../../yo-component/alert';

import Layout from '../../layouts/default';
import { fetchUsers } from './action';
import reducer from './reducer';
import './index.css';

@connect(state => state)
export default class Index extends Component {
  static propTypes = {
    users: PropTypes.any
  };

  static defaultProps = {
    users: ''
  }
  constructor() {
    super();
    this.state = {
      id: 0
    };
  }
  componentDidMount() {
    Alert('hhhhhh');
  }
  static getInitialProps = ({ store }) => {
    store.injectReducer(reducer);
    return store.dispatch(fetchUsers());
  }
  render() {
    console.log(this.props.users, this.state.id);
    return (
      <Layout>
        <div className="hd-banner">
          <img src="http://simg1.qunarzz.com/site/images/wap/home/recommend/20160509_banner_750x376.jpg" alt="" />
        </div>
        <div className="condition-search">
          这里是搜索部分
        </div>
        <div className="other-link">
          这里展示其他链接
        </div>
      </Layout>
    );
  }
}

