import { test, expect, FrameLocator } from "@playwright/test";

test("Handle basic frame test", async ({ page }) => {
  await page.goto("https://app.thetestingacademy.com/playwright/frames/");

  let vehicleFrame: FrameLocator = await page.frameLocator("#frame-one");

  await vehicleFrame.locator("#RESULT_TextField-1").fill("Hyundai - Creta");
  await vehicleFrame.locator("#RESULT_TextField-2").fill("Umesh Kalyankar");
  await vehicleFrame.locator("#RESULT_TextField-3").fill("MH 26 DD 1234");
  //await vehicleFrame.locator("#RESULT_RadioButton-1").selectOption("SUV");
  await vehicleFrame.locator("#vehicle-submit").click();
  await vehicleFrame.getByText("SUV");
  await vehicleFrame.locator("#RESULT_TextField-4").fill("2026");
  await vehicleFrame
    .locator("#RESULT_TextArea-1")
    .fill("This is my car registration!");
  await vehicleFrame.getByTestId("vehicle-submit").click();
});
