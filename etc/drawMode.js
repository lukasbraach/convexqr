const { Image } = require('canvas-prebuilt');
const fs = require('fs');

const drawLabel = (context, settings) => {
    const size = settings.size;
    const font = 'bold ' + settings.mSize * 0.01 * size + 'px ' + settings.fontname;

    context.strokeStyle = settings.back;
    context.lineWidth = settings.mSize * 0.01 * size * 0.1;
    context.fillStyle = settings.fontcolor;
    context.font = font;

    const w = context.measureText(settings.label).width;
    const sh = settings.mSize * 0.01;
    const sw = w / size;
    const sl = (1 - sw) * settings.mPosX * 0.01;
    const st = (1 - sh) * settings.mPosY * 0.01;
    const x = sl * size;
    const y = st * size + 0.75 * settings.mSize * 0.01 * size;

    context.strokeText(settings.label, x, y);
    context.fillText(settings.label, x, y);
};

const drawImage = (context, settings, qr, callback) => {
    fs.readFile(settings.image, function (err, imageBuf) {
        if (err) {
            console.error('Error reading image file: ' + settings.image);
        } else {
            let image = new Image;
            image.src = imageBuf;

            const moduleSize = settings.size / (qr.moduleCount + 2 * settings.quiet);
            const size = settings.size;
            const w = image.naturalWidth || 1;
            const h = image.naturalHeight || 1;

            settings.imageCutout = (settings.imageCutout === -1) ? Math.floor(qr.moduleCount * 0.25) : settings.imageCutout;
            if (settings.imageCutout % 2 === 0 && settings.imageCutout !== 0) {
                settings.imageCutout--;
            }
            const sh = (moduleSize * settings.imageCutout) / settings.size;
            const sw = sh * w / h;
            const sl = (1 - sw) * settings.mPosX * 0.01;
            const st = (1 - sh) * settings.mPosY * 0.01;
            const x = sl * size;
            const y = st * size;
            const iw = sw * size;
            const ih = sh * size;

            context.drawImage(image, x, y, iw, ih);
        }

        callback();
    });
};

const drawMode = (context, settings, qr, callback) => {
    const mode = settings.mode;
    if (mode === 'label') {
        drawLabel(context, settings);
        callback();
    } else if (mode === 'image') {
        drawImage(context, settings, qr, callback);
    } else {
        callback();
    }
};

module.exports = drawMode;
