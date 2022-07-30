$("h1").hover(() => {
    $("h1").css("color", "blue");
    $("h1").addClass("big-title margin-50")
})

$("h1").on("mouseover", () => {
    $("h1").css("color", "orange");
})

// setTimeout(() => {
//     $("h1").before("<button>Hey</button>")
//     $("h1").after("<button>Bae</button>")
//     $("h1").prepend("<button>Pre</button>")
//     $("h1").append("<button>App</button>")
// }, 3000);

$("button").on("click", (e) => {
    // $("h1").fadeToggle();
    // $("h1").slideToggle();
    // $("h1").animate({opacity: 0.5, width: "100%" })
    $("h1").slideUp().slideDown().fadeToggle().fadeToggle().animate({opacity: 0.5})
    console.log
});

// $(".lb").on("click", (e) => {
//     $("h1").slideToggle();
//     console.log(e);
// })

// before(), after(), prepend(), append() are jQuery 
// functions to add elements at runtime

// $("h1").before("<button>Hey</button>")
// results in a new button before the h1 tag

// $("h1").prepend("<button>Hey</button>")
// results in a new button in the h1 tag before the content