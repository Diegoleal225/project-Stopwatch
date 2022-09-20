function cronometro() {
    function pageStatic() {
        const body = document.querySelector('body');
        function recebeEvento(event) {
            event.preventDefault();
        }
        body.addEventListener('submit', recebeEvento);
    }
    function formatTime(second) {
        const time = new Date(second * 1000);
        return time.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }
    const container2 = document.querySelector('.container2');
    const time = document.querySelector('.hora');
    const varClear = '00:00:00';
    let second = 0;
    let event = 0;
    document.addEventListener('click',function(event){
        const recEvento= event.target;
        if(recEvento.classList.contains('iniciar')){
            container2.style.color='black';
            clearInterval(event);
            timeUpdate();
        }else if(recEvento.classList.contains('pausar')){
            container2.style.color='red';
            timeStop();
        }else if(recEvento.classList.contains('limpar')){
            container2.style.color='black';
            timeStop();
            time.innerHTML=varClear;
            second=0;
        }
    })
    function timeUpdate() {
        event = setInterval(function () {
            second++;
            time.innerHTML = formatTime(second);
        }, 1000)
    }
    function timeStop() {
        setTimeout(function () {
            clearInterval(event);
        })
    }
    pageStatic();
}
cronometro();

