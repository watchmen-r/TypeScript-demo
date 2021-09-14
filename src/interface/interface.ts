// interfaceのマージ
interface Bread {
  calories: number;
}

interface Bread {
  type: string;
}

const francePan: Bread = {
  calories: 300,
  type: 'hard',
};

// 型エイリアスで表現
type MaboDofu = {
  calories: number;
  spicyLevel: number;
};

type Rice = {
  calories: number;
  gram: number;
};

// 交差型
type MaboDon = MaboDofu & Rice;

const maboDon: MaboDon = {
  calories: 500,
  spicyLevel: 10,
  gram: 350,
};

// Interfaceの継承
interface Book {
  page: number;
  title: string;
}

interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'monthly';
}

const jump: Magazine = {
  page: 300,
  title: '週刊少年ジャンプ',
  cycle: 'weekly',
};

type BookType = {
  page: number;
  title: string;
};

interface Handbook extends BookType {
  theme: string;
}

const cotrip: Handbook = {
  page: 120,
  title: '小鳥っぷ',
  theme: '旅行',
};

// implements
class Comic implements Book {
  page: number;
  title: string;

  constructor(page: number, title: string, private publishYear: string) {
    this.page = page;
    this.title = title;
  }

  getPublishYear() {
    return this.title + '発売されたのは' + this.publishYear + '年です';
  }
}

const popularComic = new Comic(200, 'アイウエオ', '2021-01-01');
console.log(popularComic.getPublishYear());
