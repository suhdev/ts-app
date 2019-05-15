import * as React from 'react';
import { render } from 'react-dom'; 
import { ProgressModel, Progress } from './components/Progress';

const m = new ProgressModel();

const div = document.createElement('div');
div.id = 'some-item';
document.body.append(div);

render(
    [<Progress model={m} />, <span>test</span>],
    document.getElementById('some-item'))

console.log(m);

setTimeout(()=>{
    render(null, document.getElementById('some-item'))
},5000);