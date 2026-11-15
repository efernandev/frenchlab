window.eduardingoCourses = window.eduardingoCourses || [];

const communicationA1Question = (type, prompt, answer, explanation, choices) => ({
  type,
  prompt,
  ...(choices ? { choices } : {}),
  answer,
  explanation,
});

const communicationA1VraiFaux = (prompt, isTrue, explanation) =>
  communicationA1Question('choice', `Vrai ou faux : ${prompt}`, isTrue ? 'Vrai' : 'Faux', explanation, ['Vrai', 'Faux']);

const communicationA1Lessons = [
  {
    id: 'demander-des-articles',
    title: 'Demander des articles',
    sourcePages: '8–11',
    goal: 'Demander poliment des produits et choisir les articles adaptés au genre et au nombre.',
    explanation: [
      'Pour commander, on peut dire « Je voudrais… », « Je vais prendre… » ou simplement nommer le produit avec « s’il vous plaît ».',
      'Un nom masculin prend généralement un ou des ; un nom féminin, une ou des. Au pluriel, le nom prend souvent un s.',
    ],
    cards: [
      { title: 'Je voudrais…', text: 'Une formule polie pour demander un produit.', tone: 'lilac' },
      { title: 'un croissant · une tarte · des gâteaux', text: 'L’article s’accorde avec le genre et le nombre du nom.', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('choice', 'Quelle demande est polie ?', 'Je voudrais une brioche, s’il vous plaît.', '« Je voudrais » est une formule polie pour demander un produit.', ['Donne une brioche.', 'Je voudrais une brioche, s’il vous plaît.', 'Une brioche, tu.']),
      communicationA1Question('text', 'Complétez avec l’article correct : ___ tarte aux fraises.', 'une', '« Tarte » est un nom féminin singulier : on dit « une tarte ».'),
      communicationA1Question('text', 'Mettez « un gâteau » au pluriel.', 'des gâteaux', 'Au pluriel, l’article devient « des » et « gâteau » prend un x : « des gâteaux ».'),
    ],
  },
  {
    id: 'parler-des-quantites',
    title: 'Parler des quantités',
    sourcePages: '12–15',
    goal: 'Indiquer une quantité précise ou indéfinie au marché et à l’épicerie.',
    explanation: [
      'Pour une quantité non précisée, on emploie du, de la, de l’ ou des : « du jambon », « de la confiture », « des pommes ». ',
      'Après une quantité précise, on utilise de ou d’ : « un kilo de pommes », « beaucoup d’eau ». ',
    ],
    cards: [
      { title: 'Quantité indéfinie', text: 'du fromage · de la salade · des tomates', tone: 'mint' },
      { title: 'Quantité précise', text: 'un kilo de pommes · une bouteille d’eau', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : Je voudrais ___ fromage.', 'du', '« Fromage » est masculin et la quantité n’est pas précisée : « du fromage ».'),
      communicationA1Question('text', 'Complétez : un kilo ___ pommes.', 'de', 'Après « un kilo », on emploie « de » : « un kilo de pommes ».'),
      communicationA1Question('choice', 'Quelle phrase indique une quantité précise ?', 'Il me faut deux cents grammes de beurre.', '« Deux cents grammes » indique une quantité précise ; on dit « de beurre ».', ['Il me faut du beurre.', 'Il me faut deux cents grammes de beurre.', 'Il me faut beurre.']),
    ],
  },
  {
    id: 'demander-le-prix',
    title: 'Demander le prix',
    sourcePages: '16–17',
    goal: 'Demander et comprendre le prix d’un article.',
    explanation: [
      'Pour demander le prix, on dit « Combien coûte ce cahier ? » ou « Ça coûte combien ? ». ',
      'Après « coûter », le sujet peut être singulier (« coûte ») ou pluriel (« coûtent »). Pour demander le prix de plusieurs articles, « Combien coûtent… ? » convient.',
    ],
    cards: [
      { title: 'Combien coûte… ?', text: 'Question sur le prix d’un article.', tone: 'lilac' },
      { title: 'Combien coûtent… ?', text: 'Question sur le prix de plusieurs articles.', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : Combien ___ ce stylo ?', 'coûte', '« Ce stylo » est au singulier : le verbe est « coûte ».'),
      communicationA1Question('text', 'Complétez : Combien ___ ces cahiers ?', 'coûtent', '« Ces cahiers » est au pluriel : le verbe est « coûtent ».'),
      communicationA1Question('choice', 'Quelle question demande le prix ?', 'Combien coûte cette carte ?', '« Combien coûte… ? » sert à demander le prix.', ['Où est cette carte ?', 'Combien coûte cette carte ?', 'Quand ferme cette carte ?']),
    ],
  },
  {
    id: 'passer-une-commande',
    title: 'Passer une commande',
    sourcePages: '18–21',
    goal: 'Commander chez le poissonnier ou au café et parler de ce que l’on prend.',
    explanation: [
      'Pour exprimer le but, « pour » est suivi d’un nom : « un plateau pour six personnes ». ',
      'Au présent, on dit « j’ai », « je prends » et « je vais ». « Je vais prendre » est une formule courante pour commander.',
    ],
    cards: [
      { title: 'pour six personnes', text: '« Pour » introduit ici le but ou le destinataire.', tone: 'mint' },
      { title: 'Je prends · je vais prendre', text: 'Deux façons de commander au café.', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : Un plateau de fruits de mer ___ six personnes.', 'pour', '« Pour » indique le nombre de personnes destinataires de la commande.'),
      communicationA1Question('text', 'Complétez : Au café, je ___ un thé. (prendre)', 'prends', 'Au présent, « prendre » se conjugue « je prends ».'),
      communicationA1Question('choice', 'Quelle formule convient pour commander ?', 'Je vais prendre un café, s’il vous plaît.', '« Je vais prendre » est une formule naturelle et polie pour commander.', ['Je vais prendre un café, s’il vous plaît.', 'Je prendre café hier.', 'Je suis prendre un café.']),
    ],
  },
  {
    id: 'faire-une-reservation',
    title: 'Faire une réservation',
    sourcePages: '22–25',
    goal: 'Réserver une chambre ou des billets en posant des questions précises.',
    explanation: [
      'Au téléphone ou à l’accueil, on peut demander : « Je voudrais réserver… » puis préciser la date et le nombre de personnes.',
      'Quel s’accorde avec le nom : quel train, quelle chambre, quels billets, quelles places.',
    ],
    cards: [
      { title: 'Je voudrais réserver…', text: 'Annonce poliment une réservation.', tone: 'lilac' },
      { title: 'quel · quelle · quels · quelles', text: 'La forme s’accorde avec le nom qui suit.', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : ___ chambre souhaitez-vous réserver ?', 'Quelle', '« Chambre » est féminin singulier : on demande « Quelle chambre ? ».'),
      communicationA1Question('text', 'Complétez : ___ billets voulez-vous ?', 'Quels', '« Billets » est masculin pluriel : on demande « Quels billets ? ».'),
      communicationA1Question('choice', 'Quelle phrase convient pour réserver une chambre ?', 'Je voudrais réserver une chambre pour deux nuits.', 'La formule « Je voudrais réserver… » exprime poliment une demande.', ['Je voudrais réserver une chambre pour deux nuits.', 'Je réserve chambre deux hier.', 'Donne la chambre.']),
    ],
  },
  {
    id: 'faire-des-achats',
    title: 'Faire des achats',
    sourcePages: '26–29',
    goal: 'Essayer des vêtements et décrire la taille ou l’emplacement d’un article.',
    explanation: [
      '« Trop » signifie en excès ; « assez » exprime une quantité suffisante. Ils précèdent généralement l’adjectif : « trop grand », « assez confortable ». ',
      'On emploie « dans » pour l’intérieur d’un lieu et « sur » pour une surface : « dans la boutique », « sur l’étagère ». ',
    ],
    cards: [
      { title: 'trop grand · assez grand', text: '« Trop » exprime l’excès ; « assez » exprime une mesure suffisante.', tone: 'mint' },
      { title: 'dans · sur', text: '« Dans » : intérieur. « Sur » : surface.', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : Ces chaussures sont ___ petites pour moi. (en excès)', 'trop', '« Trop petites » signifie que les chaussures sont excessivement petites.'),
      communicationA1Question('text', 'Complétez : Les chaussures sont ___ la boîte.', 'dans', 'Les chaussures se trouvent à l’intérieur de la boîte : on dit « dans la boîte ».'),
      communicationA1Question('choice', 'Quelle phrase situe un objet sur une surface ?', 'Le sac est sur la chaise.', '« Sur » indique la position sur une surface.', ['Le sac est dans la chaise.', 'Le sac est sur la chaise.', 'Le sac est assez la chaise.']),
    ],
  },
  {
    id: 'hesiter',
    title: 'Hésiter',
    sourcePages: '30–31',
    goal: 'Exprimer un choix incertain et parler de ce que l’on sait, croit ou veut.',
    explanation: [
      'Au présent, les formes utiles sont : je sais, je crois, je veux ; vous savez, vous croyez, vous voulez.',
      'Pour exprimer une hésitation, on peut dire « Je ne sais pas », « Je crois que… » ou « Je voudrais réfléchir ». ',
    ],
    cards: [
      { title: 'Je sais · je crois · je veux', text: 'Trois verbes fréquents pour exprimer son savoir, son opinion et son souhait.', tone: 'lilac' },
      { title: 'Je ne sais pas encore.', text: 'Une formule simple pour marquer l’hésitation.', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : Je ___ la réponse. (savoir)', 'sais', 'Au présent, « savoir » se conjugue « je sais ».'),
      communicationA1Question('text', 'Complétez : Nous ___ que cet ordinateur est pratique. (croire)', 'croyons', 'Au présent, « croire » se conjugue « nous croyons ».'),
      communicationA1Question('choice', 'Quelle phrase exprime une hésitation ?', 'Je ne sais pas encore lequel choisir.', '« Je ne sais pas encore » montre que le choix n’est pas décidé.', ['Je l’achète certainement.', 'Je ne sais pas encore lequel choisir.', 'J’ai déjà payé.']),
    ],
  },
  {
    id: 'prendre-rendez-vous',
    title: 'Prendre rendez-vous',
    sourcePages: '32–35',
    goal: 'Prendre rendez-vous chez un professionnel et situer un fait dans le passé.',
    explanation: [
      'Le superlatif compare au plus haut degré : « le plus tôt », « la plus disponible ». L’article et l’adjectif s’accordent avec le nom.',
      'À l’imparfait, « être » donne j’étais, tu étais, il était ; « avoir » donne j’avais, tu avais, il avait. On l’utilise souvent pour décrire une situation passée.',
    ],
    cards: [
      { title: 'le plus tôt · le plus pratique', text: 'Le superlatif exprime le degré le plus élevé.', tone: 'mint' },
      { title: 'Il était · il avait', text: 'Être et avoir à l’imparfait.', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : Je cherche le rendez-vous le ___ tôt possible.', 'plus', 'Le superlatif de « tôt » se construit avec « le plus » : « le plus tôt possible ».'),
      communicationA1Question('text', 'Complétez : Hier, le cabinet ___ fermé. (être, imparfait)', 'était', 'À l’imparfait, « il/elle » se conjugue « était ».'),
      communicationA1Question('text', 'Complétez : Quand j’étais malade, j’___ de la fièvre. (avoir, imparfait)', 'avais', 'À l’imparfait, « avoir » se conjugue « j’avais ».'),
    ],
  },
  {
    id: 'demander-des-renseignements',
    title: 'Demander des renseignements',
    sourcePages: '36–41',
    goal: 'Demander un itinéraire, une inscription ou des informations touristiques.',
    explanation: [
      '« Pouvoir » et « devoir » au présent : je peux, tu peux, il peut ; je dois, tu dois, il doit. Ils sont suivis d’un infinitif.',
      'Une question complexe peut commencer par « Est-ce que vous savez… ? » ou « Pouvez-vous me dire… ? ». Les expressions de temps précisent quand : aujourd’hui, demain, à quelle heure.',
    ],
    cards: [
      { title: 'Vous pouvez m’aider ?', text: '« Pouvoir » sert à demander une possibilité ou un service.', tone: 'lilac' },
      { title: 'Je dois prendre le métro.', text: '« Devoir » exprime une obligation.', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : Est-ce que vous ___ m’indiquer la station ? (pouvoir)', 'pouvez', 'Avec « vous », « pouvoir » se conjugue « pouvez ».'),
      communicationA1Question('text', 'Complétez : Nous ___ nous inscrire avant vendredi. (devoir)', 'devons', 'Avec « nous », « devoir » se conjugue « devons ».'),
      communicationA1Question('choice', 'Quelle question demande un renseignement ?', 'Pouvez-vous me dire où se trouve l’office du tourisme ?', '« Pouvez-vous me dire… ? » est une demande polie d’information.', ['Tu sais où tu es ?', 'Pouvez-vous me dire où se trouve l’office du tourisme ?', 'Je suis à l’office.']),
    ],
  },
  {
    id: 'exprimer-une-obligation',
    title: 'Exprimer une obligation',
    sourcePages: '42–43',
    goal: 'Exprimer ce qu’il faut faire dans une démarche administrative.',
    explanation: [
      '« Devoir » suivi d’un infinitif exprime une obligation : « Vous devez remplir ce formulaire ». ',
      '« Il faut » est une autre formule impersonnelle, également suivie d’un infinitif : « Il faut signer ici ». ',
    ],
    cards: [
      { title: 'Vous devez signer.', text: 'Devoir + infinitif exprime une obligation personnelle.', tone: 'mint' },
      { title: 'Il faut remplir le formulaire.', text: 'Il faut + infinitif exprime une obligation générale.', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : Vous ___ présenter une pièce d’identité. (devoir)', 'devez', 'Avec « vous », la forme de « devoir » est « devez ».'),
      communicationA1Question('text', 'Complétez : Il ___ remplir ce document.', 'faut', 'L’expression impersonnelle est « il faut » + infinitif.'),
      communicationA1Question('choice', 'Quelle phrase exprime une obligation ?', 'Nous devons attendre notre tour.', '« Devoir » suivi d’un infinitif exprime ce qui est obligatoire.', ['Nous pouvons partir si nous voulons.', 'Nous devons attendre notre tour.', 'Nous aimons attendre.']),
    ],
  },
  {
    id: 'autoriser-et-interdire',
    title: 'Autoriser et interdire',
    sourcePages: '44–45',
    goal: 'Comprendre une permission ou une interdiction et décrire une règle.',
    explanation: [
      '« C’est + nom » présente ou identifie : « C’est une piste facile ». « Il est / elle est + adjectif » décrit une personne ou une chose déjà identifiée.',
      'Pour autoriser ou interdire, on peut dire « Vous pouvez… » ou « Il est interdit de… ». ',
    ],
    cards: [
      { title: 'C’est une piste bleue.', text: 'C’est + déterminant + nom.', tone: 'lilac' },
      { title: 'Elle est ouverte.', text: 'Elle est + adjectif.', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('choice', 'Complétez : ___ une piste facile.', 'C’est', 'Devant le nom « une piste », on emploie « c’est ».', ['C’est', 'Il est une', 'Elle est une']),
      communicationA1Question('choice', 'Complétez : Cette piste ? ___ ouverte.', 'Elle est', 'Le pronom « elle » reprend le nom féminin « piste » ; il est suivi de l’adjectif.', ['C’est', 'Elle est', 'Il est']),
      communicationA1Question('text', 'Complétez : Il est interdit ___ fumer ici.', 'de', 'La tournure est « il est interdit de » + infinitif.'),
    ],
  },
  {
    id: 'verifier',
    title: 'Vérifier',
    sourcePages: '46–47',
    goal: 'Vérifier une information et préciser de quel lieu ou objet il s’agit.',
    explanation: [
      'Pour vérifier, on peut reformuler une information ou demander confirmation : « C’est bien ouvert aujourd’hui ? »',
      'Un complément du nom précise un nom et se construit souvent avec « de » : « la profondeur de la piscine », « la porte du vestiaire ». ',
    ],
    cards: [
      { title: 'C’est bien cela ?', text: 'Une question courte pour vérifier une information.', tone: 'mint' },
      { title: 'la profondeur de la piscine', text: 'Le complément « de la piscine » précise le nom « profondeur ».', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('choice', 'Quelle phrase demande une confirmation ?', 'La piscine ferme à huit heures, c’est bien cela ?', '« C’est bien cela ? » demande de confirmer l’information.', ['La piscine est grande.', 'La piscine ferme à huit heures, c’est bien cela ?', 'Je nage à huit heures.']),
      communicationA1Question('text', 'Complétez : la profondeur ___ la piscine.', 'de', 'Le complément du nom se construit ici avec « de » : « de la piscine ».'),
      communicationA1Question('choice', 'Quelle expression contient un complément du nom ?', 'la température de l’eau', '« De l’eau » précise de quelle température il s’agit.', ['l’eau chaude', 'la température de l’eau', 'l’eau est chaude']),
    ],
  },
  {
    id: 'protester',
    title: 'Protester',
    sourcePages: '48–49',
    goal: 'Signaler un problème et exprimer une réclamation simple.',
    explanation: [
      'Pour protester poliment, on peut commencer par « Excusez-moi, mais… » puis décrire le problème.',
      'Le futur proche se forme avec aller au présent + infinitif : « je vais changer », « nous allons appeler ». ',
    ],
    cards: [
      { title: 'Excusez-moi, mais…', text: 'Une entrée polie pour signaler un problème.', tone: 'lilac' },
      { title: 'Nous allons demander une autre place.', text: 'Aller au présent + infinitif : futur proche.', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('choice', 'Quelle formule permet de protester poliment ?', 'Excusez-moi, mais la tente est sur un terrain inondé.', 'La formule « Excusez-moi, mais… » introduit poliment une réclamation.', ['C’est parfait, merci.', 'Excusez-moi, mais la tente est sur un terrain inondé.', 'Je ne veux pas parler.']),
      communicationA1Question('text', 'Complétez : Nous ___ demander un autre emplacement. (aller)', 'allons', 'Au futur proche, « nous » se conjugue « allons » : nous allons demander.'),
      communicationA1Question('text', 'Complétez : Je vais ___ le responsable. (appeler)', 'appeler', 'Après le verbe conjugué « vais », on garde l’infinitif « appeler ».'),
    ],
  },
  {
    id: 'exprimer-des-intentions',
    title: 'Exprimer des intentions et des projets',
    sourcePages: '50–53',
    goal: 'Parler d’un projet proche ou futur et utiliser des pronoms compléments.',
    explanation: [
      'Le futur proche exprime un projet envisagé : « Je vais louer un vélo ». Le futur simple exprime aussi un événement à venir : « J’ouvrirai un compte ». ',
      'Un pronom complément direct remplace un nom : « Je réserve les vélos » devient « Je les réserve ». ',
    ],
    cards: [
      { title: 'Je vais louer un vélo.', text: 'Projet proche : aller au présent + infinitif.', tone: 'mint' },
      { title: 'Je les réserverai.', text: 'Le pronom direct « les » remplace un nom pluriel.', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : Demain, je ___ un compte. (ouvrir, futur simple)', 'ouvrirai', 'Au futur simple, « ouvrir » avec « je » donne « j’ouvrirai ».'),
      communicationA1Question('text', 'Remplacez « les vélos » : Je ___ loue.', 'les', '« Les » remplace le complément direct pluriel « les vélos ».'),
      communicationA1Question('choice', 'Quelle phrase exprime un projet proche ?', 'Nous allons louer des vélos demain.', '« Aller » au présent suivi d’un infinitif forme le futur proche.', ['Nous louions des vélos hier.', 'Nous allons louer des vélos demain.', 'Nous avons loué des vélos.']),
    ],
  },
  {
    id: 'localiser',
    title: 'Localiser',
    sourcePages: '54–59',
    goal: 'Indiquer où se trouve un lieu, décrire un endroit et signaler un objet perdu.',
    explanation: [
      'Des prépositions et adverbes situent les choses : à côté de, en face de, derrière, devant, près de, loin de.',
      'Le pronom relatif « qui » reprend le sujet d’une proposition : « le village qui se trouve près du château ». Au passé composé, le pronom direct précède l’auxiliaire : « Je l’ai perdu ». ',
    ],
    cards: [
      { title: 'en face de · derrière', text: 'Des expressions pour situer un lieu ou un objet.', tone: 'lilac' },
      { title: 'le village qui…', text: '« Qui » reprend le sujet dans la proposition relative.', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : La poste est en face ___ la gare.', 'de', 'L’expression de lieu est « en face de » : « en face de la gare ».'),
      communicationA1Question('text', 'Complétez : C’est un village ___ se trouve près de la rivière.', 'qui', '« Qui » reprend « un village », sujet du verbe « se trouve ».'),
      communicationA1Question('text', 'Remplacez « mon portefeuille » : Je ___ ai perdu.', 'l’', 'Le pronom direct « le » précède l’auxiliaire ; devant « ai », il s’élide : « l’ai perdu ».'),
    ],
  },
  {
    id: 'sinformer-par-telephone',
    title: 'S’informer par téléphone',
    sourcePages: '60–61',
    goal: 'Demander des renseignements par téléphone en utilisant le pronom « en ». ',
    explanation: [
      'Au téléphone, une demande peut commencer par « Je vous appelle au sujet de… » ou « Pourriez-vous me renseigner ? ». ',
      'Le pronom « en » remplace souvent un complément introduit par « de » ou une quantité : « Vous avez un garage ? Oui, nous en avons un ». ',
    ],
    cards: [
      { title: 'Je vous appelle au sujet de…', text: 'Annonce clairement l’objet de l’appel.', tone: 'mint' },
      { title: 'Vous avez un garage ? — Oui, nous en avons un.', text: '« En » remplace ici « un garage ».', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('text', 'Remplacez « de cette maison » : Je vous ___ parle.', 'en', '« En » remplace un complément introduit par « de ».'),
      communicationA1Question('choice', 'Vous avez des chambres libres ? — Oui, nous ___ avons deux.', 'en', '« En » reprend « des chambres » ; la quantité « deux » reste exprimée.', ['les', 'en', 'y']),
      communicationA1Question('choice', 'Quelle formule convient au début d’un appel ?', 'Bonjour, je vous appelle au sujet de la maison à louer.', 'Cette formule annonce poliment le sujet de l’appel.', ['Passe-moi la maison.', 'Bonjour, je vous appelle au sujet de la maison à louer.', 'Je téléphone hier.']),
    ],
  },
  {
    id: 'comparer',
    title: 'Comparer',
    sourcePages: '62–63',
    goal: 'Comparer deux lieux ou deux expériences avec des adjectifs.',
    explanation: [
      'Le comparatif de supériorité se forme avec « plus… que », l’égalité avec « aussi… que » et l’infériorité avec « moins… que ». ',
      'L’adjectif s’accorde avec le nom qu’il décrit : « cette plage est plus calme », « ces hôtels sont moins chers ». ',
    ],
    cards: [
      { title: 'plus · aussi · moins… que', text: 'Trois formes pour comparer.', tone: 'lilac' },
      { title: 'Cette plage est plus calme.', text: 'L’adjectif s’accorde avec le nom féminin « plage ».', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : Cette plage est ___ calme que l’autre. (supériorité)', 'plus', 'La supériorité se forme avec « plus… que ».'),
      communicationA1Question('text', 'Complétez : Ce train est aussi rapide ___ le bus.', 'que', 'Le comparatif d’égalité se forme avec « aussi… que ».'),
      communicationA1Question('choice', 'Quelle phrase exprime une infériorité ?', 'Cet hôtel est moins cher que l’autre.', '« Moins… que » exprime l’infériorité.', ['Cet hôtel est aussi cher que l’autre.', 'Cet hôtel est moins cher que l’autre.', 'Cet hôtel est le plus cher.']),
    ],
  },
  {
    id: 'caracteriser',
    title: 'Caractériser',
    sourcePages: '64–65',
    goal: 'Désigner précisément des objets avec les pronoms démonstratifs.',
    explanation: [
      'Les pronoms démonstratifs remplacent un nom déjà connu : celui, celle, ceux, celles.',
      'On peut préciser le choix avec « -ci » ou « -là » : « celle-ci » désigne souvent l’objet proche et « celle-là » l’objet plus éloigné.',
    ],
    cards: [
      { title: 'celui · celle', text: 'Remplacent un nom masculin ou féminin singulier.', tone: 'mint' },
      { title: 'ceux · celles', text: 'Remplacent un nom pluriel masculin ou féminin.', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('text', 'Remplacez « la nappe » : Je préfère ___ qui est blanche.', 'celle', '« Nappe » est féminin singulier : le pronom est « celle ».'),
      communicationA1Question('text', 'Remplacez « les verres » : ___ qui sont sur la table sont propres.', 'Ceux', '« Verres » est masculin pluriel : le pronom est « ceux ».'),
      communicationA1Question('choice', 'Quel pronom remplace « les assiettes » ?', 'celles', '« Assiettes » est féminin pluriel : on emploie « celles ».', ['celui', 'celle', 'celles']),
    ],
  },
  {
    id: 'exprimer-une-condition',
    title: 'Exprimer une condition',
    sourcePages: '66–67',
    goal: 'Parler du temps qu’il fera et exprimer une condition réalisable.',
    explanation: [
      'Pour une condition réelle, on emploie « si » + présent, puis le présent, le futur ou l’impératif : « S’il fait beau, nous irons au parc ». ',
      'Dans cette construction, on ne met pas le futur immédiatement après « si » : on dit « si tu viens », et non « si tu viendras ». ',
    ],
    cards: [
      { title: 'S’il fait beau, nous sortirons.', text: 'Si + présent, puis futur.', tone: 'lilac' },
      { title: 'Si tu as froid, prends un manteau.', text: 'Si + présent, puis impératif.', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : Si le soleil ___, nous irons à la plage. (briller)', 'brille', 'Après « si », on emploie le présent : « si le soleil brille ».'),
      communicationA1Question('choice', 'Quelle phrase exprime correctement une condition réelle ?', 'S’il pleut, nous resterons à la maison.', 'Après « si », le présent « pleut » précède ici le futur « resterons ».', ['S’il pleuvra, nous resterons à la maison.', 'S’il pleut, nous resterons à la maison.', 'S’il pleuvait demain, nous restons.']),
      communicationA1Question('text', 'Complétez : Si tu as chaud, ___ la fenêtre. (ouvrir, impératif)', 'ouvre', 'Après une condition réelle, l’impératif convient : « ouvre la fenêtre ».'),
    ],
  },
  {
    id: 'parler-dun-besoin',
    title: 'Parler d’un besoin',
    sourcePages: '68–69',
    goal: 'Exprimer un besoin ou une nécessité avec le subjonctif présent.',
    explanation: [
      'Après « il faut que », on emploie le subjonctif : « Il faut que tu téléphones ». ',
      'Pour les verbes réguliers en -er, les formes fréquentes sont que je parle, que tu parles, qu’il parle, que nous parlions et que vous parliez.',
    ],
    cards: [
      { title: 'Il faut que tu parles.', text: '« Il faut que » est suivi du subjonctif.', tone: 'mint' },
      { title: 'Il faut que nous parlions.', text: 'Au subjonctif, la terminaison de « nous » est -ions.', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : Il faut que tu ___ à l’accueil. (téléphoner)', 'téléphones', 'Après « il faut que », « téléphoner » se met au subjonctif : « tu téléphones ».'),
      communicationA1Question('text', 'Complétez : Il faut que nous ___ un site Internet. (créer)', 'créions', 'Au subjonctif présent, « créer » avec « nous » donne « créions ».'),
      communicationA1Question('choice', 'Quelle phrase exprime un besoin ?', 'Il faut que vous changiez de bureau.', '« Il faut que » + subjonctif exprime une nécessité.', ['Vous changez de bureau hier.', 'Il faut que vous changiez de bureau.', 'Vous pouvez bureau.']),
    ],
  },
  {
    id: 'saluer-et-presenter',
    title: 'Saluer et présenter',
    sourcePages: '70–71',
    goal: 'Saluer une personne, la présenter et parler d’actions habituelles.',
    explanation: [
      'On salue selon le moment ou la relation : « Bonjour », « Salut », « Ça fait plaisir de te voir ». ',
      'Les verbes pronominaux se construisent avec un pronom : je me présente, tu te présentes, il se présente. Au présent, le pronom s’accorde avec le sujet.',
    ],
    cards: [
      { title: 'Bonjour · Salut', text: '« Bonjour » est neutre et poli ; « salut » est familier.', tone: 'lilac' },
      { title: 'Je me présente.', text: 'Le pronom réfléchi change avec la personne.', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : Je ___ appelle Sophie. (s’appeler)', 'm’', 'Avec « je », le pronom de « s’appeler » est « me », élidé devant une voyelle : « m’appelle ».'),
      communicationA1Question('text', 'Complétez : Tu ___ présentes à ton voisin. (se présenter)', 'te', 'Avec « tu », le pronom réfléchi est « te ».'),
      communicationA1Question('choice', 'Quelle salutation est adaptée à une rencontre polie ?', 'Bonjour, madame.', '« Bonjour » est une salutation neutre et polie.', ['Hé, toi !', 'Bonjour, madame.', 'À demain hier.']),
    ],
  },
  {
    id: 'excuser-et-sexcuser',
    title: 'Excuser et s’excuser',
    sourcePages: '72–73',
    goal: 'Présenter des excuses et expliquer qu’une action avait eu lieu auparavant.',
    explanation: [
      'On peut s’excuser avec « Pardon », « Excusez-moi » ou « Je suis désolé(e) ». ',
      'Le plus-que-parfait se forme avec l’imparfait d’avoir ou d’être + participe passé : « j’avais oublié », « elle était partie ». Il indique une action antérieure à un autre moment passé.',
    ],
    cards: [
      { title: 'Excusez-moi, je suis désolé(e).', text: 'Des formules pour présenter des excuses.', tone: 'mint' },
      { title: 'J’avais oublié.', text: 'Avoir à l’imparfait + participe passé.', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('choice', 'Quelle formule présente des excuses ?', 'Je vous prie de m’excuser.', '« Je vous prie de m’excuser » est une formule d’excuse polie.', ['Je vous prie de m’excuser.', 'Je vous félicite.', 'Je vous invite.']),
      communicationA1Question('text', 'Complétez : J’___ oublié le rendez-vous. (plus-que-parfait)', 'avais', 'Le plus-que-parfait de « oublier » se forme ici avec « j’avais » + « oublié ».'),
      communicationA1Question('text', 'Complétez : Elle ___ déjà partie quand je suis arrivé. (être, plus-que-parfait)', 'était', 'Avec « partir », le plus-que-parfait utilise « être » à l’imparfait : « elle était partie ».'),
    ],
  },
  {
    id: 'telephoner',
    title: 'Téléphoner',
    sourcePages: '74–77',
    goal: 'Prendre un appel, laisser un message et employer les pronoms compléments.',
    explanation: [
      'Au téléphone, on peut demander « Est-ce que je peux parler à… ? » ou proposer « Je peux prendre un message ? ». ',
      'Les pronoms indirects lui et leur remplacent à + personne : « Je téléphone à Luc » devient « Je lui téléphone ». Avec deux pronoms, leur ordre dépend de la personne ; devant le verbe, on dit « Je le lui donne ». ',
    ],
    cards: [
      { title: 'Je lui téléphone.', text: '« Lui » remplace « à une personne ».', tone: 'lilac' },
      { title: 'Je le lui donne.', text: 'Deux pronoms compléments précèdent le verbe.', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('text', 'Remplacez « à Daniel » : Je ___ téléphone.', 'lui', '« Lui » remplace un complément indirect singulier introduit par « à ».'),
      communicationA1Question('text', 'Remplacez « le numéro à Luc » : Je ___ ___ donne.', 'le lui', '« Le » remplace « le numéro » et « lui » remplace « à Luc » ; les pronoms précèdent « donne ».'),
      communicationA1Question('choice', 'Que peut-on dire pour laisser un message ?', 'Pouvez-vous lui dire que j’ai appelé ?', 'Cette formule demande poliment de transmettre un message.', ['Raccrochez sans parler.', 'Pouvez-vous lui dire que j’ai appelé ?', 'Je vous appelle hier.']),
    ],
  },
  {
    id: 'donner-des-instructions',
    title: 'Donner des instructions',
    sourcePages: '78–81',
    goal: 'Donner une consigne à une personne ou à plusieurs personnes.',
    explanation: [
      'L’impératif sert à donner un ordre, un conseil ou une instruction. Il se conjugue sans sujet : « Tendez les bras », « Viens ici ». ',
      'On utilise les formes tu, nous et vous. Pour les verbes en -er, la forme tu perd généralement le s : « regarde », « écoute ». ',
    ],
    cards: [
      { title: 'Tendez les bras.', text: 'Impératif à la forme vous.', tone: 'mint' },
      { title: 'Viens avec moi.', text: 'Impératif à la forme tu.', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('text', 'Mettez « écouter » à l’impératif avec vous.', 'écoutez', 'À l’impératif, la forme « vous » est « écoutez ».'),
      communicationA1Question('text', 'Mettez « regarder » à l’impératif avec tu.', 'regarde', 'À l’impératif, la forme « tu » d’un verbe en -er perd le s : « regarde ».'),
      communicationA1Question('choice', 'Quelle phrase donne une instruction à un enfant ?', 'Prends ton ballon.', '« Prends » est l’impératif de « prendre » avec tu.', ['Tu prends ton ballon ?', 'Prends ton ballon.', 'Il prendra son ballon.']),
    ],
  },
  {
    id: 'nier',
    title: 'Nier',
    sourcePages: '82–83',
    goal: 'Nier une action passée et répondre à une accusation.',
    explanation: [
      'Au passé composé négatif, « ne… pas » encadre l’auxiliaire : « Je n’ai pas cassé le plat ». ',
      'Devant une voyelle, « ne » devient « n’ ». Les mots « jamais » ou « rien » peuvent aussi exprimer une négation : « Je n’ai jamais vu cela ». ',
    ],
    cards: [
      { title: 'Je n’ai pas cassé le plat.', text: 'Ne… pas encadre l’auxiliaire au passé composé.', tone: 'lilac' },
      { title: 'Je n’ai jamais menti.', text: '« Jamais » peut remplacer « pas » dans la négation.', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : Il ___ a pas rangé sa chambre.', 'n’', 'Devant « a », « ne » s’élide : « n’a pas rangé ».'),
      communicationA1Question('choice', 'Quelle phrase nie correctement une action passée ?', 'Je n’ai pas cassé le verre.', 'Au passé composé, « ne… pas » encadre l’auxiliaire « ai ».', ['Je pas ai cassé le verre.', 'Je n’ai pas cassé le verre.', 'Je ne cassé pas le verre.']),
      communicationA1Question('text', 'Complétez : Nous n’avons ___ vu ce film. (négation : à aucun moment)', 'jamais', '« Ne… jamais » exprime qu’une action n’a eu lieu à aucun moment.'),
    ],
  },
  {
    id: 'inviter-accepter-refuser',
    title: 'Inviter, accepter et refuser',
    sourcePages: '84–87',
    goal: 'Inviter quelqu’un et répondre avec tact à une proposition.',
    explanation: [
      'Pour inviter, on peut dire « Voulez-vous dîner avec nous ? » ou « Tu es libre pour déjeuner ? ». On accepte par « Avec plaisir ! » ou on refuse poliment en donnant une raison.',
      'Les adjectifs possessifs s’accordent avec le nom possédé : mon voisin, ma voisine, mes amis. « On » peut remplacer « nous » dans la langue courante.',
    ],
    cards: [
      { title: 'Avec plaisir !', text: 'Une réponse positive à une invitation.', tone: 'mint' },
      { title: 'mon · ma · mes', text: 'L’adjectif possessif s’accorde avec le nom.', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : Voici ___ voisine. (possessif de je)', 'ma', '« Voisine » est féminin singulier : on dit « ma voisine ».'),
      communicationA1Question('text', 'Complétez : ___ va déjeuner ensemble. (on = nous)', 'On', 'Dans la conversation, « on » peut avoir le sens de « nous ».'),
      communicationA1Question('choice', 'Quelle réponse accepte une invitation ?', 'Avec plaisir, merci !', '« Avec plaisir » exprime une acceptation enthousiaste.', ['Je ne peux pas, désolé.', 'Avec plaisir, merci !', 'Je ne connais pas.']),
    ],
  },
  {
    id: 'demander-de-faire',
    title: 'Demander à quelqu’un de faire quelque chose',
    sourcePages: '88–89',
    goal: 'Formuler une demande polie et rapporter une demande.',
    explanation: [
      'Pour demander un service, on peut dire « Est-ce que vous pouvez… ? » ou « Pourriez-vous… ? ». ',
      'Au discours indirect, « demander à quelqu’un de faire quelque chose » se construit avec « de » + infinitif : « Il me demande de téléphoner ». ',
    ],
    cards: [
      { title: 'Pourriez-vous m’aider ?', text: 'Une demande polie au conditionnel.', tone: 'lilac' },
      { title: 'Il me demande de rappeler.', text: 'Demander à quelqu’un de + infinitif.', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('choice', 'Quelle demande est la plus polie ?', 'Pourriez-vous fermer la fenêtre, s’il vous plaît ?', 'Le conditionnel « pourriez-vous » adoucit la demande.', ['Ferme la fenêtre !', 'Pourriez-vous fermer la fenêtre, s’il vous plaît ?', 'Tu fermes la fenêtre hier.']),
      communicationA1Question('text', 'Complétez : Denis me demande ___ téléphoner à Isabelle.', 'de', 'La construction est « demander à quelqu’un de » + infinitif.'),
      communicationA1Question('text', 'Complétez : La directrice lui demande ___ préparer la réunion.', 'de', 'Après « demander à quelqu’un », on emploie « de » devant l’infinitif.'),
    ],
  },
  {
    id: 'proposer',
    title: 'Proposer',
    sourcePages: '90–91',
    goal: 'Faire une proposition et y répondre avec le conditionnel présent.',
    explanation: [
      'On peut proposer une activité avec « Et si on… ? » suivi de l’imparfait : « Et si on faisait un pique-nique ? ». ',
      'Le conditionnel présent sert à proposer avec tact : « Je voudrais… », « On pourrait… ». Pour les verbes réguliers, on ajoute les terminaisons de l’imparfait à la base du futur.',
    ],
    cards: [
      { title: 'Et si on faisait un pique-nique ?', text: 'Proposition avec si + imparfait.', tone: 'mint' },
      { title: 'On pourrait aller au parc.', text: '« Pourrait » exprime une proposition au conditionnel.', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : Et si nous ___ un pique-nique ? (faire, imparfait)', 'faisions', 'Après « et si » pour proposer, on emploie l’imparfait : « nous faisions ».'),
      communicationA1Question('text', 'Complétez : On ___ aller au parc. (pouvoir, conditionnel)', 'pourrait', 'Au conditionnel présent, « pouvoir » avec « on » donne « pourrait ».'),
      communicationA1Question('choice', 'Quelle phrase est une proposition ?', 'On pourrait préparer le déjeuner ensemble.', '« On pourrait… » exprime une proposition au conditionnel.', ['Nous avons préparé le déjeuner hier.', 'On pourrait préparer le déjeuner ensemble.', 'Le déjeuner est prêt.']),
    ],
  },
  {
    id: 'parler-de-sa-sante',
    title: 'Parler de sa santé',
    sourcePages: '92–97',
    goal: 'Décrire un symptôme, raconter un accident et expliquer une action simultanée.',
    explanation: [
      'Les pronoms indéfinis « quelqu’un », « quelque chose », « personne » et « rien » parlent d’une personne ou d’une chose sans la préciser.',
      'Au passé composé, certains verbes de déplacement se conjuguent avec être : « elle est tombée ». Le gérondif se forme avec « en » + participe présent : « en marchant ». ',
    ],
    cards: [
      { title: 'quelque chose · personne', text: 'Des pronoms indéfinis pour parler sans préciser.', tone: 'lilac' },
      { title: 'Elle est tombée en courant.', text: 'Être au passé composé ; en + participe présent.', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : J’ai mal ___ la tête.', 'à', 'On dit « avoir mal à » une partie du corps : « mal à la tête ».'),
      communicationA1Question('text', 'Complétez : Elle ___ tombée en marchant. (auxiliaire)', 'est', '« Tomber » se conjugue avec « être » au passé composé : « elle est tombée ».'),
      communicationA1Question('text', 'Complétez : Il s’est blessé ___ jouant au football.', 'en', 'Le gérondif se forme avec « en » + participe présent : « en jouant ».'),
    ],
  },
  {
    id: 'parler-de-ses-gouts',
    title: 'Parler de ses goûts',
    sourcePages: '98–99',
    goal: 'Dire ce que l’on aime ou préfère avec un verbe suivi de « de » et d’un infinitif.',
    explanation: [
      'Certains verbes se construisent avec « de » avant un nom ou un infinitif : « parler de musique », « décider de sortir », « rêver de voyager ». ',
      'Pour parler de ses préférences, on peut dire « J’aime… », « Je préfère… », « Je n’aime pas… ». ',
    ],
    cards: [
      { title: 'rêver de voyager', text: '« Rêver » est suivi de « de » + infinitif.', tone: 'mint' },
      { title: 'parler de musique', text: '« De » introduit le sujet dont on parle.', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : Je rêve ___ visiter Paris.', 'de', 'La construction est « rêver de » + infinitif.'),
      communicationA1Question('text', 'Complétez : Elle parle ___ musique classique.', 'de', 'On dit « parler de » quelque chose.'),
      communicationA1Question('choice', 'Quelle phrase exprime un goût ?', 'Je préfère écouter du jazz.', '« Préférer » sert à exprimer un choix ou un goût.', ['J’ai fermé la porte.', 'Je préfère écouter du jazz.', 'Il pleut dehors.']),
    ],
  },
  {
    id: 'parler-de-son-cv',
    title: 'Parler de son curriculum vitae',
    sourcePages: '100–101',
    goal: 'Présenter ses compétences et distinguer « savoir » de « connaître ». ',
    explanation: [
      '« Savoir » s’emploie notamment avec un infinitif pour parler d’une compétence : « Elle sait cuisiner ». ',
      '« Connaître » s’emploie avec un nom : « Elle connaît la ville », « Il connaît cette personne ». ',
    ],
    cards: [
      { title: 'savoir + infinitif', text: 'Elle sait garder des enfants.', tone: 'lilac' },
      { title: 'connaître + nom', text: 'Elle connaît les activités pour bébé.', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('choice', 'Complétez : Elle ___ parler anglais. (compétence)', 'sait', '« Savoir » est suivi d’un infinitif pour exprimer une compétence.', ['sait', 'connaît', 'savoir']),
      communicationA1Question('text', 'Complétez : Je ___ bien cette entreprise. (connaître)', 'connais', 'Au présent, « connaître » avec « je » donne « connais ».'),
      communicationA1Question('choice', 'Quelle phrase est correcte ?', 'Il sait préparer un biberon.', '« Savoir » + infinitif exprime la capacité de faire quelque chose.', ['Il connaît préparer un biberon.', 'Il sait préparer un biberon.', 'Il connaît de préparer un biberon.']),
    ],
  },
  {
    id: 'demander-donner-opinion',
    title: 'Demander et donner son opinion',
    sourcePages: '102–103',
    goal: 'Demander l’avis d’une personne et parler d’une action qui vient de se produire.',
    explanation: [
      'Pour demander un avis, on dit « Qu’est-ce que tu en penses ? » ou « À votre avis… ? ». ',
      'Le passé récent se forme avec venir au présent + de + infinitif : « Je viens de recevoir le budget ». ',
    ],
    cards: [
      { title: 'Qu’en pensez-vous ?', text: 'Une question pour demander une opinion.', tone: 'mint' },
      { title: 'Je viens de recevoir le message.', text: 'Venir au présent + de + infinitif : passé récent.', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('choice', 'Quelle question demande une opinion ?', 'Qu’est-ce que tu en penses ?', '« Qu’est-ce que tu en penses ? » demande l’avis de l’interlocuteur.', ['Où habites-tu ?', 'Qu’est-ce que tu en penses ?', 'À quelle heure est-il ?']),
      communicationA1Question('text', 'Complétez : Nous venons ___ terminer la réunion.', 'de', 'Le passé récent se forme avec « venir de » + infinitif.'),
      communicationA1Question('text', 'Complétez : Il ___ de recevoir une réponse. (venir)', 'vient', 'Au présent, « venir » avec « il » donne « vient ».'),
    ],
  },
  {
    id: 'exprimer-la-surprise',
    title: 'Exprimer la surprise',
    sourcePages: '104–105',
    goal: 'Réagir à une nouvelle et reconnaître la formation d’un nom à partir d’un verbe.',
    explanation: [
      'La surprise peut s’exprimer avec « Ah bon ? », « C’est incroyable ! » ou « Ça alors ! ». ',
      'La nominalisation transforme un verbe ou un adjectif en nom : « organiser » → « l’organisation », « décider » → « la décision ». Le suffixe varie selon le mot.',
    ],
    cards: [
      { title: 'Ça alors !', text: 'Une réaction familière à une nouvelle surprenante.', tone: 'lilac' },
      { title: 'organiser → organisation', text: 'Un verbe peut donner un nom.', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('choice', 'Quelle réaction exprime la surprise ?', 'Ça alors !', '« Ça alors ! » est une exclamation de surprise.', ['À bientôt !', 'Ça alors !', 'De rien !']),
      communicationA1Question('text', 'Transformez le verbe en nom : organiser → l’___.', 'organisation', 'Le nom correspondant à « organiser » est « organisation ».'),
      communicationA1Question('text', 'Complétez : prendre une ___ (décider)', 'décision', 'Le nom correspondant au verbe « décider » est « décision ».'),
    ],
  },
  {
    id: 'certitude-et-incertitude',
    title: 'Exprimer la certitude ou l’incertitude',
    sourcePages: '106–109',
    goal: 'Nuancer une affirmation et choisir entre « ce qui » et « ce que ». ',
    explanation: [
      '« Je suis sûr(e) que… » exprime la certitude ; « Je ne suis pas certain(e) que… » exprime le doute. ',
      'Dans « ce qui », le pronom est sujet du verbe : « Je sais ce qui arrive ». Dans « ce que », il est complément : « Je sais ce que tu veux ». ',
    ],
    cards: [
      { title: 'Je suis certain(e) que…', text: 'Une formule de certitude.', tone: 'mint' },
      { title: 'ce qui · ce que', text: '« Ce qui » est sujet ; « ce que » est complément.', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : Je sais ___ se passe ici. (sujet de « se passe »)', 'ce qui', 'L’expression recherchée est sujet du verbe « se passe » : « ce qui ».'),
      communicationA1Question('text', 'Complétez : Je comprends ___ tu dis. (complément de « dis »)', 'ce que', 'Le pronom est complément de « dis » : on emploie « ce que ».'),
      communicationA1Question('choice', 'Quelle phrase exprime l’incertitude ?', 'Je ne suis pas certain qu’il soit arrivé.', '« Je ne suis pas certain » marque le doute.', ['Je suis absolument certain.', 'Je ne suis pas certain qu’il soit arrivé.', 'C’est une certitude.']),
    ],
  },
  {
    id: 'decrire',
    title: 'Décrire',
    sourcePages: '110–111',
    goal: 'Décrire une personne et distinguer une action ponctuelle d’un cadre passé.',
    explanation: [
      'L’imparfait décrit une situation, une habitude ou un arrière-plan : « Il portait des lunettes ». ',
      'Le passé composé présente une action terminée : « Il est entré dans le magasin ». Les deux temps peuvent se combiner dans un récit.',
    ],
    cards: [
      { title: 'Il portait des lunettes.', text: 'Imparfait : description ou situation passée.', tone: 'lilac' },
      { title: 'Il est entré.', text: 'Passé composé : action terminée.', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('choice', 'Quel temps convient pour décrire une apparence passée ?', 'Le gardien portait une veste noire.', 'L’imparfait « portait » décrit une apparence dans le passé.', ['Le gardien a porté son repas.', 'Le gardien portait une veste noire.', 'Le gardien portera une veste noire.']),
      communicationA1Question('text', 'Complétez : Le témoin ___ dans le bureau. (entrer, passé composé)', 'est entré', '« Entrer » se conjugue avec « être » au passé composé : « est entré ».'),
      communicationA1Question('choice', 'Choisissez le passé composé pour une action terminée.', 'Le suspect a quitté la pièce.', '« A quitté » présente une action achevée.', ['Il faisait nuit.', 'Le suspect a quitté la pièce.', 'Il portait un manteau.']),
    ],
  },
  {
    id: 'faire-des-compliments',
    title: 'Faire des compliments',
    sourcePages: '112–113',
    goal: 'Complimenter quelqu’un et employer des adverbes pour nuancer une description.',
    explanation: [
      'Un compliment peut porter sur un objet, une tenue ou une qualité : « Quel joli collier ! », « Vous êtes très élégant(e) ». ',
      'Les adverbes précisent un adjectif ou un verbe : « très beau », « vraiment joli », « parle doucement ». ',
    ],
    cards: [
      { title: 'Quel joli collier !', text: 'Une exclamation qui exprime un compliment.', tone: 'mint' },
      { title: 'très · vraiment', text: 'Des adverbes qui renforcent un adjectif.', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('choice', 'Quelle phrase est un compliment ?', 'Cette robe vous va très bien.', 'Cette phrase valorise la tenue de l’interlocuteur.', ['Cette robe est dans l’armoire.', 'Cette robe vous va très bien.', 'Je ferme la robe.']),
      communicationA1Question('text', 'Complétez avec un adverbe : Ce collier est ___ joli. (intensité)', 'très', '« Très » renforce l’adjectif « joli ».'),
      communicationA1Question('choice', 'Dans « Elle parle doucement », quel mot est un adverbe ?', 'doucement', '« Doucement » précise la manière de parler.', ['Elle', 'parle', 'doucement']),
    ],
  },
  {
    id: 'feliciter',
    title: 'Féliciter',
    sourcePages: '114–115',
    goal: 'Féliciter quelqu’un et accorder « tout » avec le nom.',
    explanation: [
      'Pour féliciter, on peut dire « Bravo ! », « Félicitations ! » ou « Je suis très heureux pour vous ». ',
      '« Tout » s’accorde avec le nom : tout le monde, toute la journée, tous les jours, toutes les semaines.',
    ],
    cards: [
      { title: 'Félicitations !', text: 'Une formule pour célébrer une bonne nouvelle.', tone: 'lilac' },
      { title: 'tout · toute · tous · toutes', text: 'La forme s’accorde avec le nom qui suit.', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('text', 'Complétez : ___ la famille est heureuse. (famille : féminin singulier)', 'Toute', '« Famille » est féminin singulier : on écrit « toute la famille ».'),
      communicationA1Question('text', 'Complétez : ___ les amis sont arrivés. (masculin pluriel)', 'Tous', 'Devant un nom masculin pluriel, on emploie « tous ».'),
      communicationA1Question('choice', 'Quelle formule félicite une personne ?', 'Bravo pour cette excellente nouvelle !', '« Bravo » exprime des félicitations.', ['Je suis désolé.', 'Bravo pour cette excellente nouvelle !', 'Je ne suis pas d’accord.']),
    ],
  },
  {
    id: 'consoler-et-encourager',
    title: 'Consoler et encourager',
    sourcePages: '116–117',
    goal: 'Réconforter une personne et reconnaître la voix passive.',
    explanation: [
      'Pour consoler, on peut dire « Ce n’est pas grave », « Ne t’inquiète pas » ou « Tu feras mieux la prochaine fois ». ',
      'La voix passive met en avant la personne ou la chose qui reçoit l’action : « Le match est gagné par l’équipe ». Elle se forme avec être + participe passé.',
    ],
    cards: [
      { title: 'Ne t’inquiète pas.', text: 'Une formule pour réconforter.', tone: 'mint' },
      { title: 'Le match est gagné.', text: 'Être + participe passé : voix passive.', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('choice', 'Quelle phrase encourage un joueur ?', 'Tu feras mieux au prochain match !', 'Cette phrase donne confiance pour la prochaine fois.', ['Tu ne peux jamais jouer.', 'Tu feras mieux au prochain match !', 'Le match est fini.']),
      communicationA1Question('text', 'Complétez : Le match ___ gagné par notre équipe. (être)', 'est', 'Au présent passif, on emploie « être » : « le match est gagné ».'),
      communicationA1Question('choice', 'Quelle phrase est à la voix passive ?', 'Le but est marqué par Léa.', 'Le sujet « le but » reçoit l’action ; la phrase est passive.', ['Léa marque un but.', 'Le but est marqué par Léa.', 'Léa a marqué un but.']),
    ],
  },
  {
    id: 'critiquer',
    title: 'Critiquer',
    sourcePages: '118–119',
    goal: 'Exprimer une critique simple et en donner la cause.',
    explanation: [
      'On peut exprimer une critique avec tact : « À mon avis, l’équipe pourrait mieux jouer ». ',
      '« Parce que » introduit une cause ; « à cause de » introduit généralement une cause négative : « Le match est retardé à cause de la pluie ». ',
    ],
    cards: [
      { title: 'À mon avis…', text: 'Une formule pour présenter une critique comme un point de vue.', tone: 'lilac' },
      { title: 'à cause de la pluie', text: 'Une cause introduite par « à cause de ».', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('choice', 'Quelle formule introduit une opinion critique avec tact ?', 'À mon avis, l’équipe manque d’entraînement.', '« À mon avis » présente une appréciation personnelle.', ['L’équipe est toujours parfaite.', 'À mon avis, l’équipe manque d’entraînement.', 'Je ne sais pas jouer.']),
      communicationA1Question('text', 'Complétez : Le match est annulé ___ la pluie.', 'à cause de', '« À cause de » introduit ici la cause de l’annulation.'),
      communicationA1Question('choice', 'Quel mot introduit une cause dans « Il est absent parce qu’il est malade » ?', 'parce que', '« Parce que » introduit la raison de son absence.', ['mais', 'parce que', 'donc']),
    ],
  },
  {
    id: 'exprimer-ladmiration',
    title: 'Exprimer l’admiration',
    sourcePages: '120–121',
    goal: 'Exprimer son admiration et marquer une opposition entre deux idées.',
    explanation: [
      'On peut exprimer son admiration par « C’est magnifique ! », « Quel spectacle ! » ou « J’ai beaucoup aimé ». ',
      '« Mais » et « pourtant » introduisent une opposition : « Il pleut, mais le spectacle continue ». ',
    ],
    cards: [
      { title: 'C’est magnifique !', text: 'Une expression d’admiration.', tone: 'mint' },
      { title: 'Il pleut, pourtant le spectacle continue.', text: '« Pourtant » oppose deux idées.', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('choice', 'Quelle phrase exprime l’admiration ?', 'Quel spectacle magnifique !', '« Quel… magnifique ! » est une exclamation admirative.', ['Le spectacle commence à huit heures.', 'Quel spectacle magnifique !', 'Je cherche mon billet.']),
      communicationA1Question('text', 'Complétez : Il pleut, ___ le spectacle continue.', 'mais', '« Mais » relie deux idées opposées.'),
      communicationA1Question('choice', 'Quel connecteur exprime une opposition ?', 'pourtant', '« Pourtant » marque un contraste entre deux propositions.', ['parce que', 'pourtant', 'donc']),
    ],
  },
].map((lesson, index) => ({
  ...lesson,
  title: `${index + 1}. ${lesson.title}`,
}));

const communicationA1Supplement = {
  'demander-des-articles': [
    communicationA1VraiFaux('À la boulangerie, la cliente choisit une tarte aux fraises.', true, 'La cliente choisit bien une tarte aux fraises dans le dialogue.'),
    communicationA1Question('text', 'Complétez : une tarte ___ pommes.', 'aux', 'Devant « pommes », « à » prend la forme contractée « aux ».'),
    communicationA1Question('text', 'Complétez : un éclair ___ chocolat.', 'au', 'Devant le nom masculin « chocolat », on emploie « au ».'),
    communicationA1Question('choice', 'Quel produit est une viennoiserie ?', 'un pain au chocolat', 'Le pain au chocolat fait partie des viennoiseries.', ['un timbre', 'un pain au chocolat', 'un cahier']),
  ],
  'parler-des-quantites': [
    communicationA1Question('text', 'Complétez : une bouteille ___ huile.', 'd’', 'Devant la voyelle de « huile », « de » s’élide : « d’huile ».'),
    communicationA1Question('text', 'Complétez : une douzaine ___ œufs.', 'd’', 'Après une quantité, on emploie « de » ; devant « œufs », on écrit « d’œufs ».'),
    communicationA1Question('choice', 'Quel produit est un légume ?', 'un poireau', 'Le poireau est un légume.', ['une poire', 'un poireau', 'une cerise']),
    communicationA1VraiFaux('Après « un kilo », le nom de l’aliment est précédé de « de ».', true, 'Une quantité précise se construit avec « de » : un kilo de carottes.'),
  ],
  'demander-le-prix': [
    communicationA1VraiFaux('Pour demander le prix d’un article, on peut dire « Combien coûte cet article ? ».', true, '« Combien coûte… ? » est une question de prix.'),
    communicationA1Question('text', 'Complétez : Je peux vous ___ ? (renseigner)', 'renseigner', 'Après « peux », le verbe reste à l’infinitif.'),
    communicationA1Question('choice', 'Dans quel objet range-t-on des feuilles et des documents ?', 'un dossier', 'Un dossier sert à ranger des documents.', ['un dossier', 'une gomme', 'une cartouche']),
  ],
  'passer-une-commande': [
    communicationA1Question('text', 'Complétez : Nous ___ des desserts. (prendre)', 'prenons', 'Au présent, « prendre » avec « nous » donne « prenons ».'),
    communicationA1Question('text', 'Complétez : Je ___ au restaurant ce soir. (aller)', 'vais', 'Au présent, « aller » avec « je » donne « vais ».'),
    communicationA1Question('choice', 'Qui demande « Vous avez choisi ? » au restaurant ?', 'Le serveur', 'Le serveur demande au client ce qu’il souhaite commander.', ['Le serveur', 'Le client', 'Le cuisinier à la maison']),
    communicationA1Question('choice', 'Quel produit est un crustacé ?', 'une crevette', 'La crevette est un crustacé.', ['une truite', 'une crevette', 'une sole']),
  ],
  'faire-une-reservation': [
    communicationA1Question('text', 'Complétez : une chambre (beau) → une ___ chambre.', 'belle', 'Devant un nom féminin singulier, « beau » devient « belle ».'),
    communicationA1Question('text', 'Complétez : un hôtel (grand) → un ___ hôtel.', 'grand', '« Grand » s’accorde avec « hôtel », masculin singulier.'),
    communicationA1Question('choice', 'Comment appelle-t-on un train qui arrive à 19 h 24 ?', 'un train à l’arrivée à 19 h 24', 'L’heure à laquelle le train arrive est son heure d’arrivée.', ['un train au départ à 19 h 24', 'un train à l’arrivée à 19 h 24', 'un train en retard de 19 h 24']),
    communicationA1Question('text', 'Complétez : Je prends ___ train ?', 'quel', '« Train » est masculin singulier : on demande « quel train ? ».'),
  ],
  'faire-des-achats': [
    communicationA1Question('choice', 'Complétez : Il fait froid, je mets un ___ sur ma veste.', 'manteau', 'On met un manteau quand il fait froid.', ['manteau', 'maillot de bain', 'sandales']),
    communicationA1Question('text', 'Complétez : Le pantalon est ___ long pour moi. (en excès)', 'trop', '« Trop long » signifie que le pantalon est excessivement long.'),
    communicationA1Question('choice', 'Quel mot désigne des chaussures d’été ?', 'des sandales', 'Les sandales sont des chaussures d’été.', ['des sandales', 'des bottes de neige', 'des chaussons']),
    communicationA1Question('text', 'Complétez : Le livre est ___ la table.', 'sur', 'Le livre se trouve sur la surface de la table.'),
  ],
  'hesiter': [
    communicationA1Question('text', 'Complétez : Vous ___ que cet ordinateur est pratique ? (croire)', 'croyez', 'Au présent, « croire » avec « vous » donne « croyez ».'),
    communicationA1Question('text', 'Complétez : Elle ne ___ pas acheter cet ordinateur. (vouloir)', 'veut', 'Au présent, « vouloir » avec « elle » donne « veut ».'),
    communicationA1Question('choice', 'Où peut-on enregistrer des documents pour les transporter ?', 'Sur une clé USB', 'Une clé USB permet de transporter des fichiers numériques.', ['Sur une clé USB', 'Dans une cartouche d’encre', 'Sur un clavier']),
  ],
  'prendre-rendez-vous': [
    communicationA1Question('text', 'Complétez : J’arrive ___ tôt possible.', 'le plus', 'Le superlatif de « tôt » se forme avec « le plus ».'),
    communicationA1Question('choice', 'Complétez : Quelle chambre choisissez-vous ? — ___ petite.', 'La plus', '« Chambre » est féminin : le superlatif est « la plus petite ».', ['Le plus', 'La plus', 'Les plus']),
    communicationA1Question('text', 'Complétez : Quand j’étais enfant, nous ___ un médecin de famille. (avoir, imparfait)', 'avions', 'À l’imparfait, « avoir » avec « nous » donne « avions ».'),
    communicationA1Question('choice', 'Quelle formule convient pour demander un rendez-vous ?', 'Je voudrais prendre rendez-vous.', 'On dit « prendre rendez-vous » pour demander une consultation.', ['Je voudrais prendre rendez-vous.', 'Je voudrais faire rendez-vous.', 'Je voudrais venir rendez-vous.']),
    communicationA1Question('text', 'Complétez : Je voudrais reporter mon rendez-vous ___ plus tard.', 'à', 'On dit « reporter à plus tard ».'),
  ],
  'demander-des-renseignements': [
    communicationA1Question('text', 'Complétez : On prend le métro dans une ___.', 'station', 'On prend le métro dans une station.'),
    communicationA1Question('text', 'Complétez : Le bus n’est pas direct ; vous devez ___ à Châtelet. (changer)', 'changer', 'Après « devez », on emploie l’infinitif « changer ».'),
    communicationA1Question('choice', 'Quelle question est familière ?', 'Le bal commence à quelle heure ?', 'La question familière peut placer le groupe interrogatif à la fin.', ['À quelle heure est-ce que le bal commence ?', 'Le bal commence à quelle heure ?', 'À quelle heure le bal commence-t-il ?']),
    communicationA1Question('text', 'Complétez : Les inscriptions sont ouvertes ___ janvier au 15 février.', 'du 3', 'Pour indiquer le début et la fin d’une période, on dit « du 3 janvier au 15 février ».'),
    communicationA1Question('choice', 'Dans une association sportive, que peut-on demander ?', 'Y a-t-il des stages pendant les vacances ?', 'Une demande de renseignements peut porter sur les stages et les inscriptions.', ['Y a-t-il des stages pendant les vacances ?', 'Combien coûte une baguette ?', 'Où est le quai du train ?']),
  ],
  'exprimer-une-obligation': [
    communicationA1Question('text', 'Complétez : Je m’intéresse ___ cette démarche administrative.', 'à', 'Le verbe pronominal « s’intéresser » se construit avec « à ».'),
    communicationA1Question('choice', 'Quelle phrase exprime une obligation pour obtenir un visa ?', 'Il faut présenter un passeport.', '« Il faut » + infinitif exprime une obligation.', ['Il faut présenter un passeport.', 'On peut oublier son passeport.', 'Le passeport est en vacances.']),
    communicationA1Question('text', 'Complétez : Elle téléphone ___ consulat.', 'au', '« À + le » se contracte en « au » : au consulat.'),
  ],
  'autoriser-et-interdire': [
    communicationA1Question('text', 'Complétez : ___ interdit de prendre cette piste aujourd’hui.', 'Il est', 'La tournure impersonnelle est « il est interdit de ».'),
    communicationA1Question('text', 'Complétez : ___ agréable de faire du ski de fond.', 'C’est', '« C’est agréable de… » exprime une appréciation générale.'),
    communicationA1Question('choice', 'Comment appelle-t-on une grande masse de neige qui dévale une montagne ?', 'Une avalanche', 'Une avalanche est une masse de neige qui descend la montagne.', ['Une avalanche', 'Une remontée mécanique', 'Une piste verte']),
  ],
  'verifier': [
    communicationA1Question('text', 'Complétez : un cours ___ français.', 'de', 'Le complément « de français » précise le nom « cours ».'),
    communicationA1Question('choice', 'Comment appelle-t-on un professionnel qui apprend à nager ?', 'un moniteur de natation', 'Le moniteur de natation enseigne la natation.', ['un moniteur de natation', 'un maître-nageur de ski', 'un serveur de piscine']),
    communicationA1Question('text', 'Complétez : Pour nager, Sophie met son ___ de bain.', 'maillot', 'On dit « un maillot de bain ».'),
  ],
  'protester': [
    communicationA1Question('text', 'Mettez au futur proche : Il a fait les courses → Il ___ les courses.', 'va faire', 'Le futur proche se forme avec « aller » au présent + infinitif.'),
    communicationA1Question('choice', 'Où peut-on installer une tente ?', 'Sur un emplacement de camping', 'Une tente s’installe sur un emplacement de camping.', ['Sur un emplacement de camping', 'Dans une gare', 'Sur un comptoir de pharmacie']),
    communicationA1Question('choice', 'Quelle phrase exprime une protestation polie ?', 'Excusez-moi, mais il n’y a pas d’eau chaude.', 'Une réclamation polie peut commencer par « Excusez-moi, mais… ».', ['Tout est parfait.', 'Excusez-moi, mais il n’y a pas d’eau chaude.', 'Je n’ai rien à dire.']),
  ],
  'exprimer-des-intentions': [
    communicationA1Question('text', 'Complétez : Ils ___ leurs cousins bientôt. (voir, futur simple)', 'verront', 'Au futur simple, « voir » avec « ils » donne « verront ».'),
    communicationA1Question('text', 'Remplacez « les vélos » : Je ___ louerai demain.', 'les', 'Le pronom direct « les » remplace le nom pluriel « les vélos ».'),
    communicationA1Question('choice', 'Quel objet aide à prévenir le vol d’un vélo ?', 'un antivol', 'Un antivol sert à protéger le vélo contre le vol.', ['un antivol', 'un chéquier', 'un quai']),
    communicationA1Question('choice', 'Quelle phrase exprime une intention ?', 'Nous avons l’intention de louer deux vélos.', '« Avoir l’intention de » exprime un projet.', ['Nous avons l’intention de louer deux vélos.', 'Nous avons perdu deux vélos hier.', 'Nous ne connaissons pas les vélos.']),
  ],
  'localiser': [
    communicationA1Question('text', 'Complétez : Continuez tout droit, puis tournez ___ gauche.', 'à', 'L’expression de direction est « tourner à gauche ».'),
    communicationA1Question('text', 'Complétez : C’est une route ___ mène au château.', 'qui', '« Qui » reprend « route », sujet du verbe « mène ».'),
    communicationA1Question('text', 'Remplacez « les clés » : Je ___ ai trouvées.', 'les', 'Le pronom direct pluriel « les » précède l’auxiliaire.'),
    communicationA1Question('choice', 'Quelle phrase situe un endroit près d’un autre ?', 'La poste est à côté de la mairie.', '« À côté de » exprime la proximité.', ['La poste est à côté de la mairie.', 'La poste est hier.', 'La poste est très rapide.']),
    communicationA1Question('choice', 'Quelle démarche suit la perte d’un portefeuille ?', 'Faire une déclaration au commissariat', 'On peut faire une déclaration de perte ou de vol au commissariat.', ['Faire une déclaration au commissariat', 'Acheter un billet de train', 'Réserver une chambre']),
  ],
  'sinformer-par-telephone': [
    communicationA1Question('text', 'Répondez avec « en » : Vous avez un jardin ? — Oui, nous ___ avons un.', 'en', '« En » reprend « un jardin » ; la phrase complète est « nous en avons un ».'),
    communicationA1Question('choice', 'Dans quelle pièce trouve-t-on un lavabo ?', 'Dans la salle de bains', 'Le lavabo se trouve généralement dans la salle de bains.', ['Dans la salle de bains', 'Dans le garage', 'Dans le salon']),
    communicationA1Question('choice', 'Quelle phrase présente le sujet d’un appel ?', 'Je vous appelle au sujet de l’appartement à louer.', '« Au sujet de » annonce la raison de l’appel.', ['Je vous appelle au sujet de l’appartement à louer.', 'Je vous appelle sur le quai.', 'Je vous appelle de la boulangerie pour du pain.']),
  ],
  'comparer': [
    communicationA1Question('text', 'Complétez : Beaune est ___ peuplée que Dijon. (infériorité)', 'moins', 'Le comparatif d’infériorité se forme avec « moins… que ».'),
    communicationA1Question('text', 'Complétez : Cette ville est plus ___ que l’autre. (joli, féminin)', 'jolie', 'L’adjectif « jolie » s’accorde avec le nom féminin « ville ».'),
    communicationA1Question('choice', 'Quelle phrase compare deux distances ?', 'Paris est plus loin de Dijon que Beaune.', '« Plus loin… que » compare deux distances.', ['Paris est plus loin de Dijon que Beaune.', 'Paris est une ville.', 'Dijon est en France.']),
  ],
  'caracteriser': [
    communicationA1Question('choice', 'Complétez : Où sont les assiettes ? — ___ que j’ai lavées.', 'Celles', '« Assiettes » est féminin pluriel : « celles que j’ai lavées ».', ['Celui', 'Celle', 'Celles']),
    communicationA1Question('text', 'Complétez : Je préfère ___ qui a un motif vert. (la nappe)', 'celle', '« Nappe » est féminin singulier : on emploie « celle ».'),
    communicationA1Question('choice', 'Quel pronom reprend « les couverts » ?', 'ceux', '« Couverts » est masculin pluriel : le pronom est « ceux ».', ['celui', 'celle', 'ceux']),
  ],
  'exprimer-une-condition': [
    communicationA1Question('text', 'Complétez : Si notre voiture ne ___ pas, nous prendrons le train. (marcher)', 'marche', 'Après « si », on emploie le présent : « si la voiture ne marche pas ».'),
    communicationA1Question('text', 'Complétez : S’il ___ beau, nous irons nous promener. (faire)', 'fait', 'La condition réelle se construit avec « si » + présent.'),
    communicationA1VraiFaux('Dans une condition réelle, on emploie le présent après « si ».', true, 'On dit « si tu viens », et non « si tu viendras ».'),
  ],
  'parler-dun-besoin': [
    communicationA1Question('text', 'Complétez : Il faut qu’elle ___ un document. (imprimer, subjonctif)', 'imprime', 'Après « il faut que », « imprimer » est au subjonctif : « qu’elle imprime ».'),
    communicationA1Question('text', 'Complétez : Il est important que nous ___ un ordinateur. (acheter, subjonctif)', 'achetions', 'Au subjonctif, « acheter » avec « nous » donne « achetions ».'),
    communicationA1Question('choice', 'Quelle phrase exprime un besoin ?', 'Il faut que vous consultiez le site.', '« Il faut que » suivi du subjonctif exprime une nécessité.', ['Il faut que vous consultiez le site.', 'Vous avez consulté le site hier.', 'Vous regardez le site.']),
  ],
  'saluer-et-presenter': [
    communicationA1Question('text', 'Complétez : Nous ___ très bien. (se connaître)', 'nous connaissons', 'Le verbe pronominal se conjugue « nous nous connaissons ».'),
    communicationA1Question('text', 'Complétez : Ils ___ bien. (s’entendre)', 's’entendent', 'Au présent, « ils » se construit avec « s’entendent ».'),
    communicationA1Question('choice', 'Comment désigne-t-on une personne qui travaille avec soi ?', 'un collègue', 'Un collègue travaille dans la même organisation.', ['un collègue', 'un client', 'un voisin de train']),
  ],
  'excuser-et-sexcuser': [
    communicationA1Question('text', 'Complétez : Ils ___ leur maison avant de déménager. (vendre, plus-que-parfait)', 'avaient vendu', 'Le plus-que-parfait se forme avec l’imparfait d’« avoir » + participe passé.'),
    communicationA1Question('text', 'Complétez : Elle ___ déjà partie quand il est arrivé. (plus-que-parfait)', 'était', '« Partir » se conjugue avec « être » : elle était partie.'),
    communicationA1Question('choice', 'Quelle phrase présente une action antérieure à une autre action passée ?', 'J’avais déjà pris le bus quand tu as appelé.', '« Avais pris » est au plus-que-parfait et précède l’appel.', ['Je prends le bus.', 'J’avais déjà pris le bus quand tu as appelé.', 'Je prendrai le bus demain.']),
  ],
  'telephoner': [
    communicationA1Question('text', 'Complétez : Je téléphonerai à mes parents ; je ___ téléphonerai demain.', 'leur', '« Leur » remplace « à mes parents », complément indirect pluriel.'),
    communicationA1Question('choice', 'Que dit une standardiste pour demander d’attendre ?', 'Ne quittez pas, je vous passe la communication.', 'La standardiste demande à l’appelant de patienter.', ['Ne quittez pas, je vous passe la communication.', 'À quelle heure est le train ?', 'Je voudrais une chambre.']),
    communicationA1Question('choice', 'Que peut proposer la personne qui répond ?', 'Je peux prendre un message ?', 'On propose de prendre un message si la personne appelée est absente.', ['Je peux prendre un message ?', 'Quelle taille faites-vous ?', 'Est-ce qu’il y a du pain ?']),
    communicationA1Question('text', 'Remplacez « à Bertrand » : Je ___ téléphone.', 'lui', '« Lui » remplace un complément indirect singulier.'),
  ],
  'donner-des-instructions': [
    communicationA1Question('text', 'Mettez « venir » à l’impératif avec vous.', 'venez', 'La forme de « venir » avec vous à l’impératif est « venez ».'),
    communicationA1Question('text', 'Mettez « ne pas faire » à l’impératif avec vous.', 'ne faites pas', 'À la forme négative, « ne… pas » encadre le verbe : « ne faites pas ».'),
    communicationA1Question('text', 'Mettez « aller » à l’impératif avec tu.', 'va', 'À l’impératif, « aller » avec tu donne « va ».'),
    communicationA1Question('choice', 'Quelle consigne s’adresse à un enfant ?', 'Ne prends pas ce ballon.', '« Prends » est l’impératif de « prendre » avec tu.', ['Ne prenez pas ce ballon.', 'Ne prends pas ce ballon.', 'Tu ne prenais pas ce ballon.']),
    communicationA1Question('choice', 'Où les enfants peuvent-ils jouer dans le sable ?', 'Dans le bac à sable', 'Le bac à sable est un espace de jeu pour les enfants.', ['Dans le bac à sable', 'Dans une cabine téléphonique', 'Sur un quai']),
  ],
  'nier': [
    communicationA1Question('text', 'Répondez négativement : Vous avez déjà visité Lyon ? — Non, je n’ai ___ visité Lyon.', 'jamais', '« Ne… jamais » nie une action à tous les moments.'),
    communicationA1Question('text', 'Répondez négativement : Vous avez acheté quelque chose ? — Non, je n’ai ___ acheté.', 'rien', '« Ne… rien » signifie qu’aucune chose n’a été achetée.'),
    communicationA1Question('choice', 'Quelle réponse nie une action passée ?', 'Non, nous ne nous sommes pas reposés.', 'Au passé composé, la négation encadre l’auxiliaire.', ['Non, nous ne nous sommes pas reposés.', 'Non, nous nous reposons.', 'Non, nous nous reposerons.']),
  ],
  'inviter-accepter-refuser': [
    communicationA1Question('text', 'Complétez : Je pars en vacances avec ___ mari et mes enfants.', 'mon', '« Mari » est masculin singulier : on dit « mon mari ».'),
    communicationA1Question('choice', 'Dans « On a déjeuné ensemble », quel est le sens de « on » ?', 'Nous', 'Dans la conversation, « on » peut remplacer « nous ».', ['Nous', 'Eux', 'Vous']),
    communicationA1Question('text', 'Remplacez « nous » par « on » : Nous sommes arrivés en avance → ___ est arrivé en avance.', 'On', 'Avec le sens de « nous », « on » se conjugue à la troisième personne du singulier.'),
    communicationA1Question('choice', 'Quelle réponse refuse poliment une invitation ?', 'Merci, mais je ne suis pas libre ce soir.', 'Cette réponse refuse l’invitation et donne une raison.', ['Avec plaisir !', 'Merci, mais je ne suis pas libre ce soir.', 'Je vous invite chez moi.']),
  ],
  'demander-de-faire': [
    communicationA1Question('choice', 'Quelle demande au style indirect est correcte ?', 'Elle me demande de répondre au téléphone.', 'La construction est « demander à quelqu’un de » + infinitif.', ['Elle me demande que répondre au téléphone.', 'Elle me demande de répondre au téléphone.', 'Elle me demande répondre de téléphone.']),
    communicationA1Question('text', 'Complétez : Il demande ___ la réunion commence à 15 heures.', 'si', 'Une question fermée rapportée est introduite par « si ».'),
    communicationA1Question('choice', 'Quelle formule demande poliment un service à un collègue ?', 'Pourriez-vous envoyer ce fax ?', 'Le conditionnel rend la demande plus polie.', ['Envoie ce fax immédiatement !', 'Pourriez-vous envoyer ce fax ?', 'Vous avez envoyé le fax hier.']),
  ],
  'proposer': [
    communicationA1Question('text', 'Complétez : Je propose ___ préparer un pique-nique.', 'de', 'La construction est « proposer de » + infinitif.'),
    communicationA1Question('text', 'Complétez : Que dirais-tu ___ inviter Anne ?', 'd’', 'Après « que dirais-tu », on emploie « de » + infinitif ; devant voyelle, « d’ ».'),
    communicationA1Question('choice', 'Dans quelle phrase trouve-t-on une proposition au conditionnel ?', 'On pourrait faire une promenade.', '« Pourrait » exprime une proposition au conditionnel.', ['On a fait une promenade.', 'On pourrait faire une promenade.', 'On fait une promenade hier.']),
  ],
  'parler-de-sa-sante': [
    communicationA1Question('text', 'Complétez : Je n’ai ___ de fièvre. (aucune chose)', 'pas', 'La négation simple est « ne… pas » : je n’ai pas de fièvre.'),
    communicationA1Question('text', 'Complétez : Elle ___ cassé la jambe en faisant du ski. (être, passé composé)', 's’est', 'Avec « se casser », le passé composé se forme avec « être » : elle s’est cassé la jambe.'),
    communicationA1Question('choice', 'Quelle question peut poser un médecin pour connaître le problème ?', 'Qu’est-ce qui ne va pas ?', 'Cette question demande au patient de décrire son état.', ['Qu’est-ce qui ne va pas ?', 'Où est le quai ?', 'Combien coûte ce stylo ?']),
    communicationA1Question('text', 'Complétez : On prend la température avec un ___.', 'thermomètre', 'Le thermomètre sert à mesurer la température.'),
    communicationA1Question('text', 'Complétez : Il s’est blessé ___ jouant au football.', 'en', 'Le gérondif se forme avec « en » + participe présent.'),
  ],
  'parler-de-ses-gouts': [
    communicationA1Question('text', 'Complétez : Ils ont horreur ___ romans policiers.', 'des', '« Avoir horreur de » + « les romans » donne « des romans ».'),
    communicationA1Question('text', 'Complétez : Tu as envie ___ sortir ce soir ?', 'de', 'On dit « avoir envie de » + infinitif.'),
    communicationA1Question('choice', 'Quelle phrase exprime un intérêt ?', 'Je m’intéresse à l’histoire de mon pays.', '« S’intéresser à » permet de parler d’un intérêt.', ['Je m’intéresse à l’histoire de mon pays.', 'Je m’intéresse de l’histoire.', 'Je suis l’histoire.']),
  ],
  'parler-de-son-cv': [
    communicationA1Question('text', 'Complétez : Elle ___ bien les enfants. (connaître)', 'connaît', '« Connaître » s’emploie avec un nom : elle connaît les enfants.'),
    communicationA1Question('text', 'Complétez : Je sais ___ un bain à un bébé. (donner)', 'donner', '« Savoir » suivi d’un infinitif indique une compétence.'),
    communicationA1Question('choice', 'Quelle compétence est correctement formulée ?', 'Je sais préparer un biberon.', '« Savoir » se construit avec un infinitif pour exprimer une capacité.', ['Je connais préparer un biberon.', 'Je sais préparer un biberon.', 'Je sais un biberon.']),
  ],
  'demander-donner-opinion': [
    communicationA1Question('text', 'Mettez au passé récent : Elle est partie → Elle ___ partir.', 'vient de', 'Le passé récent se forme avec « venir » au présent + de + infinitif.'),
    communicationA1Question('text', 'Mettez au passé récent : Ils sont arrivés → Ils ___ arriver.', 'viennent d’', 'Avec « ils », « venir » devient « viennent » ; « de » s’élide devant voyelle.'),
    communicationA1Question('choice', 'Quelle question demande l’avis d’un collègue ?', 'Qu’est-ce que vous en pensez ?', 'Cette formulation demande directement une opinion.', ['Qu’est-ce que vous en pensez ?', 'Quand partez-vous ?', 'Où est votre bureau ?']),
  ],
  'exprimer-la-surprise': [
    communicationA1Question('choice', 'Quelle exclamation exprime la surprise ?', 'Ça alors !', '« Ça alors ! » est une réaction de surprise.', ['À demain !', 'Ça alors !', 'De rien !']),
    communicationA1Question('text', 'Complétez : La ___ du spectacle est prévue ce soir. (organiser)', 'organisation', 'Le nom dérivé de « organiser » est « organisation ».'),
    communicationA1Question('choice', 'Quelle phrase montre que la nouvelle étonne la personne ?', 'Ce n’est pas possible !', 'Cette exclamation peut exprimer la surprise.', ['Je suis d’accord.', 'Ce n’est pas possible !', 'Je vous remercie.']),
  ],
  'certitude-et-incertitude': [
    communicationA1Question('text', 'Complétez : Ce ___ est agréable, c’est de faire une promenade.', 'qui', '« Ce qui » est sujet du verbe « est ».'),
    communicationA1Question('text', 'Complétez : Ce ___ nous voulons, c’est réussir.', 'que', '« Ce que » est complément du verbe « voulons ».'),
    communicationA1Question('choice', 'Quelle phrase exprime une certitude ?', 'Je suis sûr qu’elle a trouvé un travail.', '« Je suis sûr que… » marque la certitude.', ['Il est possible qu’elle parte.', 'Je suis sûr qu’elle a trouvé un travail.', 'Je ne sais pas si elle est là.']),
    communicationA1Question('choice', 'Quelle phrase exprime une incertitude ?', 'Il est possible qu’il ne vienne pas.', '« Il est possible que… » exprime une possibilité, pas une certitude.', ['Il viendra certainement.', 'Il est possible qu’il ne vienne pas.', 'Je sais qu’il est là.']),
    communicationA1Question('text', 'Complétez : ___ qui est certain, c’est qu’ils vont arriver.', 'Ce', 'La tournure impersonnelle commence par « ce qui est certain ».'),
  ],
  'decrire': [
    communicationA1Question('text', 'Complétez : Quand Léa ___ du cinéma, il pleuvait. (sortir, passé composé)', 'est sortie', '« Sortir » se conjugue avec « être » ; le participe s’accorde avec Léa.'),
    communicationA1Question('text', 'Complétez : Elle ___ au bureau quand le téléphone a sonné. (travailler, imparfait)', 'travaillait', 'L’imparfait décrit une action en cours interrompue par un événement.'),
    communicationA1Question('choice', 'Quel temps convient à une action brève qui interrompt une description ?', 'Le passé composé', 'Le passé composé présente l’événement ponctuel ; l’imparfait décrit le cadre.', ['L’imparfait', 'Le passé composé', 'Le futur simple']),
  ],
  'faire-des-compliments': [
    communicationA1Question('text', 'Transformez « avec élégance » en adverbe : Elle s’habille ___.', 'élégamment', 'L’adverbe correspondant à « avec élégance » est « élégamment ».'),
    communicationA1Question('text', 'Complétez : Il parle avec douceur ; il parle ___.', 'doucement', 'L’adverbe de manière correspondant à « doux » est « doucement ».'),
    communicationA1Question('choice', 'Quelle phrase fait un compliment sur un bijou ?', 'Ce collier est vraiment élégant !', 'Cette phrase valorise le collier.', ['Ce collier est vraiment élégant !', 'Où est le collier ?', 'Je n’ai pas de collier.']),
  ],
  'feliciter': [
    communicationA1Question('text', 'Complétez : ___ mes félicitations !', 'Toutes', '« Félicitations » est féminin pluriel : « toutes mes félicitations ».'),
    communicationA1Question('text', 'Complétez : Ils ___ trois enfants. (avoir, passé composé)', 'ont eu', 'Au passé composé, « avoir » se conjugue « ils ont eu ».'),
    communicationA1Question('choice', 'Quelle formule félicite un couple qui se marie ?', 'Tous mes vœux de bonheur !', 'Cette formule accompagne traditionnellement des félicitations de mariage.', ['Tous mes vœux de bonheur !', 'Je suis désolé pour vous.', 'Ce n’est pas grave.']),
  ],
  'consoler-et-encourager': [
    communicationA1Question('text', 'Mettez au passif : Luc bat Joël au tennis → Joël ___ par Luc.', 'est battu', 'Au présent passif, on emploie « être » au présent + participe passé.'),
    communicationA1Question('text', 'Mettez au passif : Gilles organisera une réunion → La réunion ___ par Gilles.', 'sera organisée', 'Au futur passif : « être » au futur + participe passé accordé avec « réunion ».'),
    communicationA1Question('choice', 'Quelle phrase console une personne qui a perdu ?', 'Ce n’est pas grave, tu feras mieux la prochaine fois.', 'Cette réponse réconforte et encourage la personne.', ['Tu ne gagneras jamais.', 'Ce n’est pas grave, tu feras mieux la prochaine fois.', 'Tu as perdu, tant pis.']),
  ],
  'critiquer': [
    communicationA1Question('text', 'Complétez : Valérie est absente ___ elle est malade.', 'parce qu’', '« Parce que » introduit une cause ; devant voyelle, on écrit « parce qu’ ».'),
    communicationA1Question('text', 'Complétez : Le match est annulé ___ la pluie.', 'à cause de', '« À cause de » introduit la cause négative de l’annulation.'),
    communicationA1Question('choice', 'Quelle formule exprime une critique modérée ?', 'À mon avis, le spectacle manque de rythme.', '« À mon avis » présente une appréciation personnelle avec tact.', ['Ce spectacle est nul !', 'À mon avis, le spectacle manque de rythme.', 'Je n’aime rien.']),
  ],
  'exprimer-ladmiration': [
    communicationA1Question('text', 'Complétez : Il pleut, ___ le concert continue.', 'mais', '« Mais » relie deux idées opposées.'),
    communicationA1Question('choice', 'Quelle phrase exprime l’admiration pour un artiste ?', 'Quel artiste remarquable !', 'Cette exclamation exprime un jugement admiratif.', ['Quel artiste remarquable !', 'L’artiste arrive demain.', 'Je cherche l’artiste.']),
    communicationA1Question('text', 'Complétez : Le spectacle était magnifique ; ___, nous sommes restés jusqu’à la fin.', 'pourtant', '« Pourtant » marque l’opposition entre deux idées.'),
  ],
};

communicationA1Lessons.forEach((lesson) => {
  lesson.questions.push(...(communicationA1Supplement[lesson.id] || []));
});

communicationA1Lessons.push(
  {
    id: 'activites-communicatives',
    title: 'Activités communicatives',
    sourcePages: '122–130',
    goal: 'Réutiliser les expressions des chapitres dans neuf situations de la vie quotidienne.',
    explanation: [
      'Ces mini-situations réinvestissent les actes de parole du cours : demander son chemin, retrouver un objet, inviter, acheter, reporter un rendez-vous, parler d’un accident, demander un renseignement, louer un logement et demander un service.',
      'Choisissez une réponse adaptée au contexte et repérez la structure utile pour continuer l’échange.',
    ],
    cards: [
      { title: 'Dans la rue', text: 'Pardon, pourriez-vous m’indiquer le chemin ?', tone: 'lilac' },
      { title: 'Au téléphone', text: 'Je vous appelle au sujet de l’appartement à louer.', tone: 'peach' },
      { title: 'Au bureau', text: 'Ça t’ennuierait de répondre au téléphone ?', tone: 'mint' },
    ],
    questions: [
      communicationA1Question('choice', 'Vous cherchez une rue. Quelle demande est la plus polie ?', 'Pourriez-vous m’indiquer le chemin, s’il vous plaît ?', 'Une demande polie peut commencer par « Pourriez-vous… ? ».', ['Pourriez-vous m’indiquer le chemin, s’il vous plaît ?', 'Donne-moi la rue.', 'Je suis arrivé hier.']),
      communicationA1Question('choice', 'Armelle ne trouve pas la clé de sa voiture. Où peut-elle vérifier d’abord ?', 'Dans son sac à main', 'Dans le dialogue, Tanguy lui demande si la clé est dans son sac.', ['Dans son sac à main', 'Au guichet de la gare', 'Dans la boîte aux lettres']),
      communicationA1Question('choice', 'Vous voulez inviter une amie à une fête. Que dites-vous ?', 'Tu es libre samedi pour venir à ma fête ?', 'Une invitation demande si la personne est disponible et précise l’activité.', ['Tu es libre samedi pour venir à ma fête ?', 'Pourquoi tu ne viens jamais ?', 'La fête était hier.']),
      communicationA1Question('text', 'Pour connaître le prix d’un pantalon, demandez : « ___ coûte ce pantalon ? »', 'Combien', '« Combien coûte… ? » est une question pour demander un prix.'),
      communicationA1Question('choice', 'Vous devez reporter un rendez-vous médical. Quelle formule convient ?', 'Je voudrais reporter mon rendez-vous, s’il vous plaît.', '« Reporter un rendez-vous » signifie le déplacer à une autre date.', ['Je voudrais reporter mon rendez-vous, s’il vous plaît.', 'Je voudrais réserver un croissant.', 'Je viens de trouver la gare.']),
      communicationA1Question('text', 'Vous racontez une chute : « Je ___ cassé le bras. » (se casser, passé composé)', 'me suis', 'Au passé composé, le verbe pronominal « se casser » se conjugue avec être : je me suis cassé le bras.'),
      communicationA1Question('choice', 'Où peut-on acheter des timbres ?', 'À la poste', 'La poste est un lieu où l’on peut acheter des timbres.', ['À la poste', 'À la pharmacie', 'Au cabinet médical']),
      communicationA1Question('text', 'Pour demander la superficie d’un logement : « L’appartement fait combien de ___ carrés ? »', 'mètres', 'La superficie s’exprime en mètres carrés.'),
      communicationA1Question('choice', 'Votre collègue vous demande de répondre à son téléphone. Que répondez-vous ?', 'D’accord, je répondrai au téléphone.', 'La réponse accepte le service demandé.', ['D’accord, je répondrai au téléphone.', 'Je réserve une chambre.', 'Je ne trouve pas le chemin.']),
      communicationA1Question('choice', 'Dans « Ça t’ennuierait de répondre au téléphone ? », quelle est la fonction de la phrase ?', 'Demander poliment un service', 'La tournure au conditionnel adoucit une demande de service.', ['Demander poliment un service', 'Refuser une invitation', 'Demander le prix d’un billet']),
      communicationA1Question('choice', 'Vous avez perdu votre clé. Quelle phrase décrit le problème ?', 'Je ne trouve plus ma clé.', '« Ne plus trouver » décrit la perte d’un objet.', ['Je ne trouve plus ma clé.', 'Je vais acheter une clé USB.', 'Je connais cette clé.']),
      communicationA1Question('text', 'Pour demander une taille dans un magasin, dites : « Quelle ___ faites-vous ? »', 'taille', 'Dans un magasin de vêtements, on demande quelle taille fait le client.'),
      communicationA1Question('choice', 'Vous louez un appartement et téléphonez à la propriétaire. Quelle phrase convient ?', 'Je vous appelle au sujet de l’appartement à louer.', '« Au sujet de » annonce la raison de l’appel.', ['Je vous appelle au sujet de l’appartement à louer.', 'Je vais prendre le train.', 'Je voudrais une douzaine d’œufs.']),
      communicationA1Question('text', 'Complétez la demande : « Est-ce que tu pourrais ___ cette photocopie ? »', 'faire', 'Après « pourrais », on emploie l’infinitif « faire ».'),
      communicationA1Question('choice', 'Pour retrouver une rue, quel renseignement est utile ?', 'La direction et les repères du trajet', 'Un itinéraire indique les directions et les repères à suivre.', ['La direction et les repères du trajet', 'La pointure des chaussures', 'Le prix d’une consultation']),
      communicationA1Question('choice', 'Vous avez mal au bras après une chute. Quelle réponse est adaptée ?', 'Je me suis cassé le bras en tombant.', 'Le passé composé présente l’accident terminé.', ['Je me suis cassé le bras en tombant.', 'Je vais louer un vélo.', 'Je fais du 40.']),
      communicationA1Question('choice', 'Vous cherchez un logement. Quel renseignement demandez-vous ?', 'Est-ce qu’il y a un garage ?', 'La question porte sur un équipement du logement.', ['Est-ce qu’il y a un garage ?', 'Combien de temps dure le film ?', 'Quelle est la cuisson du steak ?']),
      communicationA1Question('choice', 'Quel élément donne la secrétaire pour organiser un rendez-vous ?', 'Une date et une heure disponibles', 'Un rendez-vous se choisit selon les créneaux proposés.', ['Une date et une heure disponibles', 'Une taille de pantalon', 'Une liste de poissons']),
    ],
  },
  {
    id: 'exercices-oraux-reponses',
    title: 'Exercices oraux : répondre',
    sourcePages: '131',
    goal: 'Choisir une réponse naturelle à des questions et formules entendues dans la vie quotidienne.',
    explanation: [
      'Une réponse possible dépend de la situation : au magasin, à la poste, au téléphone, chez le médecin ou entre amis.',
      'Lisez chaque phrase, identifiez le contexte et choisissez une réplique cohérente. Les réponses proposées sont des adaptations vérifiables ; aucun enregistrement audio n’est fourni.',
    ],
    cards: [
      { title: 'Une question de magasin', text: '« Quelle taille faites-vous ? » — « Je fais du 40. »', tone: 'lilac' },
      { title: 'Une nouvelle heureuse', text: '« Nous allons nous marier ! » — « Toutes mes félicitations ! »', tone: 'peach' },
    ],
    questions: [
      communicationA1Question('choice', '« Pardon, vous êtes du quartier ? » — Quelle réponse convient ?', 'Oui, j’habite tout près.', 'La réponse indique où habite la personne.', ['Oui, j’habite tout près.', 'Je fais du 40.', 'Je voudrais une tarte.']),
      communicationA1Question('choice', '« Bonjour, madame, je peux vous renseigner ? » — Que répondez-vous pour demander un produit ?', 'Oui, je cherche un dictionnaire.', 'La réponse exprime le renseignement souhaité.', ['Oui, je cherche un dictionnaire.', 'Je suis désolé pour votre chute.', 'À la prochaine !']),
      communicationA1Question('choice', '« C’est pour offrir ? » — Quelle réponse confirme que c’est un cadeau ?', 'Oui, c’est un cadeau pour ma sœur.', 'La réponse indique que l’article est destiné à quelqu’un.', ['Oui, c’est un cadeau pour ma sœur.', 'Je cherche la poste.', 'Il fait 65 mètres carrés.']),
      communicationA1Question('text', '« C’est à quel nom ? » — Répondez : « Au nom ___ Martin. »', 'de', 'On dit « au nom de » suivi du nom de la personne.'),
      communicationA1Question('choice', '« Vous avez choisi ? » — Quelle réponse commande un plat ?', 'Oui, je vais prendre le poisson du jour.', 'Le client répond en nommant son choix.', ['Oui, je vais prendre le poisson du jour.', 'Je ne trouve plus ma clé.', 'Je suis du quartier.']),
      communicationA1Question('choice', '« Qu’est-ce que vous avez comme parfums ? » — Que demande le client ?', 'Les parfums de glace disponibles', 'La question demande les parfums proposés.', ['Les parfums de glace disponibles', 'Le prix d’un billet de train', 'L’adresse du médecin']),
      communicationA1Question('text', '« Quelle taille faites-vous ? » — Répondez : « Je fais du ___. »', '40', 'La réponse donne une taille de vêtement.'),
      communicationA1Question('choice', '« Et comme boisson ? » — Quelle réponse convient ?', 'Une eau minérale, s’il vous plaît.', 'Le serveur demande ce que le client veut boire.', ['Une eau minérale, s’il vous plaît.', 'Un billet aller-retour.', 'Une chambre double.']),
      communicationA1Question('choice', '« Je suis absolument désolé ! » — Quelle réponse pardonne ?', 'Ce n’est pas grave.', '« Ce n’est pas grave » répond à des excuses.', ['Ce n’est pas grave.', 'Je fais du 40.', 'À quelle heure part le train ?']),
      communicationA1Question('choice', '« C’est vous qui avez téléphoné ce matin ? » — Que pouvez-vous répondre ?', 'Oui, je vous ai appelé ce matin.', 'La réponse confirme l’appel et reprend le passé composé.', ['Oui, je vous ai appelé ce matin.', 'Oui, j’ai mal au ventre.', 'Non, la poste est à droite.']),
      communicationA1Question('choice', '« Vous avez un dossier chez nous ? » — Quelle réponse convient ?', 'Oui, je suis déjà venu(e).', 'La réponse confirme l’existence d’un dossier antérieur.', ['Oui, je suis déjà venu(e).', 'Je voudrais des pommes.', 'Je vais partir à 18 heures.']),
      communicationA1Question('choice', '« Vous pouvez me donner vos coordonnées ? » — Quelle information donnez-vous ?', 'Mon adresse et mon numéro de téléphone', 'Les coordonnées comprennent des moyens de contact.', ['Mon adresse et mon numéro de téléphone', 'Ma commande de poissons', 'La météo de demain']),
      communicationA1Question('text', '« Les fraises sont à combien ? » — Répondez par un prix : « Elles sont à ___ euros le kilo. »', 'quatre', 'La réponse indique le prix au kilo ; le nombre est écrit en toutes lettres.'),
      communicationA1Question('choice', '« Nous allons nous marier ! » — Quelle réaction convient ?', 'Toutes mes félicitations !', 'On félicite un couple qui annonce son mariage.', ['Toutes mes félicitations !', 'Je suis désolé.', 'Je dois changer de train.']),
      communicationA1Question('choice', '« Vous vous intéressez à la politique ? » — Quelle réponse positive convient ?', 'Oui, je m’y intéresse beaucoup.', 'Le pronom « y » reprend « à la politique ».', ['Oui, je m’y intéresse beaucoup.', 'Oui, je la téléphone.', 'Oui, j’en suis allé.']),
      communicationA1Question('choice', '« Qu’est-ce qui ne va pas ? » — Que peut répondre un patient ?', 'J’ai mal à la gorge.', 'Le patient décrit son symptôme.', ['J’ai mal à la gorge.', 'Je voudrais le quai numéro deux.', 'Je fais du 40.']),
      communicationA1Question('choice', '« Comment vous êtes-vous fait ça ? » — Quelle réponse raconte un accident ?', 'Je suis tombé en faisant du vélo.', 'Le passé composé raconte l’accident ; le gérondif précise l’action simultanée.', ['Je suis tombé en faisant du vélo.', 'Je vais prendre un café.', 'Je voudrais un rendez-vous mardi.']),
      communicationA1Question('choice', '« Vous êtes libre demain soir pour dîner ? » — Quelle réponse accepte ?', 'Oui, avec plaisir.', '« Avec plaisir » exprime l’acceptation d’une invitation.', ['Oui, avec plaisir.', 'Non, je ne trouve plus ma clé.', 'La rue est tout près.']),
      communicationA1Question('choice', '« Comment avez-vous trouvé le spectacle ? » — Quelle réponse donne une opinion positive ?', 'Je l’ai trouvé magnifique.', 'La réponse exprime une appréciation positive du spectacle.', ['Je l’ai trouvé magnifique.', 'Je l’ai perdu dans la rue.', 'Je voudrais le reporter.']),
      communicationA1Question('choice', '« Est-ce que je peux apporter quelque chose ? » — Que répondez-vous ?', 'Oui, vous pouvez apporter un dessert.', 'La réponse autorise une contribution.', ['Oui, vous pouvez apporter un dessert.', 'Je ne sais pas où est la poste.', 'Je fais du 40.']),
      communicationA1Question('choice', '« C’est de la part de qui ? » — Quelle réponse convient ?', 'De la part de madame Dupont.', 'La formule indique le nom de la personne qui appelle.', ['De la part de madame Dupont.', 'C’est dans la salle de bains.', 'C’est à 16 heures.']),
      communicationA1Question('choice', '« Je suis absolument désolée ! » — Quelle réponse rassure ?', 'Ce n’est rien, ne vous inquiétez pas.', 'Cette réponse accepte les excuses et rassure la personne.', ['Ce n’est rien, ne vous inquiétez pas.', 'Je voudrais une chambre.', 'Je cherche un pantalon.']),
      communicationA1Question('choice', '« Je cherche la poste, s’il vous plaît. » — Quelle réponse indique le chemin ?', 'Continuez tout droit, puis tournez à droite.', 'Une indication de direction aide à trouver la poste.', ['Continuez tout droit, puis tournez à droite.', 'Je fais du 40.', 'C’est pour offrir.']),
    ],
  },
  {
    id: 'exercices-oraux-dialogues',
    title: 'Exercices oraux : compléter les dialogues',
    sourcePages: '131',
    goal: 'Compléter des échanges courts avec une réplique cohérente et grammaticalement correcte.',
    explanation: [
      'Dans un dialogue, observez la question ou la réponse déjà donnée, puis choisissez la réplique qui fait avancer l’échange.',
      'Les scènes reprennent des situations du cours : commandes, achats, appels, rendez-vous, invitations, santé et loisirs.',
    ],
    cards: [
      { title: 'Une commande', text: '« Et avec ceci ? » — « Deux pains au chocolat, s’il vous plaît. »', tone: 'mint' },
      { title: 'Un rendez-vous', text: '« Mardi à 16 h 45, ça vous va ? » — « Non, un autre jour à la même heure. »', tone: 'blue' },
    ],
    questions: [
      communicationA1Question('choice', '— Je voudrais deux croissants. — « Et avec ceci ? » — …', 'Une brioche, s’il vous plaît.', 'La réponse ajoute un autre produit à la commande.', ['Une brioche, s’il vous plaît.', 'Je ne trouve plus mon portefeuille.', 'Je suis déjà venu ici.']),
      communicationA1Question('choice', '— Avez-vous des tartes aux abricots ? — Nous n’en avons pas. — …', 'Alors, je vais prendre une tarte aux pommes.', 'La réponse choisit une autre variété proposée.', ['Alors, je vais prendre une tarte aux pommes.', 'Je vais prendre le train.', 'Je voudrais un rendez-vous.']),
      communicationA1Question('choice', '— Je voudrais offrir un bijou. — Vous voulez mettre combien ? — …', 'Environ cinquante euros.', 'La réponse indique le budget prévu pour le cadeau.', ['Environ cinquante euros.', 'Je fais du 40.', 'C’est à la poste.']),
      communicationA1Question('choice', '— Je commande un plateau de fromages. — Pour quel jour et combien de personnes ? — …', 'Pour samedi, pour six personnes.', 'La réponse précise la date et le nombre de personnes.', ['Pour samedi, pour six personnes.', 'À côté de la gare.', 'Je n’ai jamais voyagé.']),
      communicationA1Question('choice', '— Je vais prendre un steak-frites. — Quelle cuisson ? — …', 'À point, s’il vous plaît.', 'La cuisson précise la manière de préparer le steak.', ['À point, s’il vous plaît.', 'En première classe.', 'Dans le sac à main.']),
      communicationA1Question('choice', '— Je voudrais parler à Fanny. — Elle n’est pas là. Je peux prendre un message ? — …', 'Oui, dites-lui que j’ai appelé.', 'Le client demande de transmettre un message.', ['Oui, dites-lui que j’ai appelé.', 'Je voudrais une tarte aux abricots.', 'Le bus est direct.']),
      communicationA1Question('choice', '— On déjeune ensemble demain ? — …', 'Avec plaisir, mais je ne suis libre qu’à midi.', 'La réponse accepte l’invitation et précise une disponibilité.', ['Avec plaisir, mais je ne suis libre qu’à midi.', 'Je me suis cassé le bras.', 'Je cherche la poste.']),
      communicationA1Question('choice', '— Où est mon portefeuille ? — Il n’est pas dans ton sac ? — …', 'Non, je viens de le chercher partout.', 'Le pronom « le » remplace « portefeuille » ; la réponse explique la recherche.', ['Non, je viens de le chercher partout.', 'Oui, je voudrais une glace.', 'Il est en première classe.']),
      communicationA1Question('choice', '— Mardi à 16 h 45, ça vous va ? — …', 'Non, pas mardi. Un autre jour à la même heure.', 'La réponse refuse la date et propose un autre jour.', ['Non, pas mardi. Un autre jour à la même heure.', 'Oui, j’ai un portefeuille.', 'Je veux mettre cinquante euros.']),
      communicationA1Question('choice', '— Je voudrais trois croissants. — Nous n’en avons plus. — …', 'Alors, je vais prendre trois pains au chocolat.', 'La réponse choisit une autre viennoiserie disponible.', ['Alors, je vais prendre trois pains au chocolat.', 'Je voudrais annuler mon rendez-vous.', 'Je suis libre demain soir.']),
      communicationA1Question('choice', '— Vous prendrez un dessert ? — Qu’avez-vous comme desserts ? — …', 'Nous avons des glaces, des tartes et des fruits.', 'La réponse énumère des desserts proposés.', ['Nous avons des glaces, des tartes et des fruits.', 'La poste est à droite.', 'Je suis désolé pour votre bras.']),
      communicationA1Question('choice', '— Vous avez ce modèle en 40 ? — Non, plus en 40. — …', 'Est-ce que vous l’avez en 42 ?', 'La cliente demande une autre taille du même modèle.', ['Est-ce que vous l’avez en 42 ?', 'À quelle heure part le train ?', 'Je voudrais laisser un message.']),
      communicationA1Question('choice', '— Et si on allait au cinéma ce soir ? — …', 'Bonne idée, quel film est-ce qu’on va voir ?', 'La réponse accepte la proposition et demande une précision.', ['Bonne idée, quel film est-ce qu’on va voir ?', 'Je voudrais un billet de train.', 'Je suis tombé en vélo.']),
      communicationA1Question('choice', '— J’ai deux places pour le théâtre. Ça t’intéresse ? — …', 'Oui, qu’est-ce qu’on va voir ?', 'La réponse manifeste de l’intérêt et demande le programme.', ['Oui, qu’est-ce qu’on va voir ?', 'Non, le pantalon est trop court.', 'Je cherche la poste.']),
      communicationA1Question('choice', '— Je voudrais quelque chose pour le mal de gorge. — Vous avez aussi de la fièvre ? — …', 'Non, j’ai seulement mal à la gorge.', 'La réponse précise le symptôme et répond à la question du pharmacien.', ['Non, j’ai seulement mal à la gorge.', 'Je prends un billet pour Lille.', 'Je suis libre samedi.']),
      communicationA1Question('choice', '— Bonjour, je suis bien chez Aurélie ? — …', 'Non, vous avez fait erreur.', 'La réponse signale que l’appel n’est pas au bon numéro.', ['Non, vous avez fait erreur.', 'Oui, je voudrais une tarte.', 'La chambre est assez grande.']),
    ],
  },
);

const communicationA1FinalTest = [
  communicationA1Question('choice', 'Au restaurant, comment demande-t-on la préparation d’un steak ?', 'Quelle est la cuisson de votre steak ?', 'La question porte sur la cuisson ; « cuisson » est le mot attendu au test.', ['Quelle est la cuisson de votre steak ?', 'Quelle est la saison de votre steak ?', 'Quelle est la taille de votre steak ?']),
  communicationA1Question('text', 'Complétez : « C’est de la ___ de qui ? »', 'part', '« De la part de qui ? » demande l’identité de la personne qui appelle.'),
  communicationA1Question('choice', 'Dans un magasin de vêtements, quelle question demande la taille ?', 'Quelle taille faites-vous ?', 'La question attend le mot « taille ».', ['Quelle heure faites-vous ?', 'Quelle taille faites-vous ?', 'Quel prix faites-vous ?']),
  communicationA1Question('choice', 'Quel produit peut-on demander à la pharmacie ?', 'un médicament', 'Un médicament s’achète à la pharmacie.', ['un médicament', 'un billet de train', 'un croissant']),
  communicationA1Question('choice', 'Laurent téléphone à un ami en se servant de son…', 'téléphone portable', 'L’appareil mobile utilisé pour téléphoner est un téléphone portable.', ['téléphone portable', 'classeur', 'parapluie']),
  communicationA1Question('text', 'Ariane ne peut pas venir : elle a un ___.', 'empêchement', 'Un empêchement explique qu’une personne ne soit pas disponible.'),
  communicationA1Question('text', 'Complétez : Cette veste est ___ courte pour moi.', 'trop', '« Trop courte » exprime un excès.'),
  communicationA1Question('choice', 'Quel verbe complète « Combien voulez-vous ___ pour ce cadeau ? »', 'mettre', '« Mettre combien ? » demande le budget prévu.', ['mettre', 'prendre', 'descendre']),
  communicationA1Question('choice', 'Vous cherchez le même ___ en bleu.', 'modèle', 'Le mot « modèle » désigne la variante d’un article.', ['modèle', 'guichet', 'médicament']),
  communicationA1Question('text', 'Complétez : Je dois ___ mon rendez-vous de mardi.', 'décommander', '« Décommander » signifie annuler un rendez-vous.'),

  communicationA1Question('choice', '— Vous voulez mettre combien ? — …', 'Environ 40 euros.', 'Le corrigé du test propose un budget d’environ quarante euros.', ['Environ 40 euros.', 'Je fais du 40.', 'À la poste.']),
  communicationA1Question('choice', '— L’appartement fait combien de mètres carrés ? — …', 'Il fait 65 mètres carrés.', 'Le corrigé du test donne une superficie de 65 m².', ['Il fait 65 mètres carrés.', 'Il coûte 65 euros par jour.', 'Il a 65 fenêtres.']),
  communicationA1Question('choice', '— Alors, qu’est-ce qui ne va pas ? — …', 'J’ai mal au ventre depuis plusieurs jours.', 'Le corrigé propose de décrire la douleur au ventre.', ['J’ai mal au ventre depuis plusieurs jours.', 'Je voudrais une chambre double.', 'Je prends un billet pour Lille.']),
  communicationA1Question('choice', '— Est-ce que les enfants peuvent jouer ici ? — …', 'Oui, les jeux sont autorisés.', 'Cette réponse confirme que les enfants ont le droit de jouer.', ['Oui, les jeux sont autorisés.', 'Non, la gare est fermée.', 'Oui, je fais du 40.']),
  communicationA1Question('choice', '— Vous voulez laisser un message ? — …', 'Non merci, je la rappellerai plus tard.', 'Le corrigé propose de rappeler la personne ultérieurement.', ['Non merci, je la rappellerai plus tard.', 'Oui, je prendrai une chambre.', 'Non, je veux un médicament.']),
  communicationA1Question('choice', '— Où est la poste ? — …', 'Continuez tout droit et prenez la première à droite.', 'Cette réponse indique un itinéraire.', ['Continuez tout droit et prenez la première à droite.', 'La poste coûte 40 euros.', 'J’ai mal au ventre.']),
  communicationA1Question('choice', '— Tu es libre samedi soir pour dîner ? — …', 'Oui, je suis libre !', 'Cette réponse accepte l’invitation.', ['Oui, je suis libre !', 'Non, j’ai déjà dîné hier.', 'Je cherche mon portefeuille.']),
  communicationA1Question('choice', '— Votre entrecôte, vous la voulez comment ? — …', 'Saignante, s’il vous plaît !', '« Saignante » précise la cuisson de la viande.', ['Saignante, s’il vous plaît !', 'À la deuxième rue.', 'En chambre double.']),
  communicationA1Question('choice', '— Jeudi à 16 heures, ça vous va ? — …', 'Oui, ça me va très bien.', 'Cette réponse accepte l’heure proposée.', ['Oui, ça me va très bien.', 'Oui, j’ai mal au ventre.', 'Non, je fais du 40.']),
  communicationA1Question('choice', '— Pour aller à la gare, le bus est direct ? — …', 'Non, vous devez changer à République.', 'Le corrigé donne cette réponse possible si le trajet n’est pas direct.', ['Non, vous devez changer à République.', 'Oui, je voudrais une glace.', 'Non, je décommande le bus.']),

  communicationA1Question('choice', 'Votre amie accepte une sortie au cinéma. Quelle question a probablement été posée ?', 'Est-ce que tu aimerais venir avec nous au cinéma ?', 'Le corrigé propose cette invitation avant une réponse enthousiaste.', ['Est-ce que tu aimerais venir avec nous au cinéma ?', 'Où est-ce que tu as mal ?', 'Quelle taille faites-vous ?']),
  communicationA1Question('choice', '« Non merci, je la rappellerai plus tard. » répond à quelle question ?', 'Vous voulez laisser un message ?', 'On répond à une proposition de laisser un message.', ['Vous voulez laisser un message ?', 'Vous voulez un dessert ?', 'Vous êtes libre samedi ?']),
  communicationA1Question('choice', '« Vendredi soir, je suis pris(e). » répond à quelle question ?', 'Tu es libre vendredi soir pour dîner avec nous ?', 'La réponse indique que la personne n’est pas libre à ce moment-là.', ['Tu es libre vendredi soir pour dîner avec nous ?', 'Combien coûte ce pantalon ?', 'Vous avez un dossier chez nous ?']),
  communicationA1Question('choice', '« Non, c’est la première fois que je viens. » répond à quelle question ?', 'Vous êtes déjà venu(e) chez nous ?', 'La réponse nie une visite antérieure.', ['Vous êtes déjà venu(e) chez nous ?', 'À quelle heure partez-vous ?', 'Vous voulez laisser un message ?']),
  communicationA1Question('choice', '« Non, franchement, ça ne m’intéresse pas beaucoup. » répond à quelle question ?', 'Ce film t’intéresse ?', 'La réponse exprime un manque d’intérêt pour le film.', ['Ce film t’intéresse ?', 'Où est le médecin ?', 'Quel est le prix du billet ?']),
  communicationA1Question('choice', '« Il n’est pas là. Je peux prendre un message ? » suit quelle demande ?', 'Est-ce que je pourrais parler à monsieur Frémaud ?', 'La personne appelée est absente ; l’interlocuteur propose un message.', ['Est-ce que je pourrais parler à monsieur Frémaud ?', 'Quelle cuisson voulez-vous ?', 'Vous cherchez la poste ?']),
  communicationA1Question('choice', '« Je fais du 40. » répond à quelle question ?', 'Quelle taille faites-vous ?', 'La réponse indique une taille de vêtement.', ['Quelle taille faites-vous ?', 'À quelle heure arrivez-vous ?', 'Combien de personnes ?']),
  communicationA1Question('choice', '« J’ai mal là, au ventre. » répond à quelle question ?', 'Où est-ce que vous avez mal ?', 'La réponse localise une douleur.', ['Où est-ce que vous avez mal ?', 'Vous êtes libre demain ?', 'Quel modèle voulez-vous ?']),
  communicationA1Question('choice', '« Les cabines sont au fond, à droite. » répond à quelle question ?', 'Est-ce que je peux essayer ce pull ?', 'La réponse indique où se trouvent les cabines d’essayage.', ['Est-ce que je peux essayer ce pull ?', 'Vous voulez un médicament ?', 'À quel nom est la réservation ?']),
  communicationA1Question('choice', '« Non, c’est tout près. C’est à deux minutes à pied. » répond à quelle question ?', 'C’est loin d’ici ?', 'La réponse corrige l’idée que le lieu est éloigné.', ['C’est loin d’ici ?', 'Vous avez choisi ?', 'Quelle taille faites-vous ?']),

  communicationA1Question('text', 'Je voudrais ___ rendez-vous avec le docteur Mercier.', 'prendre', 'La locution usuelle est « prendre rendez-vous ».'),
  communicationA1Question('text', 'Est-ce que je ___ avoir l’addition, s’il vous plaît ?', 'peux', '« Pouvoir » avec « je » au présent donne « peux ».'),
  communicationA1Question('text', 'Pour aller au musée, à quelle station dois-je ___ ?', 'descendre', 'Après « devoir », on emploie l’infinitif « descendre ».'),
  communicationA1Question('text', 'Qu’est-ce que vous avez ___ desserts ?', 'comme', 'On demande « Qu’est-ce que vous avez comme desserts ? ».'),
  communicationA1Question('text', 'Pardon, monsieur, je ___ la rue Victor-Hugo.', 'cherche', 'Au présent, « chercher » avec « je » donne « cherche ».'),
  communicationA1Question('text', 'Au téléphone : « Ne ___ pas, je vous passe Grégoire. »', 'quittez', '« Ne quittez pas » demande à l’appelant de patienter.'),
  communicationA1Question('text', 'Il me ___ un ordinateur portable pour travailler.', 'faut', '« Il me faut » exprime un besoin.'),
  communicationA1Question('text', 'Je vous téléphone ___ de l’annonce parue dans le journal.', 'à propos', 'La locution est « à propos de ».'),
  communicationA1Question('text', 'Vous ___ la troisième rue à droite.', 'prenez', 'À l’impératif avec vous, on dit « prenez la troisième rue ».'),
  communicationA1Question('text', 'Il est strictement ___ de fumer dans les lieux publics.', 'interdit', 'La tournure est « il est interdit de fumer ».'),

  communicationA1Question('choice', '« Qu’est-ce que j’ai fait de mon stylo ? » — Dans quelle situation entend-on cette phrase ?', 'Une personne cherche un objet perdu.', 'La personne ne sait plus où elle a mis son stylo.', ['Une personne cherche un objet perdu.', 'Une personne commande un repas.', 'Une personne réserve un billet.']),
  communicationA1Question('choice', '« Vous voulez mettre combien ? » — Où peut-on entendre cette question ?', 'Dans un commerce, au sujet du budget.', 'Le vendeur demande combien le client souhaite dépenser.', ['Dans un commerce, au sujet du budget.', 'Chez le médecin, au sujet d’un symptôme.', 'À la gare, au sujet du quai.']),
  communicationA1Question('choice', '« Ne quittez pas ! » — Que signifie cette phrase au téléphone ?', 'Attendez un instant, s’il vous plaît.', 'La personne demande à l’interlocuteur de patienter.', ['Attendez un instant, s’il vous plaît.', 'Raccrochez immédiatement.', 'Appelez demain matin.']),
  communicationA1Question('choice', '« Oui, je veux bien ! » — Que signifie cette réponse ?', 'J’accepte la proposition.', '« Je veux bien » exprime l’acceptation.', ['J’accepte la proposition.', 'Je refuse le rendez-vous.', 'Je ne connais pas la personne.']),
  communicationA1Question('choice', '« Ma pauvre ! Comment vous êtes-vous fait ça ? » — Quelle situation convient ?', 'Une personne s’est blessée et l’on compatit.', 'La formule exprime de la compassion et demande l’origine de la blessure.', ['Une personne s’est blessée et l’on compatit.', 'Une personne demande une addition.', 'Une personne souhaite acheter des chaussures.']),
  communicationA1Question('choice', '« Ce n’est pas possible ! » — Quelle émotion cette phrase peut-elle exprimer ?', 'La surprise ou l’indignation.', 'Selon l’intonation, la phrase peut exprimer l’étonnement ou l’indignation.', ['La surprise ou l’indignation.', 'L’acceptation d’une invitation.', 'La demande d’un itinéraire.']),
  communicationA1Question('choice', '« Ça vous va très bien ! » — Quel acte de parole réalise-t-on ?', 'Un compliment sur une tenue.', 'La phrase valorise un vêtement ou un accessoire.', ['Un compliment sur une tenue.', 'Une interdiction.', 'Une demande de prix.']),
  communicationA1Question('choice', '« Tous mes vœux de bonheur ! » — À quelle occasion répond-on souvent ainsi ?', 'À l’annonce d’un mariage.', 'Cette formule félicite généralement un couple qui se marie.', ['À l’annonce d’un mariage.', 'À une demande de renseignements.', 'À la commande d’un dessert.']),
  communicationA1Question('choice', '« Ce n’est pas grave. » — Que signifie cette réponse après des excuses ?', 'Ce n’est rien, je vous excuse.', 'La phrase rassure la personne qui s’excuse.', ['Ce n’est rien, je vous excuse.', 'Je suis malade.', 'Je ne suis pas disponible.']),
  communicationA1Question('choice', '« Ils jouent très bien ! » — Dans quel contexte est-ce un compliment ?', 'Après un spectacle ou un match.', 'La phrase félicite la performance d’artistes ou de sportifs.', ['Après un spectacle ou un match.', 'À la poste.', 'Dans une pharmacie.']),

  communicationA1Question('choice', 'Complétez positivement : « Ça sent ___ ! »', 'bon', '« Ça sent bon » exprime une odeur agréable.', ['bon', 'loin', 'pris']),
  communicationA1Question('choice', 'Complétez : « La gare n’est pas loin, elle est ___ près. »', 'tout', 'L’expression est « tout près ».', ['tout', 'toute', 'tous']),
  communicationA1Question('choice', 'Complétez : « Ce sujet ___ beaucoup. »', 'm’intéresse', '« M’intéresser » exprime l’intérêt que l’on porte à un sujet.', ['m’intéresse', 'me présente', 'me décommande']),
  communicationA1Question('choice', 'Complétez : « J’ai mal au pied, cette chaussure me fait ___. »', 'mal', 'La douleur se dit « me faire mal ».', ['mal', 'plaisir', 'bientôt']),
  communicationA1Question('choice', 'Complétez : « Est-ce que ___ des tartes aux abricots ? »', 'vous avez', '« Vous avez… ? » demande si le produit est disponible.', ['vous avez', 'vous décommandez', 'vous pouvez de']),
  communicationA1Question('choice', 'Complétez : « ___ combien ? »', 'Ça fait', 'On peut demander un prix avec « Ça fait combien ? ».', ['Ça fait', 'Ça prend', 'Ça va de']),
  communicationA1Question('choice', 'Complétez : « Nous devons ___ notre rendez-vous à demain. »', 'reporter', 'Reporter un rendez-vous signifie le déplacer à une autre date.', ['reporter', 'faire', 'aller']),
  communicationA1Question('choice', 'Complétez : « Où ___ les toilettes ? »', 'se trouvent', 'Le verbe pronominal « se trouver » sert à demander où est un lieu.', ['se trouvent', 'se téléphonent', 'se commandent']),
  communicationA1Question('choice', 'Complétez : « Je vous ___ Anne, ma sœur. »', 'présente', 'On dit « Je vous présente… » pour présenter une personne.', ['présente', 'connais de', 'décommande']),
  communicationA1Question('choice', 'Quelle formule peut remplacer « À bientôt ! » ?', 'À la prochaine !', 'Les deux formules annoncent une prochaine rencontre.', ['À la prochaine !', 'À cause de !', 'À la cuisson !']),

  communicationA1Question('choice', 'Vous voulez prendre rendez-vous avec un médecin. Que dites-vous ?', 'Je voudrais prendre rendez-vous avec le docteur, s’il vous plaît.', 'Une demande de rendez-vous commence naturellement par « Je voudrais… ».', ['Je voudrais prendre rendez-vous avec le docteur, s’il vous plaît.', 'Je voudrais une tarte aux pommes.', 'Je voudrais trouver mon portefeuille.']),
  communicationA1Question('choice', 'Vous ne trouvez plus votre portefeuille. Que dites-vous ?', 'Qu’est-ce que j’ai fait de mon portefeuille ?', 'Cette question exprime la recherche d’un objet perdu.', ['Qu’est-ce que j’ai fait de mon portefeuille ?', 'Quelle taille faites-vous ?', 'C’est à quel nom ?']),
  communicationA1Question('choice', 'Vous cherchez la poste. Quelle phrase convient ?', 'Pardon, madame, savez-vous où se trouve la poste ?', 'La question demande poliment une indication de lieu.', ['Pardon, madame, savez-vous où se trouve la poste ?', 'Pardon, madame, quelle cuisson ?', 'Pardon, madame, vous avez un médicament ?']),
  communicationA1Question('choice', 'Un étudiant vient de rater son examen. Que lui dites-vous ?', 'Ce n’est pas grave, tu réussiras la prochaine fois !', 'La réponse console et encourage la personne.', ['Ce n’est pas grave, tu réussiras la prochaine fois !', 'Tu ne peux pas prendre le métro.', 'Je décommande ton examen.']),
  communicationA1Question('choice', 'Un ami arrive à l’improviste et vous êtes très surpris. Que dites-vous ?', 'Ça alors ! Quelle bonne surprise !', 'Ces exclamations expriment une surprise heureuse.', ['Ça alors ! Quelle bonne surprise !', 'Je vous passe la communication.', 'Je voudrais un billet en première.']),
  communicationA1Question('choice', 'Vous êtes enrhumé(e) à la pharmacie. Que demandez-vous ?', 'Qu’est-ce que vous pouvez me donner contre le rhume ?', 'La question demande un remède contre le rhume.', ['Qu’est-ce que vous pouvez me donner contre le rhume ?', 'Où se trouve la gare ?', 'Quelle taille faites-vous ?']),
  communicationA1Question('choice', 'Au téléphone, vous demandez à parler au médecin. Que dites-vous ?', 'Est-ce que je pourrais parler au docteur, s’il vous plaît ?', 'Le conditionnel rend la demande polie.', ['Est-ce que je pourrais parler au docteur, s’il vous plaît ?', 'Je vous félicite.', 'Ne quittez pas la rue.']),
  communicationA1Question('choice', 'Vous demandez un service à un collègue. Quelle phrase convient ?', 'Ça t’ennuierait de faire cette photocopie ?', 'Cette tournure au conditionnel formule une demande polie.', ['Ça t’ennuierait de faire cette photocopie ?', 'Tu as fait cette photocopie hier.', 'Je ne fais jamais de photocopie.']),
  communicationA1Question('choice', 'Vous voulez complimenter un ami sur son pull. Que dites-vous ?', 'Ce pull te va très bien !', 'La phrase fait un compliment sur un vêtement.', ['Ce pull te va très bien !', 'Tu dois changer de train.', 'Je n’ai pas de pull.']),
  communicationA1Question('choice', 'Vous ne comprenez pas le fonctionnement d’un club de gym. Que demandez-vous ?', 'Je voudrais des renseignements sur votre club, s’il vous plaît.', 'La formule demande des renseignements de manière polie.', ['Je voudrais des renseignements sur votre club, s’il vous plaît.', 'Je voudrais du fromage.', 'Je vais présenter le médecin.']),

  communicationA1Question('choice', 'Les phrases « À bientôt ! » et « À la prochaine ! » ont-elles un sens proche ?', 'Vrai', 'Les deux formules annoncent une prochaine rencontre.', ['Vrai', 'Faux']),
  communicationA1Question('choice', '« Il est pris » et « Il n’est pas libre » ont-ils un sens proche ?', 'Vrai', 'Dans ce contexte, « pris » signifie « pas libre ».', ['Vrai', 'Faux']),
  communicationA1Question('choice', '« Il n’y a pas de mal » signifie-t-il « Il n’est pas malade » ?', 'Faux', 'La première formule signifie « ce n’est rien » ; elle ne décrit pas l’état de santé.', ['Vrai', 'Faux']),
  communicationA1Question('choice', '« Je veux bien ! » et « Avec plaisir ! » expriment-ils une acceptation ?', 'Vrai', 'Les deux formules peuvent accepter une proposition.', ['Vrai', 'Faux']),
  communicationA1Question('choice', '« Je vous félicite ! » et « Tous mes vœux de bonheur ! » sont-ils toujours synonymes ?', 'Faux', 'Les vœux de bonheur s’emploient dans certaines occasions ; les phrases ne sont pas interchangeables partout.', ['Vrai', 'Faux']),
  communicationA1Question('choice', '« Ça t’ennuierait de venir ? » et « Ça ne t’intéresse pas de venir ? » ont-ils le même sens ?', 'Faux', 'La première formule demande un service ou une faveur ; la seconde demande un intérêt.', ['Vrai', 'Faux']),
  communicationA1Question('choice', '« Ça me va » et « Ça me convient » ont-ils un sens proche ?', 'Vrai', 'Les deux expressions indiquent que quelque chose convient.', ['Vrai', 'Faux']),
  communicationA1Question('choice', '« Je peux vous renseigner ? » et « Vous pouvez me donner des renseignements ? » ont-ils le même sens ?', 'Faux', 'Dans la première phrase, le locuteur propose son aide ; dans la seconde, il la demande.', ['Vrai', 'Faux']),
  communicationA1Question('choice', '« Je ne sais plus où j’ai mis ma clé » et « Je ne trouve plus ma clé » décrivent-ils le même problème ?', 'Vrai', 'Les deux phrases expriment la recherche d’une clé égarée.', ['Vrai', 'Faux']),
  communicationA1Question('choice', '« Reporter un rendez-vous » signifie-t-il toujours « décommander un rendez-vous » ?', 'Faux', 'Reporter déplace le rendez-vous ; décommander l’annule.', ['Vrai', 'Faux']),

  communicationA1Question('choice', 'Reformulez « J’ai besoin d’un grand bureau ».', 'Il me faut un grand bureau.', '« Avoir besoin de » peut se reformuler avec « il me faut ».', ['Il me faut un grand bureau.', 'Je suis en ligne.', 'Je me suis perdu.']),
  communicationA1Question('choice', 'Reformulez « Lionel est en ligne ».', 'La ligne est occupée.', '« La ligne est occupée » signifie que la personne est déjà au téléphone.', ['La ligne est occupée.', 'Le bureau est grand.', 'Le rendez-vous est décommandé.']),
  communicationA1Question('choice', 'Reformulez « Il n’y a pas de mal ».', 'Ce n’est pas grave.', 'Les deux expressions rassurent après un incident ou des excuses.', ['Ce n’est pas grave.', 'Il est malade.', 'Je ne suis pas libre.']),
  communicationA1Question('choice', 'Reformulez « Où est-ce que j’ai mis mon téléphone mobile ? »', 'Qu’est-ce que j’ai fait de mon téléphone mobile ?', 'Les deux questions expriment la recherche du téléphone.', ['Qu’est-ce que j’ai fait de mon téléphone mobile ?', 'Je vous présente mon téléphone.', 'Je dois décommander mon téléphone.']),
  communicationA1Question('choice', 'Reformulez « Ce n’est pas autorisé ».', 'C’est interdit.', '« Interdit » signifie qu’une action n’est pas autorisée.', ['C’est interdit.', 'C’est obligatoire.', 'C’est intéressant.']),
  communicationA1Question('choice', 'Reformulez « Nous avons l’intention d’acheter une voiture ».', 'Nous pensons acheter une voiture.', '« Penser acheter » peut exprimer le même projet.', ['Nous pensons acheter une voiture.', 'Nous avons déjà vendu la voiture.', 'Nous refusons de conduire.']),
  communicationA1Question('choice', 'Reformulez « Je dois annuler mon rendez-vous avec le coiffeur ».', 'Je dois décommander mon rendez-vous.', '« Décommander » signifie annuler une réservation ou un rendez-vous.', ['Je dois décommander mon rendez-vous.', 'Je dois prendre le métro.', 'Je dois féliciter le coiffeur.']),
  communicationA1Question('choice', 'Reformulez « Je vous félicite ! ».', 'Toutes mes félicitations !', '« Toutes mes félicitations » exprime des félicitations.', ['Toutes mes félicitations !', 'Je vous excuse.', 'Je ne suis pas certain.']),
  communicationA1Question('choice', 'Reformulez « Je pense que c’est une mauvaise idée ».', 'À mon avis, c’est une mauvaise idée.', '« À mon avis » introduit une opinion.', ['À mon avis, c’est une mauvaise idée.', 'Je suis sûr que c’est une bonne idée.', 'Je n’ai pas d’idée.']),
  communicationA1Question('choice', 'Reformulez « Qu’est-ce que vous diriez d’aller au théâtre ? ».', 'Et si nous allions au théâtre ?', '« Et si… ? » suivi de l’imparfait peut introduire une proposition.', ['Et si nous allions au théâtre ?', 'Nous sommes allés au théâtre hier.', 'Le théâtre est fermé.']),

  communicationA1Question('choice', 'Quelle phrase reformule « J’ai besoin d’un portable » ?', 'Il me faut un portable.', 'Le corrigé associe cette phrase à « Il me faut un portable ».', ['Il me faut un portable.', 'Où est mon portable ?', 'Il est interdit d’utiliser le portable.']),
  communicationA1Question('choice', 'Quelle question reformule « Qu’est-ce que j’ai fait de mon portable ? » ?', 'Où est-ce que j’ai mis mon portable ?', 'Les deux questions expriment la recherche du téléphone.', ['Où est-ce que j’ai mis mon portable ?', 'Je pense acheter un portable.', 'Il me faut un portable.']),
  communicationA1Question('choice', 'Quelle phrase reformule « C’est bien mon portable » avec certitude ?', 'Je suis sûr que c’est mon portable.', '« Je suis sûr que… » exprime la certitude.', ['Je suis sûr que c’est mon portable.', 'Je ne trouve plus mon portable.', 'Tu pourrais utiliser un portable ?']),
  communicationA1Question('choice', 'Quelle phrase propose à quelqu’un d’avoir un portable ?', 'Et si tu avais un portable ?', '« Et si… ? » suivi de l’imparfait peut formuler une proposition.', ['Et si tu avais un portable ?', 'Je ne trouve plus mon portable.', 'Il me faut un portable.']),
  communicationA1Question('choice', 'Quelle phrase reformule « Ça t’ennuierait d’utiliser un portable ? » ?', 'Tu pourrais utiliser un portable ?', 'Le conditionnel permet de formuler une demande polie.', ['Tu pourrais utiliser un portable ?', 'Je suis sûr que c’est mon portable.', 'Il est interdit d’utiliser le portable.']),
  communicationA1Question('choice', 'Quelle phrase exprime le projet « J’ai l’intention d’acheter un portable » ?', 'Je pense acheter un portable.', '« Je pense acheter » exprime un projet.', ['Je pense acheter un portable.', 'Où est mon portable ?', 'Il est interdit d’utiliser un portable.']),
  communicationA1Question('choice', 'Quelle phrase reformule « Je cherche mon portable » ?', 'Je ne trouve plus mon portable.', 'La phrase indique que l’objet recherché reste introuvable.', ['Je ne trouve plus mon portable.', 'Je pense acheter un portable.', 'Il me faut un portable.']),
  communicationA1Question('choice', 'Quelle phrase exprime un projet incertain d’achat ?', 'Je pense acheter un portable.', '« Je pense acheter » exprime un projet envisagé.', ['Je pense acheter un portable.', 'Je ne trouve plus mon portable.', 'Il est interdit d’utiliser un portable.']),
  communicationA1Question('choice', 'Quelle phrase reformule « Je ne peux pas utiliser le portable ici » ?', 'Il est interdit d’utiliser le portable ici.', 'La phrase exprime une interdiction.', ['Il est interdit d’utiliser le portable ici.', 'Je cherche mon portable.', 'Je pense acheter un portable.']),
  communicationA1Question('choice', 'Quelle phrase reformule « Il me semble que c’est mon portable » ?', 'Je crois que c’est mon portable.', '« Je crois que… » exprime une opinion ou une certitude nuancée.', ['Je crois que c’est mon portable.', 'Je n’ai pas de portable.', 'Il est interdit d’utiliser le portable.']),
];

window.eduardingoCourses.push({
  bookId: 'a1-communication',
  level: 'A1',
  category: 'Comunicación',
  title: 'Communication progressive',
  name: 'Parler dans les situations de la vie quotidienne',
  description: 'Quarante chapitres et trois ateliers pour demander, répondre, décrire et échanger dans les situations courantes, puis vérifier ses acquis dans une évaluation complète.',
  source: 'Communication progressive du français · niveau débutant, Claire Miquel, édition 2018. Chapitres : pages 8–121 ; activités communicatives et exercices oraux adaptés : pages 122–131 ; test : pages 132–135 ; corrigé du test imprimé dans le manuel : page 136. Le fichier de corrigés fourni correspond à l’édition intermédiaire A2–B1, pas aux chapitres A1. Les activités de chapitre et orales sont adaptées avec des réponses originales vérifiées par les règles étudiées ; le test est recoupé avec le corrigé A1 de la page 136. Aucun enregistrement audio ni bilan séparé ne figure parmi les sources.',
  lessons: communicationA1Lessons,
  finalTest: communicationA1FinalTest,
});
