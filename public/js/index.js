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

var initialIssues = [{
  id: 1,
  status: 'New',
  owner: 'Oleh',
  effort: 7,
  created: new Date('2018-08-15'),
  due: undefined,
  title: 'Error in console when clicking Add'
}, {
  id: 2,
  status: 'Assigned',
  owner: 'Eddie',
  effort: 14,
  created: new Date('2018-08-16'),
  due: new Date('2018-08-30'),
  title: 'Missing bottom border on panel'
}];

var IssueFilter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IssueFilter, _React$Component);

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

var IssueRow =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(IssueRow, _React$Component2);

  function IssueRow() {
    _classCallCheck(this, IssueRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(IssueRow).apply(this, arguments));
  }

  _createClass(IssueRow, [{
    key: "render",
    value: function render() {
      var issue = this.props.issue;
      return React.createElement("tr", null, React.createElement("td", null, issue.id), React.createElement("td", null, issue.status), React.createElement("td", null, issue.owner), React.createElement("td", null, issue.created.toDateString()), React.createElement("td", null, issue.effort), React.createElement("td", null, issue.due ? issue.due.toDateString() : ''), React.createElement("td", null, issue.title));
    }
  }]);

  return IssueRow;
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
      var issueRows = this.props.issues.map(function (issue) {
        return React.createElement(IssueRow, {
          issue: issue,
          key: issue.id
        });
      });
      return React.createElement("table", {
        className: "bordered-table"
      }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "ID"), React.createElement("th", null, "Status"), React.createElement("th", null, "Owner"), React.createElement("th", null, "Created"), React.createElement("th", null, "Effort"), React.createElement("th", null, "Due Date"), React.createElement("th", null, "Title"))), React.createElement("tbody", null, issueRows));
    }
  }]);

  return IssueTable;
}(React.Component);

var AddIssue =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(AddIssue, _React$Component4);

  function AddIssue() {
    _classCallCheck(this, AddIssue);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddIssue).apply(this, arguments));
  }

  _createClass(AddIssue, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.addForm;
      this.props.addIssue({
        owner: form.owner.value,
        title: form.title.value,
        status: 'New'
      });
      form.reset();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", {
        name: "addForm",
        onSubmit: this.handleSubmit.bind(this)
      }, React.createElement("input", {
        type: "text",
        name: "owner",
        placeholder: "owner"
      }), React.createElement("input", {
        type: "text",
        name: "title",
        placeholder: "title"
      }), React.createElement("input", {
        type: "submit"
      }));
    }
  }]);

  return AddIssue;
}(React.Component);

var IssueList =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(IssueList, _React$Component5);

  function IssueList() {
    var _this;

    _classCallCheck(this, IssueList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IssueList).call(this));
    _this.state = {
      issues: []
    };
    return _this;
  }

  _createClass(IssueList, [{
    key: "addIssue",
    value: function addIssue(issue) {
      issue.id = this.state.issues.length + 1;
      issue.created = new Date();
      var newList = this.state.issues.slice();
      newList.push(issue);
      this.setState({
        issues: newList
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          issues: initialIssues
        });
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("h1", null, "Issue Tracker"), React.createElement(IssueFilter, null), React.createElement(IssueTable, {
        issues: this.state.issues
      }), React.createElement(AddIssue, {
        addIssue: this.addIssue.bind(this)
      }));
    }
  }]);

  return IssueList;
}(React.Component);

var element = React.createElement(IssueList, null);
ReactDOM.render(element, document.querySelector('#root'));