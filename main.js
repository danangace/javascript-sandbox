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

const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
console.log('Masih Jalan Nih')
console.log(fetchPromise);