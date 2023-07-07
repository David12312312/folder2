let block = document.querySelectorAll('.Okroshka')
document.addEventListener('mousemove', function(e) {
    let dx = e.pageX - 341 / 2.5
    let dy = e.pageY - 322 / 2.5
    let angleX = 0
    let angleY = 0
    angleX = 20 * dx / 341 / 2
    angleY = 20 * dy / 322 / 2
    console.log(dx, dy, angleX, angleY)
    for(let i=0;i<4;i++)
    block[i].style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
})