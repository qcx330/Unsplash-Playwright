import strict from "assert/strict";
import { BrowserManager } from "../browser/browser-manager";

export class Element {
  private locator: string;

  constructor(locator: string) {
    this.locator = locator;
  }

  async click() {
    await (await this.waitForElementToBeVisible()).click();
  }

  async enter(value: string) {
    await (await this.waitForElementToBeVisible()).fill(value);
  }

  async select(value: string) {
    await (await this.waitForElementToBeVisible()).selectOption(value);
  }

  async hover() {
    await this.waitForElement({ state: "visible", timeout: 15000, strict: false });
    await BrowserManager.page.hover(this.locator);
  }

  async getText() {
    this.waitForElementToBeVisible();
    return (await BrowserManager.page.innerText(this.locator)).trim();
  }

  async waitForElement(options) {
    await BrowserManager.page.locator(this.locator).waitFor(options);
  }

  async scrollToElement(){
    await BrowserManager.page.locator(this.locator).scrollIntoViewIfNeeded();
  }

  async waitForElementToBeVisible() {
    await this.waitForElement({
      state: "visible",
      timeout: 15000,
      strict: false,
    });
    return BrowserManager.page.locator(this.locator);
  }

  async waitForElementToBeHidden() {
    await this.waitForElement({ state: "hidden" });
  }
  async isVisible() {
    try {
      await this.waitForElement({ state: "visible" });
      return await BrowserManager.page.locator(this.locator).isVisible();
    } catch {
      return false;
    }
  }
  async isClickable() {
    try {
      await this.waitForElement({ state: "visible", timeout: 15000 });
      return await BrowserManager.page.locator(this.locator).isEnabled();
    } catch {
      return false;
    }
  }
  async getAttribute(attribute: string) {
    await this.waitForElementToBeVisible();
    return await BrowserManager.page.getAttribute(this.locator, attribute);
  }
}
