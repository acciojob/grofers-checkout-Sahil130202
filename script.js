const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices = Document.querySelectorAll(".price")
	let sum = 0

	prices.forEach(price=> {
		sum+= Number(price.textContent)
	})
	let row = document.createElement("tr");
    let cell = document.createElement("td");

	cell.textContent = sum;

    row.appendChild(cell);

    document.querySelector("table").appendChild(row);





	
};

getSumBtn.addEventListener("click", getSum);

