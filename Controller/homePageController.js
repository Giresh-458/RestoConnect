
const path = require('path');

let home_page_data ={

     restaurants_data : [
        {
          name: "The Gourmet Spot",
          image: "/images/h1.jpeg",
          rating: 4.5,
          location:"chennai"
        },
        {
          name: "Spicy Delights",
          image: "/images/h1.jpeg",
          rating: 4.7,
          location:"chennai"
        },
        {
          name: "Urban Bites",
          image: "/images/h1.jpeg",
          rating: 4.3,
          location:"chennai"
        },
        {
          name: "Ocean Feast",
          image: "/images/h1.jpeg",
          rating: 4.8,
          location: "tada"
        },
        {
          name: "Grill House",
          image: "/images/h1.jpeg",
          rating: 4.6,
          location: "hyderabad"
        }
      ]


}


exports.getHomePage = (req,res)=>{
    var arr = home_page_data.restaurants_data.filter(r => true);
  res.render(path.join(__dirname,'..','Views','home_page'),{arr});
  };


 exports.putHomePage = (req,res)=>{

    const {city_option_home: loco,name_resaurent:name2} = req.body;
    console.log(loco);
    var arr = home_page_data.restaurants_data.filter(r => r.location.trim().toLowerCase() === loco.trim().toLowerCase() && r.name.trim().toLowerCase() === name2.trim().toLowerCase());

res.render(path.join(__dirname,'..','Views','home_page'),{arr});
};