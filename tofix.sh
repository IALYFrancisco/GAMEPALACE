#!/bin/bash

# Se déplacer dans le répertoire ./dist
cd ./dist

# Créer le répertoire src et s'y déplacer
mkdir src && cd src

# Créer le répertoire assets et s'y déplacer
mkdir assets && cd assets

# Revenir en arrière jusqu'au répertoire parent
cd ../../../

# Se déplacer dans le répertoire src/assets
cd src/assets

# Copier le fichier "bannier (1).jpg" dans le répertoire parent
cp "bannier (1).jpg" ..

# Revenir au répertoire src
cd ..

# Déplacer le fichier "bannier (1).jpg" vers le répertoire parent
mv "bannier (1).jpg" ..

# Revenir au répertoire parent
cd ..

# Déplacer le fichier "bannier (1).jpg" dans le répertoire dist/src/assets/
mv "bannier (1).jpg" "dist/src/assets/"
