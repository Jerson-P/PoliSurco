function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario-inicio');
const buttonSubmit = document.querySelector('#click');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '+573053801745';

formulario.addEventListener('click', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre-inicio').value
        let programa = document.querySelector('#programa-con').value
        let email = document.querySelector('#email-inicio').value
        let mensajein = document.querySelector('#mensaje-inicio').value
        let celular = document.querySelector('#celular-inicio').value
        let mensaje = 'send?phone=' + telefono +
                        '&text=*_Formulario Easy App CODE_*%0A*¿Cual es tu nombre?*%0A' + nombre +
                        '%0A*¿Cuáles son tus apellidos?*%0A' + apellidos +
                        '%0A*¿Cuál es el programa de interes?*%0A' + programa +
                        '&text=*_Formulario Easy App CODE_*%0A*¿Cual es tu e-mail?*%0A' + email +
                        '&text=*_Formulario Easy App CODE_*%0A*¿Mesanje?*%0A' + mensajein +
                        '&text=*_Formulario Easy App CODE_*%0A*¿Cual es tu numero de celular?*%0A' + celular + ''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="material-icons right"><img src="../../../assets/img/wh.png" alt="Wh"></i>enviar'
        buttonSubmit.disabled = false
    }, 3000);
});