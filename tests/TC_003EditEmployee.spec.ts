import{test} from '@playwright/test'
import {general} from "../lib/General"

test('Edit Employee' , async({page})=>
{
 let obj = new general(page)
    
await obj.openApplication()
await obj.logindata()
await obj.waitsmt()
//obj.logoutdata()
await obj.EditEmployee()

})