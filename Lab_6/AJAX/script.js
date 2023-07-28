function getUsers(){
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.send('');
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status = 200){
                result = JSON.parse(xhr.response);
                result.forEach(entry => {
                    createRow(entry);
                });
            }
        }
    }
}


function createRow(entry){
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${entry['id']}</td>
                    <td>${entry['name']}</td>
                    <td>${entry['username']}</td>
                    <td>${entry['email']}</td>
                    <td>${entry['address']['street']}</td>
                    <td>${entry['address']['suite']}</td>
                    <td>${entry['address']['city']}</td>
                    <td>${entry['address']['zipcode']}</td>
                    <td>${entry['address']['geo']['lat']}</td>
                    <td>${entry['address']['geo']['lng']}</td>
                    <td>${entry['phone']}</td>
                    <td>${entry['website']}</td>
                    <td>${entry['company']['name']}</td>
                    <td>${entry['company']['catchPhrase']}</td>
                    <td>${entry['company']['bs']}</td>
    `;
    document.getElementsByTagName('tbody')[0].appendChild(tr);
}
