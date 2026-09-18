function bakeCake() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("cake baked");
        }, 30000);

    });
}

function decorateCake() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("cake decorated");
        }, 20000);

    });
}

function pakeCake() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("cake packed");
        }, 10000);

    });
}

function deliverCake() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("cake delivered");
        }, 10000);

    });
}

bakeCake().then((result) => {
    console.log(result);
    return decorateCake();
})
    .then((result) => {
        console.log(result);
        return pakeCake();
    })
    .then((result) => {
        console.log(result);
        return deliverCake();
    })
    .then((result) => {
        console.log(result);
    });