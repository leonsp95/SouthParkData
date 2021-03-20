parPreencher();

function parPreencher(){
    Promise.all ([
        fetch('https://spapi-heroku.herokuapp.com/spapis')
        .then (res => res.json())

    ])
    .then (data => {
        console.log(data)
        document.getElementById('episodes').innerHTML = data[0][0].episodes;
        document.getElementById('seasons').innerHTML = data[0][0].seasons;
        document.getElementById('kennydeaths').innerHTML = data[0][0].kenny_deaths;
        document.getElementById('lastupdt').innerHTML = data[0][0].updatedAt;
    })
    .catch (err => console.log('Erro ', err))
}











