let newDate = new Date();
let oldDate = new Date();
oldDate.setDate(oldDate.getDate() - 1);

// Cookies Library
function getCookieList(){
    let cookiesArr = document.cookie.split('; ');

    let cookiesMap = new Map();

    cookiesArr.forEach(
        cookie => cookiesMap.set(cookie.split('=')[0], cookie.split('=')[1])
    )

    return cookiesMap;
}


function getCookie(cookieName){
    let cookieValue = getCookieList().get(cookieName);
    return cookieValue;
}

function setCookie(cookieName, cookieValue, expiryDate){
    if(cookieName)
        document.cookie = `${cookieName}=${cookieValue};expires=${expiryDate}`;
}

function hasCookie(cookieName){
    return (getCookieList().get(cookieName) != undefined) ? true : false;
}

function deleteCookie(cookieName){
    if(hasCookie(cookieName)){
        setCookie(cookieName, getCookie(cookieName), oldDate);
    }
}