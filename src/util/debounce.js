import isEnvNode from './isEnvNode';

const debounce = (time = 5) =>
    (target, key, {value: fn}) => {
        if (isEnvNode) {
            return;
        }
        return {
            get() {
                const oldFun = fn.bind(this);
                let flag = null;
                const newFun = (...args) => {
                    if (flag) {
                        return;
                    }

                    flag = setTimeout(() => {
                        flag = null;
                    }, time * 1000);

                    return oldFun(...args);
                };
                Object.defineProperty(this, key, {
                    value: newFun
                });
                return newFun;
            }
        };
    }

export default debounce;
