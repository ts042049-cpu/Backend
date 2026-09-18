import fs from 'fs';

// fs.writeFile("./parent/child.js", "", (err) => {
//     if(err){
//         log(err);
//         return;
//     }
// });

// fs.readFile("./parent/child.js", "utf8", (err, data) => {
//     if(err){
//         log(err);
//         return;
//     }
//     console.log(data);
// });

// fs.mkdir("./parent/child/child2/child3/child4", { recursive: true }, (err) => {
//     if(err){
//         log(err);
//         return;
//     }
//     console.log("Directory created successfully");
// });

// fs.appendFile("./parent/child.js", "\n [{age: 20}]", (err) => {
//     if(err){
//         log(err);
//         return;
//     }
//     console.log("Data appended to the file successfully");
// });

fs.readFile("./parent/child.js", "utf8", (err, data) => {
    if(err){
        log(err);
        return;
    }
    console.log(data);
})

// fs.cp("./server.js", "./parent/child.js", (err) => {
//     if(err){
//         log(err);
//         return;
//     }
//     console.log("File copied successfully");
// })

fs.unlink("./parent/child.js", (err) => {
    if(err){
        log(err);
        return;

    }
    console.log("File deleted successfully");
})