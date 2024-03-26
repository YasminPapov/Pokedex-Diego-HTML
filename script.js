
const pokemons = []



function carregarpokemons(){

    const pokemon1 = {

        id: 1,
        nome: "Bulbassauro",
        imagem : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9883388b-e3a4-4a5a-8953-fc1919dce451/dfr6fao-8103184d-b673-4593-a4ed-124abeac82f6.png/v1/fill/w_1280,h_1235/shiny_bulbasaur_dream_world___global_link_by_hf978rh7834hru4r43_dfr6fao-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIzNSIsInBhdGgiOiJcL2ZcLzk4ODMzODhiLWUzYTQtNGE1YS04OTUzLWZjMTkxOWRjZTQ1MVwvZGZyNmZhby04MTAzMTg0ZC1iNjczLTQ1OTMtYTRlZC0xMjRhYmVhYzgyZjYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.kCbVFDBC8LGPtt4Dvp638BUlwsde6-FERBuwWe2DrPo"

    }

    pokemons.push(pokemon1)



    const pokemon2 = {

        id: 2,
        nome: "Charmander",
        imagem : "https://www.pngkit.com/png/detail/10-109344_charmander-png-hd-image-transparent-stock-charmander-pokemon.png"

    }

    pokemons.push(pokemon2)

    const pokemon3 = {

        id: 3,
        nome: "Pikachu",
        imagem : "https://c3.klipartz.com/pngpicture/17/383/sticker-png-pokemon-pikachu-illustration.png"
    }

    pokemons.push(pokemon3)

    const pokemon4 = {

        id: 4,
        nome: "Raichu",
        imagem : "https://www.pngplay.com/wp-content/uploads/11/Raichu-Pokemon-Background-PNG-Image.png"

    }

    pokemons.push(pokemon4)

    const pokemon5 = {

        id: 5,
         nome: "Jigglypuff",
         imagem: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a26e7419-10c3-4168-9a8e-c02cb0b7c711/da48ylv-53a0e438-8a47-4184-a0c5-659c59207710.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EyNmU3NDE5LTEwYzMtNDE2OC05YThlLWMwMmNiMGI3YzcxMVwvZGE0OHlsdi01M2EwZTQzOC04YTQ3LTQxODQtYTBjNS02NTljNTkyMDc3MTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qUdxPM61gtBZtDtsK0iG1dHPNDFfI9rXcS3t-t-a4sU"

    }

    pokemons.push(pokemon5)


    for(let index = 0 ; index < pokemons.length; index ++){

            const pokemon = pokemons[index]
            adicionarCardPokemon(pokemon)
    }
        
    }

    function adicionarCardPokemon(pokemon){

      const divElemento = document.getElementById("conteudo-pokemon");
  
      const cardElemento = document.createElement("div");
      cardElemento.classList.add("card");
  
      const imagemElemento = document.createElement("img");
      imagemElemento.setAttribute("src", pokemon.imagem);
  
      const nomeElemento = document.createElement("p");
      nomeElemento.textContent = pokemon.nome;
      nomeElemento.style.fontSize = "50px"; // Defina o tamanho da fonte aqui
  
      cardElemento.appendChild(imagemElemento);
      cardElemento.appendChild(nomeElemento);
      divElemento.appendChild(cardElemento);


    }