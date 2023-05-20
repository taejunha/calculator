const slt = document.querySelector('select')
const h3 = document.querySelector('h3')
const h5 = document.querySelector('h5')
let addDecimal = true
let expression = ''
 
 // Delete button
document.querySelector('#delete').onclick = () => {
  h5.innerHTML = h5.innerHTML.slice(0, -1) 
  expression = expression.slice(0, -1)
  if (h5.innerHTML.includes('.')) return
  addDecimal = true
}

document.querySelector('#cancel').onclick = () => {
  expression = ''
}
  
// Numbers
document.querySelectorAll('.number').forEach(x => {
  x.onclick = () => {
  if (h3.innerHTML != '') {
    document.querySelector('#cancel').click()
    }
  if (h5.innerHTML.includes('=')) {
    h5.innerHTML = h5.innerHTML.slice(0, -1)
    }
  expression += x.innerHTML
  h5.append(x.innerHTML)
  }
})
  
// Operators
document.querySelectorAll('.operation').forEach(x => {
  x.onclick = () => {
  if (h3.innerHTML != '') {
    h5.innerHTML = h3.innerHTML
    h3.innerHTML = ''
  }
  if (h5.innerHTML.includes('=')) {
    h5.innerHTML = h5.innerHTML.slice(0, -1)
    }
  expression += x.getAttribute('data-op')
  h5.append(x.innerHTML)
  addDecimal = true
  }
})
  
// Decimal point
document.querySelector('#decimal').onclick = () => {
  if (h3.innerHTML != '') {
    document.querySelector('#clear').click()
    }
  if (!addDecimal) return 
    expression += '.'
    h5.append('.')
    addDecimal = false
  }
  
// Equal 
document.querySelector('#equal').onclick = () => {
  console.log(expression)
  let answer = eval(expression.toString())
  answer = Math.round((answer + Number.EPSILON) * 100) / 100
  console.log(answer)
  if (h5.innerHTML.includes('=')) {
    h5.innerHTML = h5.innerHTML.slice(0, -1)
  }
  document.querySelector('h3').innerHTML = answer
  expression = answer
  h5.append('=')
}