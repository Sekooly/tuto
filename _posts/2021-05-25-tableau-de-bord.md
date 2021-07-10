---
layout: post
title:  "Tableau de bord"
date:   2021-05-25 08:31:52
categories: ["Menu en haut à gauche"]
published: true
---

Le tableau de bord permet de visualiser toutes les activités de l'utilisateur connecté. Ils regroupe 4 écrans que nous allons détailler ci-dessous: [Présence sur la plateforme](#présence-sur-la-plateforme), [Devoirs rendus et corrigés](#devoirs-rendus-et-corrigés), [Participations](#participations) et [Fichiers en ligne](#fichiers-en-ligne).

## Présence sur la plateforme
Le graphique représente toutes les dernières tentatives de connexions sur les 12 derniers mois. 
![presence-tdb](/assets/img/presence-tdb.PNG)
Il permet d'identifier les moments d'inaccessibilité de Sekooly soit due à une maintenance de la plateforme, soit à cause de frais non payés. Il aide également l'utilisateur à se rendre compte du nombre de connexions hebdomadaires, ainsi que le taux d'erreur qu'il a lorsqu'il se trompe de code d'accès.  

## Devoirs rendus et corrigés
En fonction du rôle de l'utilisateur, il affiche le **taux de rendu**:
- d'un **apprenant** dans toutes les matières qui le concernent;  
- pour l'**enseignant** en vu du nombre de rendus que ses apprenants ont réalisé.  

![taux-rendus-tdb](/assets/img/taux-rendus-tdb.PNG)  


Par exemple, un premier sujet de devoir posté par un enseignant dans la matière X, à laquelle 15 personnes sont inscrites, représente 15 rendus attendus. Si 10 personnes ont rendu le devoir, alors le taux de rendu:
- **pour l'enseignant** sera de 10/15 = 66.67%;
- **pour un apprenant qui suit uniquement la matière X** sera de 1/1: 100%.

Les utilisateurs ont la possibilité de consulter les détails:
- **pour un enseignant**:
	- la jauge représente le taux de correction sur un devoir particulier, parmi les rendus soumis;
	- le commentaire en rouge explique en mots simples le taux de correction et le taux de rendus;
	- l'oeil permet de consulter tous les devoirs rendus, et éventuellement [les corriger](#en-cours).
![details-taux-rendus-enseignant](/assets/img/details-taux-rendus-enseignant.PNG)

- **pour un apprenant**:  
	- la coche et le commentaire **en rouge** montrent que l'apprenant n'a **pas** rendu le devoir;
	- la coche et le commentaire **en vert** montrent que l'apprenant **a bien rendu** le devoir;
	- l'oeil permet de soit consulter le devoir rendu, soit de [rendre le devoir](#en-cours) le cas échéant.  
![details-taux-rendus-apprenant](/assets/img/details-taux-rendus-apprenant.PNG)


## Participations
Il y a 3 types de participations recensées pour l'utilisateur connecté:
- les **[discussions créées](#en-cours)**
- les **[commentaires envoyés](#en-cours)**
- les **[sessions de visioconférences rejointes](#en-cours)**

![participation-tdb](/assets/img/participation-tdb.PNG)

En cliquant sur **Voir les détails**, l'utilisateur peut retrouver l'ensemble des discussions qu'il a menées, et des commentaires qu'il a envoyés depuis qu'il utilise la plateforme.  
![details-participation](/assets/img/details-participation.PNG)  
L’oeil à côté de chaque élément permet de consulter la discussion ou le commentaire envoyé. 

## Fichiers en ligne
Ce graphique permet de montrer la part des catégories de fichiers que:
- l'enseignant connecté a publié
- l'apprenant connecté doit consulter  au cours de sa formation
- l'administrateur connecté peut contrôler dans son cycle
![fichiers](/assets/img/fichiers-tdb.PNG)


En cliquant sur **Voir les détails**, l'utilisateur peut retrouver l'ensemble des fichiers concernés par le graphique.  
![details-fichiers](/assets/img/details-fichiers.PNG)  
L’oeil à côté de chaque nom de fichier permet de consulter le-dit fichier directement. 
