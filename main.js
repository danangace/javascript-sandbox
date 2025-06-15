// async function getHero() {
//   const response = await fetch('https://www.dota2.com/datafeed/herodata?language=english&hero_id=88');
//   const hero = await response.json();
//   return hero;
// }

// const response = await getHero();
// console.log(JSON.stringify(response, null, 2));

// TRYING CALLBACKS

function doStep1 (init, callback) {
  const result = init + 1
  console.log('Step 1 Kepanggil')
  callback(result)
}

function doStep2 (init, callback) {
  const result = init + 1
  console.log('Step 2 Kepanggil')
  callback(result)
}

function doStep3 (init, callback) {
  const result = init + 1
  console.log('Step 3 Kepanggil')
  callback(result)
}

function doOperation () {
  doStep1(0, function (result1) {
    doStep2(result1, function (result2) {
      doStep3(result2, function (result3) {
        console.log('Final result:', result3)
      })
    })
  })
}

// doOperation(0)

// const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
// console.log('Masih Jalan Nih')
// console.log(fetchPromise);

/**
 * Bahwa promise tidak akan block main thread
 * immediately return Promise object
 * dan akan memanggil then() ketika data sudah tersedia
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
 */

// const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
// fetchPromise
//   .then(response => response.json())
//   .then(data => {
//     // data only available after the promise is resolved
//     response = data
//   })

// console.log(fetchPromise)


/**
 * Try error handling
 */

// const fetchPromise2 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found");
// fetchPromise2
//   .then(response => {
//     console.log(response)
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
//   });

/**
 * Try combining multiple promises
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 */

const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then(responses => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
