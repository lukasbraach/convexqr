const dpr = 1;
const Canvas = require('canvas-prebuilt');

const newCanvas = (size, ratio) => {
    const canvas = new Canvas(size * ratio, size * ratio);
    return canvas;
};

module.exports = {
    newCanvas,
    dpr
};
