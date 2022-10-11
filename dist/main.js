// import config from './config.js';

let BLOG_ID = config.BLOG_ID;
let API_KEY = config.API_KEYY;

// let url = "https://www.googleapis.com/blogger/v3/blogs/BLOG_ID/posts?key=API_KEY"

("TEST " + config.url);
// function get_result() {
//     let BLOG_ID = config.BLOG_ID;
//     let API_KEY = config.API_KEYY;
//     var url = "https://www.googleapis.com/blogger/v3/blogs/" + blog_id + "/posts?key=" + api_key;
//     var response = UrlFetchApp.fetch(url).getContentText();
//     var obj = JSON.parse(response);
//     for (var i = 0; i < obj.items.length; i++) {
//         Logger.log(obj.items[i].selfLink);
//         Logger.log(obj.items[i].title);
//     }
// }

// console.log(get_result())