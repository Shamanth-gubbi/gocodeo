import React from 'react';
import './Dashboard.css';
import './left/Chart.js';
import './left/DeployedAgents.js';
import './left/Test.js';

import './right/NewWorkFlow';
import './right/RecentActivity';
import 'bootstrap/dist/css/bootstrap.css'
import Test from './left/Test.js';
import Chart from './left/Chart.js';
import DeployedAgents from './left/DeployedAgents.js';
import NewWorkFlow from './right/NewWorkFlow';
import RecentActivity from './right/RecentActivity';
import Navbar from '../components/Navbar';
function Dashboard() {
  return (
      <div className="dashboard">
        <div class='Container'>
            <div class='row'>
                <div class='col-sm-3'>
                        <Navbar/>
                </div>
                <div class='col-sm-9'>
                    <div class='row'>
                        <div class='topnav'>
                            
                        </div>
                    </div>
                    <div class='row'>
                        
                        
                        <div class='col-sm-7'>
                            <div className='left'>
                                
                                <DeployedAgents/>
                                <Test/>
                                <Chart/>
                            </div>
                        </div>
                        
                        <div class='col-sm-5'>
                            <div className='right'> 
                                <NewWorkFlow/>
                                <RecentActivity/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
  );
}

export default Dashboard;
