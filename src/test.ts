const GAMEBOARD: string[][] = [
  ["o", "2", "3"],
  ["4", "o", "6"],
  ["7", "8", "o"]
];

const winPattern: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

function patternCheck(mark: string) {
  // console.log(GAMEBOARD);
  // console.log(winPattern[0][1]);
  // console.log(mark);
  // console.log(String(GAMEBOARD));

  console.log("判定スタート");

  const strGAME = String(GAMEBOARD).replaceAll(",", "");

  let trueCount = 0;


  winPattern.forEach((element) => {
    console.log(element);
    for (let i = 0; i <= strGAME.length; i++) {
      console.log(`strGAME${i + 1}`, strGAME[i], element[0], element[1], element[2]);
      console.log(strGAME[element[0] - 1]);
      console.log(strGAME[element[1] - 1]);
      console.log(strGAME[element[2] - 1]);
    }
  })
  console.log("判定終了");
}

const m = "o";
patternCheck(m);

//winpatternの要素を順番に調べる
// gameboard の
