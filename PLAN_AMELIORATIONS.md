# Plan d'amélioration — ABET for Africa (10 jours)

> Objectif : appliquer le rapport d'analyse au site Angular existant en **10 jours ouvrés (2 semaines)**.
>
> Périmètre : dépôt `abet` (Angular 22, SPA statique déployée sur Vercel via `vercel.json`).
> Hypothèse : **1 développeur, J1 → J10**. La traduction anglaise complète, le CMS et l'auto-hébergement
> des polices restent en phase 2 (non datée) ; le SEO et les accréditations sont traités dans les 10 jours.
>
> Statut : **réponses provisoires reçues** — les décisions ci-dessous s'appliquent tout de suite et
> seront ajustées en cours de route si besoin (voir section 4 et `QUESTIONS_CLIENT.md`).

## Légende

- ✅ Décision provisoire intégrée aux tâches.
- ⛔ Point encore à confirmer / information manquante.
- ✅ Déjà fait dans le dépôt (à vérifier en recette, ne pas refaire).
- ⏭️ Reporté en phase 2.

---

## 1. Décisions provisoires intégrées

- ✅ **C1 (J1)** — Nom principal du site : **ABET for Africa**. Dénomination affichée : **Africa Blue Economy and Traffic Management LLC**. Sigle conservé : **ABETM**. Registre carbone : **Africa Blue & Green Environmental Registry** ⛔ sous réserve de confirmation. Langue : **Traffic** en anglais, **Trafic** en français.
- ✅ **C4 (J1)** — Ajouter uniquement **LinkedIn** dans le pied de page ; ni Facebook, ni Instagram, ni X. ⛔ URL officielle du compte LinkedIn à fournir.
- ✅ **C2 (J2)** — Formulaire : envoi à **contact@abetforafrica.com** via **Resend**, avec confirmation affichée après envoi. ⛔ Confirmer que cette boîte est la réception principale.
- ✅ **C5 (J3/J7)** — Créer les 3 pages légales avec **uniquement les informations juridiques officiellement fournies** ; ne publier **aucune accréditation sans justificatif**. ⛔ Documents juridiques et justificatifs d'accréditation à fournir.
- ✅ **C3 (J4)** — Page Équipe uniforme : photo, nom, fonction, courte biographie. ⛔ Liste des membres et photos à fournir.
- ✅ **C7 (J5)** — Grille des 6 partenaires avec logos cliquables et courte description de collaboration. ⛔ Confirmer que les 6 partenaires sont toujours officiels et fournir URLs/descriptions.
- ✅ **C6 (J6)** — Communication prudente : « intégrité absolue » → **« renforcement de l'intégrité des données »** ; « infalsifiable » → **« traçabilité sécurisée des données »** ; « conformité garantie » → **« accompagnement à la conformité réglementaire »**. Aucune précision chiffrée sans preuve.
- ✅ **C11 (J7)** — Marchés prioritaires : **maritime et portuaire**, **aérien et aéroportuaire**, **environnemental et carbone**. Clients cibles : gouvernements, autorités portuaires, autorités aéroportuaires, institutions publiques. Avantages : technologies intégrées, expertise multisectorielle, solutions adaptées aux enjeux africains. ⛔ Confirmer que ces priorités sont bien celles d'ABET.
- ✅ **C8 (phase 2)** — Version **/en**, sélecteur **FR / EN** dans le menu, traduction de toutes les pages (y compris légales), relecture avant publication. Traduction préparée par l'équipe projet, ⛔ validation finale par l'équipe ABET.
- ⛔ **C9 (phase 2)** — CMS : besoin, budget et hébergeur non précisés.
- ⛔ **C10 (J9 / phase 2)** — Domaine canonique, accès Search Console et autorisation d'auto-héberger les polices non précisés.

---

## 2. État des lieux express

### 2.1 Déjà en place ✅

| Point                                                                                                                          | Emplacement                                             |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| Pages dédiées : Accueil, À propos, IACD & EEZ Scanner, Registre carbone, Solutions, Domaines d'activités, Partenaires, Contact | `src/app/app.routes.ts:17-45`                           |
| Layout unique header + router-outlet + footer                                                                                  | `src/app/shared/layout/layout.component.html:1-7`       |
| Menu desktop **et** hamburger mobile, aucun `href="#"`                                                                         | `src/app/shared/header/header.component.{html,ts,scss}` |
| Un seul `<h1>` par page (8 templates)                                                                                          | `src/app/pages/**`                                      |
| Title/meta description/favicon/lang="fr"                                                                                       | `src/index.html`                                        |
| AOS installé, CSS local, initialisé après rendu + rafraîchi à la navigation                                                    | `angular.json`, `src/app/app.ts`                        |
| Fautes déjà corrigées : `Acceuil`, `palteforme`, `aéroportauires`, `objectif principale`, `Emirates Arabes Unies`              | —                                                       |
| Aucun émoji dans les intertitres                                                                                               | tous les templates                                      |
| Media queries mobile sur presque tous les composants                                                                           | `src/styles.scss`, `src/app/**/*.scss`                  |

### 2.2 Écarts réels à traiter 🔧 / ⏭️

| #   | Écart                                                                                                                              | Fichier(s)                                                                                                                                                 | Jour                                                |
| --- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| E1  | Envoi du formulaire en `mailto:` uniquement                                                                                        | `src/app/pages/contact/contact.component.ts:25`                                                                                                            | J2 ✅ C2                                            |
| E2  | `projets carbones`, `certification de carbones`                                                                                    | `about.component.html:44,85`, `home.component.html:29`, `services.component.html:27`                                                                       | J1                                                  |
| E3  | `Traffic` (anglais) / `trafic` mélangés                                                                                            | `about.component.html:3`, `contact.component.html:4`, `index.html:12`, `footer.component.html:9`                                                           | J1 ✅ C1                                            |
| E4  | Nom du registre carbone incohérent (figé en « Africa Blue Port and Airport Carbone Registry »)                                     | `app.routes.ts:27`, `footer.component.html:29`, `home.component.html:70,89`, `solutions.component.html:44,52`, `carbon-registry.component.html:3,22,68,79` | J1 ✅ C1 ⛔ confirmation                            |
| E5  | Signature `ABETM` dans le footer                                                                                                   | `footer.component.html:66`                                                                                                                                 | J1 ✅ C1 (sigle conservé)                           |
| E6  | `Accueil` commenté dans le menu                                                                                                    | `header.component.ts:15`                                                                                                                                   | J1                                                  |
| E7  | Aucun réseau social, aucun lien légal dans le footer                                                                               | `footer.component.html:64-68`                                                                                                                              | J1/J3 ✅ C4 ⛔ URL LinkedIn                         |
| E8  | Page Équipe absente                                                                                                                | —                                                                                                                                                          | J4 ✅ C3 ⛔ données                                 |
| E9  | Mentions légales / confidentialité / conditions d'utilisation absentes                                                             | —                                                                                                                                                          | J3 ✅ C5 ⛔ documents                               |
| E10 | Formules absolues : « intégrité absolue », « infalsifiable », « sans audits physiques », « conformité… garantie », « 100 % local » | `carbon-registry.component.html:43-52,95,112`, `solutions.component.html:64,86`                                                                            | J6 ✅ C6                                            |
| E11 | Partenaires non cliquables, pas de nature de collaboration, alt = nom seulement                                                    | `partner-grid.component.{ts,html}:3-29`                                                                                                                    | J5 ✅ C7 ⛔ données                                 |
| E12 | `alt=""` sur hero et cartes solution ; images de fond CSS sans alternative                                                         | `home.component.html:2`, `home-solution-card.component.html:15`, `*.scss`                                                                                  | J8                                                  |
| E13 | Règles postérieures écrasant le mobile du hero accueil                                                                             | `home.component.scss:281-284,301-305`                                                                                                                      | J8                                                  |
| E14 | Pas de `sitemap.xml`, ni `robots.txt`                                                                                              | `public/`                                                                                                                                                  | J9                                                  |
| E15 | Pas de sélecteur de langue, `hreflang`, ni traduction anglaise                                                                     | `index.html`, `app.config.ts`                                                                                                                              | ⏭️ Phase 2 (structure `hreflang` préparée J9) ✅ C8 |
| E16 | Aucun backend/CMS : contenu codé en dur                                                                                            | `src/app/**`                                                                                                                                               | ⏭️ Phase 2 ⛔ C9                                    |
| E17 | Polices Google chargées depuis un CDN externe                                                                                      | `index.html:14-19`                                                                                                                                         | ⏭️ Phase 2 ⛔ C10                                   |

---

## 3. Planning — 10 jours ouvrés

**Avancement : J1 à J10 terminés.** J1 : noms harmonisés (ABET for Africa / Africa Blue Economy and Traffic
Management LLC / ABETM), registre carbone renommé provisoirement en Africa Blue & Green
Environmental Registry, fautes `carbone` corrigées, `Accueil` réintégré au menu. Footer : bloc « Nous
suivre » avec logo officiel LinkedIn en SVG et lien temporaire `https://www.linkedin.com/` ;
Facebook, Instagram et X sont commentés dans `footer.component.ts` avec leurs logos et URLs à
remplacer par les profils officiels. En attente : voir `A_CONFIRMER.md`. J3 : 3 pages légales créées (`src/app/pages/legal/`), routes `/mentions-legales`, `/politique-de-confidentialite`, `/conditions-d-utilisation` et liens dans le footer. Informations manquantes déplacées dans `A_CONFIRMER.md`, aucune accréditation publiée. Build et Prettier OK. J4 : page `/equipe` créée avec une structure de cartes uniformes (photo / nom / fonction / courte biographie), masquée tant que les données ne sont pas fournies, ajoutée au menu et au footer. Build et Prettier OK. J5 : grille partenaires avec prise en charge des liens cliquables et des descriptions, sans avis visible ; recette de fin de semaine `build` + `format:check` OK. J6 : « À propos » réécrit en 3 blocs (_ce que nous faisons / pour qui / comment_) ; absolus et chiffres non prouvés supprimés dans `about`, `carbon-registry` et `solutions` ; reformulations C6 appliquées. Build et Prettier OK. J8 : surcharge du hero mobile corrigée dans `home.component.scss` (règles dupliquées déplacées avant les media queries), `data-aos` ajouté sur les sections clés, images décoratives conservées en `alt=""` et libellé d’accréditation adouci sur l’accueil. Build et `format:check` OK ; warning de budget SCSS toujours présent (829 octets). J7 : pages `solutions`, `maritime` et `carbon-registry` enrichies (marchés prioritaires, clients cibles, 3 avantages, fonctionnement, déploiement et cas d’usage) ; formulation Article 6 nuancée ; aucune accréditation revendiquée. J2 : formulaire de contact branché sur `/api/contact` avec Resend, `ReactiveFormsModule`, honeypot et statuts inline. J9 : descriptions uniques, canonical, robots, hreflang, `sitemap.xml` et `robots.txt`. J10 : recette `build`, `format:check` et `npm test -- --watch=false` OK ; budget de style composant ajusté à 6 kB dans `angular.json`. Toutes les informations en attente sont regroupées dans `A_CONFIRMER.md` et ne sont plus affichées sur le site.

### Semaine 1 — Immédiat (axes 1 et 5)

| Jour   | Actions                                                                                                                                                                                                                                                                                                                                                                                                       | Fichiers / livrable                                                                                                                       | Dépendance                     |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| **J1** | Corrections immédiates (E2-E6, E7 partiel) : nom principal **ABET for Africa**, dénomination **Africa Blue Economy and Traffic Management LLC**, sigle **ABETM** ; registre carbone **Africa Blue & Green Environmental Registry** (provisoire) ; `Traffic`/`Trafic` selon la langue ; fautes `carbone` ; réintégrer `Accueil` ; pied de page : signature ABETM + **LinkedIn** uniquement (⛔ URL à fournir). | `header.component.ts`, `footer.component.{html,scss}`, `about/home/services/solutions/carbon-registry` templates, `app.routes.ts` (titre) | ⛔ confirmation C1, URL C4     |
| **J2** | **Priorité 1** — formulaire (E1) : remplacer `mailto:` par un endpoint serverless avec **Resend** vers **contact@abetforafrica.com**, `ReactiveFormsModule`, honeypot anti-spam, confirmation après envoi, test réel. Variable `RESEND_API_KEY` et domaine d'envoi vérifié côté Vercel.                                                                                                                       | `contact.component.{ts,html,scss}`, endpoint `api/contact`, variables d'environnement                                                     | ⛔ confirmation C2             |
| **J3** | Créer les 3 pages légales (E9) : **Mentions légales**, **Politique de confidentialité**, **Conditions d'utilisation** ; routes + liens dans le footer (E7). Contenu limité aux informations juridiques officiellement fournies, champs manquants marqués « À compléter », **aucune accréditation sans justificatif**.                                                                                         | `src/app/pages/legal/*`, `app.routes.ts`, `footer.component.html`                                                                         | ⛔ documents C5                |
| **J4** | Créer la page Équipe (E8) : route `/equipe`, composant, cartes uniformes **photo / nom / fonction / courte biographie**, liens menu et footer. Mise en place de la structure avec placeholders tant que les données ne sont pas fournies.                                                                                                                                                                     | `src/app/pages/team/*`, `app.routes.ts`, `header/footer`, `public/` (photos)                                                              | ⛔ liste et photos C3          |
| **J5** | Partenaires (E11) : grille des **6 logos cliquables** avec `url`, courte description de la collaboration et `alt` améliorés ; vérifier que la liste est toujours officielle ; recette de fin de semaine (`build`, `format:check`, test manuel).                                                                                                                                                               | `partner-grid.component.{ts,html,scss}`, `partners.component.html`, `home.component.html`, `public/`                                      | ⛔ confirmation et contenus C7 |

### Semaine 2 — Crédibilité, fond et SEO (axes 2, 3, 4, 5, 6)

| Jour    | Actions                                                                                                                                                                                                                                                                                                                                                       | Fichiers / livrable                                                                                                | Dépendance              |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| **J6**  | Réécrire « À propos » en 3 blocs _ce que nous faisons / pour qui / comment_. Appliquer les reformulations validées : « renforcement de l'intégrité des données », « traçabilité sécurisée des données », « accompagnement à la conformité réglementaire » ; supprimer les autres absolus et ne publier aucun chiffre de précision sans preuve.                | `about.component.html`, `carbon-registry.component.html`, `solutions.component.html`                               | ✅ C6                   |
| **J7**  | Enrichir les pages produit : fonctionnement concret, étapes de déploiement, cas d'usage ; intégrer les **3 marchés prioritaires** (maritime/portuaire, aérien/aéroportuaire, environnement/carbone), les clients cibles et les 3 avantages validés. Bloc accréditations **uniquement si justificatif fourni** ; sinon décrire la démarche sans revendication. | `maritime.component.html`, `carbon-registry.component.html`, `solutions.component.html`, `public/` (justificatifs) | ⛔ C5, confirmation C11 |
| **J8**  | Rendu et accessibilité (E12, E13) : corriger les surcharges du hero mobile, tester 320/375/768/1024 px, vérifier hamburger et débordement horizontal, corriger les `alt` manquants, ajouter `data-aos` sur les sections clés.                                                                                                                                 | `home.component.scss`, `src/styles.scss`, `home.component.html`, `home-solution-card.component.html`, templates    | —                       |
| **J9**  | SEO (E14) : titles/meta uniques par route, `canonical`, meta robots, `sitemap.xml`, `robots.txt`, structure `hreflang` prête pour `/en`. Domaine canonique à confirmer avant publication.                                                                                                                                                                     | `app.routes.ts`, `src/index.html`, `public/sitemap.xml`, `public/robots.txt`                                       | ⛔ C10                  |
| **J10** | Recette finale et livraison : `npm run build`, `npm run format:check`, `npm test`, checklist complète (formulaire Resend, liens, mobile, SEO, pages), documentation de maintenance et bilan des axes 1 à 6.                                                                                                                                                   | Version finale + compte-rendu                                                                                      | —                       |

### Phase 2 — après J10 (non datée)

| Chantier                   | Actions                                                                                                                                                                                                                                                                        | Dépendance       |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| Internationalisation (E15) | Version **/en** avec sélecteur **FR / EN** dans le menu, traduction de toutes les pages **y compris les pages légales et les e-mails**, relecture avant publication (traduction préparée par l'équipe projet, validation ABET), activation des `hreflang` et `lang` dynamique. | ⛔ validation C8 |
| Dynamisation (E16)         | Cadrer le besoin (menu, partenaires, footer, domaines d'activité, formulaire), choisir CMS ou admin léger, modèle de contenu, migration des données.                                                                                                                           | ⛔ C9            |
| Finitions techniques (E17) | Auto-hébergement des polices, optimisation des images, budget SCSS (`home.component.scss` > 4 kB), Search Console.                                                                                                                                                             | ⛔ C10           |

### Continu (après J10)

| Fréquence   | Action                                                                                  | Axe  |
| ----------- | --------------------------------------------------------------------------------------- | ---- |
| Hebdo       | Corriger les fautes remontées, vérifier les liens et le formulaire                      | 5    |
| Mensuel     | Mettre à jour partenaires/équipe, contrôler accréditations et mentions légales          | 2, 4 |
| Trimestriel | Ajuster marchés prioritaires et arguments concurrentiels (axe 6), audit SEO/performance | 6    |

---

## 4. Suivi des réponses client

> Les questions complètes et les réponses provisoires sont dans `QUESTIONS_CLIENT.md`.
> Le détail des points à confirmer est regroupé dans `A_CONFIRMER.md` et n'est pas affiché sur le site.
> Statut : réponses reçues pour C1, C2, C3, C4, C5, C6, C7, C8 et C11 ; **en attente** pour C9 et C10.

- ⛔ **C1** — Noms provisoires appliqués au J1 ; confirmer le nom du registre carbone (« Africa Blue & Green Environmental Registry ») avant publication définitive.
- ⛔ **C4** — LinkedIn affiché avec un lien temporaire vers la page d'accueil de LinkedIn ; fournir l'URL du profil/company officielle pour remplacer `url` dans `socials` (`footer.component.ts`). Facebook, Instagram et X sont commentés avec des URLs génériques : fournir leurs profils officiels avant de les activer.
- ⛔ **C2** — Confirmer que `contact@abetforafrica.com` est la boîte principale ; fournir la clé API Resend et le domaine d'envoi vérifié.
- ⛔ **C5** — Pages légales créées sans champs visibles en attente ; fournir les documents juridiques (forme, immatriculation, siège, TVA, dirigeant, hébergeur, DPO, durée de conservation, droit applicable) et les justificatifs d'accréditation ; sans justificatif, aucune accréditation n'est publiée.
- ⛔ **C3** — Page Équipe créée avec une structure de cartes masquée ; fournir la liste des membres de l'équipe (nom, fonction, biographie) et les photos pour remplacer `src/app/pages/team/team.component.ts`.
- ⛔ **C7** — Grille prête pour les liens cliquables et les descriptions ; confirmer les 6 partenaires officiels et fournir leurs URL et descriptions de collaboration pour remplacer `partner-grid.component.ts`.
- ⛔ **C11** — Marchés, cibles et avantages provisoires intégrés aux pages produit ; confirmer les 3 marchés prioritaires, les cibles et les avantages retenus.
- ⛔ **C8** — Prévoir la validation finale de la traduction anglaise par l'équipe ABET.
- ⛔ **C9** — Préciser le besoin CMS, le budget et l'hébergeur.
- ⛔ **C10** — Confirmer le domaine canonique, donner l'accès Search Console et autoriser (ou non) l'auto-hébergement des polices.

Toute réponse reçue en cours de route met à jour la tâche correspondante (section 3) sans décaler le planning, sauf blocage majeur.

---

## 5. Critères d'acceptation

**Commandes avant livraison** :

```bash
npm run build
npm run format:check
npm test
```

- [ ] Aucun `href="#"` ; menu, footer et CTA mènent à une page ou section existante.
- [ ] Formulaire Resend : envoi réel à `contact@abetforafrica.com`, confirmation affichée, succès/erreur, pas de double envoi.
- [ ] Mobile 320/375/768 px : hamburger utilisable, pas de scroll horizontal, titres lisibles.
- [ ] Un seul `<h1>` par page, titre et meta description uniques.
- [ ] Images avec `alt` pertinent (décoratives : `alt=""`).
- [ ] Pages Équipe et légales accessibles ; 6 logos partenaires cliquables avec description.
- [ ] Noms cohérents : ABET for Africa / Africa Blue Economy and Traffic Management LLC / ABETM ; `Traffic` en anglais, `Trafic` en français ; registre carbone provisoire signalé comme tel.
- [ ] Aucune affirmation absolue ni chiffre de précision non justifié.
- [ ] `/sitemap.xml` et `/robots.txt` accessibles en production.

---

## 6. Risques

| Risque                                    | Impact                             | Parade                                                                                          |
| ----------------------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| Confirmations en attente (C1, C2, C4, C5) | J1-J3 incomplets                   | Appliquer les décisions provisoires ; marquer les champs manquants « À compléter »              |
| Boîte mail ou clé Resend non fournie      | Formulaire non fonctionnel         | Code prêt côté endpoint ; brancher la clé et le domaine vérifié dès réception                   |
| Accréditations non justifiées             | Risque réputationnel (axes 3 et 4) | Ne publier que la démarche, sans revendication, jusqu'au justificatif                           |
| Données équipe/partenaires manquantes     | Pages incomplètes                  | Structures en place avec placeholders, mise à jour sans recodage                                |
| Périmètre des 10 jours chargé             | Qualité réduite                    | Phase 2 strictement reportée (anglais, CMS, polices) ; pas de pages supplémentaires non prévues |
