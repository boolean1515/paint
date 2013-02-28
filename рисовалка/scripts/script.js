$(document).ready(go);

function go() {
    $("#tools1").draggable();
    $("#tools2").draggable();
    $("#tools3").draggable();
    $("#tools4").draggable();
}
function start() {
   
    //добавить меню выбора 
    var input = $('<div>', {
        id: 'size'
    });

    // Помещаем в слой "content"
    $('#centerLayer').append(input);

    $("#centerLayer").hide();
    $("#TB_overlay").hide();
}
