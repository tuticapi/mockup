define([
  'react',
  'mockup-patterns-querystring-url/js/widgets/select2'
], function(R, Select2Component){
  'use strict';

  return R.createClass({
    render: function(){
      var options = [];
      for(var value in this.props.index.values){
        var label = this.props.index.values[value].title;
        options.push({ value: value, label: label});
      }
      return R.createElement(Select2Component, {
        onChange: this.props.onChange,
        value: this.props.value,
        options: options,
        multiple: true
      });
    }
  });

});
