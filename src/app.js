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

if (!('IntersectionObserver' in window)) {
    var script = document.createElement("script");
    script.src = "https://raw.githubusercontent.com/w3c/IntersectionObserver/master/polyfill/intersection-observer.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

window.jQuery = window.jQuery || (() => ({
    // these are all methods required by HubSpot
  change: () => {},
  trigger: () => {},
}));
