let obj={firstName:"ashik",
        lastName:"Pk",
        age:18,
        job:"unemployed",
        greet:function(){
            console.log(this.firstName);
            return  `hello ${this.firstName} ${this.lastName}`
        }
}
let res=obj.greet();
console.log(res)