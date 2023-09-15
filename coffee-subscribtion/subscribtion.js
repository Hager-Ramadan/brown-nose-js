const imgSub = document.querySelector('.img-sub')
const hoverImg = document.querySelector('.sub-hover-img')

hoverImg.addEventListener('mousemove', onZoom)
hoverImg.addEventListener('mouseover', onZoom)
hoverImg.addEventListener('mouseleave', offZoom)

function onZoom(e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    imgSub.style.transformOrigin = `${x}px ${y}px`;
    imgSub.style.transform = 'scale(2)'

}
function offZoom(e) {
    imgSub.style.transformOrigin = `center center`;
    imgSub.style.transform = 'scale(1)'


}
