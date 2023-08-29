function delay(ms){

    return new Promise(resolve => setTimeout(resolve,ms));

}

async function getApple() {

    for (let i = 0; i < 10000; i++) {
        console.log(i);
      }

      
    // do network request in 10 secs
    return 'Appple'
}

async function getBanana() {
    for (let i = 20000; i < 30000; i++) {
        console.log(i);
      }

    // do network request in 10 secs

    return 'Banana'
 

}

async function pickFruits() {

    const applePromise = getApple();
    const bananaPromise = getBanana();

    
    const apple =  await applePromise;
    const banana =  await bananaPromise;
    return apple + banana;

}


function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits =>
      fruits.join(' + ')
    );
  }
  pickAllFruits().then(console.log);



pickAllFruits().then(console.log);