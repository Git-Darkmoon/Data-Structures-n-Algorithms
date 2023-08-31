function change(a, i, j) {
  let temp = a[i]
  a[i] = a[j]
  a[j] = temp
}

function Selection(a) {
  const N = a.length
  console.log(`N value: ${N} `)
  for (let i = 0; i < N - 1; i++) {
    let min = i
    let j
    for (j = i + 1; j < N; j++) {
      if (a[j] < a[min]) {
        min = j
      }
    }
    change(a, i, min)
  }
}

const myArray = [4, 2, 6, 7, 1, 3]

Selection(myArray)

console.log(myArray)
