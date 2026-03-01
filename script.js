const paragraphes = [
  `Salem Manel,
  
Encore une fois, c’est moi qui te contacte. Je sais que je me contredis, mais malheureusement je ne suis qu’un simple humain qui a ses faiblesses (et malheureusement, qui est faible face à la personne que je veux appeler ma femme).`,

  `Qu’Allah t’accorde une longue vie, pleine de bonheur, pieuse et prospère. Tu es une personne incroyable : intelligente, belle, gentille, humaine, honnête, sensible, pieuse, drôle, entière… et plein de trucs auxquels je ne pense pas forcément tout de suite au moment où je fais ce texte.`,

  `Te rencontrer a été un élément déclencheur chez moi. Comme je te l’ai déjà dit, tu es la première fille qui me fait réfléchir au mariage, et pour cela je t’en remercie. Cela me pousse à être un meilleur homme au quotidien, à me fixer des objectifs que ça soit pour ici-bas et pour l’au-delà. Malheureusement, je n’ai pas la stabilité financière que tes parents t’offrent actuellement, mais je ferai tout mon possible pour te l’offrir, Inshallah.`,

  `Manel, tu es mon premier amour. Grâce à toi, j’ai découvert que je peux aimer une personne, penser à cette personne quotidiennement, à n’importe quel moment de la journée. Cela en devient même un automatisme, un réflexe, c’est un nouveau sentiment pour moi.`,

  `Tous les jours je pense à ton sourire, à ton rire et à ce 12 octobre. Malgré mon choix horrible des places (désolé 😅), te faire plaisir m’a fait énormément de bien et m’a permis de voir un peu plus de toi. Revoir des photos de toi heureuse et belle m’a comblé le cœur de bonheur (par contre ne remets plus jamais de crocs avec un tailleur s’il te plaît).`,

  `J’aimerais en apprendre plus sur toi, tes passions, tes hobbies, tes histoires, et m’adapter à toi. Je sais que je peux être chiant, mais je ne le suis pas avec tout le monde, seulement avec les personnes que j’apprécie et avec qui je me sens à l’aise. Sache que jamais je ne te repousserai si tu fais un effort vers moi, car quand je parle avec toi, ce n’est plus ma raison mais mon cœur qui parle.`,

  `Je ne sais pas si tu as déjà pu ressentir une certaine froideur à mon égard, mais je m’en excuse, je n’ai tout simplement pas l’habitude. Je ne suis pas ton premier amour, mais je veux être l’amour de ta vie. Quand je ne te parle pas, je ressens un manque dans ma vie, un manque dans ma tête, un manque dans mon cœur ; parfois cela m’empêche de dormir ou de me concentrer.`,

  `Souvent, je me pose la question : qu’est-ce qu’une femme comme toi me trouve ? Pourquoi moi et pas un autre ? Elle pourrait avoir tellement mieux. Cela me motive à devenir encore meilleur. Je ne serai jamais parfait, j’ai fait des erreurs et j’en ferai malheureusement, mais je veux tenir ma promesse.`,

  `Je me souviendrai toujours de cette soirée quand je t’ai raccompagnée. Je ne regretterai jamais de t’avoir appelée. Je me souviendrai toujours du fait que tu penses que j’ai été influencé par les autres, mais j’aimerais que tu saches que non. Je n’avais juste pas confiance en moi, pas confiance au fait qu’une fille exceptionnelle comme toi, Mashallah, puisse envisager quelque chose avec moi.`,

  `Durant les vacances, lorsque Inès est partie, j’aurais pu te rejoindre, j’aurais voulu te rejoindre, mais je n’ai pas pu car j’avais peur de moi-même, peur de faire face à mes sentiments. Ce choix, je l’ai regretté. Au final c’est Ayoub qui t’a rejointe et, malgré moi, j’étais jaloux. Jaloux de cette petite complicité que tu avais avec lui. C’était tellement un sentiment que je n’avais jamais éprouvé que c’est Mohamed qui me l’a fait remarquer ; il a vu comment je regardais lorsque vous parliez tous les deux, mais je n’avais toujours pas le courage d’assumer mes sentiments.`,

  `Ce n’est pas contre toi que je voulais qu’on arrête de parler. Je devenais trop dépendant de notre relation, je pensais à toi avec excès, je n’arrivais plus à me concentrer. Parler avec toi devenait comme une drogue, mais je ne voulais pas trop forcer car je ne savais pas si tu m’appréciais autant que moi je t’appréciais.`,

  `Je pense tous les jours à toi et sache que je veux simplement ton bonheur. Peu importe la réponse à la fameuse question, ta décision, si c’est pour ton bonheur, je l’accepterai avec le sourire. Le plus important est que tu sois heureuse avec un mari qui te convient : pieux, gentil, doux avec sa femme, mature, compréhensif, patient et qui pourra subvenir à tes besoins. Un mari qui, quand il te regarde, a un plaisir dans les yeux ; pour qui te tenir la main soit un incroyable privilège et savoir qu’aux yeux d’Allah tu es sa femme, une bénédiction.`,

  `Ne fais pas ton choix en fonction de moi et de mes sentiments. Prends en compte toi, tes sentiments, ton ressenti, ce que tu penses de notre futur et si celui-ci te plaît.`,

  `Encore désolé, c’est toujours moi qui te contacte et qui veux recouper la conversation, malheureusement j’écoute plus mon cœur que ma raison. Profite bien de tes vacances (sans moi, pour ton plus grand plaisir).`,

  `Joyeux anniversaire l’amoureuse des chats (désolé c’est plus une déclaration qu’un message d’anniversaire).`,

  `Merci pour tout ce que tu m’as apporté.

Ton junkie préféré,
Mon petit Miel d’amour.`,
'<img id="image" src="img/M+F.jpg" alt="Image">'
]

// On crée une variable pour stocker notre "chronomètre"
let chronoMachine; 

function effetMachineAEcrire(texteComplet, elementHTML) {
  // 1. On vide la lettre avant de commencer à écrire
  elementHTML.innerHTML = ""; 
  
  // 2. On crée un compteur pour savoir à quelle lettre on en est
  let indexLettre = 0;

  // 3. SECURITÉ : S'il y avait déjà une machine à écrire en cours (si elle clique vite sur la flèche), on l'arrête !
  clearInterval(chronoMachine);

  // 4. On lance le chronomètre !
  chronoMachine = setInterval(function() {
    
    // Si on n'a pas encore affiché toutes les lettres...
    if (indexLettre < texteComplet.length) {
      // On ajoute la lettre actuelle à la fin du texte sur le site
      elementHTML.innerHTML += texteComplet.charAt(indexLettre);
      // On passe à la lettre suivante
      indexLettre++;
    } else {
      // Si le texte est fini, on arrête le chronomètre
      clearInterval(chronoMachine); 
    }
    
  }, 15); // 35 millisecondes, c'est une bonne vitesse (plus le chiffre est petit, plus ça écrit vite)
}

let conteur = 0

function affichage() {
    // J'AI CHANGÉ L'ID ICI AUSSI
    let zonetexte = document.getElementById("texte-dialogue");
    if (conteur === paragraphes.length - 1) {
        zonetexte.innerHTML = paragraphes[conteur]
    } else {
        effetMachineAEcrire(paragraphes[conteur], zonetexte);
    }
}

affichage(); // Affiche le premier paragraphe au chargement

let monBoutonDroite = document.getElementById("droite");
    monBoutonDroite.addEventListener("click", function () {
        if (conteur >= paragraphes.length - 1) {
            conteur = 0
        }else {
            conteur++
        }
        affichage()
    });

let monBoutonGauche = document.getElementById("gauche");
    monBoutonGauche.addEventListener("click", function () {
        if (conteur <= 0) {
            conteur = paragraphes.length - 1
        }else {
            conteur--
        }
        affichage()
    });