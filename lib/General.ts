import { global } from "./Global";

export class general extends global
{
async openApplication()
{
await this.page.goto(this.url);
console.log("Application opened successfully")
}

async logindata()
{
await this.page.locator(this.username_textbox).fill(this.username)
await this.page.locator(this.password_textbox).fill(this.password)
await this.page.locator(this.login).click()
}

/* async logoutdata()
{
await this.page.click(this.logout)
} */

async Adddata()
{
await this.page.frameLocator(this.framelocator).locator(this.addbut).click()
await this.page.frameLocator(this.framelocator).locator(this.lastname).fill(this.filllastname)
await this.page.frameLocator(this.framelocator).locator(this.firstname).fill(this.fillfirstname)
await this.page.frameLocator(this.framelocator).locator(this.upload).click()
await this.page.frameLocator(this.framelocator).locator(this.upload).setInputFiles(this.fileupload)
await this.page.frameLocator(this.framelocator).locator(this.savebutton).click
}

async EditEmployee()
{
await this.page.frameLocator(this.framelocator).locator(this.employeeidcheck).check()
await this.page.frameLocator(this.framelocator).locator(this.employeename).click()
await this.page.frameLocator(this.framelocator).locator(this.editbutton).click()
await this.page.frameLocator(this.framelocator).locator(this.middlename).fill("IT")
await this.page.frameLocator(this.framelocator).locator(this.nationalitydropdown).click()
await this.page.frameLocator(this.framelocator).locator(this.nationalitydropdown).selectOption("titlr")
await this.page.frameLocator(this.framelocator).locator(this.calendar).fill('2026-09-21')
await this.page.frameLocator(this.framelocator).locator(this.savebtn).click()
}

async waitsmt()
{
    await this.page.waitForTimeout(3000)
}

async del()
{

    await this.page.frameLocator(this.framelocator).locator(this.delcheckbox).click()
    await this.page.frameLocator(this.framelocator).locator(this.delbtn).click()

}



}