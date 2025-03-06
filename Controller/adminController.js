const path = require('path');


let admin_data={


    "dashboards":{
    
    
    "active_user_count":34,
    "total_user_count":200,
    "restaurents_list": [{
        name: "Spice Delight",
        amount: 1200,
        location: "New York, NY",
        date: "2025-02-20"
      },
      {
        name: "The Food Hub",
        amount: 850,
        location: "Los Angeles, CA",
        date: "2025-02-18"
      },
      {
        name: "Tasty Treats",
        amount: 950,
        location: "Chicago, IL",
        date: "2025-02-15"
      },
      {
        name: "Gourmet Bites",
        amount: 1500,
        location: "Houston, TX",
        date: "2025-02-10"
      },
      {
        name: "Savor Street",
        amount: 700,
        location: "San Francisco, CA",
        date: "2025-02-05"
      }
    ]
    
    
    
    }
    
    
    
    
    }
    



exports.getAdminDashboard = (req,res)=>{

    //res.sendFile(path.join(__dirname,'..','Views','index.html'));
    
    res.render(path.join(__dirname,'..','Views','Admin_Dashboard'),admin_data.dashboards);
 };