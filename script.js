let table1=document.getElementById("sampleTable");
function insert_Row() {
    //Write your code here
	// backside insert
	
	// let tr=document.createElement("tr");
	// let td1=document.createElement("td");
	// let td2=document.createElement("td");
	// td1.innerText="New Cell1";
	// td2.innerText="New Cell2";
	// tr.append(td1,td2);
	// table1.appendChild(tr);
  let newRow=table1.insertRow(0);
	let td1=newRow.insertCell(0);
	let td2=newRow.insertCell(1);
	td1.innerText="New Cell1";
	td2.innerText="New Cell2";
}
