const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const logos = importAll(
  require.context("../assets/logos", false, /\.(png|jpe?g|svg)$/)
);
const images = importAll(
  require.context("../assets/images", true, /\.(png|jpe?g|svg)$/)
);

const events = [
  {
    index: 6,
    year: 2013,
    title: "Flow - 당신의 사랑을 흐르게 하라",
  },
  { index: 7, year: 2014, title: "Be the PACEMAKER" },
  {
    index: 8,
    year: 2015,
    title: "사랑 안에서 하나된 움직임(Love in Motion)",
  },
  { index: 9, year: 2016, title: "Do everything in Love" },
  { index: 10, year: 2017, title: "같이 걷길, 사랑하길" },
  { index: 11, year: 2018, title: "May, I love you?" },
  { index: 12, year: 2019, title: "발자취를 따라, 함께 걷다" },
  {
    index: 13,
    year: 2021,
    title: "펜데믹으로 인한 개최 취소",
  },
  {
    index: 14,
    year: 2022,
    title: "한걸음, 또 한걸음 걸어가는 날",
  },
  {
    index: 15,
    year: 2023,
    title: "함께, 한 마음으로 모이는 날",
  },
  { index: 16, year: 2024, title: "Fill in your {Blank}" },
  { index: 17, year: 2025, title: "한 마음, 한 걸음, 하나의 사랑" },
  { index: 18, year: 2026, title: "각자의 모습으로, 같은 길을" },
];

export { logos, images, events };
