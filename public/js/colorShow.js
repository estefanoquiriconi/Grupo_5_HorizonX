window.addEventListener('DOMContentLoaded', () => {
      const selectColor = document.querySelector('#color')
      const colorShow = document.querySelector('#colorShow')

      colorShow.style.backgroundColor = selectColor.selectedOptions[0].id

      selectColor.addEventListener('change', (e) => {
        let textColor = e.target.selectedOptions[0].firstChild.data
        let ee = e.target.selectedOptions[0].id
        colorShow.style.backgroundColor = ee
        
        document.activeElement = null
      })
    })