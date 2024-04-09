window.addEventListener('DOMContentLoaded', () => {
  const firstName = document.querySelector('#firstName')
  const lastName = document.querySelector('#lastName')
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')
  const image = document.querySelector('#image')
  const originalEmail = email.value
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

  function validateEmail(email, mailArray, fieldName) {
    let check = mailArray.includes(email)
    if (email === '') {
      return 'Debes ingresar un email'
    } else if (check && (email != originalEmail)) {
      return 'Este mail ya está en uso'
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


    if (
      !firstNameError.textContent &&
      !lastNameError.textContent &&
      !emailError.textContent &&
      !passwordError.textContent
    )
      formRegister.submit()
  })

  formProfile?.addEventListener('submit', async (event) => {
    event.preventDefault()
    let mailArray = []
    try {
      const mails = await fetch('../api/users/mails')
      const response = await mails.json()
      mailArray = response.data.mailArray
    } catch (e) {
      console.error(e)
      console.log('pase por error')
    }


    firstNameError.textContent = validateNames(firstName.value, 'nombre')
    lastNameError.textContent = validateNames(lastName.value, 'apellido')
    emailError.textContent = validateEmail(email.value, mailArray, 'mail')
    

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
