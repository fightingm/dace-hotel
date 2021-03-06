import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Touchable from '../touchable/touchable';

class CarouselLocat extends Component {
    static propTypes = {
        num: PropTypes.number.isRequired,
        page: PropTypes.number.isRequired,
        onItemTap: PropTypes.func.isRequired
    }
    render() {
        let liNodes = [];
        for (let i = 1; i <= this.props.num; i++) {
            liNodes.push(
                <Touchable onTap={() => { this.props.onItemTap(i); }} key={i} internalUse >
                    <li className={this.props.page === i ? 'on' : ''} />
                </Touchable>
            );
        }
        return (
            <ul className="index">
                {liNodes}
            </ul>
        );
    }
}

export default CarouselLocat;
