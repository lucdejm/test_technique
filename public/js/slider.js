var $GROUP = $(".slide-group");
var $SLIDES = $(".slide");
let buttonArray = [];
let currentIndex = 0;
let timeout = 0;
const delay = 4000;

console.log(timeout);
console.log(delay);
console.log($GROUP);
console.log($SLIDES);

/* ---- function move to other slide ---- */
function move (newIndex) {
    let animateLeft = 0;
    let slideLeft= 0;

    advance (); // quand une slide est appelée, appeler la fonction advance
    
    console.log(slideLeft);
    console.log(animateLeft);  

    // si la slide est en animation ou déjà en display, ne rien faire
    if($GROUP.is(":animated") || currentIndex === newIndex) {
        return
    }

    buttonArray[currentIndex].removeClass("active"); // retirer la classe actif à l'ancienne slide
    buttonArray[newIndex].addClass("active"); // ajouter la class actif à la nouvelle slide

    if(newIndex > currentIndex) { // déterminer la position de la slide dans l'array pour définir le type d'animation
        slideLeft = "100%";  // positionner la nouvelle slide à la droite
        animateLeft = "-100%"; // animer le groupe vers la gauche
    } else {  // l'inverse de l'annimation
        slideLeft = "-100%";
        animateLeft = "100%";
    }

    console.log(slideLeft);
    console.log(animateLeft);   
    console.log("New index :", newIndex)
    console.log("slides : ", $SLIDES);

    // positionner la slide ciblée en fonction de la position dans l'array
    $SLIDES.eq(newIndex).css( {left: slideLeft, display: "block"} );
    $GROUP.animate({left: animateLeft}, function() {
        $SLIDES.eq(currentIndex).css( {display: "none"} );
        $SLIDES.eq(newIndex).css ( {left: 0} );
        $GROUP.css( {left: 0} );
        currentIndex = newIndex;
    });
}

/* ---- function advance to shuffle to nex slide with timer ---- */
function advance() {
    // clearTimeout(timeout); // remettre le timer à zéro
    // activer la fonction tout les x secondes (x=const delay)
    let timeout = setTimeout(function(){  //    const timeout = setTimeout(function(){
        if(currentIndex < ($SLIDES.length - 1)) { // si ce n'est pas la dernière slide
            move(currentIndex + 1); // aller à la prochaine slide
        } else {
            move (0); // sinon, revenir à la première
        }
    }, delay); // timer
}

/* ---- button for sliders ---- */
$.each($SLIDES, function(index) {
    const $button = $('<button type="button" class="slide-btn">&bull;</button>'); // création d'un élément boutton 
    if (index === currentIndex) { // si la slide est l'active
        $button.addClass("active"); // ajouter la class active pour la maintenir
    }
    $button.on("click", function() { // event handler pour le boutton
        move(index);
    }).appendTo($(this).find("slide-buttons"));
    buttonArray.push($button);

    advance();
});
