import { test, expect } from '@playwright/test';

test('Render WeatherApp page', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.click('a:has-text("Explore the WeatherApp")');

  await page.waitForLoadState('networkidle', { timeout: 100000 });

  
  await expect(page.locator('.WeatherData')).toBeVisible();
  await expect(page.locator('.weather-image')).toBeVisible();
  await expect(page.locator('.description')).toBeVisible();
});
