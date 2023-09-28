// function foo() {
//   setTimeout(() => {
//     console.log("asd");
//     throw new Error("Error 발생");
//   }, 0);
// }

// function bar() {
//   try {
//     foo();
//   } catch (err) {
//     console.log("발생한 에러: ", err);
//   }
// }

// bar();
// console.log("asxd");

// console.log("asdasd");

// const bar = () => {
//   try {
//     setTimeout(() => {
//       throw Error("Error!");
//     }, 0);
//   } catch (e) {
//     console.log(e);
//   }
// };

// bar();

// const bar = () => {
//   const wrongUrl = "www.xxx.xxx";

//   return fetch(wrongUrl)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("네트워크 요청에 실패했습니다.");
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error; // 다시 에러를 던져서 호출한 쪽에서 처리할 수 있도록 합니다.
//     });
// };

// // foo 함수 정의
// const foo = () => {
//   bar()
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((e) => {
//       console.log("발생한 에러: ", e);
//     });
// };

// // foo 함수 호출
// foo();
// console.log("hi");

// const bar = async () => {
//   const wrongUrl = "https://wrong.url";
//   const response = await fetch(wrongUrl);
//   const data = await response.json();
//   return data;
// };

// const foo = async () => {
//   try {
//     const res = await bar();
//   } catch (e) {
//     console.log("발생한 에러: ", e);
//   }
// };

// foo();

// function foo() {
//   return fetch("https://wrong.url")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("네트워크 요청에 실패했습니다.");
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       console.log(error); // 다시 에러를 던져서 호출한 쪽에서 처리할 수 있도록 합니다.
//     });
// }

// foo();
// console.log("asdasd");
