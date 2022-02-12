import * as rl from "node:readline";

const r = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

const player1 = "o";
const player2 = "x";
let turnCount = 1;

//初期表示
const GAMEBOARD: string[][] = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"]
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

//画面表示
function renderField(gb: string[][]): string {
  let field = gb
    .map((a) => String(a) + "\n")
    .join("")
    .replaceAll(",", "");
  //最終行の改行を削除
  field = field.slice(0, -1);
  return field;
}

function init(): void {
  r.question("Enter key press start!", () => {
    // let turn = playTurn(turnCount);
    console.log("----");
    console.log(renderField(GAMEBOARD));
    console.log("----");
    console.log("先攻の人は選択する数字を入力してください");
  });
}

//turnCountからどちらのターンなのか判定
function playTurn(c: number): string {
  return c % 2 !== 0 ? player1 : player2;
}

function turn(): void {
  r.on("line", (input: string): void => {
    const nowPlayer = playTurn(turnCount);

    if (input === "") {
      return console.error("エラー");
    }

    input_convert(input);

    console.log(`${nowPlayer}のターン`);
    console.log(`ターンカウント${turnCount}`);
    console.log(`選択した番号${input}`);
    console.log("----");
    console.log(renderField(GAMEBOARD));
    console.log("----");
    judge();
  });
  // r.close();
}

function judge() {
  const nowplayer = playTurn(turnCount);
  patternCheck(nowplayer); //"o" or "x"
}

function patternCheck(mark: string): void {
  const strGAME = String(GAMEBOARD).replaceAll(",", "");

  const result = winPattern.some((element) => {
    let trueCount = 0;
    // console.log("element", element); //winP
    // console.log("strGAME", strGAME);
    for (let i = 0; i < element.length; i++) {
      strGAME[element[i] - 1] === mark ? trueCount++ : false;
    }
    if (trueCount === 3) {
      console.log(`${mark}の勝利！`);
      return true;
    }
  });
  if (result === true) {
    r.close();
  } else {
    turnCount++;
    const nextplayer = playTurn(turnCount);
    console.log(`${nextplayer}のターン`);
  }
}

//引数valの値によってGAMEBOARDの値を書き換える
//書き換えるターンの値が必要
function input_convert(val: string): void {
  const turn = playTurn(turnCount);

  switch (val) {
    case "1":
      GAMEBOARD[0][0] = `${turn}`;
      break;
    case "2":
      GAMEBOARD[0][1] = `${turn}`;
      break;
    case "3":
      GAMEBOARD[0][2] = `${turn}`;
      break;
    case "4":
      GAMEBOARD[1][0] = `${turn}`;
      break;
    case "5":
      GAMEBOARD[1][1] = `${turn}`;
      break;
    case "6":
      GAMEBOARD[1][2] = `${turn}`;
      break;
    case "7":
      GAMEBOARD[2][0] = `${turn}`;
      break;
    case "8":
      GAMEBOARD[2][1] = `${turn}`;
      break;
    case "9":
      GAMEBOARD[2][2] = `${turn}`;
      break;
    default:
      return console.error("エラー");
      break;
  }
}

function main(): void {
  init();
  turn();
}
// r.close();

//main関数
main();
