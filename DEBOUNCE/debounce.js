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
    alert("data Saved");
    console.log('Saving data');
}

const processChange = debounce(() => saveInput());