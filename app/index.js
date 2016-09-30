import Ember from 'ember';
/**
 *
 * Yielding `animationFrame` will pause a task
 *
 * ```js
 * export default Component.extend({
 *   myTask: task(function * () {
 *     while (true) {
 *       console.log("Hello!");
 *       const timestamp = yield animationFrame();
 *     }
 *   })
 * });
 * ```
 *
 */
export default function() {
  let animationFrameId;
  let promise = new Ember.RSVP.Promise(r => {
    animationFrameId = window.requestAnimationFrame(r);
  });
  promise.__ec_cancel__ = () => {
    window.cancelAnimationFrame(animationFrameId);
  };
  return promise;
}
