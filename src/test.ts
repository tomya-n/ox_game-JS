// const GAMEBOARD: string[][] = [
//   ["o", "o", "o"],
//   ["4", "5", "6"],
//   ["7", "8", "o"]
// ];

// const winPattern: number[][] = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7]
// ];

// function patternCheck(mark: string) {
//   console.log("判定スタート");

//   const strGAME = String(GAMEBOARD).replaceAll(",", "");

//   winPattern.forEach((element) => {
//     let trueCount = 0;
//     console.log("element", element); //winP
//     console.log("strGAME", strGAME);
//     for (let i = 0; i < element.length; i++) {
//       console.log(strGAME[element[i] - 1] === mark);
//       strGAME[element[i] - 1] === mark ? trueCount++ : false;
//       console.log(trueCount);
//       trueCount === 3 ? console.log(`${mark}の勝利！`) : false
//     }
//   });
//   console.log("判定終了");
// }

// const m = "o";
// patternCheck(m);

//winpatternの要素を順番に調べる
// gameboard の
