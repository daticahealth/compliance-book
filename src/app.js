import * as offline from 'offline-plugin/runtime';
import './app.styl';
import './components/intro/intro.js';


offline.install({
  onUpdateReady: function() {
    offline.applyUpdate();
  }
});
