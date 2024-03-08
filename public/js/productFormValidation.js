window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form')

  const name = document.querySelector('#name')
  const brand = document.querySelector('#brand')
  const color = document.querySelector('#color')
  const price = document.querySelector('#price')
  const category = document.querySelector('#category')
  const stockQuantity = document.querySelector('#stock_quantity')
  const description = document.querySelector('#description')
  const image = document.querySelector('#image')

  const nameError = document.querySelector('#nameError')
  const brandError = document.querySelector('#brandError')
  const colorError = document.querySelector('#colorError')
  const priceError = document.querySelector('#priceError')
  const categoryError = document.querySelector('#categoryError')
  const stockQuantityError = document.querySelector('#stockQuantityError')
  const descriptionError = document.querySelector('#descriptionError')
  const imageError = document.querySelector('#imageError')

  function validateName(name) {
    if (name.length < 1) {
      return 'Debes ingresar un nombre'
    } else if (name.length < 5) {
      return 'Debes ingresar al menos 5 caracteres'
    } else {
      return ''
    }
  }

  function validatePrice(price) {
    if (price.length < 1) {
      return 'Debes ingresar un precio'
    } else if (price <= 0) {
      return 'El precio debe ser mayor a 0'
    } else {
      return ''
    }
  }

  function validateStockQuantity(stockQuantity) {
    if (stockQuantity.length < 1) {
      return 'Debes ingresar el stock'
    } else if (stockQuantity <= 0) {
      return 'El stock debe ser mayor a 0'
    } else {
      return ''
    }
  }

  function validateDescription(description) {
    if (description.length < 1) {
      return 'Debes ingresar una descripción'
    } else if (description.length < 20) {
      return 'La descripción debe tener al menos 20 caracteres'
    } else {
      return ''
    }
  }

  function validateImages(files) {
    const acceptedExtensions = ['.jpg', '.jpeg', '.png']

    for (let i = 0; i < files.length; i++) {
      const fileExtension = '.' + files[i].name.split('.').pop().toLowerCase()
      if (!acceptedExtensions.includes(fileExtension)) {
        return 'Las extensiones permitidas son .jpg, .jpeg, .png'
      }
    }
    return ''
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    nameError.textContent = validateName(name.value)
    brand.value === ''
      ? (brandError.textContent = 'Debes seleccionar una marca')
      : (brandError.textContent = '')
    color.value === ''
      ? (colorError.innerText = 'Debes seleccionar un color')
      : (colorError.innerText = '')
    category.value === ''
      ? (categoryError.textContent = 'Debes seleccionar una categoría')
      : (categoryError.textContent = '')
    priceError.textContent = validatePrice(price.value)
    stockQuantityError.textContent = validateStockQuantity(stockQuantity.value)
    descriptionError.textContent = validateDescription(description.value)
    imageError.textContent = validateImages(image.files)

    if (
      !nameError.textContent &&
      !brandError.textContent &&
      !colorError.textContent &&
      !categoryError.textContent &&
      !priceError.textContent &&
      !stockQuantityError.textContent &&
      !descriptionError.textContent &&
      !imageError.textContent
    )
      form.submit()
  })
})
