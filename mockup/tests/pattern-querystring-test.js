define([
  'expect',
  'jquery',
  'underscore',
  'sinon',
  'pat-registry',
  'mockup-patterns-querystring'
], function(expect, $, _, sinon, registry, QueryString) {
  'use strict';

  window.mocha.setup('bdd').globals(['jQuery*']);
  $.fx.off = true;

  var $el;

  var sortableIndexes = {
      "sortable_indexes": {
          "sortable_title": {
              "operations": ["plone.app.querystring.operation.string.contains", "plone.app.querystring.operation.string.is"],
              "group": "Text",
              "description": "The item's title, transformed for sorting",
              "vocabulary": null,
              "title": "Sortable Title",
              "operators": {
                  "plone.app.querystring.operation.string.contains": {
                      "widget": "StringWidget",
                      "operation": "plone.app.querystring.queryparser._contains",
                      "description": null,
                      "title": "Contains"
                  },
                  "plone.app.querystring.operation.string.is": {
                      "widget": "StringWidget",
                      "operation": "plone.app.querystring.queryparser._equal",
                      "description": "Tip: you can use * to autocomplete.",
                      "title": "Is"
                  }
              },
              "enabled": false,
              "values": {},
              "sortable": true
          }
      }
  };

  var indexes = {
      "Title": {
        "operations": ["plone.app.querystring.operation.string.contains"],
        "group": "Text",
        "description": "Text search of an item's title",
        "vocabulary": null,
        "title": "Title",
        "operators": {
            "plone.app.querystring.operation.string.contains": {
                "widget": "StringWidget",
                "operation": "plone.app.querystring.queryparser._contains",
                "description": null,
                "title": "Contains"
            }
        },
        "enabled": true,
        "values": {},
        "sortable": false
    }
  };

  /* ==========================
   TEST: Related Items
  ========================== */

  describe('Query string', function() {
    beforeEach(function() {
      this.server = sinon.fakeServer.create();
      this.server.autoRespond = true;
    });

    afterEach(function() {
      this.server.restore();
    });

    it('test initialize', function() {
      var $el = $('<div />');
      $el.appendTo('body');
      var qs = new QueryString($el, {
        indexes: indexes,
        sortable_indexes: sortableIndexes
      });

      expect(qs.component.getQueryString().length).to.equal(0);
    });

    it('test add criteria', function() {
      var $el = $('<div />');
      $el.appendTo('body');
      var qs = new QueryString($el, {
        indexes: indexes,
        sortable_indexes: sortableIndexes
      });
      qs.component.addCriteriaClicked(document.createEvent('Event'));
      qs.component.refs.criteria0.props.i = 'Title';
      qs.component.refs.criteria0.props.o = 'plone.app.querystring.operation.string.contains';
      qs.component.refs.criteria0.props.v = 'foobar';
      qs.component.refs.criteria0.indexSelected({
        target: {
          value: 'Title'
        }
      }, true);
      qs.component.refs.criteria0.valueChanged({
        target: {
          value: 'foobar'
        }
      }, true);

      expect(qs.component.getQueryString().length).to.equal(1);
    });
  });

});
