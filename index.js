$("h1").click(() => {
    $("h1").css("color", "blue");
    $("h1").addClass("big-title margin-50")
})

$("h1").on("mouseover", () => {
    $("h1").css("color", "orange");
})


// before(), after(), prepend(), append() are jQuery 
// functions to add elements at runtime

// $("h1").before("<button>Hey</button>")
// results in a new button before the h1 tag

// $("h1").prepend("<button>Hey</button>")
// results in a new button in the h1 tag before the content