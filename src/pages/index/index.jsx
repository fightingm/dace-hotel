import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link } from 'dace';

import Carousel from 'yo-component/carousel';
import Alert from 'yo-component/alert';
import Touchable from 'yo-component/touchable';


import Layout from '../../layouts/default';
import Header from './components/header';
import { fetchBanner } from './action';
import reducer from './reducer';
import './index.scss';

@connect(state => state)
export default class Index extends Component {
  static propTypes = {
    banner: PropTypes.array,
    history: PropTypes.object
  };

  static defaultProps = {
    banner: [],
    history: {}
  }
  constructor() {
    super();
    this.goList = this.goList.bind(this);
  }
  componentDidMount() {
    Alert('hhhhhh');
  }
  static getInitialProps = ({ store }) => {
    store.injectReducer(reducer);
    return store.dispatch(fetchBanner());
  }
  // 跳转到列表页
  goList() {
    this.props.history.push({
      pathname: '/list'
    });
  }
  renderCarousel() {
    const { banner } = this.props;
    if (!(banner && banner.length)) {
      return null;
    }
    return (
      <Carousel autoplay>
        {
          banner.map((item, index) => <li key={index} className="item banner-item"><img className="img" src={item} alt="" /></li>)
        }
      </Carousel>
    );
  }
  render() {
    return (
      <Layout>
        <div className="mh-index">
          <Header />
          <div className="hd-banner">
            {
              this.renderCarousel()
            }
          </div>
          <div className="qt-wrap">
            <div className="condition-search">
              <div className="domestic">
                <div className="hotel-type" />
                <div className="address-line" />
                <div className="time-line" />
                <div className="keyword-line" />
              </div>
              <Touchable
                touchClass="touchable-highlight"
                onTap={this.goList}
              >
                <div className="submit-box">搜索酒店</div>
              </Touchable>
            </div>
            <div className="other-link">
              <div className="per-sale link-item" />
              <div className="time-room link-item" />
              <div className="yx-hotel link-item" />
              <div className="jtqj-hotel link-item" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

