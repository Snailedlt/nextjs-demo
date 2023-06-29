import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config();

export default {
  schema: "./db/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    connectionString: 'mysql://hdxuen9n0j12if6pbpqm:pscale_pw_CjckOkXJqGCCEGFz7vbtHmROuKQ40YvIxqUzwkbCJya@aws.connect.psdb.cloud/nexjs-example?ssl={"rejectUnauthorized":true}',
  },
} satisfies Config;
