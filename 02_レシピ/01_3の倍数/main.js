const number = 24

if (number % 3 === 0) {
  console.log(number + "!!!!!!!")
} else {
  console.log(number)
}
const number = 24

for (let n = 1; n <= number; n++) {
  if (n % 3 === 0) {
    console.log(n + "!!!!!!!")
  } else {
    console.log(n)
  }
}

const genkiFunction = function(number) {
    
    for (let n = 1; n <= number; n++) {
      if (n % 3 === 0) {
        console.log(`${n}!!!!!!!`)
      } else {
        console.log(n)
    
genkiFunction(100)


$ cd webex/js-recipe
$ git add .
$ git commit -m "[3の倍数]を学習しました。"
$ git push origin master
