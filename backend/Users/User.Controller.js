const mongoose = require('../DBSchema/SchemaMapper');
const Users = mongoose.model('users');

var UsersController = function(){

    this.Insert = (data)=>{
                return new Promise((resolve,reject)=>{
                    let user = new Users({

                        firstName : data.firstName,
                        lastName : data.lastName,
                        email: data.email,
                        mobileNumber: data.mobileNumber,
                        address:data.address,
                        password:data.password,
                        type:data.type

                    });
                    user.save().then(()=>{
                        resolve({status:200,message:'success'});
                    }).catch((err)=>{
                        reject({status:500,message:'user creation failed due to Error: '+err});
                    });
                })
            
    };

    this.retrieve = ()=>{
 
            return new Promise((resolve,reject)=>{
                Users.find().then((data)=>{
                    resolve({status:200,message:data});
                }).catch((err)=>{
                    reject({status:500,message:'No data to be found. Error: '+err});
                })
            })
        }

    
    this.retrieveByID = (id)=>{
        return new Promise((resolve,reject)=>{
            Users.findById(id).then((data)=>{
                resolve({status:200,message:data});
            }).catch((err)=>{
                reject({status:500,message:'No data to be found. Error: '+err});
            })
        });
    };

    this.retrieveByEmailPw=(data)=>{
        return new Promise((resolve,reject)=>{
            Users.find({email:data.email,password:data.pw}).then((data)=>{
                resolve({status:200,message:data});
            }).catch((err)=>{
                reject({status:500,message:'No data to be found. Error: '+err});
            })
        });
    };

this.update = (id,data)=>{
    return new Promise((resolve,reject)=>{

        let user={
            firstName : data.firstName,
            lastName : data.lastName,
            email: data.email,
            mobileNumber: data.mobileNumber,
            address:data.address,
            password:data.password,
            type:data.type

        };
        Users.findByIdAndUpdate({_id: id},user).then(()=>{
            resolve({status:200,message:'success'});
        }).catch((err)=>{
            console.log(err)
            reject({status:500,message:'User updating failed due to Error: '+err});
        });
    })

};
}

module.exports = new UsersController();