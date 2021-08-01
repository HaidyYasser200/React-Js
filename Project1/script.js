var Myform = document.forms['Feedback'];
Myform.addEventListener("submit", function (event) {
    event.preventDefault();
    var form=this;
    var rate=this.rate.value;
    var message = this.message.value;
    console.log(rate);
    console.log(message);
    

    var xhr= new XMLHttpRequest();
    xhr.open('POST', 'https://api.a7medhussien.com/api/feedback');

    xhr.onreadystatechange= function () {
        if (this.readyState==4 && this.status==200) {
            console.log(JSON.parse(this.responseText));
            form.rate.value='';
            form.message.value='';


            alert('Feedback submitted');

        }
    };

    var data = {
     "rate":rate,
      "message":message
    }

    xhr.setRequestHeader('Content-Type', 'Application/json');
    xhr.send(JSON.stringify(data));
   
});







var xhr = new XMLHttpRequest();



xhr.open('GET', 'https://api.a7medhussien.com/api/products');


xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        var products = data.data.ProductCollection;
        var container =document.createElement('div');
        container.classList.add("container");
        for(var index = 0; index < products.length; index++) {
            var product = products[index];

            /**
                Name: "Notebook Basic 15"
                Price: 956
                ProductPicUrl: "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg"
            */
          

            var divElement = document.createElement('div');
            divElement.classList.add("products");
            // P
            var pElement = document.createElement('p');
            var pText = document.createTextNode(product.Name);
            pElement.appendChild(pText);
            pElement.classList.add("text");
            // span
            var spanElement = document.createElement('span');
            var spanText = document.createTextNode(`${product.Price} €`);
            spanElement.appendChild(spanText);
            spanElement.classList.add("price");
            // img
            var imgElement = document.createElement('img');
            imgElement.setAttribute('src', product.ProductPicUrl);
            imgElement.classList.add("size");
            
           
            divElement.appendChild(pElement);
            divElement.appendChild(imgElement);
            divElement.appendChild(spanElement);
            container.appendChild(divElement);

            
        }
        document.body.appendChild(container);}
}


xhr.send();


console.log(xhr);