const path = require('path');
class Tree {
    constructor(type, height) {
        this.type = type;
        this.height = height;
    };

    debug() {
        console.log(`dirname: ${__dirname}`);
        console.log(`filename: ${__filename}`);
        console.log(`exports: ${exports}`);
        console.log(`module: ${module}`);
        console.log(`require: ${require}`);

        console.log(`filename(basename): ${path.extname(__filename)}`);
        console.log(`filename(dirname): ${path.dirname(__filename)}`);
        console.log(`filename(extname): ${path.extname(__filename)}`);

        console.log(`filename(parse): ${path.parse(__filename)}`)
        console.log(`filename(parse base): ${path.parse(__filename).base}`)
    }


    interract() {
        console.log(`You can feel the bark of the ${this.type} tree. It's ${this.height} meters tall.`);
    }
}

module.exports = Tree;