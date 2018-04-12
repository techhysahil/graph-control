import React, { Component } from 'react';
import {Modal} from './component/model'
import graphData from './graphConfig.json';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      showAddModel : false,
      showEditModel : false,
      showDeleteModel : false,
      graphData : graphData,

      newGraphTitle : "",
      chartTypes : [
        {
          id : 0,
          name : "lineChart",
        },
        {
          id : 1,
          name : "barChart",
        },
        {
          id : 2,
          name : "polarChart",
        },
        {
          id : 3,
          name : "pieChart",
        }
      ],
      defaultAddChart : "lineChart",
      layoutType : [
        {
          id : 0,
          name : "fullwidth" 
        },
        {
          id : 0,
          name : "halfwidth" 
        }
      ],
      defaultLayout : "fullwidth",
      selectedGraphObj : graphData[0],
      editSelectedTitle : graphData[0].title,
      editSelectedGraphType : graphData[0].type,
      editSelectedlayoutType : graphData[0].layout

    }
    this.toggleAddModal = this.toggleAddModal.bind(this);
    this.toggleEditModal = this.toggleEditModal.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);

    this.openAddModal = this.openAddModal.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);

    this.addGraph = this.addGraph.bind(this);
    this.changeTitleVal = this.changeTitleVal.bind(this);
    this.defaultChartChange = this.defaultChartChange.bind(this);
    this.defaultLayoutChange = this.defaultLayoutChange.bind(this);
    this.changeSelectedGraphObj = this.changeSelectedGraphObj.bind(this);

    this.editGraph = this.editGraph.bind(this);
    this.changeSelectedGraphType = this.changeSelectedGraphType.bind(this);
    this.changeSelectedGraphType = this.changeSelectedGraphType.bind(this);
    this.changeeditSelectedTitle = this.changeeditSelectedTitle.bind(this);
  }

  componentDidMount(){

  }

  changeeditSelectedTitle(e){
    this.setState({
      editSelectedTitle : e.target.value
    })
  }

  changeSelectedGraphType(e){
    this.setState({
      editSelectedlayoutType : e.target.value
    })
  }

  changeSelectedGraphType(e){
    this.setState({
      editSelectedGraphType : e.target.value
    })
  }

  editGraph(){
    let id = this.state.selectedGraphObj.id;

    this.state.graphData.map((obj) => {
      if(this.state.selectedGraphObj.id === obj.id){
        obj = Object.assign(obj,{
          type: this.state.editSelectedGraphType,
          layout: this.state.editSelectedlayoutType,
          title : this.state.editSelectedTitle
        })
        return obj
      }
      return obj
    })

  }

  changeSelectedGraphObj(e){
    let newObj = this.state.graphData.filter((obj,index) => {
      return index = e.target.selectedIndex
    })
    this.setState({
      selectedGraphObj : newObj,
      editSelectedGraphType : newObj.type,
      editSelectedlayoutType : newObj.layout,
      editSelectedTitle : newObj.title
    })
  }

  defaultLayoutChange(e){
    this.setState({
      defaultLayout : e.target.value
    })
  }

  defaultChartChange(e){
    this.setState({
      defaultAddChart : e.target.value
    })
  }
  addGraph(){
    var obj = {};
    if(this.state.newGraphTitle && this.state.defaultAddChart && this.state.defaultLayout){
      obj = {
        id : Date.now(),
        type: this.state.defaultAddChart,
        layout: this.state.defaultLayout,
        title : this.state.newGraphTitle
      }
      this.setState({
        graphData : [...this.state.graphData,obj],
        newGraphTitle : ""
      })
    }
  }

  changeTitleVal(e){
    this.setState({
      newGraphTitle : e.target.value
    })
  }

  openAddModal(){
    this.setState({
      showAddModel : true
    })
  }

  openEditModal(){
    this.setState({
      showEditModel : true
    })
  }

  openDeleteModal(){
    this.setState({
      showDeleteModel : true
    })
  }

  toggleAddModal(){
    this.setState({
      showAddModel : !this.state.showAddModel
    })
  }

  toggleEditModal(){
    this.setState({
      showEditModel : !this.state.showEditModel
    })
  }

  toggleDeleteModal(){
    this.setState({
      showDeleteModel : !this.state.showDeleteModel
    })
  }

  render() {
    return (
      <div className="graph-control-wrapper">
        
        <div className="action-wrapper">
          <div className="add-control btn" onClick={this.openAddModal}>Add</div>
          <div className="edit-control btn" onClick={this.openEditModal}>Edit</div>
          <div className="delete-control btn" onClick={this.openDeleteModal}>Delete</div>
        </div>

        {/* Add Graph Model */}
        <Modal data={this.state.graphData} show={this.state.showAddModel} onClose={this.toggleAddModal}>
          <div className="add-graph-model model">
            <div className="fieldset">
              <span className="label">Title</span>
              <input type="text" onChange={this.changeTitleVal} value={this.state.newGraphTitle} />
            </div>
            <div className="fieldset">
              <span className="label">Graph Type</span>
              <select value={this.state.defaultAddChart} onChange={this.defaultChartChange}>
                {
                  this.state.chartTypes.map((obj) => {
                    return <option value={obj.name}>{obj.name}</option>    
                  })  
                }
              </select>
            </div>
            <div className="fieldset">
              <span className="label">Layout</span>
              <select value={this.state.defaultLayout} onChange={this.defaultLayoutChange}>
                {
                  this.state.layoutType.map((obj) => {
                    return <option value={obj.name}>{obj.name}</option>
                  })
                }
              </select>
            </div>

            <div className="add-graph btn" onClick={this.addGraph}>Add Graph</div>
          </div>
        </Modal>

        {/* Edit Graph Model */}
        <Modal show={this.state.showEditModel} onClose={this.toggleEditModal}>
          <div className="edit-graph-model model">
              <div className="fieldset">
                <span className="label">Select Graph</span>
                <select value={this.state.selectedGraphObj.title} onChange={this.changeSelectedGraphObj}>
                  {
                    this.state.graphData.map((obj) => {
                      return <option key={obj.id} value={obj.title}>{obj.title}</option>
                    })
                  }
                </select>
              </div>

              <div className="fieldset">
                <span className="label">Title</span>
                <input type="text" value={this.state.editSelectedTitle} onChange={this.changeeditSelectedTitle} />
              </div>
              <div className="fieldset">
                <span className="label">Graph Type</span>
                <select value={this.state.editSelectedGraphType} onChange={this.changeSelectedGraphType}>
                  {
                    this.state.chartTypes.map((obj) => {
                      return <option value={obj.name}>{obj.name}</option>    
                    })  
                  }
                </select>
              </div>
              <div className="fieldset">
                <span className="label">Layout</span>
                <select value={this.state.editSelectedlayoutType} onChange={this.changeSelectedGraphType}>
                  {
                    this.state.layoutType.map((obj) => {
                      return <option value={obj.name}>{obj.name}</option>
                    })
                  }
                </select>
              </div>

              <div className="add-graph btn" onClick={this.editGraph}>Save Changes</div>


          </div>
        </Modal>
        
        {/* Delete Graph Model */}
        <Modal show={this.state.showDeleteModel} onClose={this.toggleDeleteModal}>
          <div className="delete-graph-model model">
            <div className="fieldset">
              <span className="label">Select Graph</span>
              <select>
                <option value="grapefruit">Pie Chart</option>
                <option selected value="coconut">Line Chart</option>
                <option value="mango">Donut Chart</option>
              </select>
            </div>

            <div className="add-graph btn">Delete Graph</div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
