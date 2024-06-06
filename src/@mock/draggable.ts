export interface Option {
  option: string;
  sorder: number;
}

export const options: Option[] = [
  {
    option: "Ayiq",
    sorder: 1,
  },
  {
    option: "Qayiq",
    sorder: 2,
  },
  {
    option: "Olma",
    sorder: 3,
  },
  {
    option: "Tosh",
    sorder: 4,
  },
];

export const message =
  "It is a long established fact that a reader will be [distracted] by the readable [content] of a page when [looking] at its [layout.]";

export const extractBracketWord = (message: string) => {
  const regex = /(\[.*?\])/g;
  return message.split(regex);
};
