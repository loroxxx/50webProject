const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    console.info('触发下拉事件')
    const triggerBottom = window.innerHeight / 5 * 4
    console.log('triggerBottom:%s',triggerBottom)
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        console.log('boxTop:%s',boxTop)
        if(boxTop < triggerBottom) {
            console.log('展示')
            box.classList.add('show')
        } else {
            console.log('不展示')
            box.classList.remove('show')
        }
    })
}