var data = [
    {
        name: "kashif" ,
        age: "20",
        contact: "123456789"
    },
    {
        name: "asif" ,
        age: "15",
        contact: "456123789"
    },
    {
        name: "khan" ,
        age: "19",
        contact: "452423789"
    }
]

var table_data = document.getElementById("data")

for(var i= 0; i<data.length; i++){
table_data.innerHTML =`
<td>${data[i].name}</td>
<td>${data[i].age}</td>
<td>${data[i].contact}</td>`
}