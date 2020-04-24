



function render(data){
    var html ="<div class='comentBox'><div class='leftpanelImg'><img src='masked-man.png' /></div><div class='rightpanel'><span>"+data.name+"</span><div class=date'>"+data.date+"</div><p>"+data.body+"</p><div class='></div></div>";
    $('#container').append(html);

}

$(document).ready(function(){

    var coment = [
        {"name": "penulis", "date": "21 Apr,2020","body": "box comment ini masih pada tahapan pengembangan, jika ada masukan saran atau pertanyaan langsung hubungi email ini : adyprasetiyo314@gmail.com"}
        
        ];

    



        
        for(var i=0;i<coment.length;i++){
            render(coment[i]);
        }
        
        $('#addComent').click(function(){
            var addObj = {
                
                "name": $('#name').val(),
                "date": $('#date').val(),
                "body": $('#bodyText').val(),
            };
            console.log(addObj);
            coment.push(addObj);
            render(addObj);
          
            $('#name').val('');
            $('#date').val('dd/mm/yyyy');
            $('#bodyText').val('');
           
        });

});



