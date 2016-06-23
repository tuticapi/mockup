define([
  'expect',
  'react',
  'react-dom'
], function(expect, R, ReactDOM) {
  'use strict';

  var D = R.DOM;

  window.mocha.setup('bdd');

  describe('react', function () {

    it('it works', function() {
      var ReactComponent = R.createClass({
        getInitialState: function(){
          return {
            className: 'foobar'
          };
        },
        render: function(){
          return D.p({ className: this.state.className, ref: 'foobar', id: 'foobar'}, 'foobar');
        }
      });

      var el = document.createElement('div');
      document.body.appendChild(el);
      var component = ReactDOM.render(R.createElement(ReactComponent, {}), el);
      expect(component.refs.foobar.className).to.equal('foobar');
      component.setState({
        className: 'foobar2'
      });
      expect(component.refs.foobar.className).to.equal('foobar2');
    });

  });

});
