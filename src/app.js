import * as offline from 'offline-plugin/runtime';
import './app.styl';
import './components/intro/intro.js';
import lozad from 'lozad';

offline.install({
  onUpdateReady: function() {
    offline.applyUpdate();
  }
});

// window.$ = $;
// const observer = lozad(); // lazy loads elements with default selector as '.lozad'
const observer = lozad('.lozad', {
    // rootMargin: '100px 0px', // like css margin
    // threshold: 0.1 // ratio of element convergence
    loaded: function(el) {
        // Custom implementation on a loaded element
        el.classList.add('loaded');
    }
});
observer.observe();
