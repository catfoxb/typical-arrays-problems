function validateArray(array) {
    if (!Array.isArray(array) || !array.length) return true;
}

exports.min = function min(array) {
    if (validateArray(array)) return 0;
    return Math.min(...array);
};

exports.max = function max(array) {
    if (validateArray(array)) return 0;
    return Math.max(...array)
};

exports.avg = function avg(array) {
    if (validateArray(array)) return 0;
    return array.reduce((item, accum) => {
        return item + accum;
    }, 0) / array.length;
};
