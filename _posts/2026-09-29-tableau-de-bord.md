---
layout: post
title:  "Tableau de bord"
date:   2026-09-29 08:31:52
categories: ["Menu en haut à gauche"]
published: true
---

Le tableau de bord permet de visualiser toutes les activités de l'utilisateur connecté. Ils regroupe 4 écrans que nous allons détailler ci-dessous: [Présence sur la plateforme](#présence-sur-la-plateforme), [Devoirs rendus et corrigés](#devoirs-rendus-et-corrigés), [Activités](#activités) et [Fichiers en ligne](#fichiers-en-ligne).

## Présence sur la plateforme
Le graphique représente toutes les dernières tentatives de connexions sur la période choisie (ici les 30 derniers jours). 
![presence-tdb](/assets/img/presence-tdb.PNG)
Il permet d'identifier les moments d'inaccessibilité de Sekooly soit due à une maintenance de la plateforme, soit à cause d'un code d'accès saisi erroné. Il aide également l'utilisateur à se rendre compte du nombre de connexions hebdomadaires, ainsi que le taux d'erreur qu'il a lorsqu'il se trompe de code d'accès.  

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


## Activités
Il y a 5 types de activités recensées pour l'utilisateur connecté:
- les **[absences à justifier](#en-cours)**
- les **[retards à justifier](#en-cours)**
- les **[discussions créées](#en-cours)**
- les **[commentaires envoyés](#en-cours)**
- l'**[historique de navigation](#en-cours)**

![Les 5 activités dans le tableau de bord](/assets/img/participation-tdb.PNG)

En cliquant sur **Détails**, l'utilisateur peut retrouver l'ensemble de ces 5 activités.

## Fichiers en ligne
Ce graphique permet de montrer la part des catégories de fichiers que:
- l'enseignant connecté a publié
- l'apprenant connecté doit consulter  au cours de sa formation
- l'administrateur connecté peut contrôler dans son cycle
![fichiers](/assets/img/fichiers-tdb.PNG)


En cliquant sur **Détails**, l'utilisateur peut retrouver l'ensemble des fichiers concernés par le graphique.  
![details-fichiers](/assets/img/details-fichiers.PNG)  