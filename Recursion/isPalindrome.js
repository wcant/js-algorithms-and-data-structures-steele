// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){

  if (str.length === 1) return true;

  const strArr = str.split('');
  const front = strArr.shift();
  const back = strArr.pop();

  if (front !== back) return false;
  return isPalindrome(strArr.join(''));
}

console.log(isPalindrome('amanaplanacanalpanama'));
