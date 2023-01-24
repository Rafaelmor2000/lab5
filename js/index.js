$(".agregar").click(agregarItem)
$( ".Lista" ).on( "click", ".checkButton", checkItem) 
$( ".Lista" ).on( "click", ".deleteButton", deleteItem) 

function agregarItem(e){
    e.preventDefault()
    let item = $("#newText").val()
    $(".Lista").prepend(`<li class = "item"><p>${item}<br><button class="checkButton" type="button">check</button><button class="deleteButton" type="button">delete</button></p></li>`)
}

function checkItem(e){
    e.preventDefault()
    $(this).parent().parent().toggleClass("check")
}

function deleteItem(){
    $(this).parent().parent().remove()
}