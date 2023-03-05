// const express = require('express');
// const router = express.Router();
// const http = require("https");

// var bg = "test";

// router.get('/', function(req,res){
    
    
//     req.session.page = '';
//   if('myLogin' in req.session === false)
//     {
//         req.session.myLogin = false;
//         res.redirect("https://sugar-lift.sites.tjhsst.edu/login");
//     }
       
// // Example Time for DEXCOM API: "2017-06-16T15:45:00";

// if (req.session.myLogin) {
//     var options2 = {
//           "method": "GET",
//           "hostname": "api.dexcom.com",
//           "port": null,
//           "path": "/v2/users/self/dataRange",
//           "headers": {
//             "authorization": "Bearer " + req.session.token['access_token'],
//             }
//         };
    
//         var req3 = http.request(options2, function (res2) {
//         var chunks2 = [];
    
//         res2.on("data", function (chunk2) {
//             chunks2.push(chunk2);
//         });
    
//         res2.on("end", function () {
//             var body2 = Buffer.concat(chunks2);
        
//             var temp = body2.toString();
//             var i = temp.lastIndexOf("systemTime");
//             var end = temp.slice(i+13, i+32);
//             var start = end.slice(0, 11) + "09:00:00";
//             console.log(start, end);
//             var options = {
//               "method": "GET",
//               "hostname": "api.dexcom.com",
//               "port": null,
//               "path": "/v2/users/self/egvs?startDate="+start+"&endDate="+end,
//               "headers": {
//                 "authorization": "Bearer " + req.session.token['access_token'],
//                     }
//             };
        
        
//             var req2 = http.request(options, function (res) {
//             var chunks = [];
        
//             res.on("data", function (chunk) {
//                     chunks.push(chunk);
//             });
        
//             res.on("end", function () {
//                 var body = Buffer.concat(chunks);
                
//                 bg = JSON.parse(body.toString())["egvs"]; // middle
    
//             }); }); req2.end();
    
//     }); }); req3.end();
    
//     let dataPoints = bg;
    
//     datas = [];
//     labels = [];
    
//     if (bg != "test"){
//   for (let i = 0; i < bg.length; i++) {
//         datas.push(bg[i]["value"]);
//         labels.push(bg[i]["displayTime"].slice(11, 16));
//     }
//     req.session.curr = datas[0];
    
//     datas.reverse();
//     labels.reverse();
//     }

// res.render('test', {'login' : req.session.myLogin, "labels": labels, "datas": datas} );

// }


    

// }); // end of sugar-lift.sites.tjhsst.edu/ endpoint


// module.exports = router;



// 2



// const express = require('express');
// const router = express.Router();
// const http = require("https");

// var bg = "test";

// router.get('/', async function(req,res){
    
    
//     req.session.page = '';
//   if('myLogin' in req.session === false)
//     {
//         req.session.myLogin = false;
//         res.redirect("https://sugar-lift.sites.tjhsst.edu/login");
//     }
       
// // Example Time for DEXCOM API: "2017-06-16T15:45:00";

// if (req.session.myLogin) {
//     var options2 = {
//           "method": "GET",
//           "hostname": "api.dexcom.com",
//           "port": null,
//           "path": "/v2/users/self/dataRange",
//           "headers": {
//             "authorization": "Bearer " + req.session.token['access_token'],
//             }
//         };
    
//     try {
//         const res2 = await new Promise((resolve, reject) => {
//             var req3 = http.request(options2, function (res2) {
//                 resolve(res2);
//             });
//             req3.on("error", reject);
//             req3.end();
//         });
//         var chunks2 = [];
    
//         res2.on("data", function (chunk2) {
//             chunks2.push(chunk2);
//         });
    
//         res2.on("end", function () {
//             var body2 = Buffer.concat(chunks2);
        
//             var temp = body2.toString();
//             var i = temp.lastIndexOf("systemTime");
//             var end = temp.slice(i+13, i+32);
//             var start = end.slice(0, 11) + "09:00:00";
//             console.log(start, end);
//             var options = {
//               "method": "GET",
//               "hostname": "api.dexcom.com",
//               "port": null,
//               "path": "/v2/users/self/egvs?startDate="+start+"&endDate="+end,
//               "headers": {
//                 "authorization": "Bearer " + req.session.token['access_token'],
//                     }
//             };
        
//             const res1 = await new Promise((resolve, reject) => {
//                 var req2 = http.request(options, function (res) {
//                     resolve(res);
//                 });
//                 req2.on("error", reject);
//                 req2.end();
//             });
//             var chunks = [];
        
//             res1.on("data", function (chunk) {
//                 chunks.push(chunk);
//             });
        
//             res1.on("end", function () {
//                 var body = Buffer.concat(chunks);
                
//                 bg = JSON.parse(body.toString())["egvs"]; // middle
    
//             }); 
//     }); 
//     } catch (error) {
//         console.error(error);
//         res.sendStatus(500);
//         return;
//     }
    
//     let dataPoints = bg;
    
//     datas = [];
//     labels = [];
    
//     if (bg != "test"){
//         for (let i = 0; i < bg.length; i++) {
//             datas.push(bg[i]["value"]);
//             labels.push(bg[i]["displayTime"].slice(11, 16));
//         }
//         req.session.curr = datas[0];
    
//         datas.reverse();
//         labels.reverse();
//     }

//     res.render('test', {'login' : req.session.myLogin, "labels": labels, "datas": datas} );
// }
// }); // end of sugar-lift.sites.tjhsst.edu/ endpoint

// module.exports = router;

// 3 

const express = require('express');
const router = express.Router();
const http = require("https");

var bg = "test";

router.get('/', async function(req, res) {
  req.session.page = '';
  if (!req.session.myLogin) {
    req.session.myLogin = false;
    res.redirect("https://sugar-lift.sites.tjhsst.edu/login");
    return;
  }

  // Example Time for DEXCOM API: "2017-06-16T15:45:00";

  if (req.session.myLogin) {
    try {
      var options2 = {
        "method": "GET",
        "hostname": "api.dexcom.com",
        "port": null,
        "path": "/v2/users/self/dataRange",
        "headers": {
          "authorization": "Bearer " + req.session.token['access_token'],
        }
      };

      const body2 = await new Promise((resolve, reject) => {
        const req3 = http.request(options2, function(res2) {
          var chunks2 = [];

          res2.on("data", function(chunk2) {
            chunks2.push(chunk2);
          });

          res2.on("end", function() {
            var body2 = Buffer.concat(chunks2);
            resolve(body2);
          });

          res2.on("error", function(err) {
            reject(err);
          });
        });
        req3.end();
      });

      var temp = body2.toString();
      var i = temp.lastIndexOf("systemTime");
      var end = temp.slice(i + 13, i + 32);
      var start = end.slice(0, 11) + "09:00:00";

      var options = {
        "method": "GET",
        "hostname": "api.dexcom.com",
        "port": null,
        "path": "/v2/users/self/egvs?startDate=" + start + "&endDate=" + end,
        "headers": {
          "authorization": "Bearer " + req.session.token['access_token'],
        }
      };

      const body = await new Promise((resolve, reject) => {
        const req2 = http.request(options, function(res) {
          var chunks = [];

          res.on("data", function(chunk) {
            chunks.push(chunk);
          });

          res.on("end", function() {
            var body = Buffer.concat(chunks);
            resolve(body);
          });

          res.on("error", function(err) {
            reject(err);
          });
        });
        req2.end();
      });

      bg = JSON.parse(body.toString())["egvs"]; // middle

      let dataPoints = bg;

      datas = [];
      labels = [];

      if (bg != "test") {
        for (let i = 0; i < bg.length; i++) {
          datas.push(bg[i]["value"]);
          labels.push(bg[i]["displayTime"].slice(11, 16));
        }
        req.session.curr = datas[0];

        datas.reverse();
        labels.reverse();
      }

      res.render('test', {
        'login': req.session.myLogin,
        "labels": labels,
        "datas": datas
      });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error getting data');
    }
  }
});

module.exports = router;

