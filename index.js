const {newCanvas, dpr} = require('./etc/dom');
const defaults = require('./etc/defaults');
const QR = require('./etc/qrgen');
const draw = require('./etc/draw');

module.exports = (options, callback) => {
    const settings = Object.assign({}, defaults, options);
    const qr = new QR(settings.text, settings.ecLevel, settings.imageCutout);

    const ratio = settings.ratio || dpr;
    const canvas = newCanvas(settings.size, ratio);
    const context = canvas.getContext('2d');

    context.scale(ratio, ratio);
    draw(qr, context, settings, function () {
        if (typeof callback === 'function') {
            callback(canvas.pngStream());
        }
    });
};
