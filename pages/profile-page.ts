import { Page } from "@playwright/test";
import { Element } from "../core/element/element"
import { BasePage } from "./base-page"

export class ProfilePage extends BasePage {
    private _btnMoreActions: Element = new Element("button[title='More Actions']");
    private _btnFollow: Element = new Element("button[role='menuitem']");
    private _btnEditProfile: Element = new Element("//a[contains(text(),'Edit profile')]");
    private _tabLikes: Element = new Element("//a[contains(text(), 'Likes')]");
    private _lblFullName(fullName: string): Element {
        return new Element(`//div[contains(text(), '${fullName}')]`);
    }
    async clickMoreActionButton(): Promise<void>{
        await this._btnMoreActions.scrollToElement();
        var state = await this._btnMoreActions.getAttribute("aria-expanded")
        if (await state == 'false'){
            await this._btnMoreActions.click();
        }
    }
    async followUser(): Promise<void> {
        await this.clickMoreActionButton();
        await this._btnFollow.scrollToElement();
        await this._btnFollow.click();
    }
    async isFollowed(): Promise<boolean> {
        await this.clickMoreActionButton();
        const buttonText = await this._btnFollow.getText() || '';
        return buttonText.includes("Unfollow");
    }
    async unfollowUser() {
        await this.clickMoreActionButton();
        await this.isFollowed();
        await this._btnFollow.click();
    }

    async goToEditProfile(): Promise<void> {
        await this._btnEditProfile.click();
    }
    async isFullNameCorrect(fullname: string): Promise<boolean> {
        return await this._lblFullName(fullname).isVisible();
    }
    async isPhotoLiked(likedPhotos: string[]): Promise<boolean>{

        await this._tabLikes.click();
        for (const altText of likedPhotos) {
            const photoElement = new Element(`img[alt="${altText}"]`);
            if (!await photoElement.isVisible()) {
                return false;
            }
        }
        return true;
    }
}