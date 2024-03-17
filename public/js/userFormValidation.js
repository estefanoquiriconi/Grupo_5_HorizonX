window.addEventListener('DOMContentLoaded', () => {
  const firstName = document.querySelector('#firstName')
  const lastName = document.querySelector('#lastName')
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')
  const image = document.querySelector('#image')

  const firstNameError = document.querySelector('#firstNameError')
  const lastNameError = document.querySelector('#lastNameError')
  const emailError = document.querySelector('#emailError')
  const passwordError = document.querySelector('#passwordError')
  const imageError = document.querySelector('#imageError')

  const formRegister = document.querySelector('#formRegister')
  const formProfile = document.querySelector('#formProfile')

  function validateImages(files) {
    if (!files[0]) return 'Tienes que subir una imagen'
    const acceptedExtensions = ['.jpg', '.jpeg', '.png']

    for (let i = 0; i < files.length; i++) {
      const fileExtension = '.' + files[i].name.split('.').pop().toLowerCase()
      if (!acceptedExtensions.includes(fileExtension)) {
        return 'Las extensiones permitidas son .jpg, .jpeg, .png'
      }
    }
    return ''
  }

  function validateNames(name, fieldName) {
    if (name.length < 1) {
      return `Debes ingresar un ${fieldName}`
    } else if (name.length < 3) {
      return `El ${fieldName} debe contener como mínmo 3 caracteres`
    } else {
      return ''
    }
  }

  formRegister?.addEventListener('submit', (event) => {
    event.preventDefault()

    firstNameError.textContent = validateNames(firstName.value, 'nombre')
    lastNameError.textContent = validateNames(lastName.value, 'apellido')

    email.value === ''
      ? (emailError.textContent = 'Debes ingresar un email')
      : (emailError.textContent = '')

    password.value === ''
      ? (passwordError.textContent = 'Debes ingresar una contraseña')
      : (passwordError.textContent = '')

    imageError.textContent = validateImages(image.files)

    if (
      !firstNameError.textContent &&
      !lastNameError.textContent &&
      !emailError.textContent &&
      !passwordError.textContent &&
      !imageError.textContent
    )
      formRegister.submit()
  })

  formProfile?.addEventListener('submit', async (event) => {
    event.preventDefault()

    firstNameError.textContent = validateNames(firstName.value, 'nombre')
    lastNameError.textContent = validateNames(lastName.value, 'apellido')

    email.value === ''
      ? (emailError.textContent = 'Debes ingresar un email')
      : (emailError.textContent = '')

    if (
      !firstNameError.textContent &&
      !lastNameError.textContent &&
      !emailError.textContent
    ) {
      await Swal.fire({
        icon: 'success',
        title: 'Guardado',
        showConfirmButton: false,
        timer: 1000,
        width : 300
      })
      formProfile.submit()
    }
  })
})
