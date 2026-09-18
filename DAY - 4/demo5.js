let cakePromise = new Promise((resolve, reject) => {
    let cakeBurned = true;

    if (cakeBurned) {
        reject("cake burned");
    } else {
        resolve("cake baked");
    }
});

cakePromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));