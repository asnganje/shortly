const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errorMsg = document.getElementById('err-msg')
const successMsg = document.getElementById('success-msg')

linkForm.addEventListener('submit', formSubmit)

function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return !!pattern.test(str)
}

function formSubmit(e) {
  e.preventDefault();
  if(input.value === '') {
    errorMsg.innerHTML = "Url cannot be empty!"
    input.classList.add('border-red-500')
  } else if(!validURL(input.value)) {
    errorMsg.innerHTML = "Invalid URL!"
    input.classList.add('border-red-500')
  } else {
    errorMsg.classList.add('hidden')
    successMsg.classList.toggle('hidden')
    successMsg.innerHTML = 'Success!!!'
  }
}