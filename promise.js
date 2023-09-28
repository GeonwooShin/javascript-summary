// function test1() {
//   return fetch("https://www.bodapi.com/api/activity?type=recreational")
//     .then((res) => res.json())
//     .catch((err) => {
//       throw new Error("에러발생!");
//     })
//     .finally(() => {
//       console.log("asd");
//     });
// }

// async function test2() {
//   try {
//     const response = test1();
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// test2();
// console.log("asdasd");

// function foo() {
//   fetch("https://www.boredapi.com/api/activity?type=recreational").then((res) =>
//     res.json()
//   );
// }

// console.log(foo());

// function foo() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("완료!"), 1000);
//   });
// }

// async function bar() {
//   const result = await foo();
//   console.log(result); // 완료!
// }

// bar();

// async function foo() {
//   return 1;
// }

// const result = foo();
// console.log(result);

// async function foo() {
//   try {
//     const response = await fetch("https://www.xxx.xxx");
//     const data = await response.json();
//     console.log(data);
//   } catch (e) {
//     console.log("에러발생: ", e); // 에러발생:  TypeError: Failed to fetch
//   }
// }

// function foo() {
//   fetch("https://www.xxx.xxx")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log("에러발생: ", err));
// }

// foo();
// console.log("111");

// async function foo() {
//   try {
//     const response = await fetch("https://www.xxx.xxx");
//     const data = await response.json();
//     console.log(data);
//   } catch (e) {
//     console.log("Error!!: ", e);
//   }
// }
// foo();
// console.log("111");

// function foo() {
//   new Promise((_, reject) => {
//     setTimeout(() => {
//       reject("Error");
//     }, 3000);
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log("에러 발생: ", err));
// }

// foo();
// setTimeout(() => {
//   console.log("set");
// }, 4000);
// console.log("111");

// async function foo() {
//   const a = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
//   const b = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
//   const c = new Promise((resolve) => setTimeout(() => resolve(3), 3000));
//   const result = await Promise.all([a, b, c]);
//   console.log(result);
// }

// foo();

// function foo() {
//   new Promise((resolve) => {
//     console.log(0);
//     resolve();
//   });
//   console.log(1);
// }
// foo();
// console.log(2);

// function foo() {
//   const a = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 1000);
//   });
//   const b = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(3);
//     }, 3000);
//   });
//   const c = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(2);
//     }, 2000);
//   });
//   const result = Promise.all([a, b, c]);
//   result.then((res) => console.log(res));
// }

// foo();

// console.log("hi");

// function foo(n, callback) {
//   let a = n + 10;
//   callback(a);
// }

// foo(10, (a) => {
//   console.log(a);
// });

// console.log("asdasd");

// const deleteButtons = document.querySelectorAll(".delete-btn");

// function foo() {
//   return new Promise((resolve) => {
//     const container = document.querySelector(".container");
//     const modalContainer = document.createElement("div");
//     const confirmBtn = document.createElement("button");
//     const cancelBtn = document.createElement("button");
//     confirmBtn.textContent = "삭제";
//     cancelBtn.textContent = "취소";
//     modalContainer.appendChild(confirmBtn);
//     modalContainer.appendChild(cancelBtn);
//     modalContainer.classList.add("modal-active");
//     container.appendChild(modalContainer);
//     const onClick = (flag) => {
//       resolve(flag);
//       modalContainer.remove();
//     };
//     confirmBtn.addEventListener("click", onClick.bind(null, true));
//     cancelBtn.addEventListener("click", onClick.bind(null, false));
//   });
// }

// deleteButtons.forEach((button) => {
//   button.addEventListener("click", async () => {
//     const flag = await foo();
//     if (flag) {
//       const listItem = button.parentElement;
//       listItem.remove();
//     }
//   });
// });
