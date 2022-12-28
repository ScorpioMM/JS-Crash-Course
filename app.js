function str (logged_in , subscribe) {

    return logged_in === 'loggedin' && subscribe === 'subscribe'
}


console.log(str('loggedin' , 'unsubscribe'))