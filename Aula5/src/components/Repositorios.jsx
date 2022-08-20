import { useState, useEffect } from 'react'

// trazer os nomes dos meus repositórios no github
function Repositorios(){
    const [repos, setRepos] = useState([]) //setRepos: função atualizadora
    useEffect(() => {  // o que quero fazer
        const getData = async() => { // função assíncrona do js
            const response = await fetch('https://api.github.com/users/anabiax/repos')// lidar com a promessa
            const data = await response.json()

            setRepos(data) // vai pegar todos os dados da API e guardar na variável repos
        }
        getData()
          //pegaDados

    }, []) // no array digo que quero consumir uma API pública quando minha tela carregar
            // e guardar essas infos dentro de um estado

    return (
        <>
            <h2>Nomes dos meus repos</h2>
            {
                repos.map(repo => {
                    return (
                        <p>{repo.name}</p> // quero passar só o nome
                    )
                })
            }

        </>
    )
}


export default Repositorios