# Full-Stack-Bao-Loc-Math-App
Application créée avec spring boot et react.


##Informations


Pour lancer l'application veuillez écrire : mvnw spring-boot:run  dans la console.
L'application sera visible sur : http://localhost:8080


Le code du front peut être trouvé dans : ./src/main/bao-loc-math-app-front


Le build de production se trouve dans ./src/main/resources/static pour que l'application démarre correctement.


##Contexte: 
Le tableau ci-dessous a été donné à des enfants de 8 ans au Bao-Loc
(Vietnam). Des mathématiciens européens chevronnés n’ont pas été en mesure de le
résoudre.


##Objectif : 
Écrire un algorithme qui est capable de compléter le tableau ci-dessous en
utilisant des chiffres de 1 à 9 avec la contrainte de ne pas pouvoir utiliser deux fois le
même chiffre.


##Mode d'emploi


Le bouton Valider enregistre la solution proposée dans la base de donnée si elle est valide. Si il y a déjà une solution dans la base de donnée la dernière solution est remplacée. En cas de non respect des consignes un modal d'erreur aparait. En cas de solution incorrecte un modal demande si l'on veut tout de meme l'ajouter à la base de donnée.


Le bouton Réinitialiser vide le tableau affiché à l'écran.


Le bouton Résoudre l'équation : affiche une solution aléatoire qui répond au problème dans le tableau. Il ajoute aussi une nouvelle solution dans la base de donnée.
Sous le bouton la vitesse d'execution de la résolution de l'équation est affichée.


En dessous la liste de toutes les solutions de la base de donnée est affichée. Les solutions peuvent être supprimée individuellement ou colectivement grace au bouton tout supprimer. Une demande de confirmation est demandé dans ce dernier cas.

La liste peut être réduite avec le + sur la droite puis réagrandis en cliquant n'importe où dessus.
