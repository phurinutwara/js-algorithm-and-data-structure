// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

(function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
  if (str.length <= 0) return true
  if (str[0] != str[str.length - 1]) return false
  return isPalindrome(str.substr(1,str.length-2))
})("tacocat")