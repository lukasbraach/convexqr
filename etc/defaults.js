module.exports = {
    // render method: 'canvas' or 'image'
    render: 'image',

    // render pixel-perfect lines
    crisp: true,

    // minimum version: 1..40
    minVersion: 1,

    // error correction level: 1-4; always use 4 when embedding text or images!
    ecLevel: 4,

    // size in pixel
    size: 500,

    // pixel-ratio, null for devicePixelRatio
    ratio: 1,

    // code color
    fill: '#222',

    // background color
    back: '#fff',

    // content
    text: 'no text',

    // roundend corners in pc: 0..100
    rounded: 60,

    // quiet zone in modules
    quiet: 2,

    // modes: 'plain', 'label' or 'image'
    mode: 'plain',

    // label/image size and pos in pc: 0..100
    mSize: 10,
    mPosX: 50,
    mPosY: 50,

    // label
    label: 'convex',
    fontname: 'sans',
    fontcolor: '#333',

    // ABSOLUTE image source path
    image: __dirname + '/../img/convex.png',

    // image cutout in blocks - only odd values; -1 -> automatic sizing (only with mode=image); 0 -> no cutout (use when mode=plain)
    imageCutout: 0
};
