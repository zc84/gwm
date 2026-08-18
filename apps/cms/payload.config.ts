import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig, type CollectionConfig, type GlobalConfig } from "payload";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
};

const Media: CollectionConfig = {
  slug: "media",
  upload: true,
  admin: {
    useAsTitle: "alt",
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "caption",
      type: "text",
      localized: true,
    },
  ],
};

const AiSettings: GlobalConfig = {
  slug: "ai-settings",
  label: "AI Settings",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "provider",
      type: "select",
      required: true,
      defaultValue: "openai",
      options: [
        { label: "OpenAI", value: "openai" },
        { label: "Azure OpenAI (future)", value: "azure-openai" },
        { label: "Local Ollama (future)", value: "ollama" },
      ],
    },
    {
      name: "model",
      type: "text",
      required: true,
      defaultValue: process.env.OPENAI_MODEL || "gpt-4.1-mini",
    },
    {
      name: "temperature",
      type: "number",
      min: 0,
      max: 2,
      defaultValue: Number(process.env.OPENAI_TEMPERATURE || 0.3),
    },
    {
      name: "maxTokens",
      type: "number",
      min: 1,
      max: 4000,
      defaultValue: Number(process.env.OPENAI_MAX_TOKENS || 800),
    },
    {
      name: "systemPrompt",
      type: "textarea",
      localized: true,
      defaultValue:
        "Answer as the GWM Middle East website assistant. Use only approved MVP knowledge sources and include concise source labels.",
    },
    {
      name: "features",
      type: "group",
      fields: [
        {
          name: "assistant",
          type: "checkbox",
          defaultValue: false,
        },
        {
          name: "contentGeneration",
          type: "checkbox",
          defaultValue: false,
        },
        {
          name: "translation",
          type: "checkbox",
          defaultValue: false,
        },
        {
          name: "seoGeneration",
          type: "checkbox",
          defaultValue: false,
        },
        {
          name: "imagePromptGeneration",
          type: "checkbox",
          defaultValue: false,
        },
      ],
    },
  ],
};

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media],
  globals: [AiSettings],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  editor: lexicalEditor(),
  localization: {
    locales: [
      { code: "en", label: "English" },
      { code: "ar", label: "Arabic", rtl: true },
    ],
    defaultLocale: "en",
    fallback: true,
  },
  secret: process.env.PAYLOAD_SECRET || "development-only-payload-secret",
  typescript: {
    outputFile: "payload-types.ts",
  },
});
