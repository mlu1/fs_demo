"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/posts/1';
axios_1.default.get(url).then(function (res) {
    var post = res.data;
    var id = post.userID;
    var header = post.title;
    var content = post.body;
    console.log("\n        User ID is ".concat(id, "\n        Title of post: ").concat(header, "\n        Post Content ").concat(content, "  \n    "));
});
