Welcome to the tss-login-builder.

## Steps to follow to use the tss-login.

* Enter the command **`npm install tss-login`** in the terminal.
* Install below dependencies
***

           1. npm install --save @angular/flex-layout@5.0.0-beta.14
           2. npm install --save primeng@6.0.0-alpha.1
           3. npm install --save @angular/cdk@6.1.0
           4. npm install --save rxjs-compat@6.2.0
          
***

* import the module in the **app.module.ts** file(**import { LoginModule } from 'tsslogin'**).

* import the type in the **imports** of **@NgModule**(**LoginModule**).

* Use the selector in **app.component.html** which will be present in the component of your 
library(**`<tss-login></tss-login>`**).
* To provide option declare variable **options** in **app.component.ts** and bind it to interface of **tsslogin** library
***

        Example: options:LoginImageProperties
***
* Now assign json to options as:

***
`this.options={`
       `name:'',`
       `btnLabel:'LOG IN',`
      `logo:'vik.txt',`
      `title:'LoginForm'`
    `}`
***
* Modify the tag in **app.component.html** to **`<tss-login [options]="options"></tss-login>`**



**FOR DEMO VISIT:**[tssLogin](https://angular-rvwdtg.stackblitz.io)