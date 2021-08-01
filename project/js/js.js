var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.a7medhussien.com/api/products');
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        var products = data.data.ProductCollection;

        for(var index = 0; index < products.length; index++) {
            var product = products[index];

            var divElement = document.createElement('div');
            divElement.classList.add("product");
            
            var pElement = document.createElement('p');
            var pText = document.createTextNode(product.Name);
            pElement.appendChild(pText);
        
            var spanElement = document.createElement('span');
            var spanText = document.createTextNode("$ "+ product.Price);
            spanElement.appendChild(spanText);

            var imgElement = document.createElement('img');
            imgElement.setAttribute('src', product.ProductPicUrl);

            divElement.appendChild(pElement);
            divElement.appendChild(imgElement);
            divElement.appendChild(spanElement);
            document.getElementById('app').appendChild(divElement);
        }
    }
}
xhr.send();
var forms = document.forms;
var contactForm = forms["contact"];

contactForm.addEventListener("submit", function (event) {
    
    event.preventDefault();
    var form=this;
    var rate=this.rate.value;
    var message = this.message.value;
   
    var xhr= new XMLHttpRequest();
    xhr.open('POST', 'https://api.a7medhussien.com/api/feedback');

    xhr.onreadystatechange= function () {
        if (this.readyState==4 && this.status==200) {
            console.log(JSON.parse(this.responseText));
            form.rate.value='';
            form.message.value='';

        }
    };

    var data = {
     "rate":rate,
      "message":message
    }

    xhr.setRequestHeader('Content-Type', 'Application/json');
    xhr.send(JSON.stringify(data));
   
});