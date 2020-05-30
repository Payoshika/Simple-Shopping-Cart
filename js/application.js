
var priceArray =[]

// total price calculater
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
  var finalPrice = priceArray.reduce(function(total, value){
    return total + value
  },0)
  $(".total-price h2:nth-child(2)").html(`$${finalPrice}`)
  priceArray =[]
}


// quantity change will reflect on sub total and total price
$(document).on('input',$(".test").children(".quantity").children("input").val(), function() {
    subTotalCreater();
    totalPriceFigure();
})

// delete function for existing items.
 var rowDelete = function(event){
   $(document).on("click", '.cancel', function(event){
     $(this).closest("tr").remove()
   })}
 //
 //   $(".test").children(".quantity").children("button").on("click", function(event){
 //     // $(event.target).parent().parent().remove()
 //     $(this).closest("tr").remove()
 //     subTotalCreater();
 //     totalPriceFigure();
 //   })
 // }

// creating new items
var newItemCreation = function(){
    $("tr:last() td.quantity").children(".create").on("click", function(){
    var newName = $("tr:last() td").first().children("input").val()
    var newUnitPrice = parseFloat($("tr:last() td.unit-price").children("input").val())
    var newQuantity = parseFloat($("tr:last() td.quantity input").val())
    var newInsert =$(`
      <tr>
        <td>${newName}</td>
        <td class="unit-price">${newUnitPrice}</td>
        <td class="quantity">
          <label for="">QTY</label>
          <input type="text" value=${newQuantity}>
          <button class="cancel">Cancel</button>
        </td>
      </tr>`)
      console.log(newInsert);
    newInsert.insertBefore($("tr").last())
    })
}
 $(document).ready(function() {
   subTotalCreater();
   totalPriceFigure();
   rowDelete();
   newItemCreation();
 });


// new item後の承継と合計価格がずれている。document.onの使い方のはず
