(function() {
    asyncfunction();
    console.log('3')
})();

async function asyncfunction() {
    await asyncfunction2();
    console.log('2')
}

function asyncfunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve();}, 100);
    }).then(() => console.log('1'));
}