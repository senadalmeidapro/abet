# ABET for Africa — proposition de refonte

Document de cadrage associé au prototype front-end. Cette proposition n’est pas une déclaration institutionnelle approuvée par ABET.

## A. Analyse de l’existant

L’indexation consultée du site actuel présente ABET comme une entreprise mêlant gouvernance maritime et aéroportuaire, solutions numériques, données environnementales et accompagnement institutionnel. L’ouverture directe du domaine n’a pas été possible pendant l’analyse ; les observations reposent donc sur le contenu indexé et doivent être confrontées aux pages réellement publiées.

Constats et décisions de conception :

| Constat dans les contenus indexés                                                                                                                                                        | Décision de refonte                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Plusieurs activités sont décrites dans de longs paragraphes, sans hiérarchie immédiatement lisible.                                                                                      | Organiser l’offre autour de deux solutions principales et d’un socle de services.                                                    |
| Le vocabulaire alterne entre économie bleue, aviation, carbone, informatique et conseil.                                                                                                 | Une page par besoin, des termes cohérents et des publics identifiés.                                                                 |
| Le descriptif maritime cite des données satellites, radars, AIS, IA et blockchain sans préciser couverture, disponibilité ni architecture.                                               | Mentionner les capacités comme éléments rapportés par le site et rendre visibles les points à confirmer.                             |
| Le texte carbone affirme conformité à l’Article 6, vérification, certification, registre infalsifiable et transactions, sans preuve ou périmètre vérifiable dans les éléments consultés. | Ne pas reprendre ces affirmations comme des faits. La page du prototype explique le périmètre à documenter.                          |
| Le nom du registre varie entre « Carbone Registry » et « Carbon Registry ».                                                                                                              | Recommander « Africa Blue Port and Airport Carbon Registry », sous réserve de validation officielle.                                 |
| Les contenus indexés font apparaître une adresse à Dubaï, un téléphone et une adresse email, mais pas de mentions légales ou d’équipe détaillée.                                         | Afficher les coordonnées comme publiées et à confirmer ; prévoir des emplacements de validation pour le juridique et la gouvernance. |
| Les références ne sont pas suffisamment détaillées dans les informations consultées.                                                                                                     | Créer une structure de cas d’usage sans inventer client, témoignage ou résultat.                                                     |

Source de référence : [site ABET for Africa](https://www.abetforafrica.com/) et son contenu indexé par moteur de recherche. L’accès direct ayant échoué, logo, couleurs de marque, rendu des pages, vidéo et médias présents sur le site n’ont pas pu être inspectés visuellement. La marque typographique du prototype est donc provisoire ; le logo officiel devra être fourni.

## B. Positionnement proposé

**Positionnement à valider :** partenaire de transformation numérique des institutions et opérateurs d’infrastructures maritimes, avec une expertise complémentaire en données environnementales.

**Promesse centrale proposée :** rendre les opérations et les informations plus lisibles pour soutenir la gouvernance des espaces et infrastructures.

**Introduction proposée :** « ABET accompagne les institutions et les opérateurs dans la gouvernance maritime et la transformation numérique de leurs opérations. »

**Hiérarchie de l’offre :**

1. Intelligence maritime et gouvernance des espaces (IACD & EEZ Scanner).
2. Données environnementales et carbone (registre pour ports et aéroports, périmètre à confirmer).
3. Services transversaux : conseil, assistance technique, ingénierie logicielle, intelligence des données et transfert de compétences.

**Publics prioritaires :** ministères et administrations, autorités maritimes et portuaires, gestionnaires d’aéroports, institutions environnementales, opérateurs d’infrastructures et partenaires technologiques.

**Principes éditoriaux :** expliquer le besoin avant la technologie ; choisir des verbes concrets ; distinguer capacités disponibles, objectifs et propositions ; attribuer les affirmations ; remplacer les superlatifs par des preuves ; expliciter les limites et inconnues ; préparer les contenus pour un français et un anglais de même niveau.

## C. Architecture et fonction des pages

| Page / route prototype                           | Fonction et contenus                                                                                                        |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| Accueil `/`                                      | Compréhension rapide de l’offre, orientation vers les deux solutions, publics et services, transparence sur les références. |
| À propos `/a-propos`                             | Activités et approche ; informations d’entreprise, équipe, présence et mission laissées à validation.                       |
| Solutions `/solutions`                           | Vue comparative des deux offres et accès aux fiches détaillées.                                                             |
| IACD & EEZ Scanner `/solutions/iacd-eez-scanner` | Problèmes, usages et illustration conceptuelle ; sources, modules, sécurité et déploiement à confirmer.                     |
| Registre carbone `/solutions/registre-carbone`   | Intention et périmètre à préciser ; méthodologies, responsabilités, statut et référentiels à confirmer.                     |
| Services `/services`                             | Conseil, logiciel, données, intégration, formation et accompagnement institutionnel.                                        |
| Projets `/projets`                               | Modèle de cas d’étude prêt à recevoir des références autorisées et vérifiables.                                             |
| Ressources `/ressources`                         | Structure éditoriale par analyses, documentation et actualités ; aucun contenu fictif présenté comme publié.                |
| Contact `/contact`                               | Motifs de prise de contact, coordonnées publiées à valider et formulaire de démonstration non connecté.                     |
| Mentions légales `/mentions`                     | Page prévue, champs juridiques à fournir.                                                                                   |
| Confidentialité `/confidentialite`               | Page prévue, points de traitement et conservation des données à valider.                                                    |

Le prototype rend ces pages navigables via Angular Router et un contenu contextualisé selon la route.

## D. Direction artistique

**Territoire :** « cartographie opérationnelle ». La carte conceptuelle est le motif distinctif : lignes de côte, routes, zones de suivi et grille discrète inspirées de la lecture maritime. Elle est accompagnée d’une typographie sans-serif robuste et de surfaces claires ; le vocabulaire visuel reste sobre pour conserver une lecture institutionnelle. Les cartes de démonstration sont explicitement marquées comme telles.

Le logo actuel et ses couleurs n’ayant pas pu être observés, la palette ci-dessous est une proposition nouvelle, à comparer à la charte officielle avant adoption :

| Token           | Hex       | Rôle                                  |
| --------------- | --------- | ------------------------------------- |
| Encre profonde  | `#102D37` | Navigation, grands aplats, texte fort |
| Bleu pétrole    | `#21444D` | Surfaces marines secondaires          |
| Sarcelle        | `#0D7B78` | Actions, liens et repères actifs      |
| Turquoise clair | `#71D0C2` | Détails de carte et accent secondaire |
| Vert signal     | `#C3DC85` | Repère cartographique ponctuel        |
| Papier froid    | `#F3F6F3` | Fond général                          |
| Brume           | `#E5ECE8` | Blocs secondaires et champs           |
| Texte courant   | `#52646A` | Texte secondaire                      |

États sémantiques proposés : succès `#237B5A`, erreur `#A13F46`, avertissement `#8C651E`. Les contrastes des états d’interface devront être contrôlés lors de la finalisation.

**Typographie :** Manrope pour titres et éléments de marque ; DM Sans pour textes, navigation et formulaires. Les deux sont des polices web avec fallback système. Échelle : titre de page 42–69 px fluide, titre de section 31–45 px, titre de carte 17–24 px, corps 16 px (14 px mobile), texte d’interface 10–13 px. Titres serrés, corps à 1.65–1.9, alignement à gauche.

**Composition et composants :** largeur max 1180 px ; marges adaptatives de 24 à 96 px ; grille 12 colonnes sur ordinateur, une colonne sur mobile ; espaces basés sur 4/8 px ; coins quasi carrés, panneaux sans ombres génériques ; filet fin pour séparer les niveaux ; cartes de solutions différenciées par contenu et teinte, pas par un kit répétitif. Bouton principal sarcelle, bouton secondaire textuel et variante claire sur fond sombre. Focus clavier visible, lien de saut, landmarks sémantiques, formulaire avec labels, menu mobile accessible et prise en compte de `prefers-reduced-motion`.

**Images :** privilégier des photos documentaires d’infrastructures et de milieux réels, avec légendes et droits vérifiés. En l’absence de ressources autorisées, employer la cartographie vectorielle du prototype, explicitement conceptuelle. Ne pas afficher de tableau de bord de démonstration comme capture réelle.

**Mouvement :** transitions courtes sur les actions ; pas d’animation autonome. Respect du réglage de réduction de mouvement du système.

## E. Design system et responsive

Les tokens CSS sont centralisés dans `src/styles.scss`; les éléments communs (en-tête, navigation, bouton, titre de section, pied de page, fiche de solution, note de validation) sont structurés comme motifs réutilisables dans le template Angular. À la finalisation, les motifs répétés pourront être extraits en composants standalone dédiés.

Points de rupture du prototype : 1050 px pour adapter les colonnes et la navigation, 760 px pour basculer vers le menu compact et les piles verticales, 390 px pour les petits écrans. Les boutons sont activables au clavier, les liens restent explicites, l’illustration maritime porte un texte alternatif et les formulaires disposent de champs nommés. Le prototype ne comporte pas de contrôle automatique de contraste ; ce contrôle doit faire partie de la revue de production.

## F. Éléments à valider par la direction

- Logo vectoriel, charte de marque, couleurs, polices et règles d’usage.
- Positionnement, mission, raison d’être et terminologie institutionnelle officielle.
- Nom exact, statut, modules, disponibilité, couverture, sources, intégrations, sécurité et options de déploiement de IACD & EEZ Scanner.
- Nom du registre carbone, utilisateurs et périmètre ; méthode de calcul, référentiels, rôles des tiers, statut réglementaire, hébergement et état réel des fonctions. Toute référence à l’Article 6, à la vérification indépendante, à la certification, aux crédits et aux transactions nécessite des justificatifs précis et une validation juridique.
- Dénomination sociale, juridiction, adresse légale, équipe, dirigeants et pays d’intervention.
- Références autorisées, livrables, résultats démontrables, logos et témoignages avec consentement.
- Coordonnées de contact actuellement publiées : email, téléphone et adresse à Dubaï.
- Responsable de traitement, hébergement, finalités, conservation et politique de confidentialité.
- Photos, captures réelles, vidéos et droits de diffusion.
- Choix linguistiques : traductions anglaises, sélecteur de langue, URLs localisées et relecture institutionnelle.

## G. Hors périmètre front-end

Pas de traitement de formulaire ni d’envoi d’email, pas de CMS ou de publication d’articles, pas de données réelles de surveillance, pas de carte connectée, pas d’authentification, pas de base de données, pas d’intégration CRM, pas d’outil de consentement ni de mécanisme de conformité produit. Les fonctions de formulaire et visuels présentés sont des démonstrations uniquement.

## H. Suite recommandée

1. Faire valider le positionnement et l’ordre des offres.
2. Réunir preuves, fiches produits, coordonnées légales et contenus institutionnels.
3. Confirmer le nom et le périmètre carbone avec revue juridique des affirmations.
4. Fournir logo, photos, captures produit et droits d’utilisation.
5. Finaliser les maquettes desktop/mobile, tester l’accessibilité et faire relire le français et l’anglais.
6. Extraire les composants Angular, raccorder le formulaire et le CMS aux services réellement retenus, puis contrôler performance, sécurité, SEO et analytics.
