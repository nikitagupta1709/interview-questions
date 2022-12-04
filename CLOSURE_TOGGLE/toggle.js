function toggler(a,b,c) {
    let count=1;
    return function func(){
        if(count==a){
            console.log(count);
            count++;
        }
        else if(count==b){
            console.log(count);
            count++;
        }
        else if(count==c){
            console.log(count);
            count++;
        }
        else{
            count=1;
        }
    }
}

const toggle = toggler(1,2,3)