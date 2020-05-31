
var priceArray =[]

// subTotal price calculater
var subTotalCreater = function(){
  $(".test").each(function(index,value){
    var quantity = $(value).children(".quantity").children("input").val()
    var unitPrice = parseFloat($(value).children(".unit-price").html())
    var subTotal = quantity * unitPrice
    priceArray.push(subTotal)
    $(value).children(".sub-total").html(`$${subTotal}`)
    })
}

// total price calculater
var totalPriceFigure = function(){
  $(".calculater").on("click", function(){
    subTotalCreater();
    var finalPrice = priceArray.reduce(function(total, value){
      return total + value
    },0)
    $(".total-price h2:nth-child(2)").html(`$${finalPrice}`)
    console.log(finalPrice);
    priceArray =[]
  })
}

// quantity change will reflect on sub total and total price
$(document).on('input', ".input-value", function() {
    subTotalCreater();
    totalPriceFigure();
})

// delete function for existing items.
 var rowDelete = function(event){
   $(document).on("click", '.cancel', function(event){
     $(this).closest("tr").remove()
     subTotalCreater();
     totalPriceFigure();
   })}

// creating new items
var newItemCreation = function(){

    $(document).on("click", ".create", function(){
    var newName = $("tr:last() td").first().children("input").val()
    var newUnitPrice = parseFloat($("tr:last() td.unit-price").children("input").val())
    var newQuantity = parseFloat($("tr:last() td.quantity input").val())
    var newInsert =$(`
      <tr class="test">
        <td>${newName}</td>
        <td class="unit-price">${newUnitPrice}</td>
        <td class="quantity">
          <label for="">QTY</label>
          <input class="input-value" type="text" value=${newQuantity}>
          <button class="cancel">Cancel</button>
        </td>
        <td class="sub-total"></td>
      </tr>`)
    newInsert.insertBefore($("tr").last())
    subTotalCreater();
    totalPriceFigure();
    $("tr:last() td").first().children("input").val("")
    $("tr:last() td.unit-price").children("input").val("")
    $("tr:last() td.quantity input").val("")
  });
}

 $(document).ready(function() {
   subTotalCreater();
   totalPriceFigure();
   rowDelete();
   newItemCreation();
 });
