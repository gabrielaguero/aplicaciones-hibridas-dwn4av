function task1(callback){
    setTimeout(function(){
        const data = "task 1 terminada";
        callback(data);
    },1000)
}

function task2(callback){
    setTimeout(function(){
        const data = "task 2 terminada";
        callback(data);
    },1000)
}

function task3(callback){
    setTimeout(function(){
        const data = "task 3 terminada";
        callback(data);
    },1000)
}

function mainCallback(){
    task1(function(result1){
        console.log(result1);

        task2(function(result2){
            console.log(result2); 

            task3(function(result3){
                console.log(result3); 
                console.log("Todas las tareas completas");
            });
        });
    });
}

mainCallback();