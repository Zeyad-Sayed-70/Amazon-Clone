import { IoIosArrowBack, IoMdStar, IoMdStarOutline } from "react-icons/io";

export const price_filter = [
  {
    id: 0,
    title: "ALL",
    limit: "All",
  },
  {
    id: 1,
    title: "Under $25",
    limit: [0, 25],
  },
  {
    id: 2,
    title: "$25 to $50",
    limit: [25, 50],
  },
  {
    id: 3,
    title: "$50 to $100",
    limit: [50, 100],
  },
  {
    id: 4,
    title: "$100 to $200",
    limit: [100, 200],
  },
  {
    id: 5,
    title: "$200 & Above",
    limit: [200, 999999999],
  },
];

export const rating_filter = [
  {
    id: 1,
    title: `5`,
    rate: 5,
  },
  {
    id: 2,
    title: "4 & Up",
    rate: 4,
  },
  {
    id: 3,
    title: "3 & Up",
    rate: 3,
  },
  {
    id: 4,
    title: "2 & Up",
    rate: 2,
  },
  {
    id: 5,
    title: "1 & Up",
    rate: 1,
  },
  {
    id: 6,
    title: "ALL",
    rate: 0,
  },
];
