import { type Config } from "drizzle-kit";

import { env } from "~/env";

const databaseUrl = (process.env.NODE_ENV as 'docker' | 'debug' | 'test' | 'production') === 'docker' ? env.DATABASE_URL : env.DEVEL_DATABASE_URL;

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
  tablesFilter: ["t3-drizzle_*"],
} satisfies Config;
