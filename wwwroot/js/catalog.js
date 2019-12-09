

function getCatalog(){
    // create AJAX req to getcatalog
    // print the response on the console
    
    $.ajax({
        url: "/catalog/getCatalog",
        type: 'GET',
        success : function(res){
            console.log("succeed", res);
            for(var i=0; i< res.length; i++){
                var item = res[i];
                displayCar(item);
            }
    },
    error: function (error) {
        console.log("Error", error);   
     }
    });

}

function displayCar(car){
        // get the root element (where you want to display it?)
        var container = $("#catalogContainer");
        // creatre tge templatre for the car
        var template = 

`<div>
    

    <div class="card bg-dark text-white">
    
    <img src="${car.imageUrl}"  alt="Responsive image" class="img-fluid">
    <div class="card-img-overlay">
    

  </div>
</div>

<h5 class="card-title">${car.year} ${car.make} ${car.model}</h5>
    <p class="card-text">$${car.dailyPrice} Per Day, Passenger Capacity: ${car.passengerCapacity}, ${car.hp} Hp, ${car.milage} Mpg, ${car.cyls} Cylinders</p>
    <p class="card-text">Vehicle Details: ${car.description}</p>
    <button type="button" class="btn btn-dark btn-lg btn-block">Rent ${car.make} </button>
    <hr>
</div>`
        
        

        // add the template to the root element
        container.append(template);

}

function init(){
    console.log("Catalog page");

    getCatalog();
}


window.onload = init;

