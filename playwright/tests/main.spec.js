const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Has title", async ({ page }) => {
  await expect(page).toHaveTitle(/Frontend Mentor/);
});

test("Daniel Clifford is here!", async ({ page }) => {
  await expect(page.getByAltText("daniel-avatar")).toBeVisible();
});
