import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'
import { devices as replayDevices } from '@replayio/playwright'

// See https://playwright.dev/docs/test-configuration#global-configuration
const config: PlaywrightTestConfig = {
  timeout: 90_000,
  expect: {
    timeout: 10 * 1000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chromium'] },
    },
    {
      name: 'replay-chromium',
      use: { ...(replayDevices['Replay Chromium'] as any) },
    },
  ],
  // Leaving this here to make debugging easier, by uncommenting
  // use: {
  //   launchOptions: {
  //     slowMo: 500,
  //     headless: false,
  //   },
  // },
}

export default config
