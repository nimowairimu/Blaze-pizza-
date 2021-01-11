 $(document).ready(function() {
  function Pizza(flavor ,toppings,size, quantity, price) {
    this.flavor = flavor;
    this.toppings = toppings;
    this.size = size;
    this.quantity = quantity;
    this.price = price;
  }

  var small=500;
  var medium=800;
  var large= 1200;
  var topping =50;


  $(document).ready(function() {
  $("#order").click(
    function(){

      // Getting values from the form
      flavor=$('#flavor').val();
      toppings=$('#toppings').val();
      size=$('#size').val();
      quantity=parseInt($('#quantity').val());

      // Getting the total amount
      if (size == "small" && toppings == ""){
        var price = small * quantity;
      }
      else if (size == "small" && toppings == "Bacon" || toppings == "Ham" || toppings == "Mushroom"){
        var price = small * quantity + topping;
      }if(size == "medium" && toppings =="" ){
        var price = medium * quantity;
      }else if(size == "medium" && toppings == "Bacon" || toppings == "Ham" || toppings == "Mushroom"){
        var price = medium * quantity + topping;
      }if (size == "large" && toppings == ""){
        var price = large * quantity;
      }else if (size == "large" && toppings =="Bacon" || toppings == "Ham" || toppings == "Mushroom") {
        var price= large * quantity + topping;
      }

      var newPizza = new Pizza(flavor,toppings,size,quantity,price);
      var newRow = '<tr><th id="flav">' + newPizza.flavor + '</th><td id="tp">' + $("#toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="sz">' + $("#size option:selected").text() + " - " + newPizza.size + '</td><td id="nmb">' + $("#quantity option:selected").text() + " - " + newPizza.quantity + '</td><td id="total">' + newPizza.price + '</td></tr>'
  $("#pizza").append(newRow);




    }
  );
  $("#deliver").click(function(){
    prompt("Enter location for delivery");
  });



  })
