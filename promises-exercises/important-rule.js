function alwaysThrows(){
   const error = new Error('OH NOES');
   console.log(error.message);
};

function iterate(int){
    console.log(int);
    return int+1;
}

Promise.resolve(1)
	.then (iterate)
    .then (iterate)
    .then (iterate)
    .then (iterate)
    .then (iterate)
	.then (alwaysThrows)
	.then (iterate)
    .then (iterate)
    .then (iterate)
    .then (iterate)
    .then (iterate)
	.catch (function (error){
        console.log(error);
    });

