var L = [
    "",
    "Humain",
    "Bête",
    "Nain",
    "Élémental",
    "Elfe",
    "Gobelin",
    "Monstre",
    "Mort-vivant",
    "Construction",
    "Plante",
    "Gnome",
    "Dieu Ancien",
    "Hommes-lézards",
    "Démon",
    "???",
    "Combattant",
    "Mage",
    "Archer",
    "Héros",
    "Multiclasse",
    "Disciple",
    "Uniquement devant",
    "Uniquement à l'arrière",
    "-",
    "Attaque",
    "Santé",
    "Vitesse",
    "Mort",
    "MORT : Fait quelque chose après être mort.",
    "Fin de Tour",
    "FIN DE TOUR : Fait quelque chose une fois que tous les personnages ont fini d'attaquer. Ignore l'épuisement.",
    "Enchaînement",
    "ENCHAÎNEMENT : Fait quelque chose après l'attaque normale du personnage.",
    "Condamnation",
    "CONDAMNATION : Fait quelque chose lorsqu'un personnage ennemi meurt.",
    "Espoir",
    "ESPOIR : Fait quelque chose lorsque la santé d'un personnage allié augmente.",
    "Complot",
    "COMPLOT : Fait quelque chose si le personnage n'attaque pas.",
    "Début du combat",
    "DÉBUT DU COMBAT : Fait quelque chose avant le début du combat.",
    "Soulcast",
    "Nécromancie X : Dépensez X âmes pour déclencher une capacité. Peut être utilisé une fois par tour. Cliquez avec le bouton droit pour incanter.",
    "Poison",
    "POISON : Les personnages empoisonnés subissent 1 dégât après leur attaque normale. Dure jusqu'à la fin du combat. Ne cumule pas.",
    "Malédiction",
    "MALÉDICTION : La prochaine fois qu'un personnage maudit subit des dégâts, ceux-ci sont doublés.",
    "Bouclier",
    "Bouclier : Absorbe complètement la prochaine occurence de dégâts.",
    "Riposte",
    "RIPOSTE : Fait quelque chose lorsque le personnage perd de la santé et survit.",
    "Affliction",
    "AFFLICTION : Les personnages affectés ne peuvent pas gagner de Santé, d'Armure, ni de Puissance. À la fin du tour d'un personnage, un cumul d'Affliction est supprimé.",
    "Puissance",
    "PUISSANCE : La prochaine attaque inflige plus de dégâts.",
    "Armure",
    "ARMURE : La quantité de dégâts qu'un personnage peut subir avant de perdre de la Santé. L'Armure est perdue à la fin de chaque tour.",
    "Bloodcast",
    "Jet de sang X : Prenez des dégâts pour déclencher une capacité entre les manches. Peut être utilisé qu'une fois par tour. Clique-droit pour lancer.",
    "Réanimer",
    "Réanimation : Ramenez un allié mort à la vie avec 1 point de vie.",
    "Manacast ",
    "Manacast: Dépensez du mana pour déclencher une capacité entre les rounds. Peut être utilisé une fois par round. Cliquez droit pour lancer.",
    "Invoqué",
    "Les personnages qui utilisent et bénéficient des invocations sont plus susceptibles d'apparaître aux feux de camp.",
    "Niveau",
    "Ce personnage peut monter en niveau à l'infini. Il gagne ce bonus au niveau 4 et à chaque niveau suivant.",
    "plan",
    "héros",
    "artefacts",
    "champions",
    "objets",
    "échanges",
    "monstres",
    "groupe",
    "Feu de camp",
    "Recrutez ou renvoyez des personnages. Faites un clic droit pour déséquiper des objets.",
    "Feu de joie",
    "Les feux de joie ont plus de personnages à embaucher que les feux de camp. Débloquer de nouvelles unités débloquera également de nouveaux feux de joie.",
    "Coffre au Trésor",
    "Se transforme en un objet aléatoire.",
    "Salle au Trésor",
    "Gagnez 3 pièces d'or.",
    "Bathin",
    "Bathin propose des pactes facultatifs qui augmentent la difficulté du prochain combat en échange d'or.",
    "Marchand",
    "Achetez et vendez des objets. Clic droit pour déséquiper des objets.",
    "La Sorcière",
    "Vous ! J'ai d'autres potions à vendre !",
    "Andromalius",
    "Andromalius transformera une pièce d'équipement.  Cliquez avec le bouton droit pour retirer l'équipement d'un personnage, puis placez l'équipement dans le Néant.",
    "Le Serrurier",
    "Oh. Salut. Besoin de clés ?",
    "Le Géant",
    "Choisissez une bague.",
    "Contrebandier",
    "Les articles sont moins chers au Marché Noir qu'aux magasins classiques.",
    "Le Mage Perdu",
    "Une Bague en Obsidienne – puis-je la voir ? On dirait celle que j'ai perdu il y a longtemps.",
    "Salle au Trésor d'Aamon",
    "Aamon propose des anneaux maudits. La malédiction dépend de votre héros actuel.",
    "Coffre d'Artefact",
    "Choisissez un Artefact.",
    "Sélectionnez votre héros",
    "Sang d'Abaddon",
    "Gagnez 8 pièces d'or.",
    "Sang d'Illifar",
    "Gagnez un personnage aléatoire de niveau 2.",
    "Sang de Nazzatoth",
    "Gagnez un objet rare.",
    "Âme du Gardien",
    "La taille limite de votre groupe est augmentée de 1. Au début de la bataille, votre héros subit 1 dégât.",
    "Le chant de la mort",
    "+25 % de score Les héros ennemis ont +1 en attaque.",
    "Nouvelle Partie",
    "Nouvelle Partie+1",
    "Nouvelle Partie+2",
    "Nouvelle Partie+3",
    "Nouvelle Partie+4",
    "Nouvelle Partie+5",
    "Légendaire",
    "Toutes les zones",
    "Le Donjon Supérieur",
    "Les Catacombes",
    "Les Abysses",
    "Le Portail",
    "La Tour",
    "Une âme aussi malchanceuse soit-elle",
    "L'Aventurier Perdu",
    "Festoyeur",
    "{kw-followup} : Restaure 2 de Santé à un allié endommagé.",
    "Chef de Meute",
    "Cible l'ennemi ayant la santé la plus faible.",
    "Noble de la vieille Terre",
    "Thoric du Marteau",
    "{kw-endofround} : Gagne +1 d'Armure.",
    "Maître Forgeron",
    "{kw-endofround} : Donne à l'allié le plus en avant de cette colonne +1 d'Armure.",
    "La Dernière Astronome",
    "Eloa",
    "{kw-followup} : Donne à un allié dans cette colonne +1 {kw-charge}.",
    "Inépuisable.",
    "Chercheur arcanique",
    "{kw-endofround} : Donne à un mage allié dans cette colonne +2 {kw-charge}.",
    "De la Vieille Lune",
    "Taz'gyn",
    "{kw-channelmana} : Invoque une {kw-summon:0}.",
    "Invocateur élevé",
    "Si ce personnage tue un ennemi, invoque un {kw-summon:1}.",
    "Taz'gyn, de l'Ordre",
    "{kw-otherunitdies} : Gagne +1 {kw-charge}.",
    "Le chef itinérant",
    "Dominique Boutroux",
    "{kw-followup} : Restaure 1 de Santé à un allié endommagé dans cette colonne.",
    "Le Marchand Ambulant",
    "{kw-startofbattle} : Gagnez 1 d'or.",
    "Celle qui nage seule",
    "Gryx la Doyenne",
    "Lorsqu'un allié meurt, attaque.",
    "la mère des couvées",
    "Venimeux.",
    "Le jeune prince",
    "Xandos III",
    "Commence avec {kw-relic:51}.",
    "Xandos, le Grand",
    "connaissance du terrain",
    "Marianna",
    "{kw-startofbattle} : Invoque {kw-summon:2}.",
    "Animara",
    "Lorsqu'un personnage jette du sang, gagnez +1 {kw-charge}.",
    "De l'Au-Delà",
    "Elsbeth",
    "{kw-channelsoul} 1 : Inflige 2 dégâts à l'ennemi le plus proche. Max d'âmes +1.",
    "Elsbeth, Sorcière des marais",
    "{kw-startofbattle} : Inflige poison à deux ennemis aléatoires.",
    "Traqueuse de Vengeance",
    "Commence avec le Mémento de Jack.",
    "L'Empereur Doré",
    "A +1 d'Attaque toutes les 5 pièces d'or.",
    "Artificière",
    "Commence avec deux artefacts aléatoires supplémentaires.",
    "Gelée Regénératrice",
    "Lorsqu'un allié meurt, restaure 1 de Santé.",
    "Limon Multiplicateur",
    "{kw-counter} : Invoque un {kw-summon:42}.",
    "Gelée Métallique",
    "{kw-endofround} : Gagne +1 d'Armure et se déplace.",
    "Haruspice",
    "{kw-otherunitdies} : Inflige {kw-scaling:1} dégâts à un ennemi aléatoire.",
    "Cultiste",
    "{kw-otherunitdies} : Restaure {kw-scaling:0} de Santé.",
    "Berserker",
    "{kw-counter} : Gagne +1/2/3 {kw-charge}.",
    "Danseur au Sabre",
    "A +1/2/3 d'Attaque lorsqu'il est en pleine santé.",
    "Enchanteur",
    "{kw-endofround} : Donne à tous les mages alliés +1 {kw-charge}.",
    "Chasseur",
    "{kw-followup} : Inflige /deux fois/trois fois 1 dégât à l'ennemi ayant le moins de santé.",
    "Armurier",
    "{kw-endofround} : Donne à un autre allié dans cette colonne +{kw-scaling:1} d'Armure.",
    "Mage du Soleil",
    "Gagne le double du montant de {kw-charge}.",
    "Prêtre de la Voie",
    "{kw-followup} : Restaure {kw-scaling:0} de Santé à un allié non héroïque endommagé.",
    "Prêtre de la Rose",
    "{kw-healthisrecovered} : Inflige {kw-scaling:0} dégât à l'ennemi le plus proche dans cette colonne.",
    "Chevalier Blindé",
    "A un bonus d'Attaque égal à son Armure.",
    "Druide",
    "{kw-channelmana:0}: Invoque un {kw-summon:6/7/8} deux fois.",
    "Protecteur Divin",
    "Lorsqu'un allié est invoqué, lui donne {kw-shield}.",
    "Écuyer",
    "{kw-endofround} : Donne à un autre allié dans cette colonne +1/2/3 {kw-charge}.",
    "Aguatilis",
    "Lorsqu'un allié meurt, gagne +2/3/4 {kw-charge}.",
    "Hypogéen",
    "{kw-scheme} : Restaure 1 de Santé pour chaque Homme-Lézard allié.",
    "Garde Sylvestre",
    "Lorsqu'un allié est invoqué, gagne +1/2/3 {kw-charge}.",
    "Adepte Féerique",
    "Les alliés invoqués ont +{kw-scaling:0} d'Attaque.",
    "Gredin",
    "Tanneur",
    "Si ce personnage tue un ennemi, gagne 1 pièce d'or.",
    "Garde Royal",
    "Lorsque ce personnage gagne de la santé, votre héros gagne +1/2/3 {kw-charge}.",
    "Catalyseur",
    "{kw-followup} : Déclenche tous les effets de Condamnation alliés.",
    "Lancier",
    "Attaque à chaque gain d'Armure.",
    "Tireur d'Élite",
    "Lorsqu'un ennemi gagne {kw-poison}, lui inflige {kw-scaling:0} dégâts.",
    "Praexator",
    "Lorsque ce personnage tue un ennemi, donne +1 {kw-charge} à tous les Hommes-Lézards alliés.",
    "Adepte de la Foudre",
    "Lorsque ce personnage gagne {kw-charge}, inflige {kw-scaling:0} dégâts à un ennemi aléatoire.",
    "Invocateur d'Acier",
    "{kw-channelmana:0} : Invoque une {kw-summon:12/13/14}.",
    "Clerc des Ténèbres",
    "Lorsque ce personnage tue un ennemi, gagne {kw-shield}.",
    "{kw-channelmana:0} : Gagne {kw-shield}.",
    "Sanguiniste",
    "{kw-endofround} : Invoque un {kw-summon:15} ennemi dans cette colonne.",
    "Boucher",
    "Lorsque ce personnage tue un ennemi, restaure /deux fois/trois fois 1 de Santé à un allié blessé non héroïque.",
    "Buveur de Venin",
    "Lorsqu'un personnage empoisonné meurt, restaure {kw-scaling:0} de Santé.",
    "Clerc du Marteau",
    "{kw-endofround} : Invoque un {kw-summon:16/17/18}.",
    "Maître Brasseur",
    "{kw-counter} : Restaure 2 de Santé à un allié non héroïque endommagé.",
    "Forgerune",
    "Lorsqu'un autre Nain subit des dégâts, gagne +1 {kw-charge}. {kw-endofround} : Gagne +1 d'Armure pour chaque autre Nain.",
    "Garde-Mouche",
    "+1 d'Attaque pour chaque autre Mort-vivant allié.",
    "Garde Tarus",
    "{kw-channelsoul} 1 : Donne à tous les autres Morts-Vivants alliés +1/2/3 d'Armure. Max d'âmes +1.",
    "Buveur d'Âme",
    "{kw-endofround} : Si vous avez 2 âmes ou plus, restaure {kw-scaling:0} de Santé. Max âmes +2.",
    "Adepte Déchu",
    "{kw-channelsoul} X : Inflige /2/4 X dégâts à l'ennemi le plus proche dans cette colonne. Max d'âmes +3.",
    "Nécromancien",
    "{kw-channelsoul} 2 : Invoque un {kw-summon:3}. Max d'âmes +2.",
    "Sang de Fer",
    "{kw-channelblood} 1 : Gagne +1 d'Armure pour chaque allié blessé.",
    "Sang de Braise",
    "{kw-channelblood} 2 : Gagne +1 d'Attaque.",
    "Corne Solaire",
    "{kw-channelblood} 1 : Restaure /deux fois/trois fois 1 de Santé à une bête endommagée adjacente.",
    "Ours de Guerre",
    "{kw-endofround} : Si ce personnage a 1 de Santé, restaure 1/2 de Santé ou moins, restaure 2/3 de Santé ou moins, restaure 3 de Santé.",
    "Adepte de la Flamme",
    "Endommage également les ennemis de même rangée.",
    "{kw-channelmana:2} : Attaque.",
    "Bricoleur",
    "{kw-endofround} : Si ce personnage a de la {kw-charge}, invoque une {kw-summon:20/21/22}.",
    "Conduit à Colère",
    "{kw-counter} : Attaque.",
    "Tireur Nocturne",
    "{kw-otherunitdies} : Gagne +1/2/3 {kw-charge}.",
    "Venomancien",
    "{kw-followup} : Inflige {kw-scaling:0} dégâts à tous les ennemis empoisonnés.",
    "Praliator",
    "Si ce personnage tue un ennemi, il attaque à nouveau.",
    "Sorcière à Venin",
    "Inflige le double de dégâts aux personnages empoisonnés.",
    "{kw-channelmana:0} : Invoque un {kw-summon:9}.",
    "Sangsue",
    "{kw-otherunitdies} : Invoque un {kw-summon:10/11}.",
    "Archer des Arcanes",
    "{kw-endofround} : Donne à tous les mages alliés de cette rangée +2/3 {kw-charge}.",
    "Assassin",
    "Les ennemis subissent +{kw-scaling:-2} dégâts du poison.",
    "Maélédox",
    "Lorsque ce personnage gagne {kw-charge}, il gagne également {kw-shield}. {kw-scheme} : {kw-weaken} l'ennemi le plus proche.",
    "Hobereau de Combat",
    "{kw-followup} : Déclenche les effets {kw-counter} de tous les personnages adjacents.",
    "Xerxis",
    "{kw-channelmana:0} : Invoque une {kw-summon:19}.",
    "Amguan",
    "{kw-scheme} : Donne +1/2 {kw-charge} à tous les Hommes-Lézards alliés.",
    "Conduit à Âme",
    "{kw-channelsoul} 1 : Restaure 1/2 de santé. {kw-followup} : Gagne +1 âme. Max âmes +1.",
    "Esprit Sylvestre",
    "Lorsqu'une autre Bête alliée subit des dégâts, gagne +1/2 {kw-charge}.",
    "Hellion",
    "{kw-channelblood} 2 : Attaque. Lorsque ce personnage tue un ennemi, restaure 1/2 de Santé.",
    "Chamane",
    "{kw-channelblood} 2 : {kw-revive} une bête alliée.",
    "Garde Aviakorien",
    "{kw-counter} : Invoque un {kw-summon:6/7}.",
    "Immortel",
    "Ne perd pas d'armure à la fin du tour.",
    "Mage de Combat",
    "Lorsque ce personnage gagne {kw-charge}, il restaure également 1/2 de Santé.",
    "Clerc de Combat",
    "{kw-followup} : Restaure 1 de Santé à tous les personnages de cette rangée.",
    "Invocatrice du Néant",
    "{kw-endofround} : Invoque un ennemi {kw-summon:23/24}.",
    "Animiste",
    "{kw-endofround} : si vous n'avez aucune âme, gagne +1/2 âme et +2/4 {kw-charge}. Max âmes +2.",
    "Élémancien",
    "Lorsqu’un élémental allié est invoqué, gagne +1 d'Attaque.",
    "{kw-channelmana:0} : Invoque une {kw-summon:25}.",
    "Capitaine Royal",
    "{kw-endofround} : Donne à tous les personnages de cette rangée +1 d'Armure.",
    "Sage de la Parole",
    "{kw-healthisrecovered} : Donne à un allié aléatoire +1/2 {kw-charge}.",
    "Lorsque vous engagez ce personnage, gagnez 2 pièces d'or pour chaque Homme-Lézard allié. {kw-death} : Gagne 1/2 pièce d'or.",
    "Porte-Étendard Déchu",
    "{kw-channelsoul} 1 : Tous les archers alliés attaquent. Max d'âmes +1.",
    "Mastodonte",
    "{kw-endofround} : Pour chaque âme, gagne aléatoirement +1 {kw-charge} ou restaure 1 de Santé. Max âmes +2.",
    "Ares, le Chevalier Perdu",
    "Lorsque ce personnage gagne de l'Armure, il gagne également +3 {kw-charge}.",
    "Edric, Maître d'Armes",
    "Attaque deux fois.",
    "Cyril, Maître Animiste",
    "Lorsqu'un allié est invoqué, restaure 1 de Santé.",
    "{kw-death} : Se transforme en {kw-summon:26}.",
    "Ixotle, Tuteur des Lézardeaux",
    "{kw-startofbattle} et {kw-death} : Remplissez votre plateau de {kw-summon:27}x.",
    "Taur, l'Exilé",
    "A +1 d'Attaque pour chaque bête alliée. Lorsque ce personnage tue un ennemi, restaure 3 de Santé.",
    "Zed , Filou Éternel",
    "Lorsque ce personnage gagne {kw-charge}, invoque un {kw-summon:28} inamovible.",
    "Nyx, de la Vieille Lune",
    "{kw-otherunitdies} : {kw-weaken} un ennemi aléatoire.",
    "Lyra , Lumière de l'Aube",
    "Cible un ennemi aléatoire dans n'importe quelle colonne.",
    "{kw-healthisrecovered} : Attaque.",
    "Le Dévoreur",
    "Lorsqu'un personnage empoisonné meurt, invoque un {kw-summon:9}.",
    "Ayma , Appelle-Foudre",
    "{kw-counter} : Donne à tous les autres alliés +1 {kw-charge}.",
    "La Grande Prêtresse",
    "{kw-followup} : Restaure 1 de Santé à tous les autres alliés.",
    "Nangruil, l'Alchimiste",
    "Lorsqu'un allié gagne de l'Armure, gagne +1 {kw-charge}.",
    "Ven, l'Aîné",
    "Lorsqu'un personnage empoisonné meurt, gagne +1 d'Attaque et restaure 2 de Santé.",
    "Aeron, Esprit Sylvestre",
    "Lorsqu'un allié meurt, restaure 1 de Santé. {kw-followup} : tous les alliés invoqués attaquent.",
    "Ursa, Ours Divin",
    "Lorsqu'un allié incante de le bloodcast, attaque.",
    "Petit Élémental du Néant",
    "S'attaque lui-même. {kw-death} : Inflige 1 dégât à tous les alliés.",
    "Tas d'Os",
    "{kw-endofround} : Se transforme en {kw-summon:3}.",
    "Jack",
    "Squelette",
    "Flamme Éternelle",
    "{kw-endofround} : Donne à un allié +1 {kw-charge}.",
    "Élémental Sacré",
    "{kw-endofround} : Restaure 1 de Santé à un allié non héroïque endommagé.",
    "Colombe",
    "Corbeau",
    "Loup",
    "Limon Venimeux",
    "Élémental de Sang",
    "Grand Élémental de Sang",
    "Petit Élémental de Fer",
    "{kw-endofround} : Donne à un autre allié dans cette colonne +1 d'Armure.",
    "Élémental de Fer",
    "{kw-endofround} : Donne à un autre allié dans cette colonne +2 d'Armure.",
    "Grand Élémental de Fer",
    "{kw-endofround} : Donne à un autre allié dans cette colonne +3 d'Armure.",
    "Spectre Sanguin",
    "{kw-death} : Inflige 4 dégâts au héros allié.",
    "Marteau Spectral",
    "{kw-followup} : Subit 1 dégât.",
    "Marteau Spectral Supérieur",
    "Marteau Spectral Doré",
    "Écaille Venimeuse",
    "Bombe",
    "{kw-death} : Inflige 2 dégâts à TOUS les personnages de cette colonne.",
    "Grosse Bombe",
    "{kw-death} : Inflige 4 dégâts à TOUS les personnages de cette colonne.",
    "Bombe Dorée",
    "{kw-death} : Inflige 6 dégâts à TOUS les personnages de cette colonne.",
    "Élémental du Néant",
    "S'attaque lui-même. {kw-death} : Inflige 2 dégâts à tous les alliés.",
    "Grand Élémental du Néant",
    "S'attaque lui-même. {kw-death} : Inflige 3 dégâts à tous les alliés.",
    "Élémental de Foudre",
    "{kw-death} : Donne à tous les alliés +1 {kw-charge}.",
    "Cyril, le Trembleterre",
    "Lézardeau",
    "Image Miroir",
    "Ne peut pas être déplacé.",
    "Limon Cosmique",
    "Ne compte pas dans la taille limite du groupe.",
    "{kw-endofround} : Donne +1 {kw-charge} à tous les autres élémentaux alliés.",
    "Asmodel, le Doré",
    "Se vend 15 pièces d'or aux feux de camp.",
    "{kw-endofround} : Gagne {kw-shield}.",
    "Statue d'Exception",
    "Statue Dorée",
    "Se vend 10 pièces d'or aux feux de camp.",
    "Disciple Loyal",
    "Fourré",
    "Élémental d'Or",
    "Disparaît à la fin du deuxième tour.",
    "{kw-endofround} : Se déplace.",
    "Aventurier Perdu",
    "L'Augure",
    "{kw-followup} : Invoque un {kw-summon:1}.",
    "Le Vigile",
    "Cible un personnage aléatoire dans n'importe quelle colonne.",
    "Rat de l'Effroi",
    "Limon",
    "Baril",
    "Minn Mâchentrave",
    "{kw-endofround} : Change de colonne.",
    "Archer Gobelin",
    "Dent de Rat",
    "{kw-endofround} : Invoque une bête aléatoire.",
    "Chauve-souris",
    "Cobra",
    "Urne en Métal",
    "Aziel",
    "A +1 d'Attaque pour chaque {kw-summon:3} allié.",
    "Faxel Mâchentrave",
    "{kw-counter} : Inflige 1 dégât à l'ennemi le plus proche, puis change de colonne.",
    "Baril Explosif",
    "Limon Diviseur",
    "{kw-death} : Invoque deux {kw-summon:42}.",
    "Smithy Mâchentrave",
    "{kw-endofround} : Donne à un allié aléatoire +4 d'Armure.",
    "Garde Squelette",
    "Dent Amère",
    "{kw-followup} : Donne à une Bête alliée aléatoire +1 d'Attaque.",
    "Flit Mâchentrave",
    "{kw-counter} : Gagne +1 {kw-charge}.",
    "Fial Mâchentrave",
    "Lorsqu'un personnage meurt, gagne +1 d'Attaque.",
    "Le Mâchentrave Perdu",
    "{kw-endofround} : Invoque une {kw-summon:48}.",
    "Reine de la Couvée",
    "Scarabée Charognard",
    "{kw-endofround} : Donne à la {kw-summon:64} +2 d'Armure.",
    "Colosse Réanimé",
    "Jumeleur",
    "Roi Mâchentrave",
    "{kw-endofround} : Invoque un {kw-summon:46}.",
    "L'Orbe de Commandement",
    "Les Gobelins ont +1 d'Attaque.",
    "Invisible.",
    "Limon Gargantuesque",
    "{kw-endofround} : Invoque deux {kw-summon:42} et change de colonne.",
    "Limon Fossile",
    "Rejeton de Valac",
    "{kw-endofround} : Invoque un {kw-summon:73}.",
    "Orbe Errant",
    "Cible l'un des ennemis les plus proches dans n'importe quelle colonne.",
    "Simulacre Décapité",
    "{kw-followup} : Se déplace.",
    "Masse d'Orbes",
    "{kw-death} : Invoque trois {kw-summon:73}.",
    "Croc d'Argent",
    "Simulacre Pourrissant",
    "{kw-death} : Invoque un {kw-summon:74}.",
    "Urne Antique",
    "Reine des Orbes",
    "A +1 d'Attaque pour chaque allié.",
    "Simulacre Veninique",
    "Attaque paralysante.",
    "Simulacre Parfait",
    "Lorsque ce personnage tue un ennemi, restaurez 2 points de vie.",
    "Lycanthrope",
    "Esprit des Cavernes",
    "Fourré Maudit",
    "{kw-death} : Inflige 2 dégâts à l'ennemi le plus proche dans cette colonne.",
    "Fourré Éveillé",
    "{kw-endofround} : Invoque deux {kw-summon:85}.",
    "Araignée",
    "La Vieille Mégère",
    "{kw-endofround} : Invoque un Limon aléatoire puis se déplace.",
    "Voleur",
    "Lorsque ce personnage tue un ennemi, volez 1 pièce d'or.",
    "Mimic",
    "{kw-death} : Gagne 1 pièce d'or.",
    "Orbe Progéniteur",
    "{kw-endofround} : Invoque deux {kw-summon:73}.",
    "Simulacre Clypaen",
    "{kw-endofround} : Donne à un autre allié {kw-shield}.",
    "Simulacre Firique",
    "{kw-counter} : Inflige 1 dégât à l'ennemi le plus proche.",
    "L'Enchanteresse",
    "Lorsqu'un allié meurt, donne à un autre allié +2 d'Attaque.",
    "Firis",
    "Venina",
    "Clypaes",
    "Simulacre Originel",
    "{kw-followup} : Inflige 5 dégâts à tous les alliés et gagne +1 d'Attaque.",
    "Le Miroir",
    "{kw-endofround} : Invoque un {kw-summon:77}.",
    "L'Ancien",
    "Lorsqu'une Bête alliée meurt, gagne +1 d'Attaque.",
    "Lycan Alpha",
    "{kw-death} : Invoque deux {kw-summon:83}.",
    "Le Non-Voyant",
    "Cible l'ennemi ayant la santé la plus élevée.",
    "Scorpion",
    "Scorpide Squelette",
    "Attaque trois fois.",
    "Serviteur du Feu",
    "{kw-followup} : Change de colonne et gagne +1 d'Attaque.",
    "Prince de Braise",
    "Attaques maudites.",
    "Flamme Infernale",
    "{kw-death} : Donne à tous les alliés +2 {kw-charge}.",
    "Marcheur des Abysses",
    "{kw-endofround} : Invoque une {kw-summon:109}.",
    "Radiance Menaçante",
    "{kw-endofround} : Invoque deux {kw-summon:112}, puis se déplace.",
    "Radiance Instable",
    "{kw-endofround} : Inflige 5 dégâts à TOUS les personnages de cette colonne.",
    "Ancien Troll",
    "Troll",
    "Cauchemar",
    "{kw-endofround} : Paralyse un ennemi aléatoire.",
    "Terreur Cristalline",
    "{kw-death} : Invoque une {kw-summon:117}.",
    "Terreur",
    "Serviteur de l'Ombre",
    "A +1 d'Attaque pour chaque ennemi.",
    "Prince de l'Ombre",
    "Désorientant.",
    "Flamme Abyssale",
    "{kw-death} : Donne au {kw-summon:121} +1 d'Attaque.",
    "Gardien des Abysses",
    "{kw-endofround} : Invoque une {kw-summon:120}.",
    "Urne Spirituelle",
    "{kw-death} : Détruit l'{kw-summon:123}.",
    "Esprit de Braise",
    "{kw-endofround} : Gagne +15 en armure puis se déplace.",
    "Géant de Chair",
    "Les attaques appliquent 2 {kw-affliction}.",
    "Ver de Chair",
    "Serviteur de la Cupidité",
    "Prince Doré",
    "{kw-followup} : Vole 1 pièce d'or.",
    "La Main d'Abaddon",
    "Lorsqu'un monstre allié meurt, gagne +1 d'Attaque.",
    "Prêtre d'Abaddon",
    "{kw-counter} : Donne à {kw-summon:128} +2 d'Armure.",
    "Prêtresse d'Abaddon",
    "{kw-counter} : Donne à {kw-summon:128} +2 {kw-charge}.",
    "Flamme Primordiale",
    "{kw-endofround} : Inflige 2 dégâts à tous les personnages de cette colonne, puis se déplace.",
    "Rocher",
    "Flamme d'Ombre Inférieure",
    "{kw-death} : Invoque une {kw-summon:134}.",
    "Flamme d'Ombre",
    "{kw-death} : Invoque une {kw-summon:135}.",
    "Flamme d'Ombre Supérieure",
    "Le Saccageur Psychique",
    "Les attaques appliquent un effet de statut aléatoire. Attaques aléatoires.",
    "Chevalier Pantin",
    "{kw-endofround} : Gagne +1 d'Attaque et se déplace.",
    "Abaddon",
    "Se transforme à chaque tour.",
    "Paresse",
    "Luxure",
    "Envie",
    "{kw-endofround} : Invoque un {kw-summon:142}.",
    "Globe de Poison",
    "{kw-death} : Inflige {kw-poison} à l'ennemi ayant le moins de santé.",
    "Colère",
    "Orgueil",
    "Réduit l'ennemi avec la santé la plus élevée à 1 de Santé.",
    "Avarice",
    "{kw-endofround} : Invoque trois {kw-summon:147}.",
    "Corruption",
    "{kw-endofround} : Invoque deux {kw-summon:149}.",
    "Globe Doré",
    "Gourmandise",
    "{kw-endofround} : Invoque deux Dévoreurs aléatoires.",
    "Globe Maudit",
    "{kw-death} : Maudit un ennemi aléatoire.",
    "Dévoreur de Force",
    "Les personnages ne peuvent pas acquérir d'armure.",
    "Dévoreur d'Espoir",
    "Les personnages ne peuvent pas récupérer de santé.",
    "Le Gardien",
    "Illifar",
    "Valac",
    "Orobas",
    "Morax",
    "{kw-endofround} : Donne à {kw-summon:153} +5 d'Armure.",
    "Aamon",
    "{kw-endofround} : Donne à {kw-summon:153} +3 {kw-charge}.",
    "Haagenti",
    "Les attaques ignorent l'armure.",
    "Bathin Supérieur",
    "{kw-death} : Paralyse tous les ennemis non héroïques.",
    "{kw-endofround} : Donne à tous les alliés +1 {kw-charge}.",
    "Ombre Affligée",
    "Nazzatoth",
    "{kw-endofround} : Invoque deux Ombres.",
    "Ombre Flamme-Noire",
    "{kw-endofround} : Invoque deux {kw-summon:171} dans cette colonne.",
    "Ombre Électrique",
    "Ombre Instable",
    "{kw-followup} : Inflige 2 dégâts à tous les personnages de cette colonne.",
    "Ombre Captivante",
    "Ombre Hurlante",
    "Ombre Maudite",
    "Flamme Noire",
    "Le Gardien du Portail",
    "Néant",
    "{kw-death} : Applique un effet de statut aléatoire à un ennemi aléatoire.",
    "{kw-endofround} : Donne à un allié aléatoire +4 {kw-charge}.",
    "Œil de Nazzatoth",
    "Œil d'Illifar",
    "Inflige le double de dégâts aux ennemis affligés.",
    "Œil d'Abaddon",
    "Le Reflet du Gardien",
    "{kw-endofround} et {kw-death} : Inflige 5 dégâts à l'ennemi le plus proche dans cette colonne et applique 2 {kw-affliction}.",
    "{kw-endofround} : Invoque un Reflet avec une capacité aléatoire.",
    "{kw-endofround} et {kw-death} : Inflige 1 dégât à tous les ennemis.",
    "{kw-endofround} et {kw-death} : Inflige 10 dégâts à l'ennemi le plus proche dans cette colonne.",
    "{kw-endofround} et {kw-death} : Inflige deux fois 4 dégâts à l'ennemi le plus proche dans cette colonne.",
    "{kw-endofround} et {kw-death} : Inflige 3 dégâts à l'ennemi ayant la santé la plus élevée et le Paralyse.",
    "Spectre du Donjon",
    "Ver Aurum",
    "{kw-death} : Gagne 13 pièces d'or.",
    "Roi de la tour",
    "{kw-endofround}: ???",
    "Gardien de tour",
    "Archmème",
    "Chasseur royal",
    "{kw-followup} : Inflige 1 dégât à un ennemi aléatoire.",
    "Forgeron",
    "Bombes",
    "{kw-endofround} : Invoque un {kw-summon:20}.",
    "Capitaine de tour",
    "{kw-followup} : {kw-weaken} un ennemi aléatoire.",
    "Sorcier royal",
    "Épée royale",
    "Herald of the Hammer",
    "{kw-endofround} : Invoque un {kw-summon:17}.",
    "Maître de potion",
    "Cutané",
    "Astronome",
    "{kw-endofround} : Donne à un allié aléatoire +2 {kw-charge}.",
    "Oracle",
    "Chevalier de la tour",
    "{kw-followup} : Gagne {kw-shield}.",
    "Gardien de crypte",
    "{kw-endofround}: Invoque un {kw-summon:1} deux fois.",
    "Tueur",
    "Apothécarien",
    "{kw-otherunitdies} : Inflige 2 dégât à l'ennemi le plus proche.",
    "Bouffon",
    "Royal footman",
    "Loup des Marais",
    "{kw-endofround} : Restaure 1 de Santé.",
    "Cobra géant",
    "Dragon au crépuscule",
    "Mauler",
    "Golem de sable",
    "Lancier",
    "Noblesse tour",
    "{kw-endofround} : Restaure 2 de Santé.",
    "Valet de pied",
    "Slime sans fin",
    "Mage de sang",
    "{kw-death} : Invoque un {kw-summon:11}.",
    "Dawn Beatle",
    "{kw-startofbattle} : Gagne {kw-shield}.",
    "Golem de magma",
    "{kw-followup} : Gagne +1 d'Attaque.",
    "Tombe agitée",
    "{kw-death} : Invoque un {kw-summon:235}.",
    "Vide golem",
    "{kw-death} : Inflige 1 dégât à tous les ennemis.",
    "Chasseur",
    "Danseuse de lame",
    "A +1 d'Attaque lorsqu'il est en pleine santé.",
    "Clerc de la cour",
    "{kw-endofround} : Rend 1 point de vie au héros allié.",
    "Esprit emprisonné",
    "Serviteur",
    "Armure au crépuscule",
    "{kw-counter} : Gagne +1 d'Armure.",
    "Golem infernal",
    "Géant de la tour",
    "Sauge de la cour",
    "Élémentaire crépusculaire",
    "{kw-endofround} : Donne +1 {kw-charge} au héros allié.",
    "Duelliste",
    "Spectre Vengeur",
    "Urne Maudite",
    "{kw-death} : {kw-poison} l'ennemi le plus proche dans cette colonne.",
    "Piège à statue",
    "{kw-death} : Invoque un {kw-summon:20}.",
    "Carquois de Lyra",
    "Les archers alliés gagnent +1 d'Attaque.",
    "Écritures Tauriennes",
    "Les Bêtes et les Hommes-Lézards alliés gagnent +1 en Santé.",
    "Le Journal d'Edric",
    "Les guerriers alliés gagnent +1 d'Attaque et -1 de Santé.",
    "Marteau de l'Ancien Monde",
    "Les Nains et les Gnomes alliés gagnent +2 de Santé.",
    "Le Manteau du Juge",
    "Les alliés gagnent +3 Speed.",
    "Le Marteau du Forgeron",
    "Lorsqu'un allié gagne de l'Armure, il gagne +1 d'Armure bonus.",
    "Livre de l'Ordre",
    "Les Humains et les Nains alliés gagnent +1 de Santé.",
    "Marteau de Thoric",
    "Les alliés conservent jusqu'à 1 d'Armure à la fin de chaque tour.",
    "Pierre d'Erilari",
    "Les alliés invoqués gagnent +1 d'Attaque.",
    "Le Bâton de Cyril",
    "Les alliés invoqués ne peuvent pas être épuisés.",
    "Collecteur d'Essence",
    "Lorsqu'un allié non invoqué meurt, invoque deux Élémentaux de Sang.",
    "Torche Éternelle",
    "{kw-startofbattle} : Invoque une {kw-summon:4}.",
    "La Lame du Juge",
    "{kw-startofbattle} : Votre héros gagne +3 {kw-charge} et {kw-shield}.",
    "Menottes Spirituelles",
    "La première fois qu'un allié meurt, invoque un {kw-summon:235}.",
    "Bénédiction de Clypaen",
    "La première fois qu'un allié subit des dégâts, il gagne {kw-shield}.",
    "Distillateur d'Essence",
    "Après le premier tour, invoque un Petit {kw-summon:23} ennemi.",
    "Le Secret du Marchand",
    "Les objets coûtent 1 pièce d'or de moins.",
    "Venin Pur",
    "Les ennemis subissent +2 dégâts du poison.",
    "Sortilège de Venina",
    "Pièces de Contrefaçon",
    "Les personnages aux feux de camp coûtent 2 pièces d’or de moins.",
    "Écusson Royal",
    "Votre premier rafraîchissement à chaque feu de camp et magasin est gratuit. {kw-startofbattle} : Votre héros attaque.",
    "Sang de Troll",
    "Lorsque votre héros tue un ennemi, il restaure 2 de Santé.",
    "Marteau Titanesque",
    "{kw-startofbattle} : Donne à tous les alliés +2 d'Armure.",
    "Bâton de l'Amguan",
    "Si un allié n'attaque pas, il gagne +1 {kw-charge}.",
    "Saint Distillateur",
    "Après le premier tour, invoque un {kw-summon:5}.",
    "Livre de Pouvoir",
    "{kw-endofround} : Donne à un humain allié aléatoire +1 {kw-charge}.",
    "Essence Éthérée",
    "Lorsqu'un allié perd son bouclier, il gagne +1 d'Attaque.",
    "Le Violon de Jack",
    "Lorsque vous visitez un feu de camp ou un feu de joie, gagnez 3 pièces d'or.",
    "Livre des Étoiles",
    "{kw-endofround} : Donne au mage allié qui a le moins de Santé +1 {kw-charge}.",
    "Carquois de Dégaine",
    "{kw-startofbattle} : Les archers alliés attaquent deux fois.",
    "Sorcellerie Féerique",
    "Lorsqu'un allié est invoqué, il gagne +2 {kw-charge}.",
    "Bâton de la Flamme",
    "{kw-startofbattle} : Inflige 8 dégâts à un ennemi aléatoire.",
    "Bâton Céleste",
    "{kw-startofbattle} : Donne à tous les alliés +1 {kw-charge}.",
    "Bâton du Néant",
    "{kw-endofround} : Inflige 1 dégât à un ennemi aléatoire.",
    "Essence Élémentale",
    "Les Élémentaux alliés ont +2 de Santé.",
    "Maillet en Fusion",
    "{kw-endofround} : Donne à un Guerrier allié aléatoire +1 d'Armure.",
    "Le Livre de Bathin",
    "{kw-startofbattle} : Gagnez 1 pièce d'or. Votre Héros a 2 de Santé en moins.",
    "La Lame Perdue",
    "Votre héros a +1 d'Attaque et +2 de Vitesse.",
    "Les Bottes d'Edric",
    "Votre héros attaque une fois de plus.",
    "Lame d'Essence",
    "Votre héros a « {kw-otherunitdies} : Gagne +1 {kw-charge} ».",
    "Livre de Célérité",
    "Les Mages alliés ne peuvent pas être épuisés.",
    "Breuvage Étrange",
    "{kw-startofbattle} : Donne +1 d'Attaque à un Homme-Lézard, un Gnome, et un Élémental alliés.",
    "Blason de l'Alliance",
    "{kw-startofbattle} : Donne {kw-shield} à un Humain, un Nain, et un Elfe alliés.",
    "Distillateur de Venin",
    "Lorsqu'un personnage empoisonné meurt, restaure 1 de Santé à un allié blessé non héroïque.",
    "Maléfice Sanguin",
    "Après le premier tour, invoque un {kw-summon:15} ennemi.",
    "Cloche d'Invocation",
    "{kw-startofbattle} : Invoque deux Marteaux Spectraux.",
    "Récipient d'Âme",
    "Max âmes +6.",
    "Le souvenir de Jack",
    "Les bêtes alliées gagnent +1 en santé et +2 en vitesse.",
    "Manastone",
    "Les personnages en manastone ont +1 Mana.",
    "Lame sacrée",
    "Votre héros a « {kw-healthisrecovered} : Gagne +1 {kw-charge} ».",
    "Manablade",
    "Lorsqu'un personnage manacaste, votre héros gagne +1 Attaque.",
    "La Couronne de l'Aube",
    "La taille limite de votre groupe est augmentée de 1.",
    "Manteau de Disciple",
    "Potion de Loyauté",
    "Transformez un {kw-summon:33} en {kw-summon:34}. Le personnage perd tout son équipement. Consommable.",
    "Lame d'Aamon",
    "{kw-counter} : Gagne +1 d'Attaque.",
    "Épée de Champion",
    "Lame de Phénix",
    "L'invitation de la mort",
    "Une fois équipé, meurt.",
    "Anneau de Pestilence",
    "{kw-startofbattle} : Devient empoisonné et gagne 3 pièces d'or.",
    "Anneau de Vieillissement",
    "{kw-startofbattle} : Gagne 3 pièces d'or.",
    "Anneau de Dépérissement",
    "{kw-startofbattle} : Subit 1 dégât et gagne 3 pièces d'or.",
    "Anneau de Faiblesse",
    "Potion de Guérison",
    "Restaure 2 de Santé. Consommable.",
    "Potion temporelle",
    "Transformez votre héros. Ils perdent tout leur équipement.",
    "Potion de Guérison Inférieure",
    "Restaure 1 de Santé. Consommable.",
    "Potion de Guérison Supérieure",
    "Restaure 8 de Santé. Consommable.",
    "Manteau de Traverse",
    "Cape de Vagabond",
    "Arc Court",
    "L'Arc des Ombres",
    "Cape de Charognard",
    "Lorsque ce personnage tue un ennemi, invoque un {kw-summon:7}.",
    "Arbalète d'Iliphar",
    "Arbalète d'Andromalius",
    "Potion Mystère Inférieure",
    "Se transforme en un objet aléatoire. Consommable.",
    "Potion de Transformation",
    "Transforme un archer en un personnage aléatoire de niveau 3. Le personnage perd tout son équipement. Consommable.",
    "Flacon d'Essence",
    "{kw-death} : Invoque un Wisp de Sangre.",
    "Pendentif Miroir",
    "Le personnage équipé ne peut pas être paralysé.",
    "Lentille d'Âme",
    "Lorsqu'un allié meurt, inflige 1 dégât à l'ennemi le plus proche.",
    "Collier de Clypaes",
    "Bâton d'Adepte",
    "Pierre du Soleil",
    "{kw-endofround} : Gagne +1 {kw-charge}.",
    "Amulette Condamnée",
    "Tige Flamboyante",
    "Sceptre Sacré",
    "{kw-followup} : Restaure 1 de santé à un allié non héroïque endommagé.",
    "Griffe d'Andromalius",
    "Potion de Midas",
    "Transformez un mage en {kw-summon:32} qui peut être vendue pour 10 pièces d'or aux feux de camp. Le personnage perd tout son équipement. Consommable.",
    "Potion de Polyvalence Supérieure",
    "Transforme un Mage en Multiclasse, lui permettant d'utiliser l'équipement de n'importe quelle classe. Consommable.",
    "Potion Mystère Supérieure",
    "Targe en Bois",
    "Bouclier Venin",
    "{kw-startofbattle} : Devient empoisonné.",
    "Bouclier de Tirailleur",
    "Bouclier Renforcé",
    "Heaume d'Immortel",
    "{kw-otherunitdies} : Gagne +1 d'Armure.",
    "Mur de Titan",
    "Bouclier Normand",
    "Heaume Vampirique",
    "{kw-otherunitdies} : Restaure 1 de Santé.",
    "Écaille de Dragon",
    "Écaille d'Andromalius",
    "Potion de Polyvalence",
    "Transforme un Guerrier en Multiclasse, lui permettant d'utiliser l'équipement de n'importe quelle classe. Consommable.",
    "Potion Miroir",
    "Transforme un guerrier en une copie de base d'un membre aléatoire du groupe. Le personnage perd tout son équipement. Consommable.",
    "Œuf de Lézardeau",
    "Après le premier tour, invoque un {kw-summon:27}.",
    "Croc de Foudre",
    "Croc Venimeux",
    "Les attaques contre les ennemis appliquent du poison.",
    "Œuf Toxique",
    "Après le premier tour, invoque un homme-lézard {kw-summon:19}.",
    "Pièce Porte-Chance",
    "On ne sait pas à quoi ça sert.",
    "Amanite Mortel",
    "Lorsqu'un personnage empoisonné meurt, restaure 1 de Santé.",
    "Chapeau Venimeux",
    "{kw-followup} : Inflige 1 dégât à tous les ennemis empoisonnés.",
    "Chapeau Immortel",
    "{kw-followup} : Restaure 1 de Santé.",
    "Âme Fissurée",
    "{kw-startofbattle} : Gagne 1 âme. Max âmes +1.",
    "Crâne Talisman",
    "Quand un personnage incante de la soulcast, gagne +1 d'Armure.",
    "Baguette Sanguine",
    "Après le premier tour, invoque un Wisp de Sangre.",
    "Baguette Écaille Verte",
    "{kw-endofround} : Donne à un allié invoqué aléatoire +1 d'Armure.",
    "Baguette Nécrotique",
    "Pierre Étoilée",
    "Ceinture de Midas",
    "Hache de jet",
    "{kw-counter} : Inflige 1 dégât à un ennemi aléatoire.",
    "Hache de Berserker",
    "Gagne +1 d'Attaque si blessé.",
    "Hache Sacrée",
    "Lorsque ce personnage gagne de la santé, il gagne également +1 {kw-charge}.",
    "Ceinture d'Immortel",
    "{kw-counter} : Restaure 1 de Santé.",
    "Gemme ancestrale",
    "Couperet de Taur",
    "Plastron de Noble",
    "{kw-death} : Gagne 2 pièces d'or.",
    "Cotte de Mailles",
    "Plastron de Martyr",
    "{kw-death} : Donne +1 d'Attaque à tous les alliés.",
    "Plastron de Champion",
    "Anneau de Vitalité",
    "Anneau de Colombe",
    "Une Vieille Clé",
    "Anneau Antivenin",
    "Le personnage équipé ne peut pas être empoisonné.",
    "Clé Dorée",
    "La Clé du Contrebandier",
    "Anneau de Titan",
    "{kw-startofbattle} : Gagne +4 d'Armure.",
    "Gants de Tanneur",
    "Anneau du Faucon",
    "Anneau Fureur du Néant",
    "Lorsque ce personnage tue un ennemi, inflige 1 dégât à un ennemi aléatoire.",
    "Gants Blindés",
    "{kw-startofbattle} : Gagne +2 d'Armure.",
    "Anneau Nécrotique",
    "Voleur d'Âme",
    "Lorsque ce personnage tue un ennemi, restaure 1 de Santé.",
    "Anneau de Thoric",
    "La grâce de la Mort",
    "Quand ce personnage mourra, détruisez ça à la place.",
    "Ceinture de Potions",
    "Crâne du Néant",
    "Gantelets",
    "Bague en Diamant",
    "Clé du Portail",
    "Gemme de Saphir",
    "Cendres",
    "Bague en Obsidienne",
    "Une ancienne bague de transformation.",
    "Gemme d'Obsidienne",
    "Bague en Émeraude",
    "Bague en Améthyste",
    "Bague en Rubis",
    "Bague en Topaze",
    "Le cadeau de la Mort",
    "+25 % de score",
    "L'Ombre de la Mort",
    "{kw-counter} : gagnez {kw-shield}.",
    "Potion d'Expérience",
    "Gagne +1 XP. Consommable.",
    "Gagne +1 XP. Les personnages morts au combat ne peuvent pas gagner d'XP. Consommable.",
    "Potion de Maîtrise",
    "Gagne +3 XP. Consommable.",
    "Potion Cosmique",
    "Transforme un personnage en {kw-summon:29}. Le personnage perd tout son équipement. Consommable.",
    "Sac de Pièces d'Or",
    "Potion d'Expérience Supérieure",
    "Gagnez +2 XP. Les personnages morts au combat ne peuvent pas gagner d'XP. Consommable."
];