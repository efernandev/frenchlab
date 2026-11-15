(() => {
function createCommunicationLesson(id, title, sourcePages, goal, explanation, cards, questions) {
  return {
    id,
    title,
    sourcePages,
    goal,
    explanation,
    cards,
    questions: [...questions, supplementaryQuestions[id], ...extendedQuestions[id]]
  };
}

function choice(prompt, choices, answer, explanation) {
  return { type: 'choice', prompt, choices, answer, explanation };
}

function text(prompt, answer, explanation) {
  return { type: 'text', prompt, answer, explanation };
}

const supplementaryQuestions = {
  quantites: choice('Quel mot indique une quantité trop importante ?', ['trop de', 'peu de', 'à peine'], 'trop de', 'Trop de indique une quantité supérieure à ce qui est souhaité.'),
  decrire: text('Complétez : Pour dire que deux personnes sont très semblables, elles se ressemblent comme deux ______ d’eau.', 'gouttes', '« Se ressembler comme deux gouttes d’eau » exprime une très grande ressemblance.'),
  objets: choice('Quelle construction présente l’usage d’un objet ?', ['Ça sert à couper.', 'Ça ressemble à couper.', 'Ça manque de couper.'], 'Ça sert à couper.', 'On exprime la fonction avec servir à suivi d’un infinitif.'),
  pannes: text('Complétez : Il a réparé l’appareil en ______ les consignes.', 'suivant', 'Le gérondif se forme avec en et le participe présent : en suivant.'),
  cuisine: choice('Quel ordre correspond à une recette ?', ['Ingrédients puis étapes', 'Avis puis conclusion', 'Problème puis rumeur'], 'Ingrédients puis étapes', 'Une recette présente les ingrédients nécessaires puis les étapes de préparation.'),
  meteo: text('Complétez : Après la chaleur, la température ______.', 'se rafraîchit', 'Se rafraîchir décrit une baisse de température.'),
  'etat-general': choice('Quelle expression indique une amélioration de santé ?', ['Se remettre', 'Crouler sous les rendez-vous', 'Faire un canular'], 'Se remettre', 'Se remettre signifie retrouver progressivement la santé ou ses forces.'),
  mouvements: text('Complétez : Après l’effort, elle s’est ______ sur le tapis.', 'allongée', 'S’allonger signifie prendre une position horizontale.'),
  'bilan-1': choice('Quel thème relève des situations concrètes ?', ['Une panne informatique', 'Une opinion sur une œuvre', 'Un regret passé'], 'Une panne informatique', 'Les situations concrètes abordent notamment les pannes et les réparations.'),
  nouvelles: text('Complétez avec le futur antérieur : Elle ______ oublié de rappeler.', 'aura', 'Le futur antérieur se forme ici avec l’auxiliaire aura et le participe oublié.'),
  aider: choice('Quelle phrase offre une aide concrète ?', ['Je peux porter les cartons.', 'Je ne sais pas ce qui s’est passé.', 'Je préfère partir tôt.'], 'Je peux porter les cartons.', 'Cette phrase propose d’effectuer une tâche utile.'),
  'demander-accepter-refuser': text('Complétez : Je souhaite que vous ______ à la réunion.', 'veniez', 'Après souhaiter que, on emploie le subjonctif : que vous veniez.'),
  reunions: choice('Quel document liste les sujets d’une réunion ?', ['L’ordre du jour', 'Le niveau de vie', 'Le compte de mémoire'], 'L’ordre du jour', 'L’ordre du jour présente les sujets qui seront traités.'),
  responsabilites: text('Complétez : Reconnaître son rôle et répondre de ses actes, c’est assumer ses ______.', 'responsabilités', 'Assumer ses responsabilités signifie répondre de ses actes.'),
  conflits: choice('Quel mot désigne une solution négociée entre des parties ?', ['Un compromis', 'Un canular', 'Un contretemps'], 'Un compromis', 'Un compromis tient compte des intérêts de chaque partie.'),
  'plaisanter-tromper': text('Complétez : Une plaisanterie organisée sous forme de tromperie est un ______.', 'canular', 'Un canular est une tromperie destinée à surprendre ou à faire rire.'),
  allusions: choice('Quel indice aide à comprendre un sous-entendu ?', ['Le contexte et le ton', 'Le prix d’un objet', 'La météo seule'], 'Le contexte et le ton', 'Le contexte et le ton révèlent souvent le sens indirect d’une remarque.'),
  'bilan-2': text('Complétez : Pour aider les parties à dialoguer, on peut recourir à une ______.', 'médiation', 'Une médiation facilite le dialogue entre des personnes en désaccord.'),
  'debat-opinion': choice('Quelle expression introduit clairement son point de vue ?', ['À mon avis', 'À cause de', 'À peine'], 'À mon avis', '« À mon avis » annonce une opinion personnelle.'),
  'dire-ne-pas-dire': text('Complétez : Il ______ changé de travail, mais l’information reste à vérifier.', 'aurait', 'Le conditionnel « aurait changé » marque une information incertaine.'),
  'reagir-commenter': choice('Quelle phrase soutient quelqu’un qui traverse une difficulté ?', ['Ne baisse pas les bras !', 'C’est un faux pas.', 'Cela m’est égal.'], 'Ne baisse pas les bras !', 'Cette expression encourage à ne pas abandonner.'),
  projet: text('Complétez : Pour demander l’avancement d’un projet, on peut dire : « Où en ______ le projet ? »', 'est', '« Où en est le projet ? » demande quelle étape a été atteinte.'),
  'evaluer-travail': choice('Quel mot désigne une appréciation très positive ?', ['Un éloge', 'Une gaffe', 'Une excuse'], 'Un éloge', 'Un éloge exprime une appréciation favorable.'),
  preferences: text('Complétez : Pour indiquer un choix privilégié, on peut dire : « Je ______ partir tôt. »', 'préfère', 'Préférer sert à exprimer un choix privilégié.'),
  gaffes: choice('Que faut-il faire pour rectifier un malentendu ?', ['Clarifier calmement les faits', 'Répéter la rumeur', 'Changer de sujet sans explication'], 'Clarifier calmement les faits', 'Une clarification explique ce qui s’est passé et corrige l’interprétation.'),
  'bilan-3': text('Complétez : « À mon avis » introduit une ______ personnelle.', 'opinion', 'Cette expression annonce le point de vue de la personne qui parle.'),
  comportements: choice('Quel adjectif décrit une personne accueillante et aimable ?', ['Avenante', 'Tatillonne', 'Bredouille'], 'Avenante', 'Avenant ou avenante qualifie une personne aimable et accueillante.'),
  illusions: text('Complétez : Une attente déçue peut provoquer une ______.', 'désillusion', 'Une désillusion est la perte d’une illusion ou d’un espoir.'),
  'manieres-moyens': choice('Quelle question porte sur la méthode à suivre ?', ['Comment procéder ?', 'Que devient-elle ?', 'Qu’est-ce qu’il ressent ?'], 'Comment procéder ?', '« Comment procéder ? » demande quelle méthode employer.'),
  decouragement: text('Complétez : Après l’échec, il a repris courage et s’est ______.', 'ressaisi', 'Se ressaisir signifie reprendre le contrôle et retrouver son énergie.'),
  peurs: choice('Quelle expression signifie « s’inquiéter beaucoup » ?', ['Se faire un sang d’encre', 'Avoir de la classe', 'Saisir une occasion'], 'Se faire un sang d’encre', 'Cette expression imagée signifie être très inquiet.'),
  sentiments: text('Complétez : Quand une relation devient moins étroite, les liens sont ______.', 'distendus', 'Distendus signifie moins étroits ou moins forts.'),
  'bilan-4': choice('Quel connecteur introduit une concession ?', ['Bien que', 'Parce que', 'Donc'], 'Bien que', 'Bien que introduit un fait malgré lequel le reste de la phrase demeure vrai.'),
  nuancer: text('Complétez : Pour atténuer « surpris », on peut dire « ______ surpris ».', 'légèrement', 'Légèrement réduit l’intensité de l’adjectif.'),
  expliquer: choice('Quel élément permet de confirmer un fait ?', ['Une preuve', 'Une rumeur', 'Une préférence'], 'Une preuve', 'Une preuve permet de justifier ou de confirmer un fait.'),
  'reflechir-argumenter': text('Complétez : Une proposition à vérifier avant de conclure est une ______.', 'hypothèse', 'Une hypothèse est une proposition à vérifier ou à démontrer.'),
  comparaisons: choice('Quel mot désigne une œuvre qui reproduit un modèle ?', ['Une copie', 'Un compromis', 'Un contretemps'], 'Une copie', 'Une copie reproduit ou imite un modèle.'),
  incredulite: text('Complétez : Pour vérifier une affirmation, il faut rechercher des ______ fiables.', 'preuves', 'Des preuves fiables permettent de confirmer une affirmation.'),
  causes: choice('Quel connecteur peut introduire une cause ?', ['Parce que', 'Par conséquent', 'En revanche'], 'Parce que', 'Parce que introduit la raison ou la cause d’un fait.'),
  conditions: text('Complétez : Si j’avais le temps, je ______ au colloque.', 'participerais', 'Avec si + imparfait, le conditionnel exprime le résultat hypothétique.'),
  'bilan-5': choice('Sur quoi s’appuie un raisonnement solide ?', ['Des faits et des arguments', 'Des impressions non vérifiées uniquement', 'Des rumeurs répétées'], 'Des faits et des arguments', 'Un raisonnement solide s’appuie sur des faits examinés et des arguments.'),
  risques: text('Complétez : Un projet qui comporte beaucoup de dangers est ______.', 'périlleux', 'Périlleux signifie dangereux ou risqué.'),
  'action-inaction': choice('Que signifie « un travail bâclé » ?', ['Un travail fait sans soin', 'Un travail vérifié avec attention', 'Un travail repoussé sans être commencé'], 'Un travail fait sans soin', 'Bâclé signifie réalisé trop rapidement et sans attention.'),
  'reussites-echecs': text('Complétez : En langage familier, échouer à un examen, c’est être ______.', 'collé', 'Dans ce contexte, être collé signifie échouer à un examen.'),
  competences: choice('Qu’est-ce qu’une compétence ?', ['Une capacité à réaliser une tâche', 'Une information non confirmée', 'Un ressentiment durable'], 'Une capacité à réaliser une tâche', 'Une compétence est une capacité à réaliser une tâche.'),
  emploi: text('Complétez : L’employeur examine une candidature avant de choisir un ______.', 'candidat', 'Le candidat est la personne qui postule à un emploi.'),
  argent: choice('Quelle expression familière signifie « manquer d’argent » ?', ['Être fauché', 'Être avenant', 'Être en avance'], 'Être fauché', 'Fauché signifie familièrement sans argent.'),
  'bilan-6': text('Complétez : Le processus de sélection pour un poste est le ______.', 'recrutement', 'Le recrutement consiste à choisir une personne pour un emploi.'),
  temps: choice('Que désigne un contretemps ?', ['Un imprévu qui retarde une action', 'Une réussite remarquable', 'Un choix préféré'], 'Un imprévu qui retarde une action', 'Un contretemps perturbe ou retarde le déroulement prévu.'),
  memoire: text('Complétez : « J’aurais dû téléphoner » exprime un ______.', 'regret', 'Le conditionnel passé exprime souvent le regret d’une action non réalisée.'),
  hasards: choice('Que signifie « saisir une occasion » ?', ['Profiter d’une situation favorable', 'Oublier un souvenir', 'Refuser toute aide'], 'Profiter d’une situation favorable', 'Saisir une occasion signifie profiter d’une opportunité.'),
  mode: text('Complétez : Un usage devenu ancien peut être qualifié de ______.', 'désuet', 'Désuet qualifie un mot ou un usage devenu ancien.'),
  avenir: choice('Quel marqueur annonce un avenir proche ?', ['Prochainement', 'Autrefois', 'À peine'], 'Prochainement', 'Prochainement situe un événement dans un avenir proche.'),
  'bilan-7': text('Complétez : Une possibilité envisagée pour l’avenir est une ______.', 'perspective', 'Une perspective est une possibilité ou une évolution que l’on envisage.')
};

const extendedQuestions = {
  quantites: [
    choice('« Le musée regorge de tableaux » signifie que le musée…', ['en contient beaucoup', 'n’en possède aucun', 'en cherche un seul'], 'en contient beaucoup', 'Regorger de signifie contenir en grande quantité.'),
    text('Répondez par la négative : « Vous avez vu des touristes ? » — « Non, je n’ai vu ______ touriste. »', 'aucun', 'Aucun touriste exprime l’absence totale de touristes.'),
    choice('Quelle phrase indique une quantité limitée ?', ['Il y a peu de provisions.', 'La salle regorge de provisions.', 'Il y a une foule de provisions.'], 'Il y a peu de provisions.', 'Peu de signale une quantité limitée.')
  ],
  decrire: [
    choice('« Avoir de l’allure », c’est…', ['avoir de la classe', 'manquer de soin', 'être très jeune'], 'avoir de la classe', 'L’allure désigne ici une apparence élégante ou distinguée.'),
    text('Complétez : Deux personnes très semblables se ressemblent comme deux ______ d’eau.', 'gouttes', '« Comme deux gouttes d’eau » exprime une ressemblance frappante.'),
    choice('Quelle expression décrit une personne très soignée ?', ['Être tiré à quatre épingles', 'Être en mauvaise voie', 'Revenir bredouille'], 'Être tiré à quatre épingles', 'Cette expression décrit une tenue très soignée.')
  ],
  objets: [
    text('Complétez la demande : « Je cherche un outil qui ______ couper ce tuyau. »', 'puisse', 'Après chercher un objet dont on précise la fonction, le subjonctif convient : qui puisse couper.'),
    choice('Quelle réponse indique la fonction d’un objet ?', ['Il sert à arroser le jardin.', 'Il ressemble au jardin.', 'Il manque le jardin.'], 'Il sert à arroser le jardin.', 'Servir à suivi d’un infinitif indique l’usage.'),
    text('Complétez : Un objet qui permet de boucher un trou dans un mur est recherché pour ______ le trou.', 'boucher', 'La phrase exprime l’objectif de l’objet avec un infinitif.')
  ],
  pannes: [
    text('Répondez avec un gérondif : Comment a-t-elle trouvé le plombier ? — Elle l’a trouvé en ______ ses voisins.', 'interrogeant', 'Le gérondif se forme avec en et le participe présent : en interrogeant.'),
    choice('Quelle phrase exprime un processus avec un verbe pronominal ?', ['La porte se ferme automatiquement.', 'La porte ferme automatiquement le voisin.', 'La porte est fermer automatiquement.'], 'La porte se ferme automatiquement.', 'Se fermer décrit ici un processus subi par la porte.'),
    text('Complétez : Pour signaler un problème informatique, précisez le ______ observé.', 'symptôme', 'Décrire le symptôme permet d’identifier la panne à résoudre.')
  ],
  cuisine: [
    text('Mettez en relief le sujet : « Joëlle a préparé le gâteau. » — « C’est ______ qui a préparé le gâteau. »', 'Joëlle', 'La tournure c’est… qui met le sujet en relief.'),
    choice('Quel geste convient pour préparer des oignons ?', ['Les éplucher', 'Les faire pleuvoir', 'Les se couvrir'], 'Les éplucher', 'Éplucher consiste à retirer la peau des légumes.'),
    text('Complétez : Si une sauce est trop relevée, on peut l’______.', 'adoucir', 'Adoucir une sauce en atténue le goût trop fort.')
  ],
  meteo: [
    choice('« Il fait un froid de canard » signifie…', ['qu’il fait très froid', 'qu’il fait très chaud', 'qu’il pleut légèrement'], 'qu’il fait très froid', 'L’expression désigne un froid intense.'),
    text('Réécrivez avec un verbe pronominal : « Le ciel devient plus gris. » — « Le ciel ______. »', 'se couvre', 'Le ciel se couvre décrit un changement vers un temps nuageux.'),
    choice('Quel phénomène peut toucher les personnes âgées lors de fortes chaleurs ?', ['La canicule', 'Les gelées', 'Le brouillard'], 'La canicule', 'Une canicule est une période de chaleur exceptionnelle.')
  ],
  'etat-general': [
    text('Complétez : « Il pleure parce qu’il ______. »', 'a de la peine', 'Avoir de la peine décrit la cause émotionnelle des pleurs.'),
    choice('Quelle expression décrit un visage qui montre la fatigue ?', ['Avoir une petite mine', 'Avoir de l’allure', 'Avoir le dernier mot'], 'Avoir une petite mine', 'Avoir une petite mine indique qu’une personne semble fatiguée ou malade.'),
    text('Complétez : Après une interruption, il a repris le sport et s’y est ______.', 'remis', 'Se remettre à une activité signifie la reprendre.')
  ],
  mouvements: [
    choice('« Arriver en trombe » signifie arriver…', ['très rapidement', 'après tout le monde', 'sans bouger'], 'très rapidement', 'En trombe indique une arrivée brusque et rapide.'),
    text('Répondez par la négative : « Vous êtes sortis aujourd’hui ? » — « Non, nous ne sommes pas ______. »', 'sortis', 'La négation encadre l’auxiliaire : ne sommes pas sortis.'),
    choice('Quelle exclamation correspond à « Cet enfant est extrêmement agité » ?', ['Comme cet enfant est agité !', 'Cet enfant est peut-être calme.', 'Cet enfant ne bouge pas.'], 'Comme cet enfant est agité !', 'Comme… ! permet de construire une exclamation.'),
    text('Complétez : Pour dire familièrement « Je pars », on peut dire : « Je ______ ! »', 'file', 'Filer signifie partir rapidement dans un registre familier.')
  ],
  'bilan-1': [
    choice('Quelle réponse est logique à « À quoi ça sert ? » ?', ['À protéger le meuble.', 'Il fait froid.', 'Je suis arrivé tard.'], 'À protéger le meuble.', 'Une réponse à « À quoi ça sert ? » donne la fonction de l’objet.'),
    text('Complétez le dialogue : « Tu as froid ? » — « Oui, je vais bien me ______. »', 'couvrir', 'Se couvrir protège du froid.'),
    choice('Quelle formule indique que le temps s’améliore ?', ['Le ciel se dégage.', 'Le ciel se couvre.', 'Il y a une panne.'], 'Le ciel se dégage.', 'Quand le ciel se dégage, les nuages diminuent et le temps peut s’améliorer.')
  ],
  nouvelles: [
    choice('Quelle phrase exprime une supposition sur un fait passé ?', ['Elle aura oublié de rappeler.', 'Elle oublie toujours de rappeler.', 'Elle rappellera demain.'], 'Elle aura oublié de rappeler.', 'Le futur antérieur peut exprimer une probabilité concernant le passé.'),
    text('Remplacez « Cela fait longtemps que je n’ai pas eu de nouvelles » par « Je n’ai plus entendu parler de lui depuis ______ ».', 'longtemps', 'Depuis longtemps exprime une longue période sans nouvelles.'),
    choice('Que demande « Où en est le projet ? » ?', ['Son état d’avancement', 'La météo du jour', 'Le prix d’un billet'], 'Son état d’avancement', 'La question demande à quelle étape le projet est arrivé.')
  ],
  aider: [
    text('Reformulez avec si + imparfait : « Tu pourrais trier ces papiers. » — « Si tu ______, tu pourrais trier ces papiers. »', 'voulais', 'Une proposition atténuée peut commencer par si + imparfait : si tu voulais.'),
    choice('Qui est « le bras droit » d’une personne ?', ['Son principal collaborateur', 'Son adversaire', 'Son nouveau voisin'], 'Son principal collaborateur', 'Le bras droit est le collaborateur le plus proche ou le plus utile.'),
    text('Complétez : « Tu peux compter sur moi » exprime une offre de ______.', 'soutien', 'Pouvoir compter sur quelqu’un signifie pouvoir recevoir son aide.')
  ],
  'demander-accepter-refuser': [
    text('Complétez : « Le professeur tient à ce que les étudiants ______. »', 'participent', 'Tenir à ce que appelle le subjonctif : que les étudiants participent.'),
    choice('Quelle formule sollicite une réponse avec politesse ?', ['Auriez-vous l’obligeance de répondre ?', 'Répondez sans discuter.', 'Je ne vous répondrai pas.'], 'Auriez-vous l’obligeance de répondre ?', 'Le conditionnel et une formule de courtoisie atténuent la demande.'),
    text('Complétez : « Je vous serais reconnaissant de bien ______ m’aider. »', 'vouloir', '« Je vous serais reconnaissant de bien vouloir… » formule une demande polie.')
  ],
  reunions: [
    text('Transformez en demande polie : « Pouvez-vous déplacer la réunion ? » — « ______ déplacer la réunion ? »', 'Pourriez-vous', 'Le conditionnel pourriez-vous rend la demande plus courtoise.'),
    choice('Qui anime une table ronde ?', ['La personne qui conduit les échanges', 'La personne qui envoie uniquement les convocations', 'La personne qui prend les notes en privé'], 'La personne qui conduit les échanges', 'Animer une table ronde consiste à conduire les échanges entre participants.'),
    text('Complétez : Une personne qui ne vient pas au rendez-vous vous fait ______.', 'faux bond', 'Faire faux bond signifie ne pas venir à un rendez-vous convenu.')
  ],
  responsabilites: [
    choice('« Se défausser sur quelqu’un », c’est…', ['lui faire porter sa responsabilité', 'assumer sa propre erreur', 'lui proposer une aide'], 'lui faire porter sa responsabilité', 'Se défausser consiste à rejeter sa responsabilité sur autrui.'),
    text('Complétez : Quand on accuse quelqu’un, on le met en ______.', 'cause', 'Mettre en cause signifie attribuer à quelqu’un une responsabilité ou une faute.'),
    choice('Quelle réaction consiste à reconnaître son rôle dans un incident ?', ['Assumer ses responsabilités', 'Se défausser', 'Refuser tout dialogue'], 'Assumer ses responsabilités', 'Assumer ses responsabilités, c’est répondre de ses actes.')
  ],
  conflits: [
    choice('Quelle action vise à réduire la tension ?', ['Désamorcer le conflit', 'Mettre de l’huile sur le feu', 'Camper sur ses positions'], 'Désamorcer le conflit', 'Désamorcer un conflit consiste à en réduire la tension.'),
    text('Complétez : Pour parler avec tact, on peut « prendre des ______ ».', 'gants', 'Prendre des gants signifie agir ou parler avec précaution.'),
    choice('Quelle expression signifie « faire des concessions » ?', ['Mettre de l’eau dans son vin', 'Ne pas céder un pouce de terrain', 'Prendre quelqu’un à partie'], 'Mettre de l’eau dans son vin', 'Cette expression signifie modérer ses exigences.'),
    text('Complétez : Une personne qui aide deux parties à négocier peut être un ______.', 'médiateur', 'Le médiateur facilite le dialogue et la recherche d’un accord.')
  ],
  'plaisanter-tromper': [
    choice('« Ne pas être dupe » signifie…', ['ne pas se laisser tromper', 'raconter une plaisanterie', 'croire toutes les excuses'], 'ne pas se laisser tromper', 'Une personne qui n’est pas dupe reconnaît la tromperie.'),
    text('Complétez : Une histoire inventée pour tromper quelqu’un est un ______.', 'mensonge', 'Un mensonge est une affirmation que l’on sait fausse.'),
    choice('« Être de mauvaise foi », c’est…', ['refuser de reconnaître honnêtement les faits', 'faire preuve de franchise', 'reconnaître immédiatement son erreur'], 'refuser de reconnaître honnêtement les faits', 'La mauvaise foi consiste à ne pas reconnaître la vérité de façon honnête.')
  ],
  allusions: [
    text('Transformez avec une forme négative : « Ce vin est assez bon. » — « Ce vin n’est ______ mauvais. »', 'pas', 'La forme ne… pas peut atténuer une appréciation positive.'),
    choice('« Tu vois ce que je veux dire ? » sert à…', ['vérifier que l’allusion est comprise', 'demander le prix d’un objet', 'refuser une invitation'], 'vérifier que l’allusion est comprise', 'Cette question vérifie si l’interlocuteur a compris le sous-entendu.'),
    text('Complétez : Une allusion qui n’est pas clairement exprimée est à peine ______.', 'voilée', 'Une allusion à peine voilée est presque directe, mais reste indirecte.')
  ],
  'bilan-2': [
    choice('Quelle expression demande l’état d’avancement d’un travail ?', ['Où en est le travail ?', 'Quelle est la météo ?', 'Qui est responsable de ce bruit ?'], 'Où en est le travail ?', 'Cette question porte sur l’avancement.'),
    text('Complétez : Après des années d’absence, un ami a ______ surface.', 'refait', 'Refaire surface signifie réapparaître après une absence.'),
    choice('Quelle expression marque une réticence à accepter ?', ['Je ne suis pas très chaud pour accepter.', 'J’accepte avec enthousiasme.', 'Cela va de soi.'], 'Je ne suis pas très chaud pour accepter.', 'Ne pas être très chaud signifie être hésitant ou réticent.')
  ],
  'debat-opinion': [
    text('Transformez avec l’infinitif passé : « Elle a organisé la réunion. Je la remercie ______ la réunion. »', 'd’avoir organisé', 'L’infinitif passé exprime une action déjà accomplie : d’avoir organisé.'),
    choice('Quelle formule introduit une opinion personnelle ?', ['Pour ma part', 'À cause de', 'Depuis peu'], 'Pour ma part', 'Pour ma part annonce le point de vue du locuteur.'),
    text('Complétez : « Qu’il ______ en désaccord, nous poursuivrons le débat. »', 'soit', 'Le subjonctif en tête de phrase peut marquer une concession : qu’il soit.'),
    choice('Quel élément soutient le mieux une opinion ?', ['Un argument pertinent', 'Une insulte', 'Une rumeur répétée'], 'Un argument pertinent', 'Un argument apporte une raison pour défendre une opinion.')
  ],
  'dire-ne-pas-dire': [
    text('Mettez au conditionnel d’incertitude : « On prétend qu’elle a changé d’emploi. » — « Elle ______ changé d’emploi. »', 'aurait', 'Le conditionnel passé marque ici une information non confirmée.'),
    choice('Quelle expression signifie « parler sans détour » ?', ['Parler franchement', 'Rester muet', 'Divulguer un secret'], 'Parler franchement', 'Parler franchement signifie s’exprimer directement et honnêtement.'),
    text('Complétez : Une information qui a été divulguée peut s’être ______.', 'ébruitée', 'Une information ébruitée a cessé d’être confidentielle.'),
    choice('Quelle réponse respecte une confidence ?', ['Je garderai cela pour moi.', 'Je vais le raconter partout.', 'Je vais le publier sans vérifier.'], 'Je garderai cela pour moi.', 'Garder une confidence signifie ne pas divulguer l’information.')
  ],
  'reagir-commenter': [
    choice('Quelle réaction convient à une personne qui vient de recevoir une mauvaise nouvelle ?', ['Je suis désolé pour vous.', 'Tu n’as qu’à te taire.', 'Cela ne m’intéresse jamais.'], 'Je suis désolé pour vous.', 'Cette formule exprime un soutien face à une épreuve.'),
    text('Complétez : Pour encourager quelqu’un à persévérer, dites : « ______ bon ! »', 'Tiens', '« Tiens bon ! » est une formule d’encouragement à l’impératif.'),
    choice('Quelle phrase exprime une contrariété ?', ['C’est fichu !', 'Cela prend tournure.', 'Je vous remercie.'], 'C’est fichu !', '« C’est fichu ! » exprime que la situation semble compromise.'),
    text('Complétez : Après un choc, on peut espérer que la personne s’en ______.', 'remettra', 'Le futur « remettra » annonce le rétablissement espéré.')
  ],
  projet: [
    choice('Un projet « au point mort »…', ['n’avance plus', 'est déjà terminé', 'vient de réussir'], 'n’avance plus', 'Au point mort signifie que le projet n’avance pas.'),
    text('Complétez : Le projet commence à prendre ______.', 'tournure', 'Prendre tournure signifie commencer à se développer de manière prometteuse.'),
    choice('Que faut-il parfois faire lorsque le marché change ?', ['S’adapter', 'Répéter le projet sans le modifier', 'Ignorer les nouvelles conditions'], 'S’adapter', 'Un projet doit parfois s’adapter à l’évolution du marché.')
  ],
  'evaluer-travail': [
    text('Transformez à l’impératif : « Vous devez reconnaître vos erreurs. » — « ______ vos erreurs. »', 'Reconnaissez', 'À l’impératif, le verbe vous reconnaissez devient reconnaissez.'),
    choice('Quel terme désigne une faute d’orthographe ou de frappe ?', ['Une coquille', 'Un éloge', 'Une échéance'], 'Une coquille', 'Une coquille est une erreur typographique.'),
    text('Complétez : Faire l’éloge d’un travail, c’est lui rendre ______.', 'hommage', 'Rendre hommage à un travail exprime une appréciation élogieuse.')
  ],
  preferences: [
    choice('Quel mot désigne un choix que l’on préfère entre plusieurs ?', ['Une prédilection', 'Une conséquence', 'Une panne'], 'Une prédilection', 'Une prédilection est une préférence marquée.'),
    text('Complétez : « Ça ne me ______ pas de visiter l’Asie. »', 'déplairait', 'Cette tournure au conditionnel exprime une préférence ou une acceptation nuancée.'),
    choice('Que signifie « cela ne lui fait ni chaud ni froid » ?', ['Cela lui est indifférent.', 'Cela l’enthousiasme beaucoup.', 'Cela lui fait peur.'], 'Cela lui est indifférent.', 'L’expression indique l’absence de réaction ou d’intérêt.')
  ],
  gaffes: [
    text('Complétez : Confondre deux personnes par erreur, c’est les prendre l’une pour l’______.', 'autre', 'Prendre quelqu’un pour un autre signifie le confondre avec une autre personne.'),
    choice('Une erreur commise sans le vouloir est faite…', ['par mégarde', 'par prédilection', 'de bon gré'], 'par mégarde', 'Par mégarde signifie involontairement.'),
    choice('Quelle réponse aide à rectifier une gaffe ?', ['Je me suis trompé, je voulais dire…', 'Je ne corrigerai rien.', 'C’est forcément votre faute.'], 'Je me suis trompé, je voulais dire…', 'Reconnaître l’erreur et préciser son intention permet de réparer une gaffe.')
  ],
  'bilan-3': [
    choice('Quelle formule peut remplacer « Je préférerais que tu viennes » ?', ['J’aimerais mieux que tu viennes.', 'Je ne veux pas te voir.', 'Tu n’as pas le choix.'], 'J’aimerais mieux que tu viennes.', 'Aimer mieux exprime une préférence.'),
    text('Complétez : Un projet qui n’avance plus est au point ______.', 'mort', 'Au point mort signifie qu’un projet est bloqué.'),
    choice('Quelle expression correspond à « ne pas être préoccupé » ?', ['Cela m’est égal.', 'Je m’en fais un sang d’encre.', 'Je suis sur le point de renoncer.'], 'Cela m’est égal.', 'Cela m’est égal exprime l’indifférence.')
  ],
  comportements: [
    text('Réécrivez avec « bien que » : « Il est réservé, mais il se montre serviable. » — « Bien qu’il ______ réservé, il se montre serviable. »', 'soit', 'Après bien que, le subjonctif exprime la concession : bien qu’il soit.'),
    choice('Quelle expression décrit une personne qui se croit supérieure ?', ['Ne pas se prendre pour n’importe qui', 'Être tiré à quatre épingles', 'Revenir bredouille'], 'Ne pas se prendre pour n’importe qui', 'Cette expression décrit une personne prétentieuse.'),
    text('Complétez : Couper les ______ avec quelqu’un signifie rompre la relation.', 'ponts', 'Couper les ponts signifie interrompre une relation.'),
    choice('Quelle phrase oppose une concession à un fait ?', ['Bien qu’il soit réservé, il se montre serviable.', 'Il se montre serviable parce qu’il est réservé.', 'Il est réservé, donc il refuse d’aider.'], 'Bien qu’il soit réservé, il se montre serviable.', 'Bien que reconnaît un fait qui ne fait pas obstacle à l’autre.')
  ],
  illusions: [
    choice('Quelle expression signifie « ne vous faites pas d’illusions » ?', ['Ne rêvez pas !', 'Vous êtes tiré à quatre épingles.', 'Vous avez de l’allure.'], 'Ne rêvez pas !', 'Ne rêvez pas invite à voir la réalité plutôt que de croire une illusion.'),
    text('Complétez par une conséquence : « Elle a esquivé les questions ; ______, elle voulait cacher son inquiétude. »', 'par conséquent', 'Par conséquent introduit ce qui résulte du fait précédent.'),
    choice('Quelle tournure exprime une concession ?', ['Même si la façade est modeste, l’intérieur est lumineux.', 'Parce que la façade est modeste, l’intérieur est lumineux.', 'La façade est modeste donc l’intérieur est lumineux.'], 'Même si la façade est modeste, l’intérieur est lumineux.', 'Même si introduit un fait malgré lequel l’autre reste vrai.'),
    text('Complétez : L’apparence ne révèle pas toujours la ______.', 'réalité', 'Une apparence peut différer de la réalité.')
  ],
  'manieres-moyens': [
    text('Complétez avec une manière : « Elle a examiné le dossier avec ______. »', 'soin', 'Avec soin précise la manière de réaliser une action.'),
    choice('Quelle question porte sur les moyens utilisés ?', ['Par quels moyens ?', 'Que ressent-il ?', 'Quel temps fera-t-il ?'], 'Par quels moyens ?', 'Cette question demande quels moyens ont permis d’agir.'),
    text('Complétez : Pour connaître la méthode, on peut demander : « Comment ______ ? »', 'procéder', 'Procéder signifie agir ou avancer selon une méthode.')
  ],
  decouragement: [
    choice('Quelle expression signifie « renoncer » ?', ['Baisser les bras', 'Reprendre le dessus', 'Avoir de l’allure'], 'Baisser les bras', 'Baisser les bras signifie abandonner ou renoncer.'),
    text('Complétez : Après un échec, il est revenu ______ : il n’avait obtenu aucun résultat.', 'bredouille', 'Revenir bredouille signifie revenir sans résultat.'),
    choice('Quelle expression montre qu’une personne retrouve le contrôle ?', ['Se ressaisir', 'Se faire un sang d’encre', 'Faire faux bond'], 'Se ressaisir', 'Se ressaisir signifie reprendre le contrôle de soi.')
  ],
  peurs: [
    text('Complétez : Avant un examen difficile, elle éprouve une ______.', 'appréhension', 'Une appréhension est une inquiétude anticipée.'),
    choice('Quelle phrase montre une inquiétude très forte ?', ['Il se fait un sang d’encre.', 'Il s’en moque complètement.', 'Il saisit une occasion.'], 'Il se fait un sang d’encre.', 'Se faire un sang d’encre signifie être très inquiet.'),
    text('Complétez : Une peur très intense est une peur ______.', 'bleue', 'L’expression complète est « une peur bleue ».')
  ],
  sentiments: [
    choice('Quelle attitude consiste à cacher ses émotions ?', ['Les dissimuler', 'Les manifester', 'Les partager ouvertement'], 'Les dissimuler', 'Dissimuler ses sentiments signifie ne pas les montrer.'),
    text('Complétez : Quand les relations s’affaiblissent, les liens se ______.', 'distendent', 'Se distendre signifie devenir moins étroit ou moins fort.'),
    choice('Quelle réaction exprime de la compassion ?', ['Je comprends que cette épreuve soit difficile.', 'Cela ne me fait ni chaud ni froid.', 'Vous auriez dû tout prévoir.'], 'Je comprends que cette épreuve soit difficile.', 'La compassion reconnaît la souffrance d’autrui.')
  ],
  'bilan-4': [
    text('Complétez : « Malgré les apparences, cette personne est très ______. »', 'avenante', 'Avenante décrit une personne aimable et accueillante.'),
    choice('Quelle expression signifie « comprendre immédiatement » ?', ['Ça crève les yeux.', 'Ça tombe à l’eau.', 'Ça ne tient pas la route.'], 'Ça crève les yeux.', 'Ça crève les yeux signifie que c’est évident.'),
    text('Complétez : Pour rompre une relation, on peut « couper les ______ ».', 'ponts', 'Couper les ponts signifie rompre les relations.')
  ],
  nuancer: [
    choice('Quel adverbe atténue un jugement ?', ['Légèrement', 'Absolument', 'Jamais'], 'Légèrement', 'Légèrement réduit l’intensité d’un adjectif ou d’un jugement.'),
    text('Complétez : Un résumé trop bref peut être trop ______.', 'schématique', 'Schématique qualifie une présentation réduite à ses grandes lignes.'),
    choice('Quel adjectif décrit un souci excessif du détail ?', ['Tatillon', 'Polyvalent', 'Avenant'], 'Tatillon', 'Tatillon suggère une attention excessive aux détails.')
  ],
  expliquer: [
    choice('Quelle action clarifie une situation confuse ?', ['Faire une mise au point', 'Faire un canular', 'Faire une dépense'], 'Faire une mise au point', 'Une mise au point précise ou corrige les faits.'),
    text('Complétez : Pour éclaircir une situation confuse, on fait une mise au ______.', 'point', 'Faire une mise au point permet de clarifier les faits.'),
    choice('Quel terme exprime une intuition sur un événement ?', ['Un pressentiment', 'Une coquille', 'Un compromis'], 'Un pressentiment', 'Un pressentiment est une impression intuitive.'),
    text('Complétez : Une explication claire aide à mieux ______ les faits.', 'comprendre', 'Comprendre les faits permet de clarifier une situation.')
  ],
  'reflechir-argumenter': [
    text('Complétez la question avec un infinitif : « Que ______ à ce stade de la réflexion ? »', 'faire', 'Faire est l’infinitif qui complète cette question ouverte.'),
    choice('Quel élément aide à vérifier un raisonnement ?', ['Examiner les faits et les preuves', 'Ignorer les contradictions', 'Remplacer les arguments par une rumeur'], 'Examiner les faits et les preuves', 'Un raisonnement doit être confronté aux faits et aux preuves.'),
    text('Complétez : Une étude qui présente des raisons organisées est un travail ______.', 'argumenté', 'Un travail argumenté expose des raisons à l’appui de ses conclusions.')
  ],
  comparaisons: [
    choice('« Ces deux projets reviennent au même » indique…', ['une équivalence', 'une opposition totale', 'une incertitude'], 'une équivalence', 'Revenir au même signifie avoir un résultat ou un sens équivalent.'),
    text('Complétez : Un modèle et sa reproduction sont comparés pour relever leurs ressemblances et leurs ______.', 'différences', 'Une comparaison met en évidence les ressemblances et les différences.'),
    choice('Quelle paire oppose clairement modèle et reproduction ?', ['Original et copie', 'Cause et conséquence', 'Souci et appréhension'], 'Original et copie', 'Original et copie permettent de comparer une œuvre et sa reproduction.'),
    text('Complétez : Une comparaison fait ressortir les ressemblances et les ______.', 'différences', 'Comparer consiste à relever les ressemblances et les différences.')
  ],
  incredulite: [
    text('Complétez : Une affirmation confirmée par des faits est établie de source ______.', 'sûre', 'Une source sûre est une source jugée fiable.'),
    choice('Quelle phrase manifeste l’incrédulité ?', ['Tu plaisantes ? C’est impossible !', 'Je confirme les faits.', 'Je comprends la procédure.'], 'Tu plaisantes ? C’est impossible !', 'Ces questions expriment le doute et la surprise.'),
    text('Complétez : Un élément qui permet d’établir qu’un fait est vrai est une ______.', 'preuve', 'Une preuve sert à confirmer un fait.')
  ],
  causes: [
    choice('Quel connecteur exprime une conséquence ?', ['Donc', 'Parce que', 'Bien que'], 'Donc', 'Donc annonce une conséquence.'),
    text('Complétez : « Il est malade ; ______, il n’a pas fini le travail. »', 'par conséquent', 'Par conséquent introduit l’effet de sa maladie sur le travail.'),
    choice('Quel terme désigne l’élément qui déclenche un événement ?', ['La cause', 'Le compromis', 'La préférence'], 'La cause', 'La cause est l’élément à l’origine d’un événement.')
  ],
  conditions: [
    text('Complétez : « Je te prête ma clé au cas où tu en ______ besoin. »', 'aurais', 'Au cas où est suivi du conditionnel : tu en aurais besoin.'),
    choice('Quelle expression introduit une condition ?', ['À moins que', 'Par conséquent', 'À mon avis'], 'À moins que', 'À moins que introduit une condition ou une exception.'),
    text('Complétez : « Nous partirons, pour peu que le temps le ______. »', 'permette', 'Pour peu que est suivi du subjonctif : que le temps permette.')
  ],
  'bilan-5': [
    choice('Quelle expression indique une différence radicale ?', ['Ce n’est pas du tout la même chose.', 'Cela revient au même.', 'C’est légèrement similaire.'], 'Ce n’est pas du tout la même chose.', 'Cette phrase exprime une différence importante.'),
    text('Complétez : Une ressemblance entre deux œuvres peut être appelée une ______.', 'analogie', 'Une analogie est une ressemblance entre deux éléments.'),
    choice('Quelle question demande la raison d’un fait ?', ['Pourquoi cela s’est-il produit ?', 'Quelle est sa préférence ?', 'Quand le style est-il à la mode ?'], 'Pourquoi cela s’est-il produit ?', 'Pourquoi demande la cause ou l’explication d’un fait.')
  ],
  risques: [
    choice('Quelle expression indique qu’on doit être prêt à toute éventualité ?', ['Parer à toute éventualité', 'Faire un canular', 'Revenir bredouille'], 'Parer à toute éventualité', 'Parer à toute éventualité signifie se préparer à divers risques possibles.'),
    text('Transformez au passé : « Il doit tout prévoir. » — « Il ______ tout prévoir. »', 'devait', 'L’imparfait de devoir à la troisième personne est devait.'),
    choice('Quelle expression signifie « ne pas pouvoir éviter une étape » ?', ['Je n’y couperai pas.', 'Je n’en ai rien à faire.', 'Je me fais un sang d’encre.'], 'Je n’y couperai pas.', 'Ne pas y couper signifie être obligé de faire quelque chose.'),
    text('Complétez : Un projet qui comporte un risque important est ______.', 'périlleux', 'Périlleux signifie dangereux ou risqué.')
  ],
  'action-inaction': [
    text('Complétez : Pour battre un record, l’athlète doit déployer toute son ______.', 'énergie', 'Déployer son énergie signifie mobiliser ses forces et ses efforts.'),
    choice('Quelle expression signifie « faire le minimum d’efforts » ?', ['Ne pas se fouler', 'Déployer toute son énergie', 'Se ressaisir'], 'Ne pas se fouler', 'Ne pas se fouler signifie ne pas faire beaucoup d’efforts.'),
    text('Complétez : Un rapport fait trop vite et sans soin est ______.', 'bâclé', 'Bâclé signifie réalisé sans soin.')
  ],
  'reussites-echecs': [
    choice('Quelle phrase décrit une réussite exceptionnelle ?', ['Le spectacle a fait un triomphe.', 'Le spectacle est tombé à l’eau.', 'Le spectacle est en mauvaise voie.'], 'Le spectacle a fait un triomphe.', 'Faire un triomphe signifie obtenir un grand succès.'),
    text('Complétez : En langage familier, échouer à un examen, c’est être ______.', 'collé', 'Être collé à un examen signifie l’avoir échoué.'),
    choice('Quel mot décrit une performance remarquable ?', ['Une prouesse', 'Un contretemps', 'Une rumeur'], 'Une prouesse', 'Une prouesse est une action particulièrement difficile ou remarquable.')
  ],
  competences: [
    text('Complétez : Lire, écrire et compter sont des connaissances de ______.', 'base', 'Les connaissances de base sont les savoirs essentiels.'),
    choice('Quel terme décrit une personne qui sait faire plusieurs tâches ?', ['Polyvalente', 'Bredouille', 'Tatillonne'], 'Polyvalente', 'Polyvalent signifie capable d’assumer plusieurs tâches ou fonctions.'),
    text('Complétez : « Je n’y connais rien » exprime l’______ dans un domaine.', 'ignorance', 'L’ignorance désigne le fait de ne pas connaître un sujet.')
  ],
  emploi: [
    choice('Quelle démarche précède souvent un entretien d’embauche ?', ['Envoyer une candidature', 'Rédiger un testament', 'Faire un bilan météo'], 'Envoyer une candidature', 'La candidature est examinée avant un éventuel entretien.'),
    text('Complétez : Une personne qui postule à un poste est un ______.', 'candidat', 'Le candidat est la personne qui présente sa candidature.'),
    choice('Qui s’occupe généralement du recrutement ?', ['Le service des ressources humaines', 'Le service de réparation automobile', 'Le médiateur familial'], 'Le service des ressources humaines', 'Les ressources humaines participent souvent au processus de recrutement.')
  ],
  argent: [
    text('Complétez : « Il a du mal à joindre les deux ______ » signifie que ses fins de mois sont difficiles.', 'bouts', 'Joindre les deux bouts signifie parvenir difficilement à équilibrer son budget.'),
    choice('Que signifie « jeter l’argent par les fenêtres » ?', ['Dépenser sans compter', 'Économiser soigneusement', 'Recevoir un héritage'], 'Dépenser sans compter', 'L’expression décrit des dépenses excessives ou inconsidérées.'),
    choice('Quelle expression signifie « ne plus avoir d’argent » ?', ['Ne plus avoir un rond', 'Rouler sur l’or', 'Faire un bel héritage'], 'Ne plus avoir un rond', 'Ne plus avoir un rond signifie familièrement ne plus avoir d’argent.'),
    text('Complétez : Une personne qui dépense sans compter est un panier ______.', 'percé', 'Un panier percé dépense son argent de manière excessive.')
  ],
  'bilan-6': [
    choice('Quelle expression signifie « travailler très dur » ?', ['Se donner beaucoup de mal', 'Avoir la flemme', 'Faire faux bond'], 'Se donner beaucoup de mal', 'Se donner du mal signifie faire de grands efforts.'),
    text('Complétez : Une personne qui a plusieurs compétences est ______.', 'polyvalente', 'Polyvalente signifie capable d’exercer différentes tâches.'),
    choice('Quelle expression décrit une personne qui manque d’argent ?', ['Avoir du mal à joindre les deux bouts', 'Rouler sur l’or', 'Faire un triomphe'], 'Avoir du mal à joindre les deux bouts', 'Cette expression signifie que le budget est difficile à équilibrer.')
  ],
  temps: [
    choice('Quelle expression signifie « partir très rapidement » ?', ['Partir à toute vitesse', 'Revenir bredouille', 'Faire une mise au point'], 'Partir à toute vitesse', 'À toute vitesse indique une grande rapidité.'),
    text('Complétez : Un retard imprévu dans un projet est un ______.', 'contretemps', 'Un contretemps est un imprévu qui retarde une action.'),
    choice('Pour parler d’un délai, quelle question est correcte ?', ['Pour combien de temps ?', 'À quoi ça sert ?', 'De quoi avez-vous peur ?'], 'Pour combien de temps ?', 'Cette question demande la durée prévue.')
  ],
  memoire: [
    choice('Quelle phrase exprime un regret ?', ['J’aurais dû réserver une table.', 'Je réserve une table.', 'Je réserverai une table.'], 'J’aurais dû réserver une table.', 'Le conditionnel passé exprime le regret d’une action non réalisée.'),
    text('Complétez : « Le nom de cet acteur m’______ » signifie que je ne m’en souviens pas.', 'échappe', 'Un nom qui échappe est un nom qu’on ne parvient momentanément pas à retrouver.'),
    choice('Quel pronom double remplace « le dossier à la directrice » ?', ['Le lui', 'Lui le', 'Le leur à'], 'Le lui', 'Le remplace le dossier et lui remplace à la directrice : je le lui donne.'),
    choice('Quelle phrase place correctement les deux pronoms ?', ['Je le lui ai rappelé.', 'Je lui le ai rappelé.', 'Je lui ai le rappelé.'], 'Je le lui ai rappelé.', 'Les pronoms compléments se placent avant l’auxiliaire : je le lui ai rappelé.')
  ],
  hasards: [
    text('Complétez : Nous nous sommes retrouvés par le plus grand ______.', 'hasard', 'Par hasard signifie sans l’avoir prévu.'),
    choice('Quelle phrase exprime le fatalisme ?', ['C’est comme ça, on n’y peut rien.', 'Nous allons tout vérifier.', 'Je vais saisir cette occasion.'], 'C’est comme ça, on n’y peut rien.', 'Le fatalisme consiste à considérer les événements comme inévitables.'),
    choice('Qu’est-ce qu’une opportunité ?', ['Une occasion favorable', 'Une panne inattendue', 'Un souvenir oublié'], 'Une occasion favorable', 'Une opportunité est une occasion favorable à saisir.'),
    choice('Que signifie le fatalisme ?', ['Considérer les événements comme inévitables', 'Planifier chaque événement', 'Vérifier une rumeur'], 'Considérer les événements comme inévitables', 'Le fatalisme consiste à accepter les événements comme inévitables.')
  ],
  mode: [
    choice('Quelle expression du cours signifie « être à la mode » ?', ['Être très tendance', 'Être au point mort', 'Être au bout du rouleau'], 'Être très tendance', 'Tendance signifie conforme aux goûts actuels.'),
    text('Complétez : Un objet qui ne peut plus être utilisé parce qu’il est dépassé est ______.', 'obsolète', 'Obsolète signifie dépassé et qui n’est plus adapté à l’usage actuel.'),
    choice('Un engouement passager est…', ['une mode de courte durée', 'une certitude permanente', 'un résultat scientifique'], 'une mode de courte durée', 'Un engouement passager ne dure pas longtemps.')
  ],
  avenir: [
    text('Complétez : « Le paquet arrivera sous huitaine » signifie qu’il arrivera d’ici ______ jours.', 'huit', 'Sous huitaine signifie dans les huit jours environ.'),
    choice('Quelle expression annonce une action imminente ?', ['Être sur le point de déménager', 'Avoir déménagé autrefois', 'Revenir bredouille'], 'Être sur le point de déménager', 'Être sur le point de indique qu’une action va bientôt se produire.'),
    text('Complétez : Un résultat qui laisse espérer une évolution favorable est ______.', 'prometteur', 'Prometteur signifie qu’un résultat donne de bonnes raisons d’espérer.')
  ],
  'bilan-7': [
    choice('Quelle formule exprime un regret ?', ['Je m’en mords les doigts.', 'C’est l’occasion ou jamais.', 'Elle ne saurait tarder.'], 'Je m’en mords les doigts.', 'Se mordre les doigts signifie regretter une décision.'),
    text('Complétez : Oublier un nom peut se dire : « Il m’est sorti de l’______ ».', 'esprit', 'Cette expression signifie qu’on ne se souvient plus d’une information.'),
    choice('Quelle expression annonce une action très proche ?', ['Elle ne saurait tarder.', 'Elle est revenue bredouille.', 'Elle a coupé les ponts.'], 'Elle ne saurait tarder.', 'Ne pas tarder signifie arriver ou se produire bientôt.')
  ]
};

window.eduardingoCourses = window.eduardingoCourses || [];
window.eduardingoCourses.push({
  bookId: 'b1-communication',
  level: 'B1-B2',
  category: 'Comunicación',
  title: 'Communication progressive · Avancé',
  name: 'Parler avec précision',
  description: 'Explorez 47 situations de communication : échanges quotidiens, opinions, émotions, raisonnement, travail et projets d’avenir.',
  source: 'Communication progressive du français · niveau avancé, chapitres 1 à 47 et bilans 1 à 7, pages 8–235 ; test d’évaluation, pages 236–238 ; corrigé du test, page 239. Le livre ne contient pas de corrigé des activités par chapitre. Les exercices de ce cours sont adaptés et leurs réponses se vérifient dans les explications.',
  lessons: [
    createCommunicationLesson('quantites', 'Parler des quantités', '8–11', 'Exprimer une abondance, un manque ou une quantité suffisante.', [
      'Pour préciser une quantité, employez des mots comme beaucoup de, peu de, trop de ou suffisamment de. Devant un nom, de reste généralement invariable.',
      'À l’oral, des expressions imagées comme « être bourré » ou « crouler sous » renforcent la description d’une grande quantité.'
    ], [
      { title: 'Quantité importante', text: 'beaucoup de · une foule de · regorger de', tone: 'lilac' },
      { title: 'Quantité limitée', text: 'peu de · manquer de · à peine', tone: 'peach' }
    ], [
      choice('Quelle expression indique une quantité suffisante ?', ['suffisamment de', 'à peine', 'manquer de'], 'suffisamment de', 'Suffisamment de signifie que la quantité répond au besoin.'),
      text('Complétez : La salle est pleine, elle est ______.', 'bondée', 'Bondée signifie qu’un lieu contient beaucoup de personnes.')
    ]),
    createCommunicationLesson('decrire', 'Décrire', '12–15', 'Décrire une personne et un lieu avec des comparaisons précises.', [
      'Pour décrire quelqu’un, on peut parler de son apparence, de son allure et de ses traits. « Se ressembler comme deux gouttes d’eau » exprime une ressemblance très forte.',
      'Une description d’un lieu peut associer les matériaux, les formes et les détails : une maison biscornue, une poutre en bois, un chemin escarpé.'
    ], [
      { title: 'Ressemblance', text: 'se ressembler comme deux gouttes d’eau', tone: 'lilac' },
      { title: 'Allure', text: 'avoir de la classe · être tiré à quatre épingles', tone: 'mint' }
    ], [
      choice('Que signifie « se ressembler comme deux gouttes d’eau » ?', ['Se ressembler beaucoup', 'Être en désaccord', 'Se connaître à peine'], 'Se ressembler beaucoup', 'L’expression décrit une très grande ressemblance.'),
      text('Complétez : Une personne élégante a de l’______.', 'allure', 'Avoir de l’allure signifie avoir une apparence élégante ou distinguée.')
    ]),
    createCommunicationLesson('objets', 'Parler des objets', '16–19', 'Nommer des objets et demander leur fonction ou leur usage.', [
      'Pour demander un objet précis, décrivez sa forme ou son usage : « Je cherche un embout que je puisse adapter au tuyau. » Après chercher, le subjonctif convient lorsqu’on exprime une caractéristique recherchée.',
      'La question « À quoi ça sert ? » porte sur la fonction. On répond avec servir à + infinitif ou servir à + nom.'
    ], [
      { title: 'Usage', text: 'Ça sert à réparer une fuite.', tone: 'lilac' },
      { title: 'Recherche', text: 'Je cherche un outil qui puisse couper ce tuyau.', tone: 'peach' }
    ], [
      choice('Quelle phrase demande la fonction d’un objet ?', ['À quoi ça sert ?', 'De quoi est-ce fait ?', 'Où l’avez-vous acheté ?'], 'À quoi ça sert ?', '« À quoi ça sert ? » demande quelle est la fonction de l’objet.'),
      text('Complétez : Une clé sert à ______ un écrou.', 'serrer', 'On peut employer servir à suivi d’un infinitif : servir à serrer.')
    ]),
    createCommunicationLesson('pannes', 'Pannes et réparations', '20–23', 'Décrire un dysfonctionnement et expliquer comment le réparer.', [
      'Pour signaler une panne, décrivez le symptôme et indiquez ce qui ne fonctionne plus : « Je ne parviens pas à ouvrir le fichier. »',
      'Le gérondif en en + participe présent peut préciser la manière : « Il a réparé l’appareil en suivant les consignes. » Certains verbes pronominaux décrivent un processus : « Le pneu s’est crevé. »'
    ], [
      { title: 'Décrire la panne', text: 'L’écran ne s’allume plus.', tone: 'lilac' },
      { title: 'Expliquer la manière', text: 'en vérifiant les branchements', tone: 'blue' }
    ], [
      choice('Comment exprimer la manière ?', ['En suivant le mode d’emploi', 'Parce que le mode d’emploi', 'Le mode d’emploi suivi'], 'En suivant le mode d’emploi', 'Le gérondif se forme avec en et le participe présent.'),
      text('Complétez : Le pneu ______ crevé pendant le trajet.', 's’est', 'Le verbe se crever est pronominal : le pneu s’est crevé.')
    ]),
    createCommunicationLesson('cuisine', 'Parler de cuisine et de repas', '24–27', 'Parler d’un repas, donner son avis sur un plat et suivre une recette.', [
      'Pour inviter quelqu’un, on peut proposer de déjeuner ensemble ou de prendre l’apéritif. Dans une commande, précisez le nombre de personnes et les plats souhaités.',
      'Les verbes d’appréciation permettent de décrire le goût : être épicé, doux, salé ou relevé. Une recette indique les ingrédients puis les étapes de préparation.'
    ], [
      { title: 'Inviter', text: 'Tu viens déjeuner avec nous ?', tone: 'peach' },
      { title: 'Décrire le goût', text: 'Ce plat est doux, mais légèrement épicé.', tone: 'mint' }
    ], [
      choice('Quel mot décrit un goût relevé par des épices ?', ['épicé', 'fade', 'tiède'], 'épicé', 'Épicé qualifie un plat préparé avec des épices.'),
      text('Complétez : Pour faire une sauce, on mélange les ______.', 'ingrédients', 'Les ingrédients sont les éléments utilisés pour préparer un plat.')
    ]),
    createCommunicationLesson('meteo', 'La météo', '28–31', 'Décrire les changements météorologiques et les conditions extrêmes.', [
      'Pour décrire l’évolution du temps, les verbes pronominaux s’emploient souvent : le ciel se couvre, le temps se rafraîchit, la température se réchauffe.',
      'Une canicule est une période de très forte chaleur. À l’inverse, « un froid de canard » est une expression familière pour un froid intense.'
    ], [
      { title: 'Changement de temps', text: 'Le ciel se couvre et le vent se lève.', tone: 'blue' },
      { title: 'Temps extrême', text: 'une canicule · un froid de canard', tone: 'peach' }
    ], [
      choice('Quelle expression désigne une période de forte chaleur ?', ['Une canicule', 'Une gelée', 'Une averse'], 'Une canicule', 'Une canicule correspond à une période de chaleur exceptionnelle.'),
      text('Complétez : Le ciel ______ depuis ce matin.', 'se couvre', 'Se couvrir décrit un ciel qui devient nuageux.')
    ]),
    createCommunicationLesson('etat-general', 'L’état général', '32–35', 'Parler de fatigue, de santé et de rétablissement.', [
      'Pour parler de santé, décrivez les symptômes avec tact : être patraque, avoir une petite mine ou être épuisé.',
      'Pour évoquer l’amélioration, on dit qu’une personne récupère, se remet ou est tirée d’affaire. La cause peut être introduite par parce que, à cause de ou grâce à.'
    ], [
      { title: 'Fatigue', text: 'avoir une petite mine · être surmené', tone: 'peach' },
      { title: 'Rétablissement', text: 'récupérer · se remettre · aller mieux', tone: 'mint' }
    ], [
      choice('Quelle expression indique qu’une personne va mieux après une maladie ?', ['Elle récupère.', 'Elle s’épuise.', 'Elle a une petite mine.'], 'Elle récupère.', 'Récupérer signifie retrouver progressivement ses forces.'),
      text('Complétez : Après l’opération, il se ______ peu à peu.', 'remet', 'Se remettre signifie retrouver la santé ou ses forces.')
    ]),
    createCommunicationLesson('mouvements', 'Les mouvements', '36–41', 'Raconter des déplacements et décrire une immobilité ou un geste.', [
      'Les verbes de mouvement décrivent des déplacements et des gestes : accourir, se précipiter, s’allonger ou s’immobiliser.',
      'La négation nuance une action : ne pas bouger, ne plus avancer. Pour marquer la surprise ou l’intensité, l’exclamation accompagne souvent un récit.'
    ], [
      { title: 'Déplacement rapide', text: 'accourir · se précipiter', tone: 'lilac' },
      { title: 'Arrêt ou posture', text: 's’immobiliser · s’allonger', tone: 'blue' }
    ], [
      choice('Quel verbe exprime un déplacement rapide vers un lieu ?', ['Accourir', 'S’allonger', 'Rester immobile'], 'Accourir', 'Accourir signifie venir rapidement vers quelqu’un ou quelque chose.'),
      text('Complétez : À la salle de sport, on peut s’______ sur le tapis.', 'allonger', 'S’allonger décrit la position horizontale pour un exercice.')
    ]),
    createCommunicationLesson('bilan-1', 'Bilan 1 · Situations concrètes', '42–43', 'Réutiliser le vocabulaire des situations quotidiennes et des gestes.', [
      'Pour décrire une situation concrète, choisissez un vocabulaire précis : quantité, panne, repas, météo, santé ou mouvement.',
      'Les expressions familières donnent un ton vivant, mais il faut les adapter à la personne et au contexte.'
    ], [
      { title: 'Situations', text: 'décrire · demander · réparer · proposer', tone: 'lilac' },
      { title: 'Registre', text: 'adapter une expression à son interlocuteur', tone: 'blue' }
    ], [
      choice('Quelle expression décrit un grand froid ?', ['Un froid de canard', 'Une peur bleue', 'Un faux pas'], 'Un froid de canard', '« Un froid de canard » est une expression familière pour un froid intense.'),
      text('Complétez : Un mot ou une tournure propre à une conversation familière appartient au registre ______.', 'familier', 'Le registre familier s’emploie surtout dans les échanges informels.')
    ]),
    createCommunicationLesson('nouvelles', 'Demander ou donner des nouvelles', '44–47', 'S’informer d’une personne et commenter une nouvelle.', [
      'Pour prendre des nouvelles, demandez « Que devient-elle ? » ou « Où en est-on ? ». Pour commenter une information, on peut la résumer ou en souligner l’importance.',
      'Le futur antérieur peut exprimer une probabilité concernant une action déjà accomplie : « Il aura oublié de rappeler. »'
    ], [
      { title: 'Prendre des nouvelles', text: 'Qu’est-ce qu’elle devient ?', tone: 'lilac' },
      { title: 'Probabilité passée', text: 'Il aura manqué le train.', tone: 'blue' }
    ], [
      choice('Quelle question sert à demander des nouvelles d’une personne ?', ['Que devient-elle ?', 'À quoi ça sert ?', 'Comment procéder ?'], 'Que devient-elle ?', '« Que devient-elle ? » demande ce qu’elle fait ou comment elle va.'),
      text('Complétez avec le futur antérieur : Il ______ oublié de prévenir.', 'aura', 'Le futur antérieur de oublier se forme ici avec aura oublié.')
    ]),
    createCommunicationLesson('aider', 'Aider', '48–51', 'Proposer, accepter et organiser une aide concrète.', [
      'Pour proposer de l’aide, demandez ce qui serait utile ou proposez une tâche précise : « Je peux porter les cartons. »',
      'Si + imparfait peut introduire une proposition atténuée : « Si tu voulais, je pourrais t’aider. » Un soutien sans faille est un soutien constant.'
    ], [
      { title: 'Proposition', text: 'Je peux te donner un coup de main.', tone: 'mint' },
      { title: 'Soutien', text: 'un soutien sans faille', tone: 'lilac' }
    ], [
      choice('Quelle formule propose une aide ?', ['Je peux te donner un coup de main.', 'Je refuse toute aide.', 'Je ne sais pas où tu en es.'], 'Je peux te donner un coup de main.', 'Donner un coup de main signifie aider quelqu’un.'),
      text('Complétez : Si tu voulais, je ______ t’accompagner.', 'pourrais', 'Dans une proposition atténuée, si + imparfait est suivi du conditionnel.')
    ]),
    createCommunicationLesson('demander-accepter-refuser', 'Demander, accepter, refuser', '52–55', 'Formuler une demande et répondre avec tact.', [
      'Une demande polie peut prendre la forme d’une question : « Pourriez-vous m’aider ? » Une réponse peut accepter, décliner ou proposer une autre solution.',
      'Après certains verbes de volonté ou de sentiment, on emploie le subjonctif : « Je souhaite que vous veniez. »'
    ], [
      { title: 'Demande polie', text: 'Serait-il possible de… ?', tone: 'lilac' },
      { title: 'Refus nuancé', text: 'Je crains de ne pas pouvoir.', tone: 'peach' }
    ], [
      choice('Quelle formulation est la plus polie ?', ['Pourriez-vous m’aider ?', 'Aide-moi tout de suite !', 'Tu dois m’aider.'], 'Pourriez-vous m’aider ?', 'Le conditionnel rend la demande moins directe.'),
      text('Complétez : Je souhaite que vous ______ à la réunion.', 'veniez', 'Après souhaiter que, on emploie le subjonctif : que vous veniez.')
    ]),
    createCommunicationLesson('reunions', 'Réunions et conférences', '56–59', 'Organiser un rendez-vous et intervenir en contexte professionnel.', [
      'Pour proposer un rendez-vous, indiquez le jour puis demandez si le créneau convient. « Serait-il possible de… ? » est une formule polie au conditionnel.',
      'Une réunion peut avoir un ordre du jour. Une conférence ou un colloque rassemble des participants autour d’un thème.'
    ], [
      { title: 'Proposer un créneau', text: 'Auriez-vous un moment jeudi matin ?', tone: 'lilac' },
      { title: 'Réunion', text: 'ordre du jour · compte rendu · colloque', tone: 'blue' }
    ], [
      choice('Quelle formule atténue une demande de rendez-vous ?', ['Serait-il possible de déplacer la réunion ?', 'Déplacez la réunion.', 'La réunion est déplacée.'], 'Serait-il possible de déplacer la réunion ?', 'Le conditionnel de politesse rend la demande plus courtoise.'),
      text('Complétez : Le document qui présente les points d’une réunion est l’ordre du ______.', 'jour', 'L’ordre du jour énumère les sujets à traiter.')
    ]),
    createCommunicationLesson('responsabilites', 'Les responsabilités', '60–63', 'Évoquer une faute, sa responsabilité et ses conséquences.', [
      'Pour parler d’un incident, distinguez les faits, la responsabilité et les conséquences. Une mise en cause est une accusation ou une critique de la conduite d’une personne.',
      'Assumer ses responsabilités, c’est reconnaître son rôle et répondre de ses actes. Le contraire consiste à rejeter la faute sur autrui.'
    ], [
      { title: 'Reconnaître sa part', text: 'assumer ses responsabilités', tone: 'mint' },
      { title: 'Mettre en cause', text: 'demander des explications sur une négligence', tone: 'peach' }
    ], [
      choice('Que signifie « assumer ses responsabilités » ?', ['Répondre de ses actes', 'Accuser quelqu’un sans preuve', 'Éviter toute explication'], 'Répondre de ses actes', 'Assumer ses responsabilités, c’est reconnaître son rôle et ses conséquences.'),
      text('Complétez : Une absence de soin dans le travail est une ______.', 'négligence', 'La négligence désigne un manque de soin ou d’attention.')
    ]),
    createCommunicationLesson('conflits', 'Gérer les conflits', '64–69', 'Apaiser un désaccord et rechercher un compromis.', [
      'Dans un conflit, reformulez les points de vue avant de proposer une solution. Une médiation fait intervenir une personne qui aide les parties à dialoguer.',
      'Un compromis est une solution que chaque partie peut accepter, même si aucune n’obtient tout ce qu’elle souhaite. « Calmons le jeu » invite à réduire la tension.'
    ], [
      { title: 'Apaiser', text: 'Calmons le jeu et écoutons chacun.', tone: 'mint' },
      { title: 'Résoudre', text: 'médiation · compromis · accord', tone: 'lilac' }
    ], [
      choice('Quel est le but d’une médiation ?', ['Faciliter le dialogue entre les parties', 'Désigner un vainqueur', 'Empêcher tout échange'], 'Faciliter le dialogue entre les parties', 'La médiation aide les personnes en désaccord à dialoguer.'),
      text('Complétez : Une solution acceptable pour chaque partie est un ______.', 'compromis', 'Un compromis est un accord qui tient compte des intérêts de chacun.')
    ]),
    createCommunicationLesson('plaisanter-tromper', 'Plaisanter et tromper', '70–73', 'Distinguer une plaisanterie d’un mensonge et reconnaître l’hypocrisie.', [
      'Un canular est une tromperie organisée pour faire rire ou surprendre. Avant de relayer une information étonnante, vérifiez si elle est vraie.',
      'Une personne hypocrite affiche des sentiments ou des intentions qui ne correspondent pas à ce qu’elle pense réellement.'
    ], [
      { title: 'Plaisante', text: 'un canular · une farce · une blague', tone: 'peach' },
      { title: 'Attitude', text: 'l’hypocrisie masque les intentions réelles.', tone: 'lilac' }
    ], [
      choice('Qu’est-ce qu’un canular ?', ['Une tromperie destinée à surprendre ou faire rire', 'Un compte rendu officiel', 'Une excuse sincère'], 'Une tromperie destinée à surprendre ou faire rire', 'Un canular est une plaisanterie qui prend la forme d’une tromperie.'),
      text('Complétez : Une personne qui dissimule ses intentions par de faux-semblants fait preuve d’______.', 'hypocrisie', 'L’hypocrisie consiste à masquer ses véritables pensées ou intentions.')
    ]),
    createCommunicationLesson('allusions', 'Allusions et sous-entendus', '74–77', 'Comprendre une remarque indirecte ou ironique.', [
      'Une allusion évoque un sujet sans le nommer directement. Le contexte et le ton aident à comprendre le sous-entendu.',
      'La forme négative peut être employée ironiquement pour exprimer le contraire ou minimiser une situation : « Ce n’est pas un petit effort ! »'
    ], [
      { title: 'Allusion', text: 'Tu vois ce que je veux dire ?', tone: 'lilac' },
      { title: 'Ironie', text: 'Le ton peut inverser le sens littéral.', tone: 'peach' }
    ], [
      choice('Qu’est-ce qu’un sous-entendu ?', ['Une idée suggérée indirectement', 'Une définition technique', 'Une consigne détaillée'], 'Une idée suggérée indirectement', 'Un sous-entendu est compris à partir du contexte sans être formulé clairement.'),
      text('Complétez : Une remarque indirecte qui évoque un sujet est une ______.', 'allusion', 'Une allusion fait référence à quelque chose sans le dire directement.')
    ]),
    createCommunicationLesson('bilan-2', 'Bilan 2 · Interactions', '78–79', 'Réviser les actes de parole utiles dans les échanges et les désaccords.', [
      'Dans une interaction, demandez des nouvelles, proposez votre aide, formulez une demande polie et répondez sans brusquer votre interlocuteur.',
      'En cas de désaccord, une écoute attentive et une reformulation peuvent aider à trouver un compromis.'
    ], [
      { title: 'Échange', text: 'écouter · reformuler · répondre', tone: 'mint' },
      { title: 'Désaccord', text: 'dialogue · médiation · compromis', tone: 'lilac' }
    ], [
      choice('Quelle démarche aide à résoudre un conflit ?', ['Écouter les points de vue', 'Répéter une rumeur', 'Interrompre chaque réponse'], 'Écouter les points de vue', 'L’écoute facilite le dialogue et la recherche d’un compromis.'),
      text('Complétez : Une solution acceptée par les parties est un ______.', 'compromis', 'Un compromis tient compte des intérêts de chaque partie.')
    ]),
    createCommunicationLesson('debat-opinion', 'Le débat et l’opinion', '80–85', 'Exprimer une opinion, la défendre et répondre à une objection.', [
      'Dans un débat, annoncez votre point de vue, puis appuyez-le sur des raisons ou des exemples. Nuancez votre propos et écoutez les arguments opposés.',
      'L’infinitif passé indique qu’une action est antérieure : « Après avoir étudié le dossier, elle a répondu. » Le subjonctif peut apparaître en tête de phrase pour exprimer une concession : « Qu’il soit en désaccord, nous en discuterons. »'
    ], [
      { title: 'Argumenter', text: 'À mon avis… · d’une part… d’autre part…', tone: 'lilac' },
      { title: 'Antériorité', text: 'après avoir examiné le dossier', tone: 'blue' }
    ], [
      choice('Quelle tournure exprime une action déjà achevée avant une autre ?', ['Après avoir lu le rapport', 'En lisant le rapport', 'Avant lire le rapport'], 'Après avoir lu le rapport', 'Après avoir lu est un infinitif passé, antérieur à l’action principale.'),
      text('Complétez : À mon ______, cette proposition mérite un débat.', 'avis', 'À mon avis introduit une opinion personnelle.')
    ]),
    createCommunicationLesson('dire-ne-pas-dire', 'Dire ou ne pas dire ?', '86–91', 'Rapporter une rumeur avec prudence et choisir de se taire ou de parler.', [
      'Une rumeur est une information qui circule sans être confirmée. Le conditionnel permet de marquer l’incertitude : « Il aurait changé de travail. »',
      'Pour clarifier une situation, on peut faire une mise au point ou parler franchement. Se taire peut éviter de diffuser une information non vérifiée.'
    ], [
      { title: 'Prudence', text: 'Il aurait… · selon certaines personnes…', tone: 'blue' },
      { title: 'Clarifier', text: 'faire une mise au point · parler franchement', tone: 'mint' }
    ], [
      choice('Quelle phrase présente une information incertaine ?', ['Il aurait changé de travail.', 'Il a changé de travail hier.', 'Il changera de travail demain.'], 'Il aurait changé de travail.', 'Le conditionnel peut indiquer que l’information rapportée n’est pas confirmée.'),
      text('Complétez : Une information non confirmée qui circule est une ______.', 'rumeur', 'Une rumeur circule sans preuve ou confirmation certaine.')
    ]),
    createCommunicationLesson('reagir-commenter', 'Réagir et commenter', '92–97', 'Réagir à un événement et soutenir une personne.', [
      'Pour commenter, choisissez une formule adaptée à la situation : exprimer la surprise, la contrariété, l’approbation ou l’inquiétude.',
      'L’impératif sert à donner un conseil ou un encouragement. « Tiens bon ! » soutient quelqu’un pendant une épreuve.'
    ], [
      { title: 'Réaction', text: 'Quelle surprise ! · C’est regrettable.', tone: 'peach' },
      { title: 'Encouragement', text: 'Tiens bon ! · Ne baisse pas les bras.', tone: 'mint' }
    ], [
      choice('Quelle formule exprime un encouragement ?', ['Tiens bon !', 'C’est fichu.', 'Ça ne va pas, la tête ?'], 'Tiens bon !', 'L’impératif « Tiens bon ! » encourage à persévérer.'),
      text('Complétez : Pour encourager une amie, on peut dire : « Ne baisse pas les ______ ! »', 'bras', '« Ne pas baisser les bras » signifie ne pas abandonner.')
    ]),
    createCommunicationLesson('projet', 'Parler d’un projet', '98–101', 'Présenter l’avancement d’un projet et ses étapes.', [
      'Pour présenter un projet, précisez son objectif, les étapes réalisées, les prochaines actions et les difficultés éventuelles.',
      'Pour demander un état d’avancement, dites « Où en est le projet ? » ou « Ça avance ? ». Un changement de situation peut nécessiter une adaptation.'
    ], [
      { title: 'Étapes', text: 'objectif · calendrier · réalisation · bilan', tone: 'lilac' },
      { title: 'Avancement', text: 'Où en est le projet ?', tone: 'blue' }
    ], [
      choice('Quelle question porte sur l’avancement d’un projet ?', ['Où en est le projet ?', 'À quoi sert cet outil ?', 'Quel temps fait-il ?'], 'Où en est le projet ?', 'Cette question demande le stade atteint par le projet.'),
      text('Complétez : Un projet se réalise en plusieurs ______.', 'étapes', 'Les étapes sont les différentes phases successives du projet.')
    ]),
    createCommunicationLesson('evaluer-travail', 'Évaluer un travail', '102–105', 'Évaluer la qualité d’un travail et formuler un avis nuancé.', [
      'Une évaluation peut porter sur la méthode, les résultats et la présentation. Pour critiquer, décrivez d’abord un point précis plutôt que de juger la personne.',
      '« Ni fait ni à faire » critique un travail très mal réalisé. À l’inverse, des éloges expriment une appréciation très positive.'
    ], [
      { title: 'Critique', text: 'Le résultat manque de clarté.', tone: 'peach' },
      { title: 'Éloge', text: 'Le travail est remarquable.', tone: 'mint' }
    ], [
      choice('Quelle expression critique un travail très mal réalisé ?', ['Ni fait ni à faire', 'À la dernière mode', 'Hors du commun'], 'Ni fait ni à faire', 'Cette expression familière signifie que le travail est mal fait.'),
      text('Complétez : Des paroles très élogieuses sont des ______.', 'éloges', 'Un éloge est une appréciation favorable.')
    ]),
    createCommunicationLesson('preferences', 'Préférence et indifférence', '106–109', 'Exprimer une préférence, une priorité ou l’absence d’intérêt.', [
      'Pour exprimer une préférence, employez préférer, aimer mieux ou avoir une préférence pour. Après préférer que, le subjonctif est fréquent : « Je préfère que nous partions tôt. »',
      'L’indifférence ou le dégoût se formule différemment : « Cela m’est égal » exprime l’absence de préférence, tandis que « je ne supporte pas » marque un rejet.'
    ], [
      { title: 'Préférence', text: 'Je préférerais partir plus tôt.', tone: 'lilac' },
      { title: 'Indifférence', text: 'Cela m’est égal.', tone: 'blue' }
    ], [
      choice('Quelle phrase exprime une préférence ?', ['Je préfère partir tôt.', 'Je n’ai aucune préférence.', 'Cela m’est égal.'], 'Je préfère partir tôt.', 'Préférer indique un choix privilégié.'),
      text('Complétez : Je préfère que nous ______ demain.', 'partions', 'Après préférer que, le subjonctif « nous partions » convient.')
    ]),
    createCommunicationLesson('gaffes', 'Gaffes et erreurs', '110–113', 'Reconnaître un malentendu ou une erreur et y réagir.', [
      'Une confusion ou un malentendu vient souvent d’une information mal comprise. Une gaffe est une parole ou un geste maladroit.',
      'Pour rectifier, expliquez calmement ce qui s’est passé et, si nécessaire, présentez vos excuses.'
    ], [
      { title: 'Erreur sociale', text: 'une gaffe · un faux pas', tone: 'peach' },
      { title: 'Clarification', text: 'Je me suis mal exprimé, voici ce que je voulais dire.', tone: 'mint' }
    ], [
      choice('Qu’est-ce qu’une gaffe ?', ['Une parole ou un geste maladroit', 'Une réussite professionnelle', 'Une décision soigneusement préparée'], 'Une parole ou un geste maladroit', 'Une gaffe est une maladresse qui peut embarrasser quelqu’un.'),
      text('Complétez : Une information mal comprise peut provoquer un ______.', 'malentendu', 'Un malentendu est une interprétation incorrecte d’un propos ou d’une situation.')
    ]),
    createCommunicationLesson('bilan-3', 'Bilan 3 · Opinions', '114–115', 'Réviser l’expression d’une opinion, d’une réaction et d’une préférence.', [
      'Pour exprimer une opinion, appuyez-vous sur des arguments et réagissez aux propos d’autrui sans confondre désaccord et attaque personnelle.',
      'Une préférence indique un choix ; une évaluation juge un travail ; une gaffe ou un malentendu peut demander une clarification.'
    ], [
      { title: 'Opinion', text: 'à mon avis · je considère que…', tone: 'lilac' },
      { title: 'Réaction', text: 'nuancer · clarifier · encourager', tone: 'blue' }
    ], [
      choice('Quelle expression introduit une opinion personnelle ?', ['À mon avis', 'À cause de', 'À peine'], 'À mon avis', '« À mon avis » annonce le point de vue de la personne qui parle.'),
      text('Complétez : Une parole ou un geste maladroit peut être une ______.', 'gaffe', 'Une gaffe est une maladresse sociale ou verbale.')
    ]),
    createCommunicationLesson('comportements', 'Les comportements', '116–121', 'Décrire des qualités, des défauts et des comportements.', [
      'Pour décrire une personne, distinguez ses qualités (avenant, remarquable) de ses défauts ou comportements inacceptables.',
      'La concession permet d’opposer deux faits tout en reconnaissant le premier : « Bien qu’il soit réservé, il se montre serviable. »'
    ], [
      { title: 'Qualité', text: 'avenant · serviable · remarquable', tone: 'mint' },
      { title: 'Concession', text: 'Bien qu’il soit discret, il est très chaleureux.', tone: 'lilac' }
    ], [
      choice('Quelle phrase exprime une concession ?', ['Bien qu’il soit réservé, il aide ses voisins.', 'Il aide ses voisins parce qu’il est réservé.', 'Il est réservé et il habite près d’ici.'], 'Bien qu’il soit réservé, il aide ses voisins.', 'Bien que introduit un fait malgré lequel l’action reste vraie.'),
      text('Complétez : Une personne agréable et accueillante peut être dite ______.', 'avenante', 'Avenant qualifie une personne aimable et accueillante.')
    ]),
    createCommunicationLesson('illusions', 'Illusions, apparences et réalités', '122–127', 'Distinguer l’apparence de la réalité et exprimer une désillusion.', [
      'L’apparence ne révèle pas toujours la réalité : une personne ou une chose peut « ne pas payer de mine » et pourtant avoir de grandes qualités.',
      'La concession et la restriction nuancent une attente : « Même si la façade est modeste, l’intérieur est lumineux. » Une désillusion survient lorsqu’une attente est déçue.'
    ], [
      { title: 'Apparence trompeuse', text: 'ne pas payer de mine', tone: 'peach' },
      { title: 'Déception', text: 'une attente déçue · une désillusion', tone: 'blue' }
    ], [
      choice('Que signifie « ne pas payer de mine » ?', ['Ne pas sembler impressionnant au premier regard', 'Avoir un prix très élevé', 'Refuser de payer une facture'], 'Ne pas sembler impressionnant au premier regard', 'L’expression décrit une apparence modeste ou peu remarquable.'),
      text('Complétez : Une attente déçue peut provoquer une ______.', 'désillusion', 'Une désillusion est la perte d’une illusion ou d’un espoir.')
    ]),
    createCommunicationLesson('manieres-moyens', 'Manières et moyens', '128–131', 'Expliquer comment agir et quels moyens employer.', [
      'Pour expliquer une méthode, précisez la manière : avec soin, rapidement, étape par étape. « Comment s’y prendre ? » demande quelle démarche adopter.',
      'Les moyens désignent les ressources ou les intermédiaires utilisés pour atteindre un objectif.'
    ], [
      { title: 'Manière', text: 'procéder avec méthode', tone: 'lilac' },
      { title: 'Moyen', text: 'par quel intermédiaire ? avec quelles ressources ?', tone: 'blue' }
    ], [
      choice('Quelle question demande la méthode à suivre ?', ['Comment s’y prendre ?', 'Que devient-il ?', 'Qu’est-ce qui lui manque ?'], 'Comment s’y prendre ?', 'Cette question porte sur la manière de procéder.'),
      text('Complétez : Pour savoir par quelle méthode agir, demandez comment ______.', 'procéder', 'Procéder signifie agir ou avancer selon une méthode.')
    ]),
    createCommunicationLesson('decouragement', 'Découragement, frustration et récupération', '132–135', 'Exprimer un échec temporaire, un effort ou le découragement.', [
      'Quand un effort n’aboutit pas, on peut se sentir découragé ou revenir bredouille. Ces expressions décrivent un résultat décevant, pas nécessairement un échec définitif.',
      'Pour parler d’un effort retrouvé, dites se ressaisir ou reprendre courage. Les pronoms personnels peuvent reprendre un complément déjà mentionné : « Je m’y remets. »'
    ], [
      { title: 'Découragement', text: 'Je n’y arriverai jamais !', tone: 'peach' },
      { title: 'Reprise', text: 'se ressaisir · reprendre courage', tone: 'mint' }
    ], [
      choice('Que signifie « revenir bredouille » ?', ['Revenir sans avoir obtenu ce qu’on cherchait', 'Revenir très tôt', 'Revenir avec plusieurs cadeaux'], 'Revenir sans avoir obtenu ce qu’on cherchait', 'Bredouille signifie sans résultat ou sans prise.'),
      text('Complétez : Après une pause, elle a repris courage et s’est ______.', 'ressaisie', 'Se ressaisir signifie reprendre le contrôle et retrouver son énergie.')
    ]),
    createCommunicationLesson('peurs', 'Soucis, appréhensions et peurs', '136–139', 'Exprimer une inquiétude, une appréhension ou une peur intense.', [
      'Les degrés de la peur varient : une appréhension est une inquiétude anticipée, tandis qu’une peur bleue est une peur très forte.',
      'Pour parler d’une inquiétude persistante, l’expression « se faire un sang d’encre » signifie s’inquiéter beaucoup.'
    ], [
      { title: 'Inquiétude', text: 'se faire un sang d’encre', tone: 'peach' },
      { title: 'Intensité', text: 'une appréhension · une peur bleue', tone: 'lilac' }
    ], [
      choice('Quelle expression signifie « s’inquiéter énormément » ?', ['Se faire un sang d’encre', 'Avoir de l’allure', 'Faire un canular'], 'Se faire un sang d’encre', 'Cette expression imagée signifie être très inquiet.'),
      text('Complétez : Une peur très intense peut être appelée une peur ______.', 'bleue', 'L’expression complète est « une peur bleue ».')
    ]),
    createCommunicationLesson('sentiments', 'Exprimer ses sentiments', '140–143', 'Nommer des sentiments et décrire la qualité d’un lien.', [
      'Pour exprimer des sentiments, nommez précisément ce que vous ressentez : admiration, affection, compassion ou inquiétude.',
      'Un lien peut être fort, distendu ou rompu. La compassion consiste à comprendre la souffrance d’autrui et à y être sensible.'
    ], [
      { title: 'Sentiments', text: 'admiration · affection · compassion', tone: 'peach' },
      { title: 'Liens', text: 'un lien fort · des liens distendus', tone: 'lilac' }
    ], [
      choice('Quel mot exprime la sensibilité à la souffrance d’autrui ?', ['La compassion', 'La rancune', 'L’indifférence'], 'La compassion', 'La compassion est un sentiment de compréhension et de solidarité envers une personne qui souffre.'),
      text('Complétez : Quand une relation s’affaiblit, les liens deviennent ______.', 'distendus', 'Distendus signifie moins étroits ou moins forts.')
    ]),
    createCommunicationLesson('bilan-4', 'Bilan 4 · Comportements et émotions', '144–145', 'Réviser la description des comportements et l’expression des émotions.', [
      'Pour parler d’une personne, distinguez ses qualités, ses défauts et les émotions qu’elle suscite. Une apparence ne suffit pas toujours à juger son caractère.',
      'La concession permet d’exprimer une réserve tout en reconnaissant un fait : « Bien qu’il soit inquiet, il garde son calme. »'
    ], [
      { title: 'Comportement', text: 'qualité · défaut · attitude', tone: 'blue' },
      { title: 'Émotion', text: 'inquiétude · compassion · admiration', tone: 'peach' }
    ], [
      choice('Quelle phrase oppose deux faits par concession ?', ['Bien qu’il soit inquiet, il reste calme.', 'Il reste calme parce qu’il est inquiet.', 'Il est inquiet et il est calme.'], 'Bien qu’il soit inquiet, il reste calme.', 'Bien que introduit une concession entre deux faits.'),
      text('Complétez : Comprendre la souffrance d’autrui et y être sensible, c’est éprouver de la ______.', 'compassion', 'La compassion est la sensibilité à la souffrance d’une autre personne.')
    ]),
    createCommunicationLesson('nuancer', 'Nuancer, atténuer et préciser', '146–149', 'Modérer une critique et préciser le degré d’une qualité.', [
      'Pour atténuer un jugement, ajoutez quelque peu, légèrement ou plutôt. Ces adverbes réduisent la force d’une affirmation.',
      'Pour préciser, choisissez un terme adapté au degré : minutieux est souvent positif, alors que tatillon suggère un souci excessif du détail.'
    ], [
      { title: 'Atténuation', text: 'quelque peu · légèrement · plutôt', tone: 'blue' },
      { title: 'Nuance', text: 'minutieux ≠ tatillon', tone: 'lilac' }
    ], [
      choice('Quel adverbe atténue une critique ?', ['Légèrement', 'Absolument', 'Jamais'], 'Légèrement', 'Légèrement réduit l’intensité de l’adjectif ou du jugement.'),
      text('Complétez : Une personne qui s’attache excessivement aux petits détails est ______.', 'tatillonne', 'Tatillonne décrit une personne excessivement pointilleuse.')
    ]),
    createCommunicationLesson('expliquer', 'Expliquer et comprendre', '150–155', 'Demander une explication, éclaircir un malentendu et interpréter des faits.', [
      'Pour demander une explication, posez une question précise sur les faits ou leur cause. Une mise au point clarifie une situation confuse.',
      'Distinguez les preuves de l’intuition : un pressentiment peut guider une enquête, mais il ne remplace pas la vérification.'
    ], [
      { title: 'Clarifier', text: 'Pourriez-vous préciser ce qui s’est passé ?', tone: 'lilac' },
      { title: 'Vérifier', text: 'un indice · une preuve · un pressentiment', tone: 'blue' }
    ], [
      choice('Quel document ou échange clarifie une situation ?', ['Une mise au point', 'Un sous-entendu', 'Un canular'], 'Une mise au point', 'Une mise au point précise ou corrige les faits.'),
      text('Complétez : Une intuition concernant un événement à venir est un ______.', 'pressentiment', 'Un pressentiment est une impression intuitive.')
    ]),
    createCommunicationLesson('reflechir-argumenter', 'Réfléchir et argumenter', '156–159', 'Construire un raisonnement et soutenir une conclusion.', [
      'Un raisonnement organise des faits et des arguments pour aboutir à une conclusion. Distinguez une hypothèse d’un fait démontré.',
      'Pour poser une question sur une action envisagée, l’infinitif peut suivre certains verbes : « Que faire ? », « Comment réagir ? »'
    ], [
      { title: 'Argumentation', text: 'thèse · arguments · exemples · conclusion', tone: 'lilac' },
      { title: 'Réflexion', text: 'examiner les faits avant de conclure', tone: 'blue' }
    ], [
      choice('Que faut-il faire avant de tirer une conclusion solide ?', ['Examiner les faits et les arguments', 'Répéter une rumeur', 'Ignorer les preuves'], 'Examiner les faits et les arguments', 'Un raisonnement fiable s’appuie sur des faits et des arguments examinés.'),
      text('Complétez : Une affirmation qui doit être démontrée est une ______.', 'hypothèse', 'Une hypothèse est une proposition à vérifier ou à démontrer.')
    ]),
    createCommunicationLesson('comparaisons', 'Établir des comparaisons', '160–165', 'Comparer des œuvres, des modèles et des situations.', [
      'Pour comparer, relevez les ressemblances et les différences. « Cela revient au même » indique que deux choses ont un résultat ou un sens équivalent.',
      'Les termes modèle, copie, imitation et original permettent de préciser la relation entre deux créations.'
    ], [
      { title: 'Ressemblance', text: 'être semblable à · ressembler à', tone: 'mint' },
      { title: 'Différence', text: 'se distinguer de · être différent de', tone: 'peach' }
    ], [
      choice('Quelle expression signifie que deux résultats sont équivalents ?', ['Cela revient au même.', 'Cela ne tient pas la route.', 'Cela tombe à l’eau.'], 'Cela revient au même.', '« Cela revient au même » indique une équivalence.'),
      text('Complétez : Une œuvre qui reproduit un modèle est une ______.', 'copie', 'Une copie reproduit ou imite un modèle.')
    ]),
    createCommunicationLesson('incredulite', 'Incrédulité et certitudes', '166–169', 'Exprimer la surprise, le doute ou un degré de certitude.', [
      'L’incrédulité montre qu’une information semble difficile à croire : « Tu plaisantes ? » La certitude peut s’appuyer sur des preuves ou des indices.',
      'Pour vérifier une affirmation, cherchez des éléments fiables avant de conclure à l’innocence ou à la culpabilité.'
    ], [
      { title: 'Surprise', text: 'C’est incroyable ! · Tu plaisantes ?', tone: 'peach' },
      { title: 'Certitude', text: 'une preuve · un indice vérifiable', tone: 'blue' }
    ], [
      choice('Quelle phrase exprime l’incrédulité ?', ['Tu plaisantes ?', 'Je suis certain du résultat.', 'Je donne mon accord.'], 'Tu plaisantes ?', 'Cette question exprime le doute ou la surprise devant une information.'),
      text('Complétez : Un élément qui permet d’établir la vérité est une ______.', 'preuve', 'Une preuve permet de justifier ou de confirmer un fait.')
    ]),
    createCommunicationLesson('causes', 'Causes, excuses et conséquences', '170–173', 'Identifier une cause et distinguer une excuse d’une conséquence.', [
      'Une cause explique pourquoi un fait se produit. Une conséquence est ce qui en résulte. Des connecteurs comme parce que, donc et par conséquent rendent le lien explicite.',
      'Une excuse peut expliquer un comportement, mais elle ne constitue pas toujours une justification suffisante.'
    ], [
      { title: 'Cause', text: 'parce que · à cause de · grâce à', tone: 'blue' },
      { title: 'Conséquence', text: 'donc · ainsi · par conséquent', tone: 'lilac' }
    ], [
      choice('Quel connecteur introduit une conséquence ?', ['Par conséquent', 'Bien que', 'À condition que'], 'Par conséquent', 'Par conséquent annonce le résultat d’un fait précédent.'),
      text('Complétez : Le déclencheur d’un événement est sa ______.', 'cause', 'La cause est l’élément qui provoque ou explique un événement.')
    ]),
    createCommunicationLesson('conditions', 'Conditions, hypothèses et probabilités', '174–177', 'Formuler une condition, une hypothèse et une conséquence possible.', [
      'Une condition précise ce qui doit être vrai pour qu’une action ait lieu : « Si la route est dégagée, nous partirons. »',
      'Pour évoquer une situation hypothétique, si + imparfait se combine souvent avec le conditionnel : « Si nous avions le temps, nous visiterions la région. »'
    ], [
      { title: 'Condition réelle', text: 'Si le temps le permet, nous partirons.', tone: 'mint' },
      { title: 'Hypothèse', text: 'Si j’avais le choix, je resterais.', tone: 'lilac' }
    ], [
      choice('Quelle phrase exprime une hypothèse ?', ['Si j’avais le choix, je resterais.', 'J’ai le choix et je reste.', 'Je suis resté hier.'], 'Si j’avais le choix, je resterais.', 'Si + imparfait peut introduire une hypothèse suivie du conditionnel.'),
      text('Complétez : Si nous avions une voiture, nous ______ plus souvent.', 'partirions', 'Avec si + imparfait, le conditionnel « partirions » exprime le résultat hypothétique.')
    ]),
    createCommunicationLesson('bilan-5', 'Bilan 5 · Raisonnement', '178–179', 'Réviser l’argumentation, les comparaisons, les causes et les hypothèses.', [
      'Un raisonnement clair distingue les faits des hypothèses, relie les causes à leurs conséquences et s’appuie sur des arguments.',
      'Pour comparer, nuancer ou exprimer une condition, choisissez des connecteurs précis et vérifiez que la conclusion découle des éléments présentés.'
    ], [
      { title: 'Démontrer', text: 'faits · arguments · conclusion', tone: 'blue' },
      { title: 'Relier', text: 'cause · conséquence · condition', tone: 'lilac' }
    ], [
      choice('Quel élément vient généralement à la fin d’une argumentation ?', ['La conclusion', 'Une rumeur non vérifiée', 'Une question sans rapport'], 'La conclusion', 'La conclusion résume le raisonnement et découle des arguments.'),
      text('Complétez : Un énoncé qui explique pourquoi un fait se produit indique sa ______.', 'cause', 'La cause est l’origine ou l’explication d’un fait.')
    ]),
    createCommunicationLesson('risques', 'Risques, dangers et nécessités', '180–185', 'Évaluer un risque et exprimer une nécessité ou une obligation.', [
      'Avant une action risquée, évaluez les dangers, les ressources et les solutions de secours. Un projet périlleux comporte des risques importants.',
      'La nécessité peut s’exprimer avec devoir, il faut ou être obligé de. « Ne pas y couper » indique qu’on ne peut pas éviter quelque chose. Dans un registre familier, l’imparfait peut remplacer le conditionnel pour adoucir une demande.'
    ], [
      { title: 'Risque', text: 'un danger · une épreuve de force', tone: 'peach' },
      { title: 'Nécessité', text: 'il faut · devoir · être obligé de', tone: 'lilac' }
    ], [
      choice('Quelle expression indique une nécessité ?', ['Il faut vérifier les risques.', 'Il se peut que le ciel se couvre.', 'C’est une belle occasion.'], 'Il faut vérifier les risques.', 'Il faut exprime ici une obligation ou une nécessité.'),
      text('Complétez : Un projet qui comporte beaucoup de dangers est ______.', 'périlleux', 'Périlleux signifie dangereux ou risqué.')
    ]),
    createCommunicationLesson('action-inaction', 'Action et inaction', '186–189', 'Décrire l’énergie, l’effort, l’inaction et le travail bâclé.', [
      'Agir demande de l’énergie et des efforts. À l’inverse, la flemme exprime familièrement le manque d’envie d’agir.',
      'Un travail bâclé est fait trop vite et sans soin. Pour l’évaluer, distinguez la quantité d’efforts de la qualité du résultat.'
    ], [
      { title: 'Action', text: 'se mobiliser · déployer de l’énergie', tone: 'mint' },
      { title: 'Inaction', text: 'avoir la flemme · remettre à plus tard', tone: 'peach' }
    ], [
      choice('Que signifie « un rapport bâclé » ?', ['Un rapport fait sans soin', 'Un rapport très complet', 'Un rapport remis en avance'], 'Un rapport fait sans soin', 'Bâclé signifie réalisé trop rapidement et sans attention.'),
      text('Complétez : En langage familier, le manque d’envie d’agir, c’est la ______.', 'flemme', 'La flemme désigne familièrement le manque d’énergie ou d’envie.')
    ]),
    createCommunicationLesson('reussites-echecs', 'Réussites et échecs', '190–193', 'Présenter une réussite, un échec ou une difficulté de parcours.', [
      'Pour parler d’une réussite, décrivez le résultat et les efforts qui l’ont rendu possible : un triomphe marque un succès remarquable.',
      'Une prouesse est une performance remarquable. Un échec peut être ponctuel : « être collé à un examen » signifie échouer ; « être en mauvaise voie » annonce une évolution défavorable.'
    ], [
      { title: 'Succès', text: 'réussir · remporter un triomphe', tone: 'mint' },
      { title: 'Difficulté', text: 'échouer · être en mauvaise voie', tone: 'peach' }
    ], [
      choice('Que signifie « être collé à un examen » ?', ['Échouer à l’examen', 'Obtenir la meilleure note', 'S’inscrire à l’examen'], 'Échouer à l’examen', 'Dans ce contexte familier, être collé signifie échouer à un examen.'),
      text('Complétez : Une réussite exceptionnelle peut être appelée un ______.', 'triomphe', 'Un triomphe est un succès éclatant.')
    ]),
    createCommunicationLesson('competences', 'Connaissances et compétences', '194–197', 'Décrire des compétences, des connaissances et leurs limites.', [
      'Les connaissances correspondent à ce que l’on sait ; les compétences, à ce que l’on sait faire. Un cadre polyvalent peut exercer plusieurs fonctions.',
      'Pour exprimer une limite, dites « Je n’y connais rien » ou « Je ne suis pas à la hauteur de cette tâche ».'
    ], [
      { title: 'Savoir', text: 'connaissances · savoirs théoriques', tone: 'blue' },
      { title: 'Savoir-faire', text: 'compétences · expérience pratique', tone: 'mint' }
    ], [
      choice('Que décrit une compétence ?', ['Ce que l’on sait faire', 'Uniquement ce que l’on ignore', 'Le salaire d’un poste'], 'Ce que l’on sait faire', 'Une compétence est une capacité à réaliser une tâche.'),
      text('Complétez : Une personne qui peut exercer plusieurs fonctions est ______.', 'polyvalente', 'Polyvalent signifie capable d’assumer plusieurs rôles ou tâches.')
    ]),
    createCommunicationLesson('emploi', 'L’emploi', '198–201', 'Parler de la recherche d’emploi, du recrutement et des candidatures.', [
      'Une recherche d’emploi comprend la consultation d’offres, l’envoi d’une candidature et un entretien éventuel.',
      'Le recrutement désigne le processus par lequel un employeur sélectionne une personne pour un poste. Une candidature présente l’expérience et les compétences du candidat.'
    ], [
      { title: 'Candidature', text: 'offre · CV · lettre · entretien', tone: 'lilac' },
      { title: 'Recrutement', text: 'sélectionner un candidat pour un poste', tone: 'blue' }
    ], [
      choice('À quoi sert un entretien d’embauche ?', ['À échanger sur un poste et une candidature', 'À acheter un logement', 'À organiser un déménagement'], 'À échanger sur un poste et une candidature', 'L’entretien permet à l’employeur et au candidat de discuter du poste.'),
      text('Complétez : Le processus de sélection pour un poste est le ______.', 'recrutement', 'Le recrutement consiste à choisir une personne pour un emploi.')
    ]),
    createCommunicationLesson('argent', 'L’argent', '202–207', 'Comparer des prix, parler du niveau de vie et de dépenses.', [
      'Pour comparer des prix, précisez le montant et la valeur reçue. « Coûter les yeux de la tête » signifie coûter très cher.',
      'Le niveau de vie décrit les ressources et les conditions matérielles d’une personne. « Être fauché » est une expression familière pour manquer d’argent ; « un rond » désigne familièrement une somme d’argent.'
    ], [
      { title: 'Prix élevé', text: 'coûter les yeux de la tête', tone: 'peach' },
      { title: 'Manque d’argent', text: 'être fauché · avoir un niveau de vie modeste', tone: 'lilac' }
    ], [
      choice('Quelle expression signifie « coûter très cher » ?', ['Coûter les yeux de la tête', 'Revenir bredouille', 'Faire une mise au point'], 'Coûter les yeux de la tête', 'Cette expression familière indique un prix très élevé.'),
      text('Complétez : En langage familier, une personne sans argent peut dire : « Je suis ______. »', 'fauché', 'Fauché signifie familièrement sans argent.')
    ]),
    createCommunicationLesson('bilan-6', 'Bilan 6 · Travail et société', '208–209', 'Réviser les thèmes du travail, des compétences, de l’emploi et de l’argent.', [
      'Dans le monde professionnel, décrivez les compétences et les responsabilités avec précision. Une candidature et un entretien font partie d’une recherche d’emploi.',
      'Pour parler de la société et des finances, comparez les prix et les conditions de vie sans confondre coût, ressources et valeur.'
    ], [
      { title: 'Vie professionnelle', text: 'compétences · candidature · recrutement', tone: 'lilac' },
      { title: 'Finances', text: 'prix · dépenses · niveau de vie', tone: 'blue' }
    ], [
      choice('Quel terme désigne la sélection d’une personne pour un poste ?', ['Le recrutement', 'La rancune', 'La médiation'], 'Le recrutement', 'Le recrutement est le processus de sélection pour un emploi.'),
      text('Complétez : Les ressources et les conditions matérielles décrivent le niveau de ______.', 'vie', 'Le niveau de vie concerne les ressources et les conditions matérielles.')
    ]),
    createCommunicationLesson('temps', 'Le temps qui passe', '210–213', 'Parler de la gestion du temps, des retards et des contretemps.', [
      'Pour organiser son temps, distinguez les tâches urgentes et les tâches secondaires. Un contretemps est un événement imprévu qui retarde un projet.',
      'Les expressions de temps précisent la durée, la fréquence ou le moment : « depuis une heure », « d’ici demain », « à temps ».'
    ], [
      { title: 'Organisation', text: 'priorité · emploi du temps · échéance', tone: 'blue' },
      { title: 'Imprévu', text: 'un retard · un contretemps', tone: 'peach' }
    ], [
      choice('Qu’est-ce qu’un contretemps ?', ['Un imprévu qui retarde une action', 'Une tâche terminée en avance', 'Un choix définitif'], 'Un imprévu qui retarde une action', 'Un contretemps perturbe ou retarde le déroulement prévu.'),
      text('Complétez : Pour organiser ses rendez-vous, on consulte son emploi du ______.', 'temps', 'L’emploi du temps présente les activités prévues et leurs horaires.')
    ]),
    createCommunicationLesson('memoire', 'Mémoire, oubli et regrets', '214–219', 'Parler d’un souvenir, d’un oubli et d’un regret.', [
      'Pour parler de mémoire, on peut dire qu’un nom nous échappe ou qu’un souvenir revient. Les doubles pronoms personnels remplacent deux compléments : « Je le lui ai rappelé. »',
      'Le conditionnel passé exprime souvent un regret : « J’aurais dû lui téléphoner. » La rancune est un ressentiment qui persiste.'
    ], [
      { title: 'Mémoire', text: 'un souvenir revient · un nom m’échappe', tone: 'blue' },
      { title: 'Regret', text: 'J’aurais dû… · je m’en veux', tone: 'peach' }
    ], [
      choice('Quelle phrase exprime un regret ?', ['J’aurais dû lui téléphoner.', 'Je lui téléphone maintenant.', 'Je lui téléphonerai demain.'], 'J’aurais dû lui téléphoner.', 'Le conditionnel passé exprime ici le regret d’une action non réalisée.'),
      text('Complétez : Un ressentiment qui dure peut devenir de la ______.', 'rancune', 'La rancune est un ressentiment durable envers quelqu’un.')
    ]),
    createCommunicationLesson('hasards', 'Hasards, fatalisme et opportunités', '220–225', 'Raconter un hasard, une occasion ou une situation de malchance.', [
      'Un hasard est un événement imprévu qui ne semble pas résulter d’un plan. Une opportunité est une occasion favorable qu’on peut saisir.',
      'Le fatalisme consiste à accepter les événements comme inévitables. Les expressions imagées peuvent exprimer la chance ou la malchance.'
    ], [
      { title: 'Chance', text: 'un heureux hasard · saisir une occasion', tone: 'mint' },
      { title: 'Malchance', text: 'quelle déveine !', tone: 'peach' }
    ], [
      choice('Que signifie « saisir une occasion » ?', ['Profiter d’une opportunité', 'Laisser passer un rendez-vous', 'Refuser une proposition sans l’écouter'], 'Profiter d’une opportunité', 'Saisir une occasion signifie profiter d’une situation favorable.'),
      text('Complétez : Un événement imprévu et non planifié relève du ______.', 'hasard', 'Le hasard désigne ce qui arrive sans être prévu.')
    ]),
    createCommunicationLesson('mode', 'Les effets de mode', '226–229', 'Décrire une tendance et ce qui est démodé ou désuet.', [
      'Une tendance est un goût ou une pratique qui se répand à une époque. Une tenue « très tendance » suit la mode du moment.',
      'Démodé signifie qui n’est plus à la mode ; désuet qualifie un mot ou un usage devenu ancien.'
    ], [
      { title: 'Tendance actuelle', text: 'à la mode · tendance', tone: 'mint' },
      { title: 'Ancien usage', text: 'démodé · désuet · obsolète', tone: 'peach' }
    ], [
      choice('Quel adjectif qualifie un usage devenu ancien ?', ['Désuet', 'Tendance', 'Polyvalent'], 'Désuet', 'Désuet qualifie quelque chose qui n’est plus en usage.'),
      text('Complétez : Une tenue qui suit la mode du moment est ______.', 'tendance', 'Tendance signifie à la mode ou conforme aux goûts actuels.')
    ]),
    createCommunicationLesson('avenir', 'Perspectives d’avenir', '230–233', 'Évoquer des changements à venir et des résultats attendus.', [
      'Pour parler de l’avenir proche, utilisez des marqueurs comme bientôt, prochainement ou être sur le point de. « Sous huitaine » signifie dans les huit jours environ. Une perspective est une possibilité envisagée.',
      'Un résultat prometteur laisse espérer une évolution favorable. En science, les résultats doivent être vérifiés avant d’être présentés comme certains.'
    ], [
      { title: 'Avenir proche', text: 'bientôt · prochainement · être sur le point de', tone: 'blue' },
      { title: 'Évolution favorable', text: 'prometteur · progrès · perspective', tone: 'mint' }
    ], [
      choice('Que signifie un résultat prometteur ?', ['Qu’il laisse espérer une évolution favorable', 'Qu’il est déjà oublié', 'Qu’il est impossible à vérifier'], 'Qu’il laisse espérer une évolution favorable', 'Prometteur signifie qu’un résultat donne de bonnes raisons d’espérer.'),
      text('Complétez : Une possibilité envisagée pour l’avenir est une ______.', 'perspective', 'Une perspective est une évolution ou une possibilité que l’on envisage.')
    ]),
    createCommunicationLesson('bilan-7', 'Bilan 7 · Passage du temps', '234–235', 'Réviser le temps qui passe, les souvenirs, les occasions et l’avenir.', [
      'Pour raconter le passage du temps, évoquez les contretemps, les souvenirs, les regrets et les occasions saisies ou manquées.',
      'Les perspectives d’avenir restent des possibilités : un résultat prometteur donne de l’espoir sans garantir la suite.'
    ], [
      { title: 'Passé', text: 'souvenir · oubli · regret', tone: 'blue' },
      { title: 'Avenir', text: 'occasion · perspective · résultat prometteur', tone: 'mint' }
    ], [
      choice('Quelle expression décrit un événement imprévu qui retarde un projet ?', ['Un contretemps', 'Un éloge', 'Une copie'], 'Un contretemps', 'Un contretemps est un imprévu qui perturbe le déroulement prévu.'),
      text('Complétez : Un résultat qui laisse espérer une suite favorable est ______.', 'prometteur', 'Prometteur qualifie un résultat qui laisse espérer une évolution favorable.')
    ])
  ],
  finalTest: [
    choice('Quelle expression signifie « une très grande quantité de personnes » ?', ['Une foule de personnes', 'Un peu de personnes', 'À peine des personnes'], 'Une foule de personnes', 'Une foule désigne un grand nombre de personnes.'),
    choice('Quelle phrase exprime une demande polie ?', ['Pourriez-vous déplacer la réunion ?', 'Déplacez la réunion immédiatement.', 'Vous déplacez la réunion.'], 'Pourriez-vous déplacer la réunion ?', 'Le conditionnel rend la demande plus courtoise.'),
    choice('Que signifie « revenir bredouille » ?', ['Revenir sans résultat', 'Revenir avec une récompense', 'Revenir très tard'], 'Revenir sans résultat', 'Bredouille signifie sans avoir obtenu ce que l’on cherchait.'),
    choice('Quelle phrase rapporte une information incertaine ?', ['Il aurait changé de poste.', 'Il a changé de poste hier.', 'Il changera de poste demain.'], 'Il aurait changé de poste.', 'Le conditionnel peut signaler une information non confirmée.'),
    choice('Quel connecteur introduit une conséquence ?', ['Par conséquent', 'Bien que', 'À condition que'], 'Par conséquent', 'Par conséquent introduit le résultat d’une action ou d’un fait.'),
    choice('Quelle phrase exprime une hypothèse ?', ['Si j’avais le temps, je participerais.', 'J’ai le temps et je participe.', 'Je participerai demain.'], 'Si j’avais le temps, je participerais.', 'Si + imparfait suivi du conditionnel présente une situation hypothétique.'),
    choice('Que signifie « ne pas payer de mine » ?', ['Ne pas sembler remarquable au premier regard', 'Coûter très cher', 'Ne pas avoir d’argent'], 'Ne pas sembler remarquable au premier regard', 'L’expression concerne une apparence modeste ou peu impressionnante.'),
    choice('Quel terme désigne un ressentiment durable ?', ['La rancune', 'La compassion', 'Le hasard'], 'La rancune', 'La rancune est un ressentiment qui persiste.'),
    choice('Comment appelle-t-on une période de forte chaleur ?', ['Une canicule', 'Une gelée', 'Un contretemps'], 'Une canicule', 'Une canicule est une période de chaleur exceptionnellement forte.'),
    choice('Que signifie « assumer ses responsabilités » ?', ['Répondre de ses actes', 'Éviter toute explication', 'Accuser une autre personne'], 'Répondre de ses actes', 'Assumer ses responsabilités signifie reconnaître son rôle et répondre de ses actes.'),
    text('Complétez : Pour nuancer un adjectif, on peut employer « ______ » ou « quelque peu ».', 'légèrement', 'Légèrement et quelque peu atténuent la force d’un adjectif.'),
    text('Complétez : Une information non confirmée qui circule est une ______.', 'rumeur', 'Une rumeur circule sans être établie ou confirmée.'),
    text('Complétez : Une solution acceptable pour les parties en conflit est un ______.', 'compromis', 'Un compromis tient compte des intérêts de chaque partie.'),
    text('Complétez : Un événement imprévu qui retarde une action est un ______.', 'contretemps', 'Un contretemps est un imprévu qui perturbe le déroulement prévu.'),
    choice('Ces deux phrases ont-elles un sens équivalent : « Elle est fauchée » / « Elle manque d’argent » ?', ['Oui, les deux phrases indiquent un manque d’argent.', 'Non, la première indique une réussite.', 'Non, la seconde indique un héritage.'], 'Oui, les deux phrases indiquent un manque d’argent.', 'Fauchée signifie familièrement sans argent.'),
    choice('Quel est le contraire de « elle accepte volontiers » ?', ['Elle refuse.', 'Elle remercie.', 'Elle propose son aide.'], 'Elle refuse.', 'Refuser est le contraire d’accepter.'),
    text('Complétez le dialogue : « Tu as froid ? » — « Oui, je vais me ______. »', 'couvrir', 'Se couvrir protège du froid.'),
    choice('Trouvez une autre manière de dire « Il a échoué à l’examen ».', ['Il a été collé à l’examen.', 'Il a fait un triomphe à l’examen.', 'Il a animé l’examen.'], 'Il a été collé à l’examen.', 'Dans un registre familier, être collé à un examen signifie échouer.'),
    choice('Le rapport est bâclé et incomplet. Quel commentaire convient ?', ['Il ne s’est pas foulé.', 'Il a fait un triomphe.', 'Il est tiré à quatre épingles.'], 'Il ne s’est pas foulé.', 'Ne pas se fouler signifie ne pas faire beaucoup d’efforts.'),
    choice('Quel synonyme familier de « je pars » est présenté dans le cours ?', ['Je file !', 'Je me remets.', 'Je suis au point mort.'], 'Je file !', 'Filer signifie partir rapidement dans un registre familier.'),
    text('Complétez : Un soutien constant est un soutien sans ______.', 'faille', 'L’expression « sans faille » signifie constant et solide.'),
    choice('Associez l’expression à son sens : « avoir du mal à joindre les deux bouts » signifie…', ['Avoir des difficultés financières.', 'Avoir beaucoup de temps libre.', 'Réussir un examen.'], 'Avoir des difficultés financières.', 'Joindre les deux bouts signifie parvenir difficilement à équilibrer son budget.'),
    text('Réécrivez avec si + imparfait : « Tu pourrais m’aider. » — « Si tu ______, tu pourrais m’aider. »', 'voulais', 'Une proposition atténuée peut commencer par si + imparfait : si tu voulais.'),
    choice('Choisissez le terme familier : « Il n’a plus un ______ » signifie qu’il n’a plus d’argent.', ['rond', 'hameau', 'gérondif'], 'rond', 'Un rond désigne familièrement une somme d’argent ; ne plus avoir un rond signifie ne plus avoir d’argent.')
  ]
});
})();
