//Return the number of vowels in the given string
function getCount(str) {
    var vowelsCount = 0;
    for(char in str){
      if(['a', 'e', 'i', 'o', 'u'].includes(str[char])){
        vowelsCount++;
      }
    }
    return vowelsCount;
}