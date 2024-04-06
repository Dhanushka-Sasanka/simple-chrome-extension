


async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const record = await res.json();

    var table = document.getElementById("myTable");

    for (const i of record) {
        console.log(i)
        // document.getElementById("id").innerHTML = i.id;
        // document.getElementById("name").innerHTML = i.name;
        // document.getElementById("username").innerHTML = i.username;
        // document.getElementById("email").innerHTML = i.email;


        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = i.id;
        cell2.innerHTML = i.name;
        cell3.innerHTML = i.username;
        cell4.innerHTML = i.email;
    }

}


fetchData();