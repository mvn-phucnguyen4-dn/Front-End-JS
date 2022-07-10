$('#get-list-user').click(async () => {
    console.log('dfhdah')
    $.ajax({
        url: 'https://reqres.in/api/users',
        type: 'GET',
        dataType: 'JSON',
        success: (response) => {
            const { data } = response;
            console.log(data)
            $('#list-user').html(data.map(user => `
            <div class="col">
                <div class="card">
                <img src="${user.avatar}" class="card-img-top" alt="Avatar">
                <div class="card-body">
                    <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                    <p class="card-text">${user.email}</p>
                </div>
                </div>
            </div>
            `).join(''));
        },
        error: (XMLHttpRequest, textStatus, errorThrown) => {
            $('#list-user').html(`
                <h4 class="text-danger text-center">Opp error</h4>
                <p class="text-info">${textStatus}</p>`)
        }
    })
})

$('#get-list-color').click(async () => {
    fetch('https://reqres.in/api/unknown')
    .then(response => response.json())
    .then(response => response.data)
    .then(data => $('#list-color').html(data.map(item => `
    <div class="col">
        <div class="card">
        <div class="p-3" style="background-color:${item.color};"
        <div class="card-body">
            <h5 class="card-title">Name: ${item.name}</h5>
            <p class="card-text">Year ${item.year}</p>
        </div>
        </div>
    </div>
    `)))
    .catch(error => $('#list-color').html(`
        <h4 class="text-danger text-center">Opp error</h4>
        <p class="text-info">${error}</p>
    `));
})
