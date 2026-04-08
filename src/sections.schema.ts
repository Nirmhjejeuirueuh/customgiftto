import { z } from "astro/zod";

export const sharedButton = z
  .object({
    enable: z.boolean().optional(),
    tag: z.enum(["a", "button"]).optional(),
    url: z.string().optional(),
    label: z.string(),
    class: z.string().optional(),
    rel: z.string().optional(),
    target: z.string().optional(),
    icon: z
      .object({
        enable: z.boolean().optional(),
        name: z.string(),
        position: z.enum(["left", "right"]).optional(),
      })
      .optional(),
    hoverEffect: z
      .enum(["text-flip", "creative-fill", "magnetic", "magnetic-text-flip"])
      .optional(),
    variant: z.enum(["fill", "outline", "text"]).optional(),
  })
  .passthrough();

export const sharedButtonTag = sharedButton.refine(
  (data) => data.tag !== "a" || !!data.url,
  {
    message: "`url` is required when `tag` is 'a'",
    path: ["url"],
  },
);

export const sharedContactItem = z.object({
  title: z.string(),
  icon: z.string(),
  description: z.string(),
  button: sharedButton.optional(),
});

export const ImagePositionEnum = z.enum(["left", "right"]);
export const AppearanceEnum = z.enum(["dark", "light"]);
export const button = sharedButton || sharedButtonTag;

export const videoConfigSchema = z.object({
  src: z.string(),
  type: z.string().optional(),
  provider: z.enum(["youtube", "vimeo", "html5"]).optional(),
  poster: z.string().optional(),
  autoplay: z.boolean().optional(),
  id: z.string().optional(),
});

export const inputFieldSchema = z.object({
  label: z.string().optional(),
  placeholder: z.string().optional(),
  required: z.boolean().optional(),
  halfWidth: z.boolean().optional(),
  defaultValue: z.string().optional(),
  name: z.string().optional(),
  selected: z.boolean().optional(),
  value: z.boolean().optional(),
  checked: z.boolean().optional(),
  type: z.enum(["text", "email", "radio", "checkbox"]).optional(),
  id: z.string().optional(),
  tag: z.literal("textarea").optional(),
  rows: z.string().optional(),
  group: z.string().optional(),
  groupLabel: z.string().optional(),
  items: z
    .array(
      z.object({
        label: z.string(),
        name: z.string().optional(),
        id: z.string().optional(),
        value: z.string().optional(),
        required: z.boolean().optional(),
        groupLabel: z.string().optional(),
        group: z.string().optional(),
        type: z.enum(["radio", "checkbox"]).optional(),
        halfWidth: z.boolean().optional(),
        defaultValue: z.string().optional(),
        checked: z.boolean().optional(),
      }),
    )
    .optional(),
  dropdown: z
    .object({
      type: z.enum(["select", "search"]).optional(),
      search: z
        .object({
          placeholder: z.string().optional(),
        })
        .optional(),
      items: z.array(
        z.object({
          label: z.string(),
          selected: z.literal(true),
          value: z.string(),
        }),
      ),
    })
    .optional(),
  content: z.string().optional(),
  note: z.enum(["info", "warning", "success", "deprecated", "hint"]).optional(),
  parentClass: z.string().optional(),
});
export const animatedNumber = z.object({
  type: z.string(),
  value: z.union([z.number(), z.string()]),
  prependValue: z.string(),
  appendValue: z.string().optional(),
});

// ================================================================================
// SECTIONS SCHEMA
// ================================================================================

// Pre-title schema
const announcementBar = z.object({
  label: z.string(),
  icon: z.string().optional(),
  url: z.string().optional(),
  avatars: z.array(z.string()).optional(),
});

// Extend the refined button (sharedButtonTag) to allow the extra video fields
const heroButtonVideoSchema = z.object({
  src: z.string(),
  type: z.string().optional(),
  provider: z.enum(["youtube", "vimeo", "html5"]).optional().default("youtube"),
  poster: z.string().optional(),
  autoplay: z.boolean().optional(),
  id: z.string().optional(),
});

// Extend the refined button (sharedButtonTag) to allow the extra video fields
const baseSharedButtonTag = (sharedButtonTag as z.ZodEffects<any>)._def.schema;
const heroButtonSchema = baseSharedButtonTag.extend({
  type: z.enum(["button", "video"]).optional(),
  video: heroButtonVideoSchema.optional(),
});

const heroLeftBlockSchema = z.object({
  enable: z.boolean().default(true),
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(),
  images: z.array(
    z.object({
      name: z.string(),
      image: z.string(),
    }),
  ),
});

const heroRightBlockSchema = z.object({
  enable: z.boolean().default(true),
  title: z.string(),
  description: z.string(),
  author: z.string(),
  icons: z.array(z.string()),
});

// Hero section schema
export const heroSectionSchema = z.object({
  enable: z.boolean().default(true),
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),
  imageFrame: z.string().optional(),
  lineShape: z.string().optional(),
  gradientLeft: z.string().optional(),
  gradientRight: z.string().optional(),
  announcementBar: announcementBar.optional(),
  leftBlock: heroLeftBlockSchema.optional(),
  rightBlock: heroRightBlockSchema.optional(),
  buttons: z.array(heroButtonSchema).optional(),
});

const popover = z.object({
  enable: z.boolean().default(false),
  title: z.string(),
  description: z.string(),
});
export const pricingSectionSchema = z
  .object({
    enable: z.boolean().default(false).optional(),
    title: z.string().optional(),
    pricingComparisonTitle: z.string().optional(),
    pricingComparisonTogglerLabel: z.string().optional(),
    plans: z
      .object({
        enable: z.boolean().default(true),
        list: z.array(
          z.object({
            selected: z.boolean().default(false),
            label: z.string(),
          }),
        ),
      })
      .optional(),
    list: z.array(
      z.object({
        enable: z.boolean().default(true),
        icon: z.string(),
        featured: z.boolean().default(false),
        featuresLabel: z.string(),
        badge: z
          .object({
            enable: z.boolean().default(false),
            label: z.string(),
            variant: z.enum(["popular", "new", "recommended"]).optional(),
          })
          .optional(),
        name: z.string(),
        description: z.string(),
        price: z
          .array(
            animatedNumber.merge(z.object({ typeAlternateValue: z.string() })),
          )
          .optional(),
        features: z.array(z.string()).optional(),
        button: button.optional(),
      }),
    ),
    comparison: z
      .array(
        z.object({
          label: z.string(),
          popover: popover.optional(),
          list: z.array(
            z.object({
              value: z.string(),
              showInCard: z.boolean(),
              included: z.array(z.union([z.boolean(), z.string()])),
              popover: popover.optional(),
            }),
          ),
        }),
      )
      .optional(),
  })
  .optional();

export const contactFormSchema = z.object({
  title: z.string().optional(),
  action: z.string().optional(),
  emailSubject: z.string().optional(),
  note: z.string().optional(),
  submitButton: z.object({
    label: z.string(),
  }),
  inputs: z.array(inputFieldSchema),
});

const FaqItem = z.object({
  active: z.boolean().default(false),
  title: z.string(),
  content: z.string(),
});

const faqCategorySchema = z.object({
  label: z.string(),
  list: z.array(FaqItem),
});

export const faqSectionSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  draft: z.boolean().default(false),
  button: sharedButton.optional(),
  showTitle: z.boolean().default(false),
  showCategories: z.boolean().default(false),
  list: z.array(faqCategorySchema),
});

export const contactSectionSchema = z
  .object({
    enable: z.boolean().default(false),
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    contactInformation: z.array(sharedContactItem),
    form: contactFormSchema,
    testimonial: z.object({
      enable: z.boolean().default(true),
      content: z.string().optional(),
      customer: z.object({
        avatar: z.string(),
        name: z.string(),
        role: z.string(),
      }),
    }),
    list: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      }),
    ),
  })
  .optional();

export const featuresSectionSchema = z
  .object({
    enable: z.boolean().default(false).optional(),
    title: z.string().optional(),
    featureListLimit: z.number().optional(),
    list: z.array(
      z.object({
        image: z.string().optional(),
        title: z.string(),
        description: z.string(),
        halfWidth: z.boolean(),
        icon: z.string().optional(),
        alternativeDirection: z.boolean(),
      }),
    ),
  })
  .optional();

export const insightsSectionSchema = z
  .object({
    enable: z.boolean().default(false).optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    button: sharedButton.optional(),
    list: z.array(
      z.object({
        icon: z.string().optional(),
        title: z.string(),
        stats: animatedNumber.optional(),
        description: z.string(),
      }),
    ),
  })
  .optional();

export const featuresSectionThreeSchema = z.object({
  enable: z.boolean().default(true),
  items: z.array(
    z.object({
      image: z.string().url(), // path to image

      // layout: image on left or right
      imagePosition: z.enum(["left", "right"]).default("left"),
      imageHeight: z.number().optional(),

      title: z.string(),
      description: z.string(),
      button: sharedButton.optional(),
      list: z.array(z.string()),
      features: z.array(z.string().optional()).optional(),
      stats: z.array(
        z.object({ label: z.string(), value: z.string() }).optional(),
      ),
    }),
  ),
});

export const howItWorksSectionSchema = z
  .object({
    enable: z.boolean().default(false).optional(),
    title: z.string().optional(),
    list: z.array(
      z.object({
        step: z.string(),
        title: z.string(),
        description: z.string(),
        button: sharedButton,
      }),
    ),
  })
  .optional();

export const benefitsSectionSchema = z
  .object({
    enable: z.boolean().default(false).optional(),
    title: z.string().optional(),
    benefits: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      }),
    ),
  })
  .optional();

export const teamSectionSchema = z
  .object({
    enable: z.boolean().default(false).optional(),
    title: z.string().optional(),
    list: z.array(
      z.object({
        name: z.string(),
        image: z.string(),
        role: z.string(),
      }),
    ),
  })
  .optional();

export const testimonialSectionSchema = z
  .object({
    enable: z.boolean().default(true).optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    limit: z.union([z.number(), z.literal(false)]),
    button: sharedButton.optional(),
    list: z
      .array(
        z.object({
          enable: z.boolean().default(true).optional(),
          content: z.string(),
          rating: z.number().min(1).max(5).optional(),
          platform: z
            .object({
              name: z.string(),
              icon: z.string(),
            })
            .optional(),
          customer: z.object({
            name: z.string(),
            role: z.string(),
            avatar: z.string().optional(),
            company: z.string().optional(),
            companyLogo: z.string().optional(),
          }),
        }),
      )
      .optional(),
  })
  .optional();

export const aboutSectionSchema = z.object({
  enable: z.boolean().default(false),
  title: z.string(),
  description: z.string(),
  image: z.string().url(),
  ctaBlock: z.object({
    title: z.string(),
    description: z.string(),
    button: sharedButton,
  }),
});

const statsItemSchema = z.object({
  title: animatedNumber.optional(),
  description: z.string().optional(),
  icons: z.array(z.string()).optional(),
  bgPattern: z.string().url().optional(),
  buttons: z.array(button.merge(z.object({ image: z.string() }))).optional(),
  avatars: z.array(z.string().url()).optional(),
  caption: z.string().optional(),
});

export const statsSectionSchema = z
  .object({
    enable: z.boolean().default(true),
    title: z.string(),
    description: z.string().optional(),
    list: z.array(statsItemSchema).min(1, "At least one stat item is required"),
  })
  .optional();

export const featuresThreeSchema = z
  .object({
    enable: z.boolean().default(false).optional(),
    title: z.string().optional(),
    image: z.string().optional(),
    imageFrame: z.string().optional(),
    description: z.string().optional(),
    list: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
  })
  .optional();

export const sectionsSchema = {
  contactSection: contactSectionSchema,
  statsSection: statsSectionSchema,
  teamSection: teamSectionSchema,
  testimonialSectionSchema,
  pricingSectionSchema,
  heroSectionSchema,
  featuresSectionSchema,
  featuresSectionThreeSchema,
  howItWorksSectionSchema,
  faqSectionSchema,
  aboutSectionSchema,
  insightsSectionSchema,
};
