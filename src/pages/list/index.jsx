import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import List from 'yo-component/list';
import { fetchList } from './action';
import reducer from './reducer';
import Layout from '../../layouts/default';
import './index.scss';

@connect(state => state)
export default class HotelList extends Component {
  static propTypes = {
    list: PropTypes.array
  };

  static defaultProps = {
    list: []
  }

  static getInitialProps = ({ store }) => {
    store.injectReducer(reducer);
    return store.dispatch(fetchList());
  }

  constructor() {
    super();
    this.renderList = this.renderList.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.onLoad = this.onLoad.bind(this);
  }

  onRefresh() {
    setTimeout(() => {
      this.list.stopRefreshing();
    }, 500);
  }

  onLoad() {
    setTimeout(() => {
      this.list.stopLoading();
    }, 500);
  }

  // 渲染酒店列表
  renderList() {
    const { list } = this.props;
    if (!(list && list.length)) {
      return null;
    }
    return (<List
      ref={(dom) => { this.list = dom; }}
      extraClass="hotel-list"
      dataSource={this.props.list}
      usePullRefresh
      useLoadMore
      onRefresh={this.onRefresh}
      onLoad={this.onLoad}
      renderItem={(item) => {
        const { id, price, attrs } = item;
        const { imageID, hotelName, hotelAddress } = attrs;
        return (
          <div key={id} className="list-item">
            <div className="list-img">
              <img src={imageID} alt="" />
            </div>
            <div className="list-info">
              <div className="hotel-title">{hotelName}</div>
              <div className="location">{hotelAddress}</div>
              <div className="price">{price}</div>
            </div>
          </div>
        );
      }}
    />);
  }

  render() {
    console.log('?????????render');
    return (
      <Layout>
        <div className="mh-list">
          <div className="search-head" />
          <div className="condition-select" />
          <div className="sale-tips" />
          {
            this.renderList()
          }
        </div>
      </Layout>
    );
  }
}
