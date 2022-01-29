import * as rl from "node:readline";

const r = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

const player1 = "o";
const player2 = "x";
let turnCount = 1;

//初期表示
const gameBoard: string[][] = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"]
];

// console.log(gameBoard);

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

function main(): void {
  init();
  turn();
}

function init(): void {
  r.question("Enter key press start!", () => {
    // let turn = playTurn(turnCount);

    console.log("----");
    console.log(renderField(gameBoard));
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
    console.log(`選択した番号${input}`);
    console.log("----");
    console.log(renderField(gameBoard));
    console.log("----");
    judge();
  });
  // r.close();
}

//引数valの値によってgameBoardの値を書き換える
//書き換えるターンの値が必要
function input_convert(val: string): void {
  const turn = playTurn(turnCount);
  // console.log(`${turn}のターン`);

  switch (val) {
    case "1":
      gameBoard[0][0] = `${turn}`;
      break;
    case "2":
      gameBoard[0][1] = `${turn}`;
      break;
    case "3":
      gameBoard[0][2] = `${turn}`;
      break;
    case "4":
      gameBoard[1][0] = `${turn}`;
      break;
    case "5":
      gameBoard[1][1] = `${turn}`;
      break;
    case "6":
      gameBoard[1][2] = `${turn}`;
      break;
    case "7":
      gameBoard[2][0] = `${turn}`;
      break;
    case "8":
      gameBoard[2][1] = `${turn}`;
      break;
    case "9":
      gameBoard[2][2] = `${turn}`;
      break;
    default:
      return console.error("エラー");
      break;
  }
}

function judge() {
  turnCount++;
  const nextplayer = playTurn(turnCount);
  console.log(`${nextplayer}のターン`);
}


//main関数
main();

//やること
//勝利パターンの入力
//引き分け判定
//入力済の箇所は入力できなくする
//1-9までの数字以外を入力しても反応しないように
