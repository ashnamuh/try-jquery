const validators = [
  val => typeof val === 'string' || 'No number',
  val => val.length > 1 || 'minimum 2 length',
  val => val.length <= 5 || 'maximum 5 length'
]

function checkValidators(fs, val) {
  const [validator, ...rest] = fs
  const fResult = validator(val)
  if (fResult === true && rest.length !== 0) {
    return checkValidators(rest, val)
  }
  if (fResult === true) {
    return { isValid: fResult, validationMessage: null }
  }
  return { isValid: false, validationMessage: fResult }
}

const result = checkValidators(validators, 'input')

console.log(result)
