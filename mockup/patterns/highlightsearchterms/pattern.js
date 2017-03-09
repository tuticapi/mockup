/* Highlight search terms pattern
 *
 * utilizes mark.js (by julmot). Available as mark.js at bower or julmot/mark.js at npm, see https://markjs.io/
 *
 * Options:
 *    element(string): HTML element to wrap matches, e.g. span
 *    className(string):  A class name that will be appended to element
 *    exclude(array[ ]): An array with exclusion selectors. Matches inside these elements will be ignored. Example: "filter": ["h1", ".ignore"]
 *    separateWordSearch(boolean): Whether to search for each word separated by a blank instead of the complete term
 *    accuracy(string or object): accuracy is Either one of the following string values: "partially": When searching for "lor" only "lor" inside "lorem" will be marked; "complementary": When searching for "lor" the whole word "lorem" will be marked; "exactly": When searching for "lor" only those exact words with a word boundary will be marked. In this example nothing inside "lorem". This value is equivalent to the previous option wordBoundary
 *    diacritics(boolean): If diacritic characters should be matched. For example "piękny" would also match "piekny" and "doner" would also match "döner"
 *    synonyms(object): An object with synonyms. The key will be a synonym for the value and the value for the key. Example: "synonyms": {"one": "1"} will add the synonym "1" for "one" and vice versa
 *    iframes(oolean): default: Whether to search also inside iframes. If you don't have permissions to some iframes (e.g. because they have a different origin) they will be silently skipped. If you don't want to search inside specific iframes (e.g. facebook share), you can pass an exclude selector that matches these iframes
 *    iframesTimeout(number):  The maximum ms to wait for a load event before skipping an iframe. Especially important when there's no internet connection or a browser "offline" mode is enabled and an iframe has an online src – then the load event is never fired
 *    acrossElements(boolean): Whether to search for matches across elements
 *    caseSensitive(oolean): Whether to search case sensitive
 *    ignoreJoiners(oolean): Whether to also find matches that contain soft hyphen, zero width space, zero width non-joiner and zero width joiner. They're used to indicate a point for a line break where there isn't enough space to show the full word
 *    each(function): A callback for each marked element. Receives the marked DOM element as a parameter
 *    filter(function): A callback to filter or limit matches. It will be called for each match and receives the following parameters: The text node which includes the match; The term that has been found; A counter indicating the total number of all marks at the time of the function call; A counter indicating the number of marks for the term. The function must return false if the mark should be stopped, otherwise true
 *    noMatch function    A callback function that will be called when there are no matches. Receives the not found term as a parameter
 *    done  function    A callback function after all marks are done. Receives the total number of marks as a parameter
 *    debug boolean false Set this option to true if you want to log messages
 *    log object  console Log messages to a specific object (only if debug is true)

 * Documentation:
 *
 * TODO: write me
 *
 */

define([
  'jquery',
  'pat-base'
], function($, Base, Mark) {
  'use strict';
  var HighlightSearchterms = Base.extend({
    name: 'highlightsearchterms',
    trigger: '.pat-highlightsearchterms',
    parser: 'mockup',
    defaults: {
      element: 'span',
      className: 'highlightedSearchTerm'
      // exclude: null,
      // separateWordSearch: null,
      // accuracy: null,
      // diacritics: null,
      // synonyms: null,
      // iframes: null,
      // iframesTimeout: null,
      // acrossElements: null,
      // caseSensitive: null,
      // ignoreJoiners: null,
      // each: null,
      // filter: null,
      // noMatch: null,
      // done: null,
      // debug: null,
      // log: null
    },
    init: function() {
      var mark = Mark(this.$el, this.options)
    }
  });
  return HighlightSearchterms;
});
