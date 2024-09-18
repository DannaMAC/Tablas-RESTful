const express= require("express")

function create(reg, res,next){
    res.send( `POST => /users/ => ${req.body.name}`);
}
function list(reg, res,next){
    res.send('GET => /users/');
}
function index(reg, res){
    res.send(`GET => /users/ ${req.body.id}`);
}
function replace(reg, res){
    res.send('PUT => /users/:id');
}
function update(reg, res){
    res.send('PATCH=> /users/:id');
}
function destroy(reg, res){
    res.send('DELETE => /users/:id');
}
module.exports ={create, list, index, replace, update, destroy};