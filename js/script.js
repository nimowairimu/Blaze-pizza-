function Pizza(flavor ,toppings,size, quantity, price) {
  this.flavor = flavor;
  this.toppings = toppings;
  this.size = size;
  this.quantity = quantity;
  this.crust = crust;
  this.price = price;
}

var small=500;
var medium=750;
var large= 950;
var topping =100;
var crust =50;


$(document).ready(function() {
$("#order").click(
  function(){

    // Getting values from the form
    flavor=$('#flavor').val();
    toppings=$('#toppings').val();
    size=$('#size').val();
    crust=$('#crust').val();
    quantity=parseInt($('#quantity').val());

    // Getting the total amount
    if (size == "small" && toppings == ""|| crust ==""){
      var price = small * quantity;
    }
    else if (size == "small" && toppings == "Ham" || toppings == "Bacon" || crust =="Thin" || crust =="Thick" || crust=="Stuffed"){
      var price = small * quantity + topping + crust;
    }if(size == "medium" && toppings =="" || crust =="" ){
      var price = medium * quantity;
    }else if(size == "medium" && toppings == "Ham" || toppings == "Bacon" || crust =="Thin" || crust =="Thick" || crust=="Stuffed"){
      var price = medium * quantity + topping + crust;
    }if (size == "large" && toppings == "" || crust ==""){
      var price = large * quantity;
    }else if (size == "large" && toppings =="Ham" || toppings == "Bacon" || crust =="Thin" || crust =="Thick" || crust=="Stuffed") {
      var price= large * quantity + topping + crust;
    }

    var newPizza = new Pizza(flavor,toppings,size,quantity,price);
    var newRow = '<tr><th id="flav">' + newPizza.flavor + '</th><td id="tp">' + $("#toppings option:selected").text() +'</th><td id="cst">' + $("#crust option:selected").text() + " - " + newPizza.toppings + '</td><td id="sz">' + $("#size option:selected").text() + " - " + newPizza.size + '</td><td id="quantity">' + $("#quantity option:selected").text() + " - " + newPizza.quantity + '</td><td id="total">' + newPizza.price + '</td></tr>'
$("#pizza").append(newRow);




  }
);
$("#deliver").click(function(){
  prompt("Enter location for delivery");
$("#ok").click(function(){
    prompt("Your delivery will be made in the next 30 minutes.Thanks for choosing Blaze pizza");
});



});
