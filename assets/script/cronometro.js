(()=>{
    (()=>{
        const body=document.querySelector("body");
        const recEvent=(event)=>{
            event.preventDefault();
        }
        body.addEventListener("submit",recEvent);
    })();
    function Timer(){
        return{
            display:document.querySelector(".hora"),
            second:0,
            event:0,
            configTimer(second){
                const timer= new Date(second*1000);
                return timer.toLocaleTimeString('pt-br',{
                    hour12:false,
                    timeZone:'UTC'
                })
            },
            get clickEvent(){
                document.addEventListener("click",event=>{
                    const recEvent=event.target;
                    if(recEvent.classList.contains("iniciar")){
                        clearInterval(this.event);
                        this.setTime;
                    }else if(recEvent.classList.contains("pausar")){
                        this.pauseTime;
                    }else if(recEvent.classList.contains("limpar")){
                        this.clearTime;
                    }
                })
            },
            get setTime(){
                this.display.style.color="black";
                this.event=setInterval(()=>{
                    this.second++;
                    this.display.innerHTML=this.configTimer(this.second);
               },1000)
            },
            get pauseTime(){
                setTimeout(()=>clearInterval(this.event));
                this.display.style.color="red";
            },
            get clearTime(){
                this.display.style.color="black";
                clearInterval(this.event);
                this.second=0;
                this.display.innerHTML="00:00:00";
            }
        }
    }
    const callTimer=  Timer();
    callTimer.clickEvent;
})();




