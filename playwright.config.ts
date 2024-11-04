import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1: 1,
  workers: process.env.CI ? 10 : 5,
  reporter: [['html'], ['list'], ['junit', { outputFiles: 'test-results/junit-results.xml'}]],
  use: {
    trace: 'on',
    baseURL: "https://www.demoblaze.com",
    headless: false,
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'E-commerce Product Search',
      use: {
        ...devices['Desktop Chrome'],
      }
    }
  ]
})