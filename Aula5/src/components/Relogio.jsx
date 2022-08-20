import { useState } from 'react'  // ir trocando na tela a cada segundo por meio da importação de um componente próprio do react

function Relogio(){
    let time = new Date().toLocaleTimeString()
    const [horario, setHorario] = useState(time) // setHorario é a minha função atualizadora
    
    function updateTime () {
        time = new Date().toLocaleTimeString() // instanciando horário em forma de string
        setHorario(time)
    }

    //esta é a regra e é uma função de callback
    setInterval(updateTime, 1000) // a cada um segundo 

    return (
        <h1>{horario}</h1>
    )
}

export default Relogio