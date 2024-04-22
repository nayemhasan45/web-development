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
// part 2
let students = {
    2222:{
        name:"jack",
        section: 'c',
        class: 'ix',
        adress:{
            "building no":12,
            "street":"lalal",
            "city":"peterburg",
            "country":'uk'
        }
    },
    3333:{
        name:'herry',
        section : 'd',
        class:'x',
        adress:{
            "building no":85,
            "street":'dc road',
            'city':'kakka',
            'country':'bd',
        }
    }
}
console.log(students[2222].adress.city);
console.log(students[3333].name)