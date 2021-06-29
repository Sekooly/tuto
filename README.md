# Les tutos Sekooly
## Où trouver le tutoriel
Le site tourne sur [tuto.sekooly.com](https://tuto.sekooly.com).  

## Pourquoi rendre ce repo publique ? 
Pour que tous les utilisateurs qui utilisent Sekooly puissent contribuer.

# Comprendre les fichiers
Voici les fichiers importants:
- `_config.yml` : configuration générale du site. Vous pouvez consulter [beautiful-jekyll config](https://github.com/daattali/beautiful-jekyll/blob/master/_config.yml) pour comprendre tous les éléments à compléter.
- `_data/menus.yml` : configuration des menus dans la barre de navigation du haut.
- `_posts` : où les articles sont postés.  
- `assets` : stockage les images, les styles CSS, et les favicons.  
- `_sass/main.scss` : paramètres génériques tels que les couleurs, les polices, la tailles de quelques éléments, etc.  
- `_includes` : les éléments html  utilisés pour faire le rendu du site : barre de navigation, contenus des articles, et la section commentaire.  

# Tester en local
```
bundle install
bundle exec jekyll serve --incremental --trace
```
Puis aller à l'adresse: **http://127.0.0.1:4000**

# Credits
Ce site a été conçu grâce à l'utilisation du template [jekyll-klise](https://github.com/piharpi/jekyll-klise) et des modifications apportées par [data-addict.com](https://github.com/data-addict-com/website).

# Contenu et maintenance
Tout le contenu appartient exclusivement à [@Sekooly](https://sekooly.com).
