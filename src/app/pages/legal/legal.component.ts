import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type LegalSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
};

type LegalPage = {
  title: string;
  lead: string;
  sections: LegalSection[];
};

const legalPages: Record<string, LegalPage> = {
  'mentions-legales': {
    title: 'Mentions légales',
    lead: 'Informations relatives à l’éditeur du site et à son hébergement.',
    sections: [
      {
        heading: 'Éditeur du site',
        paragraphs: [
          'Nom commercial : ABET for Africa.',
          'Dénomination sociale : Africa Blue Economy and Traffic Management LLC.',
          'Sigle : ABETM.',
          'Adresse de contact : Nad Al Sheba, Meydan City, Dubaï, Émirats arabes unis.',
          'Téléphone : (+971) 585-778-337.',
          'Adresse électronique : contact@abetforafrica.com.',
        ],
      },
      {
        heading: 'Propriété intellectuelle',
        paragraphs: [
          'Les textes, images, logos et autres éléments du site sont protégés. Leur reproduction, totale ou partielle, nécessite une autorisation préalable d’ABET for Africa.',
        ],
      },
      {
        heading: 'Responsabilité',
        paragraphs: [
          'Les informations publiées sur ce site sont fournies à titre informatif et peuvent être modifiées. ABET for Africa ne peut garantir l’absence d’erreur ou d’omission.',
        ],
      },
    ],
  },
  'politique-de-confidentialite': {
    title: 'Politique de confidentialité',
    lead: 'Traitement des données personnelles collectées via le formulaire de contact.',
    sections: [
      {
        heading: 'Données collectées',
        paragraphs: [
          'Le formulaire de contact recueille les informations suivantes : nom et prénom, adresse électronique, numéro de téléphone, objet et message.',
        ],
      },
      {
        heading: 'Finalité du traitement',
        paragraphs: [
          'Ces données sont utilisées pour traiter les demandes adressées à ABET for Africa et y répondre.',
        ],
      },
      {
        heading: 'Destinataires',
        paragraphs: ['Les messages sont adressés à contact@abetforafrica.com.'],
      },
      {
        heading: 'Vos droits',
        paragraphs: [
          'Vous pouvez demander l’accès, la rectification, l’effacement ou la limitation du traitement de vos données, ainsi que vous y opposer, en écrivant à contact@abetforafrica.com.',
        ],
      },
      {
        heading: 'Cookies et services tiers',
        paragraphs: [
          'Le site n’utilise pas de cookies publicitaires. Il intègre des vidéos hébergées par YouTube en mode confidentialité renforcée et charge des polices depuis Google Fonts ; ces services peuvent traiter certaines données techniques.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Pour toute question relative à la protection de vos données, écrivez à contact@abetforafrica.com.',
        ],
      },
    ],
  },
  'conditions-d-utilisation': {
    title: 'Conditions d’utilisation',
    lead: 'Conditions d’accès et d’utilisation du site ABET for Africa.',
    sections: [
      {
        heading: 'Objet',
        paragraphs: [
          'Ce site présente les activités, les solutions et les partenaires d’ABET for Africa. Il est destiné à un public d’États, d’institutions et d’acteurs privés.',
        ],
      },
      {
        heading: 'Utilisation autorisée',
        paragraphs: [
          'Vous pouvez consulter, imprimer et partager les pages du site à condition de ne pas modifier les informations ni de les utiliser à des fins commerciales sans autorisation.',
        ],
      },
      {
        heading: 'Contenus',
        paragraphs: [
          'Les informations sont fournies à titre indicatif et peuvent évoluer. Elles ne constituent pas un engagement contractuel.',
        ],
      },
      {
        heading: 'Liens externes',
        paragraphs: [
          'Certains liens renvoient vers des sites tiers dont ABET for Africa ne contrôle pas le contenu ni la politique de confidentialité.',
        ],
      },
      {
        heading: 'Modifications',
        paragraphs: [
          'ABET for Africa peut modifier les présentes conditions à tout moment. La version publiée sur cette page fait foi.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Pour toute question sur l’utilisation du site, écrivez à contact@abetforafrica.com.',
        ],
      },
    ],
  },
};

@Component({
  selector: 'app-legal',
  standalone: true,
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss',
})
export class LegalComponent {
  private readonly route = inject(ActivatedRoute);

  readonly page: LegalPage =
    legalPages[this.route.snapshot.data['page'] as string] ?? legalPages['mentions-legales'];
}
