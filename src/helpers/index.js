//export functions here for helpers


export default function changeBodyBackground (bgImage) {
  if (bgImage) {
    document.body.style.backgroundImage = `url(${bgImage})`
    document.body.style.backgroundPosition = 'center bottom'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = '100% auto'
  }
  else { 
    document.body.style.backgroundImage = `none`
  }
}
