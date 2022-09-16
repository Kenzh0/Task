// 1 Number + BigInt
// const pow = 10e3
// const float = 77.77
// const num = 7

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Math.pow(2,53) - 1)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.POSITIVE_INFINITY)  // Зарезервированные значение
// console.log(Number.NEGATIVE_INFINITY)
// console.log(2/0)
// console.log(Number.NaN)
// console.log(typeof Nan)
// const width = 2/undefined
// console.log(Number.isNaN(width)) // проверка на содержание
// console.log(Number.isNaN(42))
// console.log(isFinite(Infinity))
// console.log(isFinite(42))
// const stringInt = '40'
// console.log(parseInt(stringInt) + 1)
// console.log(+(stringInt) + 5)   // parseInt или + переобразование строку в число
// console.log(0.4 + 0.8) // = 1.200000002: чисел в арифметике с плавающей запятой с международным стандартом IEEE 754.
// console.log(+(0.4 + 0.8).toFixed(1)) // число после точки

// 2 BigInt
// console.log(900719925474099199999n)
// console.log(900719925474099199999n - 90071992547409919999n)
// console.log(6n-4n)
// console.log(parseInt(6n) - 2)
// console.log(6n - BigInt(2))

// 3 Math
// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.pow(2,5))
// console.log(Math.abs(-42))
// console.log(Math.min(-42, 5, 7, 9))
// console.log(Math.max(-42, 5, 7, 9))
// console.log(Math.floor(4.9)) // округляет на меньш число
// console.log(Math.ceil(4.9))  // округляет на больш число
// console.log(Math.round(4.9)) // возвращает число, округленное  к ближайшему целому (5)
// console.log(Math.trunc(4.9)) // возвращает целую часть числа путем удаления всех дробных знаков (4)
// console.log(Math.random())

// function getRandomBetween(min,max)
// {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

// console.log (getRandomBetween(10, 42))      