export function createLog(message: any, ...optionalParams: any[]) {
  if (process.env.NODE_ENV === "development") {
    console.log(message, ...optionalParams);
  }
}

type ChangeNumberType = (str: string, convertToLang?: "fa" | "en") => string;
export const changeNumberLang: ChangeNumberType = (str, convertToLang = "fa") => {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  if (convertToLang === "fa") {
    englishNumbers.forEach((item, index) => {
      str = str.replace(new RegExp(item, "g"), persianNumbers[index]);
    });
  } else if (convertToLang === "en") {
    persianNumbers.forEach((item, index) => {
      str = str.replace(new RegExp(item, "g"), englishNumbers[index]);
    });
  }
  return str;
};

export function onlyNumberValue(text: string) {
  let tmp = text;
  if (tmp.search(",") !== -1 || tmp.search(".") !== -1) {
    tmp = tmp.replace(new RegExp(/,/, "g"), "");
    tmp = tmp.replace(new RegExp(/\./, "g"), "");
  }
  const number = tmp.match(/((\d+)|([۰۱۲۳۴۵۶۷۸۹]+))/g);
  if (number && number.length) {
    tmp = number.join("");
  } else {
    tmp = "";
  }
  if (tmp) {
    tmp = changeNumberLang(tmp, "en");
  }
  return tmp;
}

export function removeFirstZero(str: string) {
  let number = str;
  if (number) {
    const tmp = number.toString().match(/(^[0]+)/g);
    if (tmp && tmp.length) {
      number = number.substring(tmp[0].length);
      if (!number.length) {
        number = "0";
      }
    }
  }
  return number;
}

export function number2Digit(num: number) {
  if (num < 10) return `0${num}`;
  return num.toString();
}

export const iranPhoneNumberRegex = /(^(09|۰۹))(\d{9}$|[۰۱۲۳۴۵۶۷۸۹]{9}$)/;
