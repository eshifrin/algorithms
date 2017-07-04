//takes in a sentence.  reverse each word in place.
//sekat ni a ecnetnes. esrever hcae drow ni ecalp

var reverseWords = function(arr) {
    arr.reverse();
    
    for (var i = 0, j = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            reverse(arr, j, i - 1);
            j = i + 1;
        } 
    }
    reverse(arr, j, arr.length - 1)
    
    return arr;
};

let reverse = (arr, start, end) => {
    while (end > start) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        end--;
        start++;
    }
    return;
}