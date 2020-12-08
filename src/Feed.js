
import React from 'react';
import OngCard from './OngCard';
import './css/feed.css';


const Feed = () => {

    const [ongs, setOngs] = React.useState(null);

    React.useEffect(() => {
        fetch('./database/ongs.json')
        .then((response) => response.json())
         .then((json) => setOngs(json));
        }, []);

        let tamanhoJanela = window.innerWidth
        let nColunas = Math.floor(tamanhoJanela / 260)
        if(nColunas < 1) {nColunas = 1}
        let colunas = []
        let contador = 0
                    
        if(ongs){

            let valorInicial = ongs.length
            
            for (let index = 0; index < nColunas; index++) {
            colunas[index] = []
        }
        
        for (let index = 0; index < valorInicial; index++) {
            if (contador > nColunas -1) {contador = 0}
            colunas[contador].push(ongs.shift())
            contador = contador + 1
        }
    } 

    return (
        <div id="feed">
            {colunas && (
                
               colunas.map((coluna)=> (
               <div>
                   a 
                {
                    coluna.map((ong)=>(
                        <div>{console.table(ong)}</div>
                    ))
                }
              </div>
               ))
            )}
        </div>
        
    )
}

export default Feed
