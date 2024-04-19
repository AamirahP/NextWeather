import { test, expect } from '@playwright/test';

test('Render main page', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page.locator('.header')).toBeVisible();

  await expect(page.locator('.Paragraph')).toBeVisible();

  await expect(page.locator('.SpecialText')).toBeVisible();

  await expect(page.locator('a:has-text("Explore the WeatherApp")')).toBeVisible();
});
