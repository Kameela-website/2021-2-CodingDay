const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
function reverseNum(num) {
	return (
    parseFloat(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(num)
  )
}

console.log(reversedNum(-543.21))

console.log(reversedNum(23000000))

console.log(reversedNum(543.21))

// ouput
-12.345
32
12.345