import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GifExpertApp } from './GifExpertApp';

const divRoot = document.querySelector("#root");
ReactDOM.render(<GifExpertApp value={100}/> ,divRoot);


/*
npm run build
npm install --global http-server
cd a build
http-server -o
git config --global user.name "Mona Lisa"
git config --global user.email "kirillpanferov.daw@ciudadescolarfp.es"
git init
git add .
git commit -m "First Commit"
rename build to docs









*/