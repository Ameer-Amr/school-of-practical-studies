$(document).ready(function(){
    $("#form").validate({
        rules:{
            fname:{
                required:true,
                minlength:5
            },
            Place:{
                required:true 
            },
            gender:{
                required:true   
            },
            mail:{
                required:true,
                email: true 
            },
            contact:{
                required:true,
		        number: true,
		        minlength: 10,
		        maxlength: 10
            },
            Employment:{
                required:true
            },
            EduQualification:{
                required:true
            },
            college:{
                required:true 
            },
            YrGraduation:{
                required:true  
            },
            MoreAboutU:{
                required:true   
            },
            Ysps:{
                required:true   
            },
            WhatMotiveU:{
                required:true  
            },
            FromeWhere:{
                required:true  
            },
            checkBox:{
                required:true   
            }
        },
        submitHandler:function(form){
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbzvOkU3SvkKvJjaEtcQFCfduS_uso6xxtdwknECnOXyF69nfDDdpZPk3u_Dfb6rkC_G/exec",
                data:$("#form").serialize(),
                method:"POST",
                success:function (response){
                    alert("Message submitted successfully")
                    window.location.reload()
                },
                error:function (err){
                    alert("Something Error")
                }
            })
        }
    })
})