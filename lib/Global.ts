import {Page} from '@playwright/test'
export class global
{
   constructor(public page : Page)  // page is the parameter  /* The constructor is needed here because you want to give the global class the Playwright page object when you create the object.*/
   {
// Page is used to close and open the fixture browser, tab, page
/* A constructor is a special method that automatically executes when an object is created. It is mainly used to initialize the object's properties and dependencies. In Playwright POM, we commonly use it to pass and store the Page object so that page-object methods can use this.page.*/



   }
   // Test data
    public url : string = "https://sureshitacademy.in/hrms/login.php"
    public username : string = "sureshit"
    public password : string = "sureshit"
    public filllastname : string = "Khan"
    public fillfirstname : string = "Ataullah"
    public fileupload : string = "C:\\Users\\Ataullah Khan\\OneDrive\\Desktop\\github_guide.txt"
    


   //Object elemets
    public username_textbox:string = "//input[@name='txtUserName']"
    public password_textbox:string = "//input[@name='txtPassword']"
    public login: string = "//input[@type='Submit']"
    //public logout: string = "(//a[@target='rightMenu'])[2]"

    public framelocator : string = "//iframe[@id='rightMenu']"
    public addbut: string = "//input[@value='Add']"
    public lastname : string = "//input[@id='txtEmpLastName']"
    public firstname : string = "//input[@id='txtEmpFirstName']"
    public upload : string = "//input[@type='file']"
    public savebutton : string ="//input[@id='btnEdit']"
    public employeeidcheck : string ="(//input[@type='checkbox'])[3]"
    public employeename : string = "(//a[contains(text(),'Suresh') and contains(text(),'Hyderabad')])[1]"
    public editbutton : string ="//input[@id='btnEditPers']"
    public middlename : string = "//input[@id='txtEmpMiddleName']"
    public savebtn : string = "//input[@id='btnEditPers']"
    public nationalitydropdown : string = "//select[@id='cmbNation']"
    public calendar : string = "//input[@id='DOB']"
    public delcheckbox : string = "(//input[@name='chkLocID[]'])[8]"
    public delbtn : string = "//input[@value='Delete']"

}
