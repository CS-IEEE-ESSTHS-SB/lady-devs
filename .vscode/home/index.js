document.addEventListener("DOMContentloaded",()=>{
    //liste des h1 fun
    const h1Option=[
        "Welcome, Chillaxer!"
        "Hey, Campus Hero!"
        "Yo, Study Ninja!"
        "Sup, Snack Hunter"
        "Hey,Late-Night Genius 🌙"

    ];

    //selectionner tous les elements avec la classe "chang"
    const h1Elements=document.querySelectorAll(".chang");

    // parcourir tous les elements et leur attribuer un texte aleatoire

    h1Elements.forEach((el)=>{
        const randomText=h1Option[Math.floor(Math.random() * h1Options.length)];
        el.innerText=randomText;
    });
});