const validateForm = () => {
    let name = document.getElementById('name').value;
    let description = document.getElementById('desc').value;
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('qty').value;

    if (name == '') {
        alert('Item Name is Required..!');
        return false;
    }
    if (description == '') {
        alert('Item Description is Required..!');
        return false;
    }
    if (price == '') {
        alert('Item Price is Required..!');
        return false;
    }
    if (quantity == '') {
        alert('Item Quantity is Required..!');
        return false;
    }
    return true;
}

// Function to Show Items

const showItems = (response) => {
    try {
        let html = "";
        for (let i = 0; i < response.data.length; i++){
            html += "<tr>";
            html += "<td>" + response.data[i].id + "</td>";
            html += "<td>" + response.data[i].name + "</td>";
            html += "<td>" + response.data[i].description + "</td>";
            html += "<td>" + response.data[i].price + "</td>";
            html += "<td>" + response.data[i].quantity + "</td>";
            html +=
              '<td><button class="btn btn-primary" onclick="buyOne(' +
              response.data[i].id +
              ')">Buy 1</button><button class="btn btn-primary ml-3" onclick="buyTwo(' +
              response.data[i].id +
              ')">Buy 2</button><button class="btn btn-primary ml-3" onclick="buyThree(' +
              response.data[i].id +
                ')">Buy 3</button></td>';
            html += "</tr>";
        }
        document.querySelector('#crudTable tbody').innerHTML = html;
    } catch (error) {
        console.log(error);
    }
}

// Function to Get Items

const getItems = async () => {
    try {
        let response = await axios.get('http://localhost:8000/seller');
        showItems(response);
    } catch (error) {
        console.log(error);
    }
}

// On Load Get Items

document.onload = getItems();

// Function to Add Items

const addItem = async () => {
    try {
        if (validateForm() == true) {
            let name = document.getElementById("name").value;
            let description = document.getElementById("desc").value;
            let price = document.getElementById("price").value;
            let quantity = document.getElementById("qty").value;
            let response = await axios.post("http://localhost:8000/seller", {
                name: name,
                description: description,
                price: price,
                quantity: quantity,
            });
            document.getElementById('name').value = "";
            document.getElementById('desc').value = "";
            document.getElementById('price').value = "";
            document.getElementById('qty').value = "";
            getItems();
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to Buy Items

const buyOne = async (id) => {
    try {
        let response1 = await axios.get(`http://localhost:8000/seller/${id}`);
        let response = await axios.put(`http://localhost:8000/seller/${id}`, {
            quantity: response1.data.quantity - 1,
        });
        getItems();
    } catch (error) {
        console.log(error);
    }
}

const buyTwo = async (id) => {
    try {
        let response1 = await axios.get(`http://localhost:8000/seller/${id}`);
        let response = await axios.put(`http://localhost:8000/seller/${id}`, {
            quantity: response1.data.quantity - 2,
        });
        getItems();
    } catch (error) {
        console.log(error);
    }
}

const buyThree = async (id) => {
    try {
        let response1 = await axios.get(`http://localhost:8000/seller/${id}`);
        let response = await axios.put(`http://localhost:8000/seller/${id}`, {
            quantity: response1.data.quantity - 3,
        });
        getItems();
    } catch (error) {
        console.log(error);
    }
}