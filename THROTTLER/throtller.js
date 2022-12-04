function throttler(func, timer = 300){
    let prev = 0;
    return (()=>{
        let now = new Date().getTime();
        if(now - prev > timer){
            prev = now;
            func();
        }
    })
}

var throttle = document.getElementById("throttle");

throttle.addEventListener("click", throttler(()=>{
    alert("Throttling will execute the function only one time in given milliseconds, no matter how many times the user clicks the button.");
}));