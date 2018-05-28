import { Injectable } from "@angular/core";

export interface LoginProperties {
name?:string; 
displayName?:string;
logo?:string;
/* logoAlternateText?:any;
id?:any;
description?:any;
template?:any;
width?:any;
height?:any;
positionX?:any;
positionY?:any;
padding?:any;
language?:any;
labelPosition?:any;
errorMessagePosition ?:any;
helpTextPosition ?:any;
className?:any;
style?:any;
url?:any;
dataset?:any;
method ?:any;
hasCaptcha ?:any;
hasRememberMe ?:any;
hasForgotPassword ?:any;
hasOauth ?:any;
oauthList ?:any;
liveValidation ?:any;
validationOnSubmit ?:any;
validationMessagePosition ?:any;
validationTextSize?:any;
validationTextColor?:any;
validationHilightColor?:any;
html?:any;
jsCode?:any;
call ?:any;
callServer?:any;
target?:any; */
}


export  class loginPropertiesService implements LoginProperties{
    constructor(name:string,displayName:string,logo:string){}
}