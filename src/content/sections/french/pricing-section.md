---
enable: true
title: "Tarification simple et transparente"
description: "Pas de frais cachés, pas de surprises — juste des prix clairs et flexibles pour <br /> gérer vos finances en toute confiance."

pricingComparisonTitle: ""
pricingComparisonTogglerLabel: "Choisir le cycle de facturation"

plans:
  enable: true
  list:
    - selected: true
      label: Mensuel
    - selected: false
      label: Annuel

list:
  - enable: true
    icon: "/images/icons/svg/crown.svg"
    featured: false
    featuresLabel: "Inclus :"
    badge:
      enable: false
      label: "Nouveau"
      variant: "new"
    name: Basique
    description: Idéal pour les petites équipes et startups

    price:
      - type: Mensuel
        typeAlternateValue: "Par utilisateur/mois, facturé mensuellement"
        prependValue: $
        value: 29
        appendValue:
      - type: Annuel
        typeAlternateValue: "Par utilisateur/an, facturé annuellement"
        prependValue: $
        value: 49
        appendValue:

    button:
      enable: true
      label: Commencer l’essai gratuit
      url: ""
      rel:
      target:
      variant: "outline"
      hoverEffect: "text-flip"

  - enable: true
    icon: "/images/icons/svg/crown.svg"
    featured: true
    featuresLabel: "Inclus :"
    badge:
      enable: true
      label: "Populaire"
      variant: "popular"
    name: Pro
    description: Idéal pour les petites équipes et startups

    price:
      - type: Mensuel
        typeAlternateValue: "Par utilisateur/mois, facturé mensuellement"
        prependValue: $
        value: 79
        appendValue:
      - type: Annuel
        typeAlternateValue: "Par utilisateur/an, facturé annuellement"
        prependValue: $
        value: 89
        appendValue:

    button:
      enable: true
      label: Commencer l’essai gratuit
      url: ""
      rel:
      target:
      variant: "fill"
      hoverEffect: "text-flip"

  - enable: true
    icon: "/images/icons/svg/crown.svg"
    featured: false
    featuresLabel: "Inclus :"
    badge:
      enable: false
      label: "Recommandé"
      variant: "recommended"
    name: Entreprise
    description: Idéal pour les petites équipes et startups

    price:
      - type: Mensuel
        typeAlternateValue: "Par utilisateur/mois, facturé mensuellement"
        prependValue: $
        value: 99
        appendValue:
      - type: Annuel
        typeAlternateValue: "Par utilisateur/an, facturé annuellement"
        prependValue: $
        value: 199
        appendValue:

    button:
      enable: true
      label: Contacter les ventes
      url: /contact/?plan=enterprise
      rel:
      target:
      variant: "outline"
      hoverEffect: "text-flip"

comparison:
  - label: Fonctionnalités principales
    popover:
      enable: true
      title: "Fonctions principales expliquées"
      description: "Fonctions essentielles pour vos opérations quotidiennes, y compris collaboration, stockage et accès API."
    list:
      - value: Membres de l’équipe
        showInCard: true
        included:
          - "Jusqu’à 5 utilisateurs"
          - "Jusqu’à 25 utilisateurs"
          - "Utilisateurs illimités"
      - value: Espace de stockage
        showInCard: true
        popover:
          enable: true
          title: "Stockage expliqué"
          description: "Espace pour les fichiers de votre équipe, documents, images et vidéos."
        included:
          - "10 Go"
          - "100 Go"
          - "Illimité"
      - value: Appels API mensuels
        showInCard: false
        included:
          - "1 000 appels"
          - "10 000 appels"
          - "Illimité"
      - value: Accès application mobile
        showInCard: false
        included:
          - true
          - true
          - true

  - label: Analyses et rapports
    popover:
      enable: true
      title: "Suite analytique"
      description: "Obtenez des insights sur votre activité grâce à nos outils d’analyse, des métriques de base aux rapports avancés."
    list:
      - value: Analyses de base
        showInCard: true
        included:
          - true
          - true
          - true
      - value: Rapports avancés
        showInCard: true
        included:
          - false
          - true
          - true
      - value: Créateur de tableaux de bord
        showInCard: false
        included:
          - false
          - true
          - true
      - value: Rapports entreprise
        showInCard: false
        included:
          - false
          - false
          - true

  - label: Intégrations et automatisation
    popover:
      enable: true
      title: "Intégrations & workflows"
      description: "Connectez vos outils préférés et automatisez les tâches répétitives pour booster la productivité."
    list:
      - value: Intégrations standards
        showInCard: true
        included:
          - "10+ intégrations"
          - "50+ intégrations"
          - "Intégrations personnalisées"
      - value: Workflows automatisés
        showInCard: false
        included:
          - false
          - true
          - true
      - value: Tests A/B
        showInCard: false
        included:
          - false
          - true
          - true
      - value: Développement personnalisé
        showInCard: false
        included:
          - false
          - false
          - true

  - label: Support et sécurité
    popover:
      enable: true
      title: "Support & sécurité"
      description: "Obtenez de l’aide quand vous en avez besoin, avec des fonctionnalités de sécurité de niveau entreprise."
    list:
      - value: Support email
        showInCard: false
        included:
          - "Réponse 24-48h"
          - "Réponse 4-8h"
          - "Réponse 1h"
      - value: Support prioritaire
        showInCard: false
        included:
          - false
          - true
          - true
      - value: Gestionnaire de compte dédié
        showInCard: false
        included:
          - false
          - false
          - true
      - value: Sécurité entreprise (SSO/SAML)
        showInCard: false
        included:
          - false
          - false
          - true
      - value: Garantie SLA
        showInCard: false
        included:
          - false
          - false
          - "99,9% disponibilité"
      - value: Conformité (SOC2, RGPD)
        showInCard: false
        included:
          - false
          - false
          - true

  - label: Personnalisation et branding
    popover:
      enable: false
      title: ""
      description: ""
    list:
      - value: Options marque blanche
        showInCard: false
        included:
          - false
          - "Branding de base"
          - "Marque blanche complète"
      - value: Onboarding personnalisé
        showInCard: false
        included:
          - false
          - false
          - true
      - value: Formations et ateliers
        showInCard: false
        included:
          - false
          - "Auto-formation"
          - "Formation dédiée"
---
