import { useState, useEffect } from 'react'

//PROBLEMA: FILTRAR UMA LISTA DE POKEMONS

// criar um componente por meio de uma função js que retornará um html
function Busca (){

    const[pokemons, setPokemons] = useState([]) // preencher o array com os dados da API = guarda as informações
    const[busca, setBusca] = useState('') // guarda o valor digitado pelo usuário
    const[pokemonsFiltrados, setPokemonsFiltrados] = useState ([]) // é o resultado da lógica "existe alguma info igual à lista pré-estabelecida?"
        // nome da nova lista


    // consumir de API
    // arrow function diz "o quê farei?"
    // array "como?"
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(data => setPokemons(data.results)) // esses dados vão pra variável pokemons
    }, [])

    // fazendo o filtro acontecer qnd quero que o efeito aconteça, ou seja, qnd pokemons e busca existir
    useEffect(() => {
        setPokemonsFiltrados(pokemons.filter(pokemon =>{
            return pokemon.name.includes(busca) // verificando se o que foi digitado ta batendo com o nome do pokemon
        }))
    },[busca, pokemons])

    function capturaBusca(event) { // aqui dentro está o valor a ser digitado
        setBusca(event.target.value)
    }

    return(
        <>
            <input onChange={capturaBusca} placeholder="digite um pokemon"/>
                <div className="cards">
                    {pokemonsFiltrados.map(pokemon => { // pokemon é o item do array
                        return (
                            <h2 key={pokemon.name}>{pokemon.name}</h2>
                        )
                    })
                    }
                </div>
        </>
    )
}

export default Busca