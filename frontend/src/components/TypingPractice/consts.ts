import type { Question } from "./models/Question";

export const getRondomQuestion = () => {
  const randomIndex = Math.floor(Math.random() * questions.length);
return questions[randomIndex];
}

export const questions: Question[] = [
  {
    id: 1,
    sentence: "なんとなく、うてばいいよ",
    romaji: "nantonaku uteba iiyo",
  },
  {
    id: 2,
    sentence: "ちょっとちがっててもだいじょうぶ",
    romaji: "chotto chigattetemo daijoubu",
  },
  {
    id: 3,
    sentence: "きぶんでタイプしてね",
    romaji: "kibun de taipu shite ne",
  },
  {
    id: 4,
    sentence: "せいかいじゃなくてもいいんだよ",
    romaji: "seikai janakutemo iindayo",
  },
  {
    id: 5,
    sentence: "まちがってもだいじょうぶ！",
    romaji: "machigattemo daijoubu",
  },
  {
    id: 6,
    sentence: "ちょいミスOK",
    romaji: "choi misu ookei",
  },
  {
    id: 7,
    sentence: "へんなうちかたでもうれしい",
    romaji: "hen na uchikata demo ureshii",
  },
  {
    id: 8,
    sentence: "ノリでうてばだいたいOK",
    romaji: "nori de uteba daitai ookei",
  },
  {
    id: 9,
    sentence: "にてればOK",
    romaji: "niteru ba ookei",
  },
  {
    id: 10,
    sentence: "ゆる〜くたのしもう",
    romaji: "yuruuku tanoshimou",
  },
  {
    id: 11,
    sentence: "まちがいはあいだよ",
    romaji: "machigai wa aida yo",
  },
  {
    id: 12,
    sentence: "なんかそれっぽければOK",
    romaji: "nanka soreppokereba ookei",
  },
  {
    id: 13,
    sentence: "タイプにきもちをこめて",
    romaji: "taipu ni kimochi wo komete",
  },
  {
    id: 14,
    sentence: "うまくうてなくてもいいじゃん",
    romaji: "umaku utenakutemo iijan",
  },
  {
    id: 15,
    sentence: "ぜんぜんだいじょうぶ",
    romaji: "zenzen daijoubu",
  },
  {
    id: 16,
    sentence: "それもまたタイプ",
    romaji: "sore mo mata taipu",
  },
  {
    id: 17,
    sentence: "ちがいはおいしさ",
    romaji: "chigai wa oishisa",
  },
  {
    id: 18,
    sentence: "ミスってもかわいい",
    romaji: "misuttemo kawaii",
  },
  {
    id: 19,
    sentence: "てきとうにいこう",
    romaji: "tekitou ni ikou",
  },
  {
    id: 20,
    sentence: "タイプはじゆうだ",
    romaji: "taipu wa jiyuu da",
  },
  {
    id: 21,
    sentence: "ノーミスとかきにしない",
    romaji: "noomisu toka kinishinai",
  },
  {
    id: 22,
    sentence: "なんとなくでいこう",
    romaji: "nantonaku de ikou",
  },
  {
    id: 23,
    sentence: "ちょっとずれててもセーフ",
    romaji: "chotto zuretetemo seefu",
  },
  {
    id: 24,
    sentence: "もはやうててればOK",
    romaji: "mohaya utetereba ookei",
  },
  {
    id: 25,
    sentence: "きがついたらうってた",
    romaji: "kigatsuitara utteta",
  },
  {
    id: 26,
    sentence: "てきとうイズジャスティス",
    romaji: "tekitou izu jasutisu",
  },
  {
    id: 27,
    sentence: "なぜかうててしまった",
    romaji: "nazeka utete shimatta",
  },
  {
    id: 28,
    sentence: "きぶんでいこうぜ",
    romaji: "kibun de ikou ze",
  },
  {
    id: 29,
    sentence: "うってるじてんでえらい",
    romaji: "utteru jiten de erai",
  },
  {
    id: 30,
    sentence: "ミスったらわらっとけ",
    romaji: "misuttara warattoke",
  },
];
