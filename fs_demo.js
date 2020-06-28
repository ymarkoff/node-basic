const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, '/test_folder'), {}, err => {
//     if(err) throw err;
//     console.log('Dir created');
// });

// fs.writeFile(
//     path.join(__dirname, '/test_folder', 'note.txt'),
//     'Hello Alter World!',
//     err => {
//         if (err) throw err;
//         console.log('File created');


//         fs.appendFile(
//             path.join(__dirname, '/test_folder', 'note.txt'),
//             ' This is a test application.',
//             err => {
//                 if (err) throw err;
//                 console.log('File appended');
//             }
//         );
//     }
// );

// fs.readFile(
//     path.join(__dirname, '/test_folder', 'note.txt'),
//     'utf8',
//     (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     }
// );

fs.rename(
    path.join(__dirname, '/test_folder', 'note.txt'),
    path.join(__dirname, '/test_folder', 'note2.txt'),
    err => {
        if (err) throw err;
        console.log('File renamed');
    }
);