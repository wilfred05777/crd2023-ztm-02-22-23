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

MyPromise.then((value) => console.log(value)).catch((rejected) =>
  console.log(rejected)
)
```
