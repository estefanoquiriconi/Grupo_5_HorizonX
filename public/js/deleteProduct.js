document.addEventListener('DOMContentLoaded', () => {
  const formDelete = document.querySelector('#formDelete')

  formDelete.addEventListener('submit', async (event) => {
    event.preventDefault()
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#27374D',
      cancelButtonColor: '#27374D',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar',
    })

    if (result.isConfirmed) {
      await Swal.fire({
        title: 'Producto eliminado!',
        icon: 'success',
        confirmButtonColor: '#27374D',
      })
      formDelete.submit()
    }
  })
})
