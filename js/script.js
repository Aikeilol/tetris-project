'use strict';

const brick = [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 4, y: 4 }];
const blocks = document.querySelectorAll('.block');

brick.forEach(coords => blocks[coords.y*10 + coords.x].style.background = 'green')
