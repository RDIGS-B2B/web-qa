import React, { Component } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

export default class Dashboard extends Component {
    state = {
        persons: [],
        totalLeads:[],
        date:new Date()
        
        
    }
    
    componentDidMount() {
        axios.get(`http://us.rdigs.com/API/dashboardData.php`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
                console.log(persons);
            })

            axios.get(`http://us.rdigs.com/API/getTotalLeads.php`)
            .then(data => {
                    const totalLeads = data.data;
                    this.setState({totalLeads});                      
             })
    }
    render() {
        return (
            <div className="dasboard">
                <div className="logo">
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4 text-center">                    
                        <img className="img-fluid" src="images/logo.png" ></img>
                        </div>
                        <div className="col-sm-4 text-right date-time">
                             <span> Date: {this.state.date.toLocaleDateString('en-GB', {
  day: 'numeric', month: 'short', year: 'numeric'
}).replace(/ /g, '-')}</span>
                        </div>
                    </div>

                </div>
                <div className="total-lead">
                     <h6 className="title-lead">Total Leads</h6>
                     {
                            this.state.totalLeads.map((val, ind) => (   
                            <h6 key={ind} className="number">{val.total}</h6>
                        ))
                    }
                    
                </div>
                <div className="container">
                    <div className="row text-center img">
                        <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                            <img src="images/1.gif"  width="60px"></img>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                        <img src="images/2.gif"  width="60px"></img>

                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                        <img src="images/3.gif"  width="60px"></img>

                        </div>
                    </div>
                    <div className="row">
                        {
                            this.state.persons.map((value, index) => (
                                <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4" key={index}>
                                    <div className="block mt-2">
                                        <h6 className="title">{value.name}</h6>
                                        <p className="number">{value.leads}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        )
    }
}
