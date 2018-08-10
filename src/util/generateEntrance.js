import '$self-yo-config/common/base.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import FastClick from 'fastclick';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Tracker from './Tracker';

if (!window.___yoTapEventInjected) {
    // 不要觉得这里没用
    // 因为yo-router也用了tap-event-plugin，如果不加try catch会报引用两次tap-event-plugin的警告
    try {
        injectTapEventPlugin();
    } catch (e) {
    }

    if (document.readyState === 'complete'
        || document.readyState === 'interactive') {
        FastClick.attach(document.body);
    }

    document.addEventListener('DOMContentLoaded', () => {
        FastClick.attach(document.body);
    });
    let supportsPassive = !1;
    try {
        const opts = Object.defineProperty({}, "passive", {
            get: function () {
                supportsPassive = !0
            }
        });
        window.addEventListener("test", null, opts)
    } catch (e) {}
    document.addEventListener("touchmove", function (e) {
        e.preventDefault()
    }, !!supportsPassive && {
        passive: !1
    });
    window.___yoTapEventInjected = true;
}

export default function generateEntrance(MainComponent, store) {
    ReactDOM.render(
        <Provider store={store}>
            <MainComponent />
        </Provider>,
        document.getElementById('app')
    );
}
