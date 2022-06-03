// 
const express = require('express');
const router = express.Router();


let players =[ {
    "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
    "swimming"
    ]
    },
    {
        "name": "tarun",
        "dob": "16/4/1998",
        "gender": "male",
        "city": "delhi",
        "sports": [
        "cricket"
        ]
        },
        {
            "name": "ram",
            "dob": "13/9/1994",
            "gender": "male",
            "city": "noida",
            "sports": [
            "football"
            ]
            },
            {
                "name": "shyam",
                "dob": "23/7/1997",
                "gender": "male",
                "city": "punjab",
                "sports": [
                "baseball"
                ]
                }
]
router.post("/players", function(req, res){

    let ele= req.body.let
    // if(ele.name === players.name){
    //     res.send(msg : "same name" ,  )
    // }
    players.push(ele)
    res.send({data : players , status : true})
})
module.exports = router;