//accepts array of strings and returns them in order of string length (min to max)
function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
  };


console.log(sortByLength(['one', 'no', 'less', 'visit'])) // => [ 'no', 'one', 'less', 'visit' ]
console.log(sortByLength(['terrify', 'beacon', 'character', 'recommended'])) // => [ 'beacon', 'terrify', 'character', 'recommended' ]