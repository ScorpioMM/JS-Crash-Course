//function arrLength(arr) {

//return arr[arr.length - 1];

//}

//console.log(arrLength([1,2,4,8,5]));

function karim (loggedIn, subscribe) {

    if (loggedIn === 'logged_in' && subscribe === 'subscribe'){
        return true;
    }
    else {
        return false;
    }

}

console.log(karim('logged_n' , "subscribe"))