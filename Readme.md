# Learning or ReLearning

<!-- ES6  Promises-->

```js
const MyPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve('I have succeded!')
    }, 1000)
  } else {
    reject('I have failed')
  }
})

MyPromise.then((value) => console.log(value)).catch((rejectedValue) =>
  console.log(rejectedValue)
)

//
const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      return resolve('Resolved')
    }, 100)
  } else {
    return reject('Rejected')
  }
})

myPromise
  .then((value) => console.log(value))
  .then((value) => console.log(value))
  .catch((value) => console.log(value))
```
