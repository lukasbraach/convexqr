# convexqr

**Welcome to this README file!**

This project is a port of Lars Jung's great **Kjua**.
While **Kjua** only runs on browsers, **convexqr** is optimized for the
Node.js developers' needs. Its main difference is that it provides 
PNG-streams instead of creating DOM-elements.

Furthermore, some algorithms concerning qrcode-generation
have been optimized and should now run faster.

Using **convexqr** is actually quite straight forward:

    const convexqr = require('convexqr');
    convexqr({text: 'Hello world!'}, function(readablePngStream) {
        // readablePngStream.pipe(writableStream);
    });

The api is mostly as in Kjua. All available parameters are
listed and explained in the `etc/defaults.js` file.  

**Happy coding! :)**
  
  
  
***Copyright 2018 Lukas Braach***
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.