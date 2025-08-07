# AI SaaS for Logistics

## Dependency Management

This project uses **Yarn** exclusively for installing dependencies. Do not use npm. To install dependencies, run:

```sh
yarn install
```

## Running the Project with Doppler

We use [Doppler](https://www.doppler.com/) for managing environment secrets. You must be authenticated with Doppler and have access to the correct project configuration.

### 1. Login to Doppler

If you haven't already, install the Doppler CLI ([installation guide](https://docs.doppler.com/docs/install-cli)).

Then, log in:

```sh
doppler login
```

This will open a browser window for authentication.

### 2. Project Access

You must be added to the correct SaaS project in Doppler. **Ask the CTO to add you to the SaaS project if you do not have access.**

### 3. Select Project and Config

```sh
doppler setup
```

Follow the prompts to select the project and environment (e.g., `dev`).

### 4. Run the Project

Run any command with Doppler to inject secrets:

```sh
doppler run -- yarn dev
```

Or for type checking:

```sh
doppler run -- yarn type-check
```

## Updating Supabase Types

When you make changes to tables in the **dev** project in Supabase, you need to update the generated types in your codebase. To do this:

1. Install the Supabase CLI if you haven't already:
   ```sh
   npm install -g supabase
   ```
2. Pull the latest types from your Supabase dev project:
   ```sh
   doppler run -- yarn db:types
   ```

## Documentation Links

- **Tailwind CSS:** [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Supabase Auth Helpers:** [https://supabase.com/docs/guides/auth/auth-helpers/nextjs](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)
- **Doppler CLI:** [https://docs.doppler.com/docs/install-cli](https://docs.doppler.com/docs/install-cli)
- **Supabase CLI:** [https://supabase.com/docs/guides/cli](https://supabase.com/docs/guides/cli)

---

If you have any issues with access or setup, please contact the CTO for assistance.
