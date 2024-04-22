let data={
    Shophia:{
        id:33,
        study:[
            {
                primary:[
                    {school_name:"abc primary"},
                    {location:"peter burg"}
                ]
            },
            {
                secondary:[
                    {school_name:'lala'},
                    {location:'st lorence'}
                ]
            },
        ]
    }
}
console.log(data.Shophia.study[1].secondary[1].location);
