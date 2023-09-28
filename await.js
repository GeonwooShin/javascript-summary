// function fetchData(url) {
//   console.log("inside fetchData");
//   const data = fetch(url).then((res) => res.json());
//   return data;
// }

// async function run() {
//   console.log("asd");
//   const data = await fetchData(
//     "https://www.boredapi.com/api/activity?type=recreational"
//   );
//   console.log(data);
//   console.log("inside run");
// }

// run();
// console.log("end");

// const promiseGet = (url) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.send();
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         resolve(JSON.parse(xhr.response));
//       } else {
//         reject(new Error(xhr.status));
//       }
//     };
//   });
// };

// async function run() {
//   promiseGet("https://www.boredapi.com/api/activity?type=recreational").then(
//     (res) => console.log(res)
//   );
// }

// run();

// function doSomething(n) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(n);
//     }, 1000);
//   });
// }

// doSomething(1500).then((res) => console.log(res));

// function doSomething2(n) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(n);
//     }, 1000);
//   }).then((res) => console.log(res));
// }

// const asd = doSomething2(1500);
// console.log(asd);

// async function waitAndMaybeReject() {
//   // Wait one second
//   await new Promise((r) => setTimeout(r, 1000));
//   // Toss a coin
//   const isHeads = Boolean(Math.round(Math.random()));

//   if (isHeads) return "yay";
//   throw Error("Boo!");
// }

// async function foo() {
//   try {
//     return await waitAndMaybeReject();
//   } catch (e) {
//     return "caught";
//   }
// }

// async function boo() {
//   const result = await foo();
//   console.log(result);
// }

// boo();

// const getApi = () => {
//   for (let i = 0; i < 10000; i++) {
//     console.log("inside getApi");
//   }
//   return fetch("https://www.boredapi.com/api/activity?type=recreational").then(
//     (res) => res.json()
//   );
// };

// const getImage = async () => {
//   const images = await getApi();
//   console.log(images);
// };

// getImage();
// console.log("asdasd");

// function foo() {
//   console.log("inside foo");
// }

// function bar() {
//   console.log("inside bar");
// }

// async function boo() {
//   foo();
//   await bar();
//   console.log("inside boo");
// }

// console.log("1");
// boo();
// console.log("2");

// function add10(a, callback) {
//   setTimeout(() => callback(a + 10), 1000);
// }

// add10(5, (sum) => {
//   add10(sum, (sum) => {
//     console.log(sum);
//   });
// });

// const get = (url, callback) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url);
//   xhr.send();
//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       callback(JSON.parse(xhr.response));
//     } else {
//       console.error(xhr.statusText);
//     }
//   };
// };

// get(
//   "https://www.boredapi.com/api/activity?type=recreational",
//   ({ activity }) => {
//     console.log(activity);
//   }
// );
// get("www.xxx.xxx", ({ id }) => {
//   get(`www.xxx.xxx/${id}`, ({ post }) => {
//     get(`www.xxx.xxx/${post}`, (res) => {
//       console.log(res);
//     });
//   });
// });

// function foo() {
//   setTimeout(() => {
//     return 1;
//   }, 0);
// }

// function bar(a) {
//   console.log(a);
// }

// const result = foo();
// bar(result);

// function foo(callback) {
//   setTimeout(() => {
//     callback(1);
//   }, 0);
// }

// foo((a) => console.log(a));

// try {
//   setTimeout(() => {
//     throw new Error("Error");
//   }, 0);
// } catch (err) {
//   console.log(err);
//   console.log("asd");
// }

// const promise1 = new Promise((_, reject) => {
//   reject("Error");
// });

// console.log(promise1.catch((err) => err).then((res) => 123));

// const get = (url) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.send();
//     xhr.onload = () => {
//       if(xhr.status === 200) {
//         resolve(JSON.parse(xhr.response));
//       } else {
//         reject(xhr.statusText);
//       }
//     }
//   })
// }

// get('www.xxx.xxx')
//   .then(({id}) => get(`www.xxx.xxx/${id}`))
//   .then(({post}) => get(`www.xxx.xxx/${post}`))
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))

// get("www.xxx.xxx", ({ id }) => {
//   get(`www.xxx.xxx/${id}`, ({ post }) => {
//     get(`www.xxx.xxx/${post}`, (res) => {
//       console.log(res);
//     });
//   });
// });

// const get = (url) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.send();
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         resolve(JSON.parse(xhr.response));
//       } else {
//         reject(xhr.statusText);
//       }
//     };
//   });
// };

// Promise.all([
//   get("https://www.boredapi.com/api/activity?type=recreational"),
//   get("https://www.boredapi.com/api/activity?type=recreational"),
//   get("https://www.boredapi.com/api/activity?type=recreational"),
// ]).then((res) => console.log(res));

// const promise1 = () =>
//   new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = () =>
//   new Promise((resolve) => setTimeout(() => resolve(2), 3000));
// const promise3 = () =>
//   new Promise((resolve) => setTimeout(() => resolve(3), 5000));

// Promise.race([promise1(), promise2(), promise3()]).then((res) =>
//   console.log(res)
// );

// function foo(url) {
//   return fetch(url).then((res) => res.json());
// }

// foo("https://www.boredapi.com/api/activity?type=recreational").then((data) =>
//   console.log(data)
// );
