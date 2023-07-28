// C.1
function exactlyTwoParams(arg1, arg2){
    try{
        if(arguments.length != 2)
            throw Error;
    }
    catch(error){
        if(arguments.length < 2)
            throw 'Arguments are less than 2!';
        else
            throw 'Arguments are more than 2!'
    }
}

// C.2
function addNumbers(){
    let sum = 0;

    try{
        if(arguments.length == 0){
            throw Error;
        }

        Array.from(arguments).forEach(arg => {
            if(isNaN(arg)){
                throw Error;
            }

            sum += arg;
        });
        return sum;
    }
    catch(error){
        throw 'Please call the function properly!';
    }
}


// C.3

function reverse1(){
    const arr = Array.from(arguments);
    return arr.reverse();
}

function reverse2(){
    const arr = Array.from(arguments);

    const reversedArr = [];
    for(let i = arr.length -1; i >= 0; --i){
        reversedArr.push(arr[i]);
    } 
    return reversedArr;
}
