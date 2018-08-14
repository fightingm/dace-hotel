import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'dace';

import Carousel from 'yo-component/carousel'
import Alert from 'yo-component/alert';

import Layout from '../../layouts/default';
import { fetchPosts } from './action';
import reducer from './reducer';
import './index.css';

@connect(state => state)
export default class Index extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string
    }))
  };

  static defaultProps = {
    posts: []
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
    return store.dispatch(fetchPosts());
  }
  render() {
    console.log(this.props.posts, this.state.id);
    return (
      <Layout>
        <div className="mh-index">
          <div className="hd-banner">
            <Carousel autoplay={true}>
              <li className="item banner-item"><img className="img" src="http://img1.qunarzz.com/qs/1610/a6/01d1ad00e4b9e102.jpg" /></li>
              <li className="item banner-item"><img className="img" src="http://img1.qunarzz.com/qs/1610/a6/01d1ad00e4b9e102.jpg" /></li>
              <li className="item banner-item"><img className="img" src="http://img1.qunarzz.com/qs/1610/a6/01d1ad00e4b9e102.jpg" /></li>
            </Carousel>
          </div>
          <div className="condition-search">
            <ol>
              {
                this.props.posts.map(post => (
                  <li key={post.id}>
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                  </li>
                ))
              }
            </ol>
          </div>
          <div className="other-link">
            这里展示其他链接
          </div>
        </div>
      </Layout>
    );
  }
}

