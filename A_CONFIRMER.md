# Informations à confirmer — ABET for Africa

Ce fichier regroupe toutes les remarques, décisions provisoires et données en attente. Ces informations ne doivent pas être affichées sur le site ni dans l’interface.

## Blocages techniques

- **J2 / Resend** — Fournir `RESEND_API_KEY` dans l’environnement Vercel, confirmer le domaine d’envoi vérifié et l’adresse `from` utilisée dans `api/contact.ts`. Destinataire prévu : `contact@abetforafrica.com`. Tester un envoi réel après configuration. Ne jamais committer `.env.local` (désormais ignoré par Git).
- **J9 / domaine canonique** — Confirmer le domaine officiel (C10) utilisé dans `src/app/core/seo.config.ts`, `public/sitemap.xml` et `public/robots.txt`. Valeur provisoire : `https://abetforafrica.com`, déduite de l’adresse email. À remplacer si le domaine retenu est différent.
- **J10 / recette** — Relancer la recette finale après réception des éléments ci-dessus : `npm run build`, `npm run format:check`, `npm test`.

## Données client en attente

- **C1** — Confirmer le nom officiel du registre carbone. Valeur provisoire affichée : `Africa Blue & Green Environmental Registry`.
- **C2** — Confirmer l’adresse de réception et la clé Resend (voir blocage J2).
- **C3** — Fournir la liste des membres de l’équipe : nom, fonction, courte biographie, photo haute définition et autorisation de publication. Remplacer `src/app/pages/team/team.component.ts`. Le composant est prêt : la section reste masquée tant que le tableau est vide.
- **C4** — Fournir l’URL définitive du profil ou de la page entreprise LinkedIn, puis les URLs officielles de Facebook, Instagram et X si ces réseaux doivent être activés. Remplacer les entrées de `src/app/shared/footer/footer.component.ts`. Lien temporaire actuel : `https://www.linkedin.com/`.
- **C5** — Fournir les documents juridiques : forme juridique, numéro d’immatriculation, siège social, TVA, dirigeant, hébergeur, DPO, durée de conservation des données et droit applicable. Compléter `src/app/pages/legal/legal.component.ts`. Aucune accréditation ne doit être publiée sans justificatif.
- **C7** — Confirmer que les six partenaires affichés sont toujours officiels. Recherche web effectuée et descriptions/URLs provisoires renseignées dans `src/app/core/i18n/translations.ts` (section `partners.items`). À valider par le client : identité exacte de `HAIRUN` (HaiRun Technology Madagascar retenu à titre provisoire), URL officielle de `Best For Africa Group` (LinkedIn utilisé en fallback), URLs/nature officielle de collaboration pour `TOGO` et `RDC`, et libellés finaux validés.
- **C9** — Confirmer le besoin CMS, le budget, l’hébergeur et les polices souhaitées. Sans retour, le site reste statique avec Angular + polices Google Fonts.
- **C10** — Confirmer le domaine canonique, les accès Search Console et la liste des domaines à référencer (voir blocage J9).
- **C11** — Confirmer les trois marchés prioritaires, les clients cibles et les trois avantages retenus, déjà intégrés à titre provisoire dans `solutions`, `maritime` et `carbon-registry`.

## Décisions provisoires déjà appliquées

- Nom principal : `ABET for Africa` ; dénomination : `Africa Blue Economy and Traffic Management LLC` ; sigle conservé : `ABETM`.
- Langue : conserver `Traffic` en anglais et `Trafic` en français.
- Registre carbone : `Africa Blue & Green Environmental Registry` (à confirmer, voir C1).
- Formulations validées : `renforcement de l’intégrité des données`, `traçabilité sécurisée des données`, `accompagnement à la conformité réglementaire`.
- Aucun chiffre de précision, aucune accréditation et aucune garantie absolue ne doivent être publiés sans preuve.

## Contrôles à effectuer après réception

- Vérifier les trois pages légales avec les documents C5.
- Vérifier le rendu de la page Équipe avec les photos C3.
- Vérifier les six liens partenaires et les descriptions C7.
- Vérifier l’envoi réel du formulaire et la réception dans la boîte C2.
- Vérifier le canonical, le sitemap, `robots.txt` et les balises hreflang avec le domaine C10.
