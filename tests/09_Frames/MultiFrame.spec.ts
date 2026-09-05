import { test, expect, FrameLocator, Locator } from "@playwright/test";

test("Handle multiframe test", async ({ page }) => {
  await page.goto(
    "https://app.thetestingacademy.com/playwright/frames/multi-frames",
  );

  let mainFrame: FrameLocator = await page.frameLocator('[name="main"]');
  const headerText = await mainFrame
    .getByRole("heading", {
      name: "Main frame —",
    })
    .innerText();
  console.log(headerText);
  await expect(headerText).toContain("Main frame — practice playground");

  const allFrames: Locator[] = await page.locator("//frame").all();
  console.log("Total number of frames: " + allFrames.length);

  for (const frame of allFrames) {
    console.log(
      await frame.getAttribute("name"),
      ":",
      await frame.getAttribute("src"),
    );
  }
});
