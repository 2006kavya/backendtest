const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app=express();
port=3000

const bcrypt=require('bcryptjs');
async function hashing(){
  let password="hello123"

let hashpassword=await bcrypt.hash(password,10);
 console.log(hashpassword)
}

hashing();hashing();