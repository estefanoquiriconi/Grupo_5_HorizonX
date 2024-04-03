window.addEventListener('DOMContentLoaded', () => {
      const formBuy = document.querySelector('#buyForm')

      formBuy.addEventListener('submit', async (e) => {
        e.preventDefault()
        await Swal.fire({
          icon: 'success',
          title: 'Comprado',
          showConfirmButton: true,
          timer: 1500,
          width : 300
        })
        formBuy.submit()
      })
    })