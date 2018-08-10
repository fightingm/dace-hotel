/**
 * @component Toast
 * @version 3.0.0
 * @description 面包屑提示组件，页面居中显示一条提示信息。
 *
 * - 是一个对象，包含show/hide函数，支持简单的链式调用。
 * - 通过调用show函数打开组件，默认显示2s。
 * - 通过调用hide函数立刻关闭组件。
 *
 * @instructions {instruInfo: ./toast.md}{instruUrl: toast.html?hideIcon}
 * @author qingguo.xu
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import isEnvNode from '$self-util/isEnvNode';

let that = null;
let container = '';
const defaultProps = {
    show: false
};

const propTypes = {
    /**
     * @property show
     * @description 是否显示，默认false
     * @type Boolean
     * @default false
     * @skip
     */
    show: PropTypes.bool
};

class ToastReact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show,
            content: ''
        };
        this._timer = null;
        that = this;
    }

    componentWillUnmount() {
        clearTimeout(this._timer);
        if(container) {
            document.body.removeChild(container);
        }
    }

    render() {
        const { show, content } = this.state;
        return (
            <div
                className="yo-toast"
                style={{
                    display: show ? null : 'none'
                }}
            >{content}</div>
        );
    }
}

ToastReact.propTypes = propTypes;
ToastReact.defaultProps = defaultProps;


if (!isEnvNode) {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<ToastReact />, container);
}

/**
 * Toast显隐函数
 * @returns {Object}
 */
export default {
    /**
     * @method show
     * @type Function
     * @description 打开组件，显示传入的内容
     * @param {String} content 组件显示的内容
     * @param {Number} [autoHideTime] 内容显示的持续时间，默认2000ms
     * @param {Function} [callback] 内容显示后触发的回调 <3.0.13>
     */
    show(content = 'no content', autoHideTime = 2000, callback = () => { }) {
        that.setState({
            content,
            show: true
        }, callback);
        // 此处对源码做了修改 Eslint 不通过
        const isThatTimer = !!that.timer;
        if (isThatTimer) {
            clearTimeout(that.timer);
            that.timer = null;
        }
        that.timer = setTimeout(() => this.hide(), autoHideTime);
        return this;
    },
    /**
     * @method hide
     * @type Function
     * @description 关闭正在显示的组件
     * @param {Function} [callback] 内容隐藏后触发的回调 <3.0.13>
     */
    hide(callback = () => { }) {
        // 此处对源码做了修改 Eslint 不通过
        const isThatTimer = !!that.timer;
        if (isThatTimer) {
            clearTimeout(that.timer);
            that.timer = null;
        }
        that.setState({ show: false }, callback);
        return this;
    }
};
