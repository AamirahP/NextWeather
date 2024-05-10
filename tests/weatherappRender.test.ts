import { test, expect } from '@playwright/test';

test('Render WeatherApp page', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Click on the "Explore the WeatherApp" link
  await page.click('a:has-text("Explore the WeatherApp")');

  // Wait for navigation to complete
  await page.waitForNavigation();

  // Check if the URL is correct after navigation
  expect(page.url()).toContain('/main');

  // Wait for the elements to be visible with a longer timeout
  await expect(page.locator('.WeatherData')).toBeVisible({ timeout: 30000 });
  await expect(page.locator('.weather-image')).toBeVisible({ timeout: 30000 });
  await expect(page.locator('.description')).toBeVisible({ timeout: 30000 });
});

