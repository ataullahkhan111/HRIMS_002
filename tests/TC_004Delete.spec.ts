import {general} from '../lib/General'
import {test} from '@playwright/test'

test('Delete data' , async({page})=>
{
     let obj = new general(page)
     await obj.openApplication()
await obj.logindata()
await obj.del()
})