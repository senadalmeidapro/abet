import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env['RESEND_API_KEY']);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée.' });
  }

  const { name, email, phone, subject, message, website } = req.body ?? {};

  if (typeof website === 'string' && website.trim()) {
    return res.status(200).json({ success: true });
  }

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof subject !== 'string' ||
    typeof message !== 'string' ||
    (typeof phone !== 'string' && typeof phone !== 'undefined') ||
    !name.trim() ||
    !subject.trim() ||
    !message.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return res.status(400).json({ error: 'Veuillez vérifier les informations saisies.' });
  }

  if (
    name.length > 120 ||
    email.length > 254 ||
    (phone?.length ?? 0) > 40 ||
    subject.length > 200 ||
    message.length > 10000
  ) {
    return res.status(400).json({ error: 'Le contenu du formulaire est trop long.' });
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env['RESEND_FROM'] ?? 'ABET Website <notifications@abetforafrica.com>',
      to: ['contact@abetforafrica.com'],
      replyTo: email.trim(),
      subject: `Message du site ABET : ${subject.trim()}`,
      text: [
        `Nom : ${name.trim()}`,
        `Email : ${email.trim()}`,
        `Téléphone : ${phone?.trim() || 'Non renseigné'}`,
        `Sujet : ${subject.trim()}`,
        '',
        'Message :',
        message.trim(),
      ].join('\n'),
    });

    if (error) {
      console.error('Resend:', error);
      return res.status(500).json({ error: "Impossible d'envoyer votre message." });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact API:', error);
    return res.status(500).json({ error: 'Une erreur est survenue.' });
  }
}
