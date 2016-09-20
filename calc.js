(function(CalcApp, $, undefined){
  'use strict';

  var keys = document.querySelectorAll('#calculator span');
  var operators = ['+'];

  $(document).ready(function(){
   bindEvent();
  })

  function bindEvent(){
    _bind.bindOperands();
  }

  var _bind = {
    bindOperands: function(){
      for(let i=0; i< keys.length; i++){
        keys[i].onclick = function(e) {
          var input = document.querySelector('.result');
          var inputVal = input.innerHTML;
          var btnVal = this.innerHTML;
          if(btnVal == 'C') {
            input.innerHTML = '';
          }
          else if(btnVal == '='){
            var equation = inputVal;
            var lastChar = equation[equation.length - 1];
            if(equation)
              input.innerHTML = eval(equation);
          }
          else {
            input.innerHTML += btnVal;
          }
          e.preventDefault();
        }
      }
    }
  }

})(window.CalcApp = window.CalcApp || {}, jQuery)