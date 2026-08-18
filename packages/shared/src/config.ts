export type AiProvider = "openai" | "azure-openai" | "ollama";

export type FeatureFlags = {
  aiAssistantEnabled: boolean;
  staticRagEnabled: boolean;
};

export const mvpFeatureFlags: FeatureFlags = {
  aiAssistantEnabled: process.env.NEXT_PUBLIC_AI_ASSISTANT_ENABLED === "true",
  staticRagEnabled: process.env.NEXT_PUBLIC_STATIC_RAG_ENABLED !== "false",
};

export const aiDefaults = {
  provider: "openai" satisfies AiProvider,
  model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
  temperature: Number(process.env.OPENAI_TEMPERATURE || 0.3),
  maxTokens: Number(process.env.OPENAI_MAX_TOKENS || 800),
};
