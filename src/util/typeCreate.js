const typeCreate = (map, key) => {
    let obj = {};
    for (const item in map) {
        if (map.hasOwnProperty(item)) {
            obj[item] = `${key}_${item}`;
        }
    }
    return obj;
};

export default typeCreate;
