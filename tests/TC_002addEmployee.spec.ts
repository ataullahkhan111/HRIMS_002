import {general} from "../lib/General"
import {test} from '@playwright/test'

test('for login_logout' , async({page})=>
{
    let obj = new general(page)
    
await obj.openApplication()
await obj.logindata()
//obj.logoutdata()
await obj.Adddata()
    
})