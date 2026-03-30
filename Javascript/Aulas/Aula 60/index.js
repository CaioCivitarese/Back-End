function recurciva(max){
    if (max >= 10 ){
        return
    }
    max++;
    console.log(max);
    recurciva(max);

}

recurciva(-10);
