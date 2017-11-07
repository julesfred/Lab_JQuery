$(document).ready(function () {

$(".available").mouseenter(function() {
    $(this).css("background-color", "rgba(238, 238, 238, 0.4)");
});
    
$(".available").mouseleave(function() { 
    $(this).css("background-color", "rgb(238, 238, 238)");
});

$("#1").on("click", function() {
    $(".none").css("display", "inline");
    $(".saveButton").on("click", function() {
        $(".none").css("display", "none");
        $("#1").css("background-color", "#ADAAAA");
        $("#1").removeClass("available").addClass("reserved") 
        $(".reserved").on("click", function() {
            $(".none").css("display", "none");
        }); 
    }); 
});

$("#2").on("click", function() {
    $(".none").css("display", "inline");
    $(".saveButton").on("click", function() {
        $(".none").css("display", "none");
        $("#2").css("background-color", "#ADAAAA");
        $("#2").removeClass("available").addClass("reserved") 
        $(".reserved").on("click", function() {
            $(".none").css("display", "none");
        }); 
    }); 
});

$("#3").on("click", function() {
    $(".none").css("display", "inline");
    $(".saveButton").on("click", function() {
        $(".none").css("display", "none");
        $("#3").css("background-color", "#ADAAAA");
        $("#3").removeClass("available").addClass("reserved")  
        $(".reserved").on("click", function() {
            $(".none").css("display", "none");
        });
    }); 
});

$("#4").on("click", function() {
    $(".none").css("display", "inline");
    $(".saveButton").on("click", function() {
        $(".none").css("display", "none");
        $("#4").css("background-color", "#ADAAAA");
        $("#4").removeClass("available").addClass("reserved")  
        $(".reserved").on("click", function() {
            $(".none").css("display", "none");
        });
    }); 
});

$("#5").on("click", function() {
    $(".none").css("display", "inline");
    $(".saveButton").on("click", function() {
        $(".none").css("display", "none");
        $("#5").css("background-color", "#ADAAAA");
        $("#5").removeClass("available").addClass("reserved")  
        $(".reserved").on("click", function() {
            $(".none").css("display", "none");
        });
    }); 
});

$("#6").on("click", function() {
    $(".none").css("display", "inline");
    $(".saveButton").on("click", function() {
        $(".none").css("display", "none");
        $("#6").css("background-color", "#ADAAAA");
        $("#6").removeClass("available").addClass("reserved")  
        $(".reserved").on("click", function() {
            $(".none").css("display", "none");
        });
    }); 
});

$("#7").on("click", function() {
    $(".none").css("display", "inline");
    $(".saveButton").on("click", function() {
        $(".none").css("display", "none");
        $("#7").css("background-color", "#ADAAAA");
        $("#7").removeClass("available").addClass("reserved")  
        $(".reserved").on("click", function() {
            $(".none").css("display", "none");
        });
    }); 
});

$("#8").on("click", function() {
    $(".none").css("display", "inline");
    $(".saveButton").on("click", function() {
        $(".none").css("display", "none");
        $("#8").css("background-color", "#ADAAAA");
        $("#8").removeClass("available").addClass("reserved")  
        $(".reserved").on("click", function() {
            $(".none").css("display", "none");
        });
    }); 
});

$("#9").on("click", function() {
    $(".none").css("display", "inline");
    $(".saveButton").on("click", function() {
        $(".none").css("display", "none");
        $("#9").css("background-color", "#ADAAAA");
        $("#9").removeClass("available").addClass("reserved");
        $(".reserved").on("click", function() {
            $(".none").css("display", "none");
        });
    }); 
});


$("i").on("click", function() {
    $(".none").css("display", "none");
});


});

