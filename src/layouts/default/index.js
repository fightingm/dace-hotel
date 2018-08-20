
import React from 'react';
import PropTypes from 'prop-types';
import { Head } from 'dace';
import './index.scss';

// import Header from '../../components/Header';

const Layout = props => (
  <div>
    <Head>
      <title>测试酒店</title>
      <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
      <script type="text/javascript">
        {
          `
        (function(doc) {
            var docEl = doc.documentElement;
            docEl.style.fontSize = docEl.clientWidth / 3.75 + 'px';
        })(document);
        `
        }
      </script>
    </Head>
    {props.children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]).isRequired
};

export default Layout;
