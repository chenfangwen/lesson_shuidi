"use strict";

var _class, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function isAnimal(target) {
  // console.log(target)
  target.isAnimal = function () {
    console.log('is animal');
  };
}

function watchFunc(target, name, descriptor) {
  // console.log(descriptor)
  var orginWork = descriptor.value;

  descriptor.value = function () {
    console.log("监听到方法执行");
    orginWork();
  };
}

var Man = isAnimal(_class = (_class2 = /*#__PURE__*/function () {
  function Man() {
    _classCallCheck(this, Man);
  }

  _createClass(Man, [{
    key: "say",
    value: function say() {
      console.log('i say');
    }
  }, {
    key: "work",
    value: function work() {
      console.log('i am working');
    }
  }], [{
    key: "isMan",
    value: function isMan() {
      console.log('yes');
    }
  }]);

  return Man;
}(), (_applyDecoratedDescriptor(_class2.prototype, "say", [watchFunc], Object.getOwnPropertyDescriptor(_class2.prototype, "say"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "work", [watchFunc], Object.getOwnPropertyDescriptor(_class2.prototype, "work"), _class2.prototype)), _class2)) || _class;

var boy = new Man();
boy.say();
Man.isMan();
Man.isAnimal();
boy.work();