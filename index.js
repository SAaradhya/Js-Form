function submitdata(){

// event.preventDefault();
    console.log(simpleform);

    let user={
        Firstname:simpleform.fname.value,
        Lastname:simpleform.lname.value,
        Email:simpleform.email.value,
        Phonenumber:simpleform.phnum.value,
        Address:simpleform.Address.value,
        City:simpleform.city.value,
        Gender:simpleform.gender.value
    }

    console.log(`This is user'name : ${user.Firstname} ${user.Lastname},
     user's email ID : ${user.Email}, 
     user's phonenumber : ${user.Phonenumber},
     user's Address  :  ${user.Address} ${user.City} `)

}                       