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
];

const questions = [
  `Sur une échelle de 1 à 10, à quel point es-tu rancunière ?`,
  `Le prends-tu vraiment mal quand je me fous un peu (beaucoup) de toi, ou as-tu conscience que c’est du second degré ?`,
  `Comment réagis-tu face aux critiques ?`,
  `Sais-tu te remettre en question ?`,
  `À quel point es-tu têtue ? Est-ce impossible de te faire changer d’avis quand tu as une idée en tête ?`,
  `Fais-tu facilement confiance ? Sinon, après combien de temps penses-tu accorder ta confiance ?`,
  `Es-tu plutôt impulsive ou réfléchie ?`,
  `Penses-tu avoir besoin de beaucoup d’attention, ou au contraire, as-tu besoin de beaucoup d’espace ?`,
  `Es-tu une personne solitaire ou préfères-tu faire les choses à deux ?`,
  `Que fais-tu pour t’occuper (à part dormir) ?`,
  `Tu fais quoi pour prendre soin de tes cheveux ?`,
  `Préfères-tu les activités calmes ou à sensations (altitude, vitesse, etc.) ?`,
  `Pour toi, quels sont les rôles de l’homme et de la femme dans le foyer ?`,
  `Mis à part les sentiments, quels sont tes critères pour choisir ton mari ?`,
  `D'un point de vue religieux, qu’attends-tu de ton mari ?`,
  `Que penses-tu devoir changer ou améliorer chez toi pour être une bonne épouse ?`,
  `Dans un couple, qui doit faire le plus d'efforts : l’homme, la femme, ou doit-il y avoir une stricte égalité ?`,
  `Comment vois-tu la répartition des tâches ménagères et des repas, surtout si nous travaillons tous les deux ?`,
  `L’amour et les actes d’amour doivent-ils être forcément réciproques ?`,
  `Comment ressens-tu l’amour d’une personne : par les actes, les paroles, les moments passés à deux ?`,
  `Comment montrerais-tu tes sentiments pour que ton mari se sente aimé ?`,
  `Comment soutiendrais-tu ton mari s'il a un coup de mou ?`,
  `Penses-tu qu’il faut toujours entretenir la flamme (cadeaux, sorties), ou laisser la routine s’installer doucement ?`,
  `En cas de conflit, es-tu prête à faire le premier pas vers l’autre ?`,
  `Combien de temps peux-tu rester en froid avec ton mari ?`,
  `Sais-tu contrôler tes mots lorsque tu es énervée ?`,
  `Comment réagis-tu si quelque chose que tu as fait déplaît à ton mari, ou s'il te demande de ne pas le faire ?`,
  `En cas de conflit non résolu, qui irais-tu voir en premier (pour te conseiller ou comme médiateur) ?`,
  `Dans quels cas pourrais-tu envisager le divorce ?`,
  `À quel âge aimerais-tu avoir des enfants, et combien en voudrais-tu ? (Moi, si on a des jumeaux, j'aimerais les appeler Husseyn et Lassana !)`,
  `Quels sont les rôles respectifs du père et de la mère en tant que parents ?`,
  `Éduquerais-tu ta fille et ton fils de la même manière ?`,
  `Quelles sont les valeurs principales que tu veux inculquer à tes enfants ?`,
  `En cas de désaccord sur l’éducation des enfants, comment le réglerais-tu ?`,
  `Ma mère a une place centrale dans ma vie et mes décisions. Comment perçois-tu la relation belle-fille / belle-mère, et quelles limites te semblent importantes ?`,
  `As-tu de bons liens avec ta famille paternelle ? Quelle est l’origine de ton papa ?`,
  `Sauras-tu poser un cadre ou une limite entre ta famille et notre couple si jamais la famille devient trop intrusive ?`,
  `Comment envisages-tu ta relation avec tes cousins/cousines après le mariage ?`,
  `Y a-t-il des membres de ta famille qui sont racistes ? Si oui, es-tu proche d’eux ?`,
  `Pour quelles raisons tes parents pourraient-ils refuser un mariage ?`,
  `Tes parents ont-ils des attentes particulières pour le mariage (niveau fête, dot, etc.) ?`,
  `Qu'attends-tu comme dot ?`,
  `Es-tu plutôt dépensière ou économe ?`,
  `Quel niveau de vie souhaites-tu avoir financièrement ?`,
  `Souhaites-tu continuer à travailler après le mariage et/ou après avoir eu des enfants ? Serais-tu prête à adapter ou arrêter ton activité si l'équilibre de notre foyer l'exigeait ?`,
  `Si un jour tu ne travailles plus, es-tu prête à te serrer la ceinture pour tout ce qui concerne les loisirs ?`,
  `Que penses-tu des crédits bancaires ?`,
  `Combien de temps es-tu prête à attendre avant d'avoir notre propre appartement ?`,
  `Si je vais en école d’ingénieur, je devrai faire un stage de 3 à 6 mois à l’étranger. Est-ce un problème pour toi ?`,
  `À quelle fréquence aimerais-tu partir en vacances ?`,
  `Comment conçois-tu les sorties, les soirées ou les voyages entre copines une fois mariée ?`,
  `As-tu déjà pensé à la hijra ?`,
  `Je ne veux absolument pas de grande fête. Je préfère un restaurant avec la famille et les amis proches, sans artifices ni musique à fond. Est-ce que cela te dérange ?`,
  `Veux-tu enchaîner le mariage civil (la mairie) et le religieux (hlel) directement ?`,
  `As-tu des traumatismes liés à tes anciennes relations que tu ne veux absolument pas reproduire dans ton mariage ?`,
  `As-tu des antécédents médicaux (familiaux ou personnels) qui peuvent se transmettre ?`,
  `Comment as-tu eu connaissance du dars de Cheikh Sidi sur les relations hors mariage ?`
];

// NOUVELLES VARIABLES POUR LE MODE QUESTIONS
let reponsesManel = []; 
let modeQuestions = false; 

// On crée une variable pour stocker notre "chronomètre"
let chronoMachine; 

function effetMachineAEcrire(texteComplet, elementHTML) {
  elementHTML.innerHTML = ""; 
  let indexLettre = 0;
  clearInterval(chronoMachine);

  chronoMachine = setInterval(function() {
    if (indexLettre < texteComplet.length) {
      elementHTML.innerHTML += texteComplet.charAt(indexLettre);
      indexLettre++;
    } else {
      clearInterval(chronoMachine); 
    }
  }, 15); 
}

let conteur = 0;

function affichage() {
    let zonetexte = document.getElementById("texte-dialogue");
    let boutonDroite = document.getElementById("droite");
    
    // On choisit le bon tableau selon le mode dans lequel on se trouve
    let tableauActuel = modeQuestions ? questions : paragraphes;

    // Si on est à la toute fin de la déclaration (l'image)
    if (conteur === tableauActuel.length - 1 && !modeQuestions) {
        zonetexte.innerHTML = tableauActuel[conteur];
        boutonDroite.innerText = "Passer aux questions ►";
    } 
    else {
        effetMachineAEcrire(tableauActuel[conteur], zonetexte);
        
        // Si on est à la TOUTE DERNIÈRE question
        if (conteur === questions.length - 1 && modeQuestions) {
            boutonDroite.innerText = "Envoyer via WhatsApp ►";
        } else {
            boutonDroite.innerText = "►";
        }
    }
}


// --- GESTION DU BOUTON DROITE ---
let monBoutonDroite = document.getElementById("droite");
monBoutonDroite.addEventListener("click", function () {
    
    if (!modeQuestions) {
        // ========== MODE DÉCLARATION ==========
        if (conteur >= paragraphes.length - 1) {
            // TRANSITION VERS LE MODE QUESTIONS
            modeQuestions = true;
            conteur = 0;
            
            // On affiche la zone de saisie et on cache le titre
            document.getElementById("zone-reponse").style.display = "block";
            
            // On modifie le petit badge (vérifie que tu as bien class="badge-nom" id="badge" dans ton HTML)
            let badge = document.querySelector(".badge-nom");
            if(badge) badge.innerText = "Questionnaire (Sérieux)";
            
            let titre = document.querySelector("h1");
            if(titre) titre.style.display = "none";
            
            affichage();
        } else {
            conteur++;
            affichage();
        }
        
    } else {
        // ========== MODE QUESTIONS ==========
        // 1. Sauvegarde la réponse tapée
        let champ = document.getElementById("champ-reponse");
        reponsesManel[conteur] = champ.value; 

        // 2. Vérifie si c'est fini
        if (conteur >= questions.length - 1) {
            envoyerParWhatsApp(); // FIN ! On ouvre WhatsApp
        } else {
            // Passe à la question suivante
            conteur++;
            // Remet le texte qu'elle avait tapé si elle l'a déjà fait, sinon vide la case
            champ.value = reponsesManel[conteur] || "";
            affichage();
        }
    }
});


// --- GESTION DU BOUTON GAUCHE ---
let monBoutonGauche = document.getElementById("gauche");
monBoutonGauche.addEventListener("click", function () {
    if (!modeQuestions) {
        // Retour en arrière mode déclaration
        if (conteur > 0) {
            conteur--;
            affichage();
        }
    } else {
        // Retour en arrière mode questions
        if (conteur > 0) {
            // Sauvegarde ce qu'elle était en train d'écrire avant de reculer
            let champ = document.getElementById("champ-reponse");
            reponsesManel[conteur] = champ.value;
            
            conteur--;
            champ.value = reponsesManel[conteur] || ""; // Remet son ancienne réponse
            affichage();
        }
    }
});


// --- FONCTION D'ENVOI WHATSAPP ---
function envoyerParWhatsApp() {
    let texteMessage = "Coucou ! Voici mes réponses aux questions :\n\n";
    
    // On boucle sur toutes les questions pour assembler le texte
    for(let i = 0; i < questions.length; i++) {
        texteMessage += "❓ " + questions[i] + "\n";
        texteMessage += "💬 " + (reponsesManel[i] || "Pas de réponse") + "\n\n";
    }
    
    // Transforme le texte pour qu'un lien internet puisse le lire
    let texteEncode = encodeURIComponent(texteMessage);
    
    // ⚠️ REMPLACE LES 'X' PAR TON NUMÉRO DE TÉLÉPHONE SANS LE 0 AU DÉBUT ⚠️
    // Exemple pour le 06 12 34 56 78 -> 33612345678
    let urlWhatsApp = "https://wa.me/33695530229?text=" + texteEncode;
    
    // Ouvre l'application WhatsApp (ou WhatsApp Web)
    window.open(urlWhatsApp);
}


// --- LOGIQUE DE L'ANIMATION DE L'ENVELOPPE (INTRO) ---
let ecranIntro = document.getElementById("ecran-intro");
let enveloppe = document.getElementById("enveloppe");

enveloppe.addEventListener("click", function() {
    
    // 1. On déclenche l'animation CSS d'ouverture (le rabat se lève)
    enveloppe.classList.add("enveloppe-ouverte");
    
    // 2. On attend 0.8 seconde que le rabat soit ouvert, puis on fait disparaître l'écran
    setTimeout(function() {
        ecranIntro.style.opacity = "0"; // Déclenche le fondu CSS
        
        // 3. On attend encore 1 seconde que le fondu soit fini pour supprimer l'écran et lancer le texte !
        setTimeout(function() {
            ecranIntro.style.display = "none"; // Enlève l'écran d'intro
            
            affichage(); // LA MACHINE À ÉCRIRE COMMENCE SEULEMENT MAINTENANT !
            
        }, 1000); 
        
    }, 800); 
    
});