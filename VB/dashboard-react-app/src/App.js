import './App.css';
import React, { useState } from 'react';
import {DashboardControl} from 'devexpress-dashboard-react';
import Button from 'devextreme-react/button';
import Popup from 'devextreme-react/popup';

function App() {
  const store = [
    {"id": "support", "name": "Support Traffic"},
    {"id": "products", "name": "Product Details"},
  ];
  const dashboardEndpoint = `http://localhost:5000/api/dashboard`

  const [state, setState] = useState({ dashboardInfo: store[0], popupVisible: false  })

  const renderDashboard = () => {
    return <DashboardControl
    style={{ height:'100%', display: 'block', width: '100%' }}
    dashboardId = {state.dashboardInfo.id}
    workingMode = 'ViewerOnly'
    endpoint= { dashboardEndpoint }>
  </DashboardControl>
  }

  return (    
    <div>
      <p>Click one of the buttons below to display a dashboard in the popup window:</p>
      <Button text="Show Support Dashboard" onClick={ () => { setState(prevState => ({...prevState, dashboardInfo: store[0], popupVisible: true })) }}></Button>
      <Button text="Show Products Dashboard" onClick={ () => { setState(prevState => ({...prevState, dashboardInfo: store[1], popupVisible: true })) }}></Button>
      <Popup
          visible={state.popupVisible}
          title={state.dashboardInfo.name}
          contentRender =  {renderDashboard}
          onHiding = { () => { setState(prevState => ({...prevState, popupVisible: false })) }}>
        </Popup>
  </div>
  );
};

export default App;