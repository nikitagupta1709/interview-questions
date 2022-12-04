function debounce (func, timeout = 1000){
    let timer;
    return ()=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func();
        }, timeout);
    }
}

function saveInput(){
    alert("Debounce Function is used to limit the number of times any function is executed.");
    console.log('Saving data');
}

const processChange = debounce(() => saveInput());