import React, {ReactNode} from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';
export default class DashBord extends React.Component<any, any>{
    getOption =()=> {
        let option = {
            title:{
                text:'小程序订单',
                x:'center'
            },
            tooltip:{
                trigger:'axis',
            },
            xAxis:{
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis:{
                type:'value'
            },
            series:[
                {
                    name:'订单量',
                    type:'line',
                    data:[1000,2000,1500,3000,2000,1200,800]
                }
            ]
        }
        return option
    }

    getOption2 =()=> {
        let option = {
            title:{
                text:'小程序订单'
            },
            legend:{
                data:['测试','万豪','产品']
            },
            tooltip:{   //展示数据
                trigger:'axis'
            },
            xAxis:{
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis:{
                type:'value'
            },
            series:[
                {
                    name:'测试',
                    type:'bar',
                    data:[2000,3000,5500,7000,8000,12000,20000]
                },{
                    name:'万豪',
                    type:'bar',
                    data:[1500,3000,4500,6000,8000,10000,15000]
                },{
                    name:'产品',
                    type:'bar',
                    data:[1000,2000,2500,4000,6000,7000,8000]
                }
            ]
        }
        return option;
    }

    getOption3 =()=> {
        let option:any = {
            title:{
                text:'小程序订单',
                x:'center'
            },
            legend:{
                orient:'vertical',
                right:10,
                top:20,
                bottom:20,
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
            tooltip:{
                trigger:'item',
                formatter:'{a}<br/>{b}:{c}({d}%)' //自定义展示的tootip
            },
            series:[
                //饼图中的series没有x,y轴，所以通过series中必须有value和name
                {
                    name:'订单量',
                    type:'pie',
                    radius:['50%','80%'], //控制内环、外环
                    data:[
                        {
                            value:1000,
                            name:'周一'
                        },{
                            value:2000,
                            name:'周二'
                        },{
                            value:1000,
                            name:'周三'
                        },{
                            value:1000,
                            name:'周四'
                        },{
                            value:1000,
                            name:'周5五'
                        },{
                            value:1000,
                            name:'周六'
                        },{
                            value:1000,
                            name:'周日'
                        },
                    ]
                }
            ]
        };
        return option
    };

    render(){
        return(
            <div style={{display: "flex",flexWrap: "wrap"}}>
                <div title="折线图表之一" style={{width: '50%'}}>
                    <ReactEcharts option={this.getOption()} theme="Imooc"  style={{height:'400px'}}/>
                </div>
                <div title="柱形图表之一" style={{width: '50%'}}>
                    <ReactEcharts option={this.getOption2()} theme="Imooc"  style={{height:'500px'}}/>
                </div>
                <div title="饼形图表之三" style={{width: '30%'}}>
                    <ReactEcharts option={this.getOption3()} theme="Imooc" style={{height:'400px'}}/>
                </div>
            </div>
        )
    }
}