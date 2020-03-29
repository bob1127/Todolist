$(".txtb").on("keyup",function(e){
	if(e.keyCode == 13 && $("txtb").val() != ""){
		
		var task = $("<div class='task'></div>").text($(".txtb").val());
        var del = $("<i class='fa fa-trash'></i>").click(function(){
        	var p = $(this).parent();
        	p.fadeOut(function(){
        		p.remove();
        	});
        });
        var check = $("<i class='fa fa-check'></i>").click(function(){
        	var p = $(this).parent();
        	p.fadeOut(function(){
        		$('.comp').append(p);
        		p.fadeIn();
        	})
        });
        task.append(del,check);

		$(".notcomp").append(task);
		$(".txtb").val("")
	}
    
})