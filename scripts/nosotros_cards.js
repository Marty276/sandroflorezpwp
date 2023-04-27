var is_a_card_opened = false;
var card_opened;

const card_title_button_1 = document.getElementById("card_title_button_1");
const card_title_button_2 = document.getElementById("card_title_button_2");
const card_title_button_3 = document.getElementById("card_title_button_3");

document.addEventListener("click", click);

function click(e){
    if(e.target.id == "card_title_button_1" || e.target.id == "card_title_button_2" || e.target.id == "card_title_button_3"){
        function_card_clicked(e.target.id.replace("card_title_button_", ""));
    }
}
function function_card_clicked(card_clicked){
    if(is_a_card_opened == false){
        document.getElementById("card_content_" + card_clicked).style.height = "fit-content";
        document.getElementById("card_content_" + card_clicked).style.translate = "0 0%";
        document.getElementById("card_content_" + card_clicked).style.opacity = "1";
        document.getElementById("card_content_" + card_clicked).style.padding = "80px 0 80px 0";
        is_a_card_opened = true;
        card_opened = card_clicked;
    }else if(card_opened == card_clicked){
        document.getElementById("card_content_" + card_clicked).style.height = "0px";
        document.getElementById("card_content_" + card_clicked).style.translate = "0 -100%";
        document.getElementById("card_content_" + card_clicked).style.opacity = "0";
        document.getElementById("card_content_" + card_clicked).style.padding = "0";
        is_a_card_opened = false;
    }else{
        document.getElementById("card_content_" + card_opened).style.height = "0px";
        document.getElementById("card_content_" + card_opened).style.translate = "0 -100%";
        document.getElementById("card_content_" + card_opened).style.opacity = "0";
        document.getElementById("card_content_" + card_opened).style.padding = "0";
        
        document.getElementById("card_content_" + card_clicked).style.height = "fit-content";
        document.getElementById("card_content_" + card_clicked).style.translate = "0 0%";
        document.getElementById("card_content_" + card_clicked).style.opacity = "1";
        document.getElementById("card_content_" + card_clicked).style.padding = "80px 0 80px 0";
        is_a_card_opened = true;
        card_opened = card_clicked;
    }
}