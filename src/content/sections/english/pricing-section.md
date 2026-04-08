---
enable: true
title: "Simple, Transparent **Pricing**"
description: "No hidden fees, no surprises — just clear, flexible pricing designed to <br /> help you manage your finances with confidence."

pricingComparisonTitle: ""
pricingComparisonTogglerLabel: "Select preferred billing cycle"

plans:
  enable: true
  list:
    - selected: true
      label: Monthly
    - selected: false
      label: Yearly

list:
  # Basic Plan
  - enable: true
    icon: "/images/icons/svg/crown.svg"
    featured: false
    featuresLabel: "What's Included:"
    badge:
      enable: false
      label: "New"
      variant: "new" # Options: "popular", "new", "recommended"
    name: Basic
    description: Perfect for smaller teams & startups

    price:
      - type: Monthly
        typeAlternateValue: "Per user/month, billed monthly"
        prependValue: $
        value: 29
        appendValue:
      - type: Yearly
        typeAlternateValue: "Per user/year, billed yearly"
        prependValue: $
        value: 49
        appendValue:

    button:
      enable: true
      label: Start Free Trial
      url: https://dash.example.com/signup/?plan=starterb
      rel:
      target:
      variant: "outline"
      hoverEffect: "text-flip"

  # Pro Plan
  - enable: true
    icon: "/images/icons/svg/crown.svg"
    featured: true
    featuresLabel: "What's Included:"
    badge:
      enable: true
      label: "Popular"
      variant: "popular" # Options: "popular", "new", "recommended"
    name: Pro
    description: Perfect for smaller teams & startups

    price:
      - type: Monthly
        typeAlternateValue: "Per user/month, billed monthly"
        prependValue: $
        value: 79
        appendValue:
      - type: Yearly
        typeAlternateValue: "Per user/year, billed yearly"
        prependValue: $
        value: 89
        appendValue:

    button:
      enable: true
      label: Start Free Trial
      url: https://dash.example.com/signup/?plan=growth
      rel:
      target:
      variant: "fill"
      hoverEffect: "text-flip"

  # Enterprise Plan
  - enable: true
    icon: "/images/icons/svg/crown.svg"
    featured: false
    featuresLabel: "What's Included:"
    badge:
      enable: false
      label: "Recommended"
      variant: "recommended" # Options: "popular", "new", "recommended"
    name: Enterprise
    description: Perfect for smaller teams & startups

    price:
      - type: Monthly
        typeAlternateValue: "Per user/month, billed monthly"
        prependValue: $
        value: 99
        appendValue:
      - type: Yearly
        typeAlternateValue: "Per user/year, billed yearly"
        prependValue: $
        value: 199
        appendValue:

    button:
      enable: true
      label: Contact Sales
      url: /contact/?plan=enterprise
      rel:
      target:
      variant: "outline"
      hoverEffect: "text-flip"

# Pricing Comparison & Features
comparison:
  - label: Core Features
    popover:
      enable: true
      title: "Core Features Explained"
      description: "Essential features that power your daily operations, including team collaboration, storage, and API access."
    list:
      - value: Team Members
        showInCard: true
        included:
          - "Up to 5 users"
          - "Up to 25 users"
          - "Unlimited users"
      - value: Storage Space
        showInCard: true
        popover:
          enable: true
          title: "Storage Explained"
          description: "Storage space for your team's files, including documents, images, and videos."
        included:
          - "10GB"
          - "100GB"
          - "Unlimited"
      - value: API Calls Monthly
        showInCard: false
        included:
          - "1,000 calls"
          - "10,000 calls"
          - "Unlimited"
      - value: Mobile App Access
        showInCard: false
        included:
          - true
          - true
          - true

  - label: Analytics and Reporting
    popover:
      enable: true
      title: "Analytics Suite"
      description: "Gain insights into your business with our comprehensive analytics tools, from basic metrics to advanced enterprise reporting."
    list:
      - value: Basic Analytics
        showInCard: true
        included:
          - true
          - true
          - true
      - value: Advanced Reports
        showInCard: true
        included:
          - false
          - true
          - true
      - value: Custom Dashboard Builder
        showInCard: false
        included:
          - false
          - true
          - true
      - value: Enterprise Reporting
        showInCard: false
        included:
          - false
          - false
          - true

  - label: Integrations and Automation
    popover:
      enable: true
      title: "Integrations & Workflows"
      description: "Connect with your favorite tools and automate repetitive tasks to boost productivity across your team."
    list:
      - value: Standard Integrations
        showInCard: true
        included:
          - "10+ integrations"
          - "50+ integrations"
          - "Custom integrations"
      - value: Automation Workflows
        showInCard: false
        included:
          - false
          - true
          - true
      - value: A/B Testing
        showInCard: false
        included:
          - false
          - true
          - true
      - value: Custom Development
        showInCard: false
        included:
          - false
          - false
          - true

  - label: Support and Security
    popover:
      enable: true
      title: "Support & Security"
      description: "Get the help you need when you need it, with enterprise-grade security features to protect your data."
    list:
      - value: Email Support
        showInCard: false
        included:
          - "24-48h response"
          - "4-8h response"
          - "1h response"
      - value: Priority Support
        showInCard: false
        included:
          - false
          - true
          - true
      - value: Dedicated Account Manager
        showInCard: false
        included:
          - false
          - false
          - true
      - value: Enterprise Security (SSO/SAML)
        showInCard: false
        included:
          - false
          - false
          - true
      - value: SLA Guarantee
        showInCard: false
        included:
          - false
          - false
          - "99.9% uptime"
      - value: Compliance (SOC2, GDPR)
        showInCard: false
        included:
          - false
          - false
          - true

  - label: Customization and Branding
    popover:
      enable: false
      title: ""
      description: ""
    list:
      - value: White-label Options
        showInCard: false
        included:
          - false
          - "Basic branding"
          - "Full white-label"
      - value: Custom Onboarding
        showInCard: false
        included:
          - false
          - false
          - true
      - value: Training and Workshops
        showInCard: false
        included:
          - false
          - "Self-service"
          - "Dedicated training"
---
