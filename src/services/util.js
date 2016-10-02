export default class Util {

  static html (literal, ...cooked){
    let result = '';

    cooked.forEach((cook, i) => {
      let lit = literal[i];

      if (Array.isArray(cook)) {
        cook = cook.join('');
      }

      result += lit;
      result += cook;
    });

    result += literal[literal.length - 1];

    return result;
  };

  static count(arr){
    return Array.from(arr).reduce((count, element) => {
      if (element !== undefined && element !== null) {count++}
      return count;
    }, 0);
  }

}
