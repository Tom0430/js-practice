numbers = [1, 2, 3, 4, 5]
var doubled = numbers.map(function (number) {
    return number * 2;
});
doubled


var cars = [
    { type: '軽自動車', price: '安い' },
    { type: '高級車', price: '高い' }
];
var prices = cars.map(function (car) {
    return car.price
});
prices;

function pluck(array, property) {
    return  array.map(function(element){
       return element[property]
     });
 };

 var colorObjects = [{ color: '赤' }, { color: '青' }, { color: '黄色' }];

 var colorNames = pluck(colorObjects, 'color');

 colorNames

 var products = [
     { name: 'バナナ', type: 'フルーツ', quantity: 0, price: 1 },
    { name: 'きゅうり', type: '野菜', quantity: 10, price: 15 },
    { name: 'オレンジ', type: 'フルーツ', quantity: 30, price: 9 },
    { name: '大根', type: '野菜', quantity: 3, price: 5 }
];

products.filter(function (product) {
    return product.type === 'フルーツ';
});

//種類が野菜で、数が１０より多くて値段が１０より小さい

products.filter(function (product) {
    return product.type === '野菜' && product.quantity > 10 && product.price < 10
})

var post = { id: 4, title: '初めての投稿' };

var comments = [
    { postId: 4, content: 'いい記事ですね' },
    { postId: 3, content: 'なるほど' },
    { postId: 4, content: 'いい' },
];

function commentsForPost(post, comments) {
    return comments.filter(function (comment) {
        return comment.postId === post.id
    })
}

commentsForPost(post, comments)


// reject関数を作れって問題　上は間違い、下は正解
// function reject(array, iteratorFunction) {
//     return array.filter(function (element){
//         return !iteratorFunctioin(element)
//     })
// }

// function reject(array, iteratorFunction) {
//     return array.filter((element) => {
//         return !iteratorFunction(element);
//     });
// }

// 下はアローになってる、匿名関数だとうまく行かない？？？
// 最後の　return !iteratorFunction(element); はもともと関数だから、匿名関数を作らなくてよいのか？

var users = [
    { name: '太郎'},
    { name: '二郎'},
    { name: '三郎'},
]

users.find(function (user) {
    return user.name === '二郎'
});


var posts = [
    { id: 1, title: 'ああああ' },
    { id: 2, title: 'iiiいいい' }
];

var comment = { postId: 2, content: 'いいね' }

function postForComment(posts, comment) {
    return posts.find(function (post) {
        return post.id === comment.postId;
    });
};

postForComment(posts, comment)


var computers = [
    {name: 'apple', ram: 24},
    {name: 'compaq', ram: 4},
    {name: 'acer', ram: 32},
]


computers.some(function (computer) {
    return computer.ram >= 2
})

// everyだったら全部trueでtureを返す
// someだったら一つでもtrueがあればtrueを返す

var numbers = [10, 20, 30];

numbers.reduce(function (sum, number) {
    return sum + number
}, 0);
// 第二引数の０は初期値


function balancedParens(string) {
    return !string.split('').reduce(function (previous, char) {
        if (previous < 0) { return previous; }
        if (char === '(') { return previous + 1; }
        if (char === ')') { return previous - 1; }
    },0)
};

balancedParens('()')

var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];

  var deskTypes = desks.reduce(function(sum,desk) {
      if(desk.type === 'sitting'){
         sum.sitting ++;
      }else{
        sum.standing ++;}
    return sum;
  }, { sitting: 0, standing: 0 });
// あくまでも返すのはsum その前に条件分岐でsumの中身をいじっておく
// sum.sitting + 1;だとだめなのはなんで？
deskTypes



function doubleMessage(number) {
    return `${number}を2倍すると${2 * number}になります`;
  }

  doubleMessage(3)


  function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
fullName('高橋', '智也')


// アロー関数　上と下が同じ　短い式であれば、returnと{ }削って一行で書いておk
const add = (a,b) => {
    return a+b;
  }

  const add = (a,b) =>  a+b;

add(1, 2)

//  引数が一個であれば（）も省略できる
const double = (number) =>{
    return number*2
}

const double = number => number*2

const numbers = [1,2,3]

 numbers.map(function(number){
	return number*2
 })
// これが下になる
numbers.map(number =>　number*2)


const fibonacci = (n) => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

fibonacci(8)

function addNumbers(numbers) {
    return numbers.reduce((sum, number) => {
        return sum +number
    },0)
}

addNumbers([1, 2, 3, 4, 5, 6])

// addNumbersに直接数字ぶち込みたいならこう
function addNumbers(a,b,c,d,e) {
    const numbers = [a,b,c,d,e]
  return numbers.reduce((sum, number) => {
      return sum +number
  },0)
}

addNumbers(1, 2, 3, 4, 5, 6)

// 可変長にしたい時にrest演算子を使う、引数を配列に入れてくれる便利なやつ
function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum +number
    },0)
}
addNumbers(1, 2, 3, 4, 5, 6)

// spred演算子は配列の中身を展開して並べてくれる便利なやつ
// 下のように外側を配列にしちゃえば要素を追加したい時も楽チン
const defaultColor = ['red', 'blue'];
const userColor = ['black', 'yellow'];
const favoriteColor = ['white', 'green'];
['brown', ...defaultColor, 'darkred', ...userColor, ...favoriteColor];
// 出力結果　["brown","red","blue", "darkred", "black","yellow","white","green"]



function validateShoppinglist(...items) {
    if (items.indexOf('牛乳') < 0) {
        return ['牛乳', ...items]
    }
    return items;
}
// validateShoppinglist(...items)の...はrest演算子　引数（パン、小麦粉)を配列に入れてくれる
// return ['牛乳', ...items]の...はspred演算子　配列の中身を出して展開
validateShoppinglist('パン', '小麦粉')

// restとspredはちょうど反対の動きをする
// 受け取った引数をそのまま別の関数に引き渡す時にセットで使うと便利
const mathLibrary = {
    caluculateProduct(...rest){
      return this.multiply(...rest);
    },
    multiply(a,b){
      return a * b;
    }
  };

  mathLibrary.caluculateProduct(1,4);


var expense = {
    type: '交際費',
    amount: '4500 JPY'
};
// var type = expense.type;
// var amount = expense.amount; の二行をまとめると下になる
const { type, amount } = expense;

type;
amount;

const savedFile = {
    extension: 'jpg',
    name: 'profile',
    size: '14040'
};
function fileSummary(file) {
    return `${file.name}.${file.extesion}の容量は${file.size}`
};

fileSummary(savedFile);

// 引数で分割代入できる
const savedFile = {
    extension: 'jpg',
    name: 'profile',
    size: '14040'
};
function fileSummary({extension, name, size}) {
    return `${name}.${extension}の容量は${size}`
}

fileSummary(savedFile)

// 第二引数でもおk
const savedFile = {
    extension: 'jpg',
    name: 'profile',
    size: '14040'
};
function fileSummary({extension, name, size}, {username}) {
    return `${username}:${name}.${extension}の容量は${size}`
}

fileSummary(savedFile, {username: 'ken'})

// 配列の場合は[]に入れる []は配列の要素を抽出
const companies =[
    'Google',
    'Uber',
    'Facebook'
   ];

  const [ name, name2, name3 ] = companies
  name;  //Google
  name2; //Uber
  name3; //Facebook

// const { length } = companies　{ }に変えるとオブジェクトの要素を抽出　配列の長さが取れる
// length; 出力結果は3


const companies =[
    'Google',
    'Uber',
    'Facebook'
   ];
  const [ name, ...rest ] = companies;// rest演算子を使うこともできる
  name;// Google
rest;// ["Uber","Facebook"]


const classes = [
    [ '化学', '1時限目', '鈴木先生' ],
    [ '物理', '2時限目', '佐藤先生'],
    [ '数学', '3時限目', '木村先生' ]
  ];

  const classesAsObject = classes.map(([ subject, time, teacher]) => {
    return { subject, time, teacher };
  });


// JSのクラスの裏にはプロトタイプチェーンが動いていることを理解する
class Car{
    constructor(options){ //({title})にすればoptions.titleじゃなくてtitleで良くなる　分割代入
        this.title = options.title
    }//ここにカンマはいらない、オブジェクトだと思って付け足さない
    drive() { //オブジェクトリテラル
        return 'ウイーン';
    }
}
const car = new Car({ title: 'アクア' });
car　//{ title: 'アクア' }
car.drive(); //ウイーン

class Car{
    constructor({title, price}){ // 引数に複数値を渡してもおk
        this.title = title
      	this.price = price
    }
    drive() {
        return 'ウイーン';
    }
}
const car = new Car({ title: 'アクア',price: '1,000,000 JPY' });
car;　
car.drive();


class Toyota extends Car{
    constructor({ color }) {
        this.color = color
    }
    honk() {
        return 'ぶぶー！'
    }
};

const toyota = new Toyota({ color: 'red' })
toyota;
toyota.honk();


class Toyota extends Car{  //extends 親クラス　で継承
    constructor(options) {
      super(options);  //consutructorの中にsuperで親クラスのコンストラクターを参照しに行く
        this.color = options.color;
    }
    honk() {
        return 'ぶぶー！'
    }
};

const toyota = new Toyota({color: 'red',title: 'タイトル'})
toyota.drive();
toyota.honk();


class Monster {
    constructor(options) {
        this.name = options.name,
            this.health = 100
    }
}

// generatorはなんども出し入れできる関数のようなもの
function* numbers() {
    yield;
}

const gen = numbers();
gen.next();  //{"done":false}
gen.next();  //{"done":true}


// generatorを使うとオブジェクトの中身も好きな順番でイテレートできる
const engineeringTeam = {
    size: 3,
    department: '開発部',
    lead: '太郎',
    manager: '花子',
    engineer: '二郎'
};

function* TeamIterator(team) {
    yield team.manager;
    yield team.lead;
    yield team.engineer
}

const names = [];

for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}

names;
//  出力結果　
//  3　　　この３はyeildの数
//  ["太郎","花子","二郎"]　　


// Promiseは必ずしもajaxとセットで使わないといけないものではない
// それぞれ独立して使える
// promiseには状態が３つ　unresolved, resolved, rejected

promise = new Promise((resolve, reject) => {
    reject();
});

promise;
// Promise {<rejected>: undefined}
// __proto__: Promise
// [[PromiseStatus]]: "rejected"
// [[PromiseValue]]: undefined



promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    },3000)
});

promise
    .then(() => {console.log('処理が完了しました。')})
    .then(() => {console.log('ここも実行されるよ')})
    .catch(() => { console.log('問題発生！') })


url = 'https://jsonplaceholder.typicode.com/todos'

// 欲しいデータを見られる記述
fetch(url)
    .then(responce => responce.json())
    .then(data => console.log(data));

// Responce自体(ステータスコードとか)が帰って来ちゃう記述
fetch(url)
    .catch(error => console.log('失敗！！！', error))

// 結論、fetchにはエラーが起こった時の表示に欠点があるので、ajaxのリクエストにはaxiosだったり外部のライブラリを使ったほうがいい