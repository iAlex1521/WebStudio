function app() {
    const buttons = document.querySelectorAll('.filters-button')
    const filterBox = document.querySelectorAll('.box')
        
    buttons.forEach((elem) => {
        elem.addEventListener('click', () => {
            const targetId = elem.parentElement.dataset.f
            console.log(targetId)

            switch (targetId) {
                case 'all':
                    filterBox.forEach(item => {
                        if (item.classList.contains('box')) {
                            item.style.display = 'block'
                        } 
                    })
                    break
                case 'web-site':
                    filterBox.forEach(item => {
                        if (item.classList.contains('web-site')) {
                            item.style.display = 'block'
                        } else {
                            item.style.display = 'none'
                        }
                    })
                    break
                case 'design':
                    filterBox.forEach(item => {
                        if (item.classList.contains('design')) {
                            item.style.display = 'block'
                        } else {
                            item.style.display = 'none'
                        }
                    })
                    break
                case 'application':
                    filterBox.forEach(item => {
                        if (item.classList.contains('application')) {
                            item.style.display = 'block'
                        } else {
                            item.style.display = 'none'
                        }
                    })
                    break
                case 'marketing':
                    filterBox.forEach(item => {
                        if (item.classList.contains('marketing')) {
                            item.style.display = 'block'
                        } else {
                            item.style.display = 'none'
                        }
                    })
                    break
            }
        })
    })
}
app()