$(function(){
    
    $("#addProduct").click(function(){
        let pNo = $("#input1").val();
        let price = $("#input2").val();
        let stock = $("#input3").val();
        

        // console.log(pNo);

    $('#container').each(function(){

        
        
        $(this).append(`<div  class="card">
        <div class="details">Product Details</div>
        <div class="info"><label>Product No:</label><span>${pNo}</span></div>
        <div class="info"><label>Price:</label><span>${price}</span></div>
        <div class="info"><label>Stock:</label><span>${stock}</span></div>
        <button id="close "class="close">X</button>

    </div>`);
    
    });

    })

    $(document).on('click','.close', function(){
    
        // console.log("Bhishmesh");
        $(this).parent().remove();
        
    });

    

    $("#scrollmenu").animate();

    $("#nxtslide").click(function(){
        $("#scrollmenu").scrollLeft(1200);
    })

    $("#prevslide").click(function(){
        $("#scrollmenu").scrollLeft(0);
    })


})