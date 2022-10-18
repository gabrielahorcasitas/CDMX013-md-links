// const first = first();

// const second = first.then(function (val) {
//       return second(val);
//     });

// second.then(console.log);

first().then(second).then(console.log);