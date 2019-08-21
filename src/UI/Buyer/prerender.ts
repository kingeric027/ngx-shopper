import { renderModuleFactory } from '@angular/platform-server';
import { writeFileSync } from 'fs';
import 'zone.js/dist/zone-node';

const {
  AppServerModuleNgFactory,
} = require('./dist/base-buyer-server/main.js');

renderModuleFactory(AppServerModuleNgFactory, {
  document: '<app-root></app-root>',
  url: '/',
})
  .then((html) => {
    writeFileSync('./prerender.html', html);
  })
  .catch((err) => {
    console.error(err);
  });
