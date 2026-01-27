function openSection(id, el){
    document.querySelectorAll('.section')
        .forEach(s => s.classList.remove('active'));

    document.getElementById(id).classList.add('active');

    document.querySelectorAll('.sidebar li')
        .forEach(l => l.classList.remove('active'));

    el.classList.add('active');
}

function filterTable(tableId, colIndex){
    let input = document.getElementById("stdSearch");
    let filter = input.value.toUpperCase();
    let table = document.getElementById(tableId);
    let tr = table.getElementsByTagName("tr");

    for(let i=1;i<tr.length;i++){
        let td = tr[i].getElementsByTagName("td")[colIndex];
        if(td){
            tr[i].style.display =
                td.innerText.toUpperCase().includes(filter)
                    ? "" : "none";
        }
    }
}
