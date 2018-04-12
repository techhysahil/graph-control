'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _model = require('./component/model');

var _graphConfig = require('./graphConfig.json');

var _graphConfig2 = _interopRequireDefault(_graphConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import './App.css';

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      showAddModel: false,
      showEditModel: false,
      showDeleteModel: false,
      graphData: _graphConfig2.default,

      newGraphTitle: "",
      chartTypes: [{
        id: 0,
        name: "lineChart"
      }, {
        id: 1,
        name: "barChart"
      }, {
        id: 2,
        name: "polarChart"
      }, {
        id: 3,
        name: "pieChart"
      }],
      defaultAddChart: "lineChart",
      layoutType: [{
        id: 0,
        name: "fullwidth"
      }, {
        id: 0,
        name: "halfwidth"
      }],
      defaultLayout: "fullwidth",
      selectedGraphObj: _graphConfig2.default[0],
      editSelectedTitle: _graphConfig2.default[0].title,
      editSelectedGraphType: _graphConfig2.default[0].type,
      editSelectedlayoutType: _graphConfig2.default[0].layout,
      selectedDeleteObj: _graphConfig2.default[0]

    };
    _this.toggleAddModal = _this.toggleAddModal.bind(_this);
    _this.toggleEditModal = _this.toggleEditModal.bind(_this);
    _this.toggleDeleteModal = _this.toggleDeleteModal.bind(_this);

    _this.openAddModal = _this.openAddModal.bind(_this);
    _this.openEditModal = _this.openEditModal.bind(_this);
    _this.openDeleteModal = _this.openDeleteModal.bind(_this);

    _this.addGraph = _this.addGraph.bind(_this);
    _this.changeTitleVal = _this.changeTitleVal.bind(_this);
    _this.defaultChartChange = _this.defaultChartChange.bind(_this);
    _this.defaultLayoutChange = _this.defaultLayoutChange.bind(_this);
    _this.changeSelectedGraphObj = _this.changeSelectedGraphObj.bind(_this);

    _this.editGraph = _this.editGraph.bind(_this);
    _this.changeSelectedGraphType = _this.changeSelectedGraphType.bind(_this);
    _this.changeSelectedGraphType = _this.changeSelectedGraphType.bind(_this);
    _this.changeeditSelectedTitle = _this.changeeditSelectedTitle.bind(_this);

    _this.changeSelectedDeleteGraph = _this.changeSelectedDeleteGraph.bind(_this);
    _this.deleteSelectedGraph = _this.deleteSelectedGraph.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'deleteSelectedGraph',
    value: function deleteSelectedGraph(e) {
      var _this2 = this;

      var objid = this.state.selectedDeleteObj.id;
      var newData = this.state.graphData.filter(function (obj, index) {
        return obj.id != objid;
      });
      this.setState({
        graphData: newData,
        selectedDeleteObj: newData[0]
      }, function () {
        _this2.toggleDeleteModal();
        alert("Selected graph is deleted successfully");
      });
    }
  }, {
    key: 'changeSelectedDeleteGraph',
    value: function changeSelectedDeleteGraph(e) {
      var newObj = this.state.graphData.filter(function (obj, index) {
        return index === e.target.selectedIndex;
      });

      this.setState({
        selectedDeleteObj: newObj[0]
      });
    }
  }, {
    key: 'changeeditSelectedTitle',
    value: function changeeditSelectedTitle(e) {
      this.setState({
        editSelectedTitle: e.target.value
      });
    }
  }, {
    key: 'changeSelectedGraphType',
    value: function changeSelectedGraphType(e) {
      this.setState({
        editSelectedlayoutType: e.target.value
      });
    }
  }, {
    key: 'changeSelectedGraphType',
    value: function changeSelectedGraphType(e) {
      this.setState({
        editSelectedGraphType: e.target.value
      });
    }
  }, {
    key: 'editGraph',
    value: function editGraph() {
      var _this3 = this;

      var newGraphData = this.state.graphData.map(function (obj) {
        if (_this3.state.selectedGraphObj.id === obj.id) {
          obj = Object.assign(obj, {
            type: _this3.state.editSelectedGraphType,
            layout: _this3.state.editSelectedlayoutType,
            title: _this3.state.editSelectedTitle
          });
          return obj;
        }
        return obj;
      });

      this.setState({
        graphData: newGraphData
      }, function () {
        _this3.toggleEditModal();
        alert("changes are saved successfully");
      });
    }
  }, {
    key: 'changeSelectedGraphObj',
    value: function changeSelectedGraphObj(e) {
      var newObj = this.state.graphData.filter(function (obj, index) {
        return index === e.target.selectedIndex;
      });
      this.setState({
        selectedGraphObj: newObj[0],
        editSelectedGraphType: newObj[0].type,
        editSelectedlayoutType: newObj[0].layout,
        editSelectedTitle: newObj[0].title
      });
    }
  }, {
    key: 'defaultLayoutChange',
    value: function defaultLayoutChange(e) {
      this.setState({
        defaultLayout: e.target.value
      });
    }
  }, {
    key: 'defaultChartChange',
    value: function defaultChartChange(e) {
      this.setState({
        defaultAddChart: e.target.value
      });
    }
  }, {
    key: 'addGraph',
    value: function addGraph() {
      var _this4 = this;

      var obj = {};
      if (this.state.newGraphTitle && this.state.defaultAddChart && this.state.defaultLayout) {
        obj = {
          id: Date.now(),
          type: this.state.defaultAddChart,
          layout: this.state.defaultLayout,
          title: this.state.newGraphTitle
        };
        this.setState({
          graphData: [].concat(_toConsumableArray(this.state.graphData), [obj]),
          newGraphTitle: ""
        }, function () {
          _this4.toggleAddModal();
          alert("New graph added successfully");
        });
      }
    }
  }, {
    key: 'changeTitleVal',
    value: function changeTitleVal(e) {
      this.setState({
        newGraphTitle: e.target.value
      });
    }
  }, {
    key: 'openAddModal',
    value: function openAddModal() {
      this.setState({
        showAddModel: true
      });
    }
  }, {
    key: 'openEditModal',
    value: function openEditModal() {
      this.setState({
        showEditModel: true
      });
    }
  }, {
    key: 'openDeleteModal',
    value: function openDeleteModal() {
      this.setState({
        showDeleteModel: true
      });
    }
  }, {
    key: 'toggleAddModal',
    value: function toggleAddModal() {
      this.setState({
        showAddModel: !this.state.showAddModel
      });
    }
  }, {
    key: 'toggleEditModal',
    value: function toggleEditModal() {
      this.setState({
        showEditModel: !this.state.showEditModel
      });
    }
  }, {
    key: 'toggleDeleteModal',
    value: function toggleDeleteModal() {
      this.setState({
        showDeleteModel: !this.state.showDeleteModel
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'graph-control-wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'action-wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'add-control btn', onClick: this.openAddModal },
            'Add'
          ),
          _react2.default.createElement(
            'div',
            { className: 'edit-control btn', onClick: this.openEditModal },
            'Edit'
          ),
          _react2.default.createElement(
            'div',
            { className: 'delete-control btn', onClick: this.openDeleteModal },
            'Delete'
          )
        ),
        _react2.default.createElement(
          _model.Modal,
          { data: this.state.graphData, show: this.state.showAddModel, onClose: this.toggleAddModal },
          _react2.default.createElement(
            'div',
            { className: 'add-graph-model model' },
            _react2.default.createElement(
              'div',
              { className: 'fieldset' },
              _react2.default.createElement(
                'span',
                { className: 'label' },
                'Title'
              ),
              _react2.default.createElement('input', { type: 'text', onChange: this.changeTitleVal, value: this.state.newGraphTitle })
            ),
            _react2.default.createElement(
              'div',
              { className: 'fieldset' },
              _react2.default.createElement(
                'span',
                { className: 'label' },
                'Graph Type'
              ),
              _react2.default.createElement(
                'select',
                { value: this.state.defaultAddChart, onChange: this.defaultChartChange },
                this.state.chartTypes.map(function (obj) {
                  return _react2.default.createElement(
                    'option',
                    { value: obj.name },
                    obj.name
                  );
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'fieldset' },
              _react2.default.createElement(
                'span',
                { className: 'label' },
                'Layout'
              ),
              _react2.default.createElement(
                'select',
                { value: this.state.defaultLayout, onChange: this.defaultLayoutChange },
                this.state.layoutType.map(function (obj) {
                  return _react2.default.createElement(
                    'option',
                    { value: obj.name },
                    obj.name
                  );
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'add-graph btn', onClick: this.addGraph },
              'Add Graph'
            )
          )
        ),
        _react2.default.createElement(
          _model.Modal,
          { show: this.state.showEditModel, onClose: this.toggleEditModal },
          _react2.default.createElement(
            'div',
            { className: 'edit-graph-model model' },
            _react2.default.createElement(
              'div',
              { className: 'fieldset' },
              _react2.default.createElement(
                'span',
                { className: 'label' },
                'Select Graph'
              ),
              _react2.default.createElement(
                'select',
                { value: this.state.selectedGraphObj.title, onChange: this.changeSelectedGraphObj },
                this.state.graphData.map(function (obj) {
                  return _react2.default.createElement(
                    'option',
                    { key: obj.id, value: obj.title },
                    obj.title
                  );
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'fieldset' },
              _react2.default.createElement(
                'span',
                { className: 'label' },
                'Title'
              ),
              _react2.default.createElement('input', { type: 'text', value: this.state.editSelectedTitle, onChange: this.changeeditSelectedTitle })
            ),
            _react2.default.createElement(
              'div',
              { className: 'fieldset' },
              _react2.default.createElement(
                'span',
                { className: 'label' },
                'Graph Type'
              ),
              _react2.default.createElement(
                'select',
                { value: this.state.editSelectedGraphType, onChange: this.changeSelectedGraphType },
                this.state.chartTypes.map(function (obj) {
                  return _react2.default.createElement(
                    'option',
                    { value: obj.name },
                    obj.name
                  );
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'fieldset' },
              _react2.default.createElement(
                'span',
                { className: 'label' },
                'Layout'
              ),
              _react2.default.createElement(
                'select',
                { value: this.state.editSelectedlayoutType, onChange: this.changeSelectedGraphType },
                this.state.layoutType.map(function (obj) {
                  return _react2.default.createElement(
                    'option',
                    { value: obj.name },
                    obj.name
                  );
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'add-graph btn', onClick: this.editGraph },
              'Save Changes'
            )
          )
        ),
        _react2.default.createElement(
          _model.Modal,
          { show: this.state.showDeleteModel, onClose: this.toggleDeleteModal },
          _react2.default.createElement(
            'div',
            { className: 'delete-graph-model model' },
            _react2.default.createElement(
              'div',
              { className: 'fieldset' },
              _react2.default.createElement(
                'span',
                { className: 'label' },
                'Select Graph'
              ),
              _react2.default.createElement(
                'select',
                { value: this.state.selectedDeleteObj.title, onChange: this.changeSelectedDeleteGraph },
                this.state.graphData.map(function (obj) {
                  return _react2.default.createElement(
                    'option',
                    { key: obj.id, value: obj.title },
                    obj.title
                  );
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'add-graph btn', onClick: this.deleteSelectedGraph },
              'Delete Graph'
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;