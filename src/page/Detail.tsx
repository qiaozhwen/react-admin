import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import Auth from "../component/Auth/Auth";
import {Modal} from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Chinese Score",
    dataIndex: "chinese",
    sorter: {
      compare: (a: any, b: any) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: "Math Score",
    dataIndex: "math",
    sorter: {
      compare: (a: any, b: any) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: "English Score",
    dataIndex: "english",
    sorter: {
      compare: (a: any, b: any) => a.english - b.english,
      multiple: 1,
    },
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: "2",
    name: "Jim Green",
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: "3",
    name: "Joe Black",
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: "4",
    name: "Jim Red",
    chinese: 88,
    math: 99,
    english: 89,
  },
];
interface Fish {
  name: string;
}
function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  console.log("params", pagination, filters, sorter, extra);
}

class Detail extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state={
      renderModal: false
    }
  }
  componentWillMount() {
    console.log("check user2", this.props.data);
  }
  eee(){
    Promise.resolve().then(()=>{
      this.setState({renderModal: true})
      console.log('1111', this.state.renderModal)
      setTimeout(()=>{
        this.setState({renderModal: false})
        console.log('1111', this.state.renderModal)
      }, 100)
      setTimeout(()=>{
        this.setState({renderModal: true})
        console.log('1111', this.state.renderModal)
      }, 101)
      setTimeout(()=>{
        this.setState({renderModal: false})
        console.log('1111', this.state.renderModal)
      }, 102)
      setTimeout(()=>{
        this.setState({renderModal: true})
        console.log('1111', this.state.renderModal)
      }, 103)
      setTimeout(()=>{
        this.setState({renderModal: false})
        console.log('1111', this.state.renderModal)
      }, 104)
      setTimeout(()=>{
        this.setState({renderModal: true})
        console.log('1111', this.state.renderModal)
      }, 105)
    })
  }
  render() {
    console.log('1111', this.state.renderModal)
    return (
      <Auth auth-id={"page-detail"}>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th onClick={()=>this.setState({renderModal: true})}>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
        {this.state.renderModal && <Modal visible={true} onOk={this.eee.bind(this)}>vvvvvvvv</Modal> || null}
      </Auth>
    );
  }
}
const mapState = (state: any) => ({
  data: state,
});
export default connect(mapState)(Detail);
