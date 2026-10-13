// // const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// // const words = ['asap', 'byob', 'rsvp', 'diy'];

// // //Map creates a new array by calling your callback function with each element in the original array.
// // const doubles = numbers.map(function (num) {
// //   return num * 2; //Need to return the value!
// // });
// // //[40, 42, 44, 46, 48, 50, 52, 54]

// // const numDetail = numbers.map(function (n) {
// //   return {
// //     value: n,
// //     isEven: n % 2 === 0
// //   }
// // })

// // const abbrevs = words.map(function (word) {
// //   return word.toUpperCase().split('').join('.');
// // })
// // //["A.S.A.P", "B.Y.O.B", "R.S.V.P", "D.I.Y"]

// // const books = [{
// //     title: 'Good Omens',
// //     authors: ['Terry Pratchett', 'Neil Gaiman'],
// //     rating: 4.25
// //   },
// //   {
// //     title: 'Bone: The Complete Edition',
// //     authors: ['Jeff Smith'],
// //     rating: 4.42
// //   },
// //   {
// //     title: 'American Gods',
// //     authors: ['Neil Gaiman'],
// //     rating: 4.11
// //   },
// //   {
// //     title: 'A Gentleman in Moscow',
// //     authors: ['Amor Towles'],
// //     rating: 4.36
// //   }
// // ]

// // const titles = books.map(function (b) {
// //   return b.title;
// // })
// // //["Good Omens", "Bone: The Complete Edition", "American Gods", "A Gentleman in Moscow"]
// const t = ["abc", "def", "ghi"];
// const a = t.map(function (params) {
//   return params.toLocaleUpperCase().split("").join(".");
// });
// console.log(a);

// const c = t.map(function (params) {
//   return params.toLocaleUpperCase();
// });
// // console.log(c);
// const n = [1, 2, 3];
// const d = n.map(function (params) {
//   return params * 2;
// });
// console.log(d);
// const books = [
//   {
//     title: "Good Omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//   },
//   {
//     title: "Bone: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//   },
// ];
// const titles = books.map(function (params) {
//   return params.title;
// });
// console.log(titles);
const a = ["a", "b", "c"];
const am = a.map((a) => a.toUpperCase());
// console.log(am);
const n = [1, 2, 3];
const d = n.map((d) => d * 2);
// console.log(d);
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const o = {};
const e = numbers.map(function (params) {
  return {
    value: params,
    isEven: params % 2 === 0,
  };
});
// console.log(e);
const words = ["asap", "byob", "rsvp", "diy"];
const w = words.map(function (params) {
  return params.split("").join(".").toUpperCase();
});
// console.log(w);
const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];
const t = books.map(function (params) {
  return params.title;
});
console.log(t);
