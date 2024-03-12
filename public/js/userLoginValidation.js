window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.login-form')

  const email = document.querySelector('#email')
  const password = document.querySelector('#password')

  const emailError = document.querySelector('#emailError')
  const passwordError = document.querySelector('#passwordError')

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    email.value === ''
      ? (emailError.textContent = 'Debes ingresar un email')
      : (emailError.textContent = '')
    password.value === ''
      ? (passwordError.innerText = 'Debes ingresar una contraseña')
      : (passwordError.innerText = '')
      
    if (!emailError.textContent && !passwordError.textContent) form.submit()
  })
})
