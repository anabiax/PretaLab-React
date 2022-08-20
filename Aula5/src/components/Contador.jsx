import { useState } from 'react' // importando o hook que lida com estado


function Contador(){  // vai retornar um html
    const [contador, setContador] = useState(0) // [variável, função]
    // variável está guardando o valor que será referenciada dentro da div
  
    // usando o hook para criar e atualizar um estado
    function somar(){
      setContador (contador+1) // usando a atualização do estado qnd "onClick" for chamado
    }
  
    function diminuir(){
      setContador(contador-1) // usando a atualização do estado qnd "onClick" for chamado
    }

    return (
        <div className="card">
        <button onClick={somar}>
            Soma 1
        </button>
        <h1>{contador}</h1>
        <button onClick={diminuir}>
            Diminui 1
        </button> 
      </div>
    )
}

export default Contador // nome da minha função