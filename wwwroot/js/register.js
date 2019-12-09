
function register(){
    console.log("register car");

// get vlues from fields
var price = $("#txtPrice").val();
var make = $("#txtMake").val();
var model = $("#txtModel").val();
var year = $("#txtYear").val();
var passengers = $("#txtPassengers").val();
var milage = $("#txtMilage").val();
var imageUrl = $("#txtImageUrl").val();
var hp = $("#txtHp").val();
var cyls = $("#txtCyls").val();
var desc = $("#txtDescription").val();


var errorOcurred = false;
// data validation
if(!year || isNaN(year)){
    // error with year
    errorOcurred = true;
    $("#txtYear").addClass("error");
}
else{
    // parse year str into int
    // year = year * 1
    year = parseInt(year);
    $("#txtYear").removeClass("error");
}

if (!price || isNaN(price)){
    // error with price
    errorOcurred = true;
    $("#txtPrice").addClass("error");
}
else{
    // parse price str into float
    price = parseFloat(price);
    $("#txtPrice").removeClass("error");
}

if (errorOcurred){

    // show an alert to tell the user to fix error

    (confirm ("Please enter Daily Price and Year") == true)
    // setTimeout(function(){
    //     $(confirm).addClass("hide");
    // }, 3000);
    
    // return;     
}
else{
            // Auto rental saved
            (confirm ("Auto rental saved") == true)
    
    
}






// create an object


var car = {
    dailyPrice : price, 
    make  : make,
    model : model,
    year : year,
    passengerCapacity : passengers,
    milage : milage,
    imageUrl : imageUrl,
    hp : hp,
    cyls : cyls,
    description : desc

};

console.log(car);

// send the object on an Ajax req to the back-End
$.ajax({
    url: "/catalog/saveCar",
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(car),
    success : function(res){
        console.log("succeed", res);

        // alert that car has been saved
        $("savealert").removeClass("hide");

        // setTimeout(funtion (){
        //     $("#savedAlert").addClass("hide");
        //     },3000);
        

    }
});

// clear form
// error. function(error){
//     console.log("Error", error);
// }
//success notifications
}
function init(){
    console.log("register page");

// hook events
$("#btnSave").click(register);
    
}


window.onload = init;