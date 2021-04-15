import React from 'react';
import { Img } from './styles';

import butterfly from './images/butterfly.jpg';
import kittens from './images/kittens.jpg';
import landscape from './images/landscape.jpg';

const pic1 = <Img src={butterfly}/>
const pic2 = <Img src={kittens}/>
const pic3 = <Img src={landscape}/>
const text = <p>Some text</p>

const data = [pic1, text, pic2, pic3];

export default data;
