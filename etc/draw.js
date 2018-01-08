const drawModuleRounded = require('./drawRounded');
const drawMode = require('./drawMode');

const drawBackground = (context, settings) => {
    context.fillStyle = settings.back;
    context.fillRect(0, 0, settings.size, settings.size);
};

const drawModuleDefault = (qr, context, settings, width, row, col) => {
    if (qr.isDark(row, col)) {
        context.rect(col * width, row * width, width, width);
    }
};

const drawModules = (qr, context, settings) => {
    if (!qr) {
        return;
    }

    const drawModule = settings.rounded > 0 && settings.rounded <= 100 ? drawModuleRounded : drawModuleDefault;
    const moduleCount = qr.moduleCount;

    let moduleSize = settings.size / (moduleCount + 2*settings.quiet);
    let offset = 0;
    if (settings.crisp ||true) {
        moduleSize = Math.floor(moduleSize);
        offset = Math.floor((settings.size - moduleSize * moduleCount) / 2);
    }

    context.translate(offset, offset);
    context.beginPath();
    for (let row = (0 - settings.quiet); row < (moduleCount + settings.quiet); row++) {
        for (let col = (0 - settings.quiet); col < (moduleCount + settings.quiet); col++) {
            drawModule(qr, context, settings, moduleSize, row, col);
        }
    }
    context.fillStyle = settings.fill;
    context.fill();
    context.translate(-offset, -offset);
};

const draw = (qr, context, settings, callback) => {
    drawBackground(context, settings);
    drawModules(qr, context, settings);
    drawMode(context, settings, qr, callback);
};

module.exports = draw;
