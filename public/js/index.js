"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var IssueRow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IssueRow, _React$Component);

  function IssueRow() {
    _classCallCheck(this, IssueRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(IssueRow).apply(this, arguments));
  }

  _createClass(IssueRow, [{
    key: "render",
    value: function render() {
      var style = this.props.rowStyle;
      return React.createElement("tr", null, React.createElement("td", {
        style: style
      }, this.props.issue_id), React.createElement("td", {
        style: style
      }, this.props.children));
    }
  }]);

  return IssueRow;
}(React.Component);

var IssueFilter =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(IssueFilter, _React$Component2);

  function IssueFilter() {
    _classCallCheck(this, IssueFilter);

    return _possibleConstructorReturn(this, _getPrototypeOf(IssueFilter).apply(this, arguments));
  }

  _createClass(IssueFilter, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, "Placeholder for filter");
    }
  }]);

  return IssueFilter;
}(React.Component);

var IssueTable =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(IssueTable, _React$Component3);

  function IssueTable() {
    _classCallCheck(this, IssueTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(IssueTable).apply(this, arguments));
  }

  _createClass(IssueTable, [{
    key: "render",
    value: function render() {
      var rowStyle = {
        border: '1px solid silver',
        padding: 4
      };
      return React.createElement("table", {
        style: {
          borderCollapse: 'collapse'
        }
      }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
        style: rowStyle
      }, "ID"), React.createElement("th", {
        style: rowStyle
      }, "Title"))), React.createElement("tbody", null, React.createElement(IssueRow, {
        rowStyle: rowStyle,
        issue_id: 1
      }, "'First issue'"), React.createElement(IssueRow, {
        rowStyle: rowStyle,
        issue_id: 2
      }, "'Second issue'")));
    }
  }]);

  return IssueTable;
}(React.Component);

var AddIsuue =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(AddIsuue, _React$Component4);

  function AddIsuue() {
    _classCallCheck(this, AddIsuue);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddIsuue).apply(this, arguments));
  }

  _createClass(AddIsuue, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, "Placeholder for add form");
    }
  }]);

  return AddIsuue;
}(React.Component);

var IsuueList =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(IsuueList, _React$Component5);

  function IsuueList() {
    _classCallCheck(this, IsuueList);

    return _possibleConstructorReturn(this, _getPrototypeOf(IsuueList).apply(this, arguments));
  }

  _createClass(IsuueList, [{
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("h1", null, "Issue Tracker"), React.createElement(IssueFilter, null), React.createElement(IssueTable, null), React.createElement(AddIsuue, null));
    }
  }]);

  return IsuueList;
}(React.Component);

var element = React.createElement(IsuueList, null);
ReactDOM.render(element, document.querySelector('#root'));