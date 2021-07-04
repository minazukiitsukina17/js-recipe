const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")

let count = 0
plusButton.onclick = function() {
  count = count + 1
  display.textContent = count
}
const display2 = document.getElementById("display2")
const mainusButton = document.getElementById("mainus-button")

let count2 = 0
mainusButton.onclick = function() {
  count2 = count2 - 1
  display2.textContent = count2
}

$ cd webex/js-recipe
$ git add .
$ git commit -m "[カウンター]を学習しました。"
$ git push origin master
