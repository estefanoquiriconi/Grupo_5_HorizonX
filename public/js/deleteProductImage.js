document.addEventListener('DOMContentLoaded', function () {
  const deleteButtons = document.querySelectorAll('.delete-icon')

  deleteButtons.forEach((button) => {
    button.addEventListener('click', function (event) {
      event.preventDefault()
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción no se puede deshacer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#27374D',
        cancelButtonColor: '#27374D',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          const imageId = button.dataset.id
          eliminarImagen(imageId)
          removeButton()
          Swal.fire({
            title: 'Imagen eliminada!',
            icon: 'success',
            confirmButtonColor: '#27374D',
          })
        }
      })
    })
  })
})

async function eliminarImagen(id) {
  try {
    const imageContainer = document.querySelector(
      `.image-container[id="${id}"]`
    )
    imageContainer.remove()
    await fetch(`/products/delete/image/${id}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.error(error)
  }
}

function removeButton() {
  const deleteButton = document.querySelectorAll(`.delete-icon`)
  if (deleteButton.length <= 1) {
    deleteButton[0].remove()
  }
}
