module.exports = function check(str, bracketsConfig) {
  const brackets = {
    ')': '(',
    ']': '[',
    '}': '{',
    '|':'|'
  };
  // в качестве стека в JavaScript можно использовать обычный массив
  //(если пользоваться только «разрешенными» методами push & pop)
  const st = [];
  for (let i = 0; i < str.length; i++) {
    if (isClosedBracket(str[i])) {
      if (brackets[str[i]] !== st.pop()) return false;
    // это открывающая скобка, т.к. других символов по условию в строке нет
    } else {
      st.push(str[i]);
    }
  }
  return st.length === 0;
}
function isClosedBracket(ch) {
  return [')', ']', '}'].indexOf(ch) > -1;
}

