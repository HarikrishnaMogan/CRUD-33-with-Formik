import {Formik,Form,Field,ErrorMessage} from "formik";
function ProfileEdit(props)
{
 
    const textcheck = /^[a-z ,.'-]+$/i;
    // eslint-disable-next-line no-useless-escape
    const validateEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   
    return(
        <>
        <Formik
        initialValues={
            {
                name:props.name,
                email:props.email,
                country:props.country,
                company:props.company,
                city:props.city,
                address:props.address
            }
        }
        validate={(values)=>{
            const errors={};
            //name errors
            if(values.name.length===0)
             {
                errors.name="*Required"
             }
            else if(values.name.length < 5)
            {
                errors.name="*Name should have atleast 4 characters"
            }
            else if(!textcheck.test(values.name))
            {
                errors.name="*should not contain Special characters and Numbers"
            }
            //email errors
            if(values.email.length===0)
             {
                errors.email="*Required"
             }
            else if(!validateEmail.test(values.email))
            {
                errors.email ="*Email is Invalid"
            }
            //country errors
            if(values.country.length===0)
             {
                errors.country="*Required"
             }
            else if(values.country.length < 4)
            {
                errors.country="*Country should have atleast 3 characters"
            }
            else if(!textcheck.test(values.country))
            {
                errors.country="*should not contain Special characters and Numbers"
            }
            //company errors
            if(values.company.length===0)
             {
                errors.company="*Required"
             }
            else if(!textcheck.test(values.company))
            {
                errors.company ="*should not contain Special characters and Numbers"
            }
            //city errors
            if(values.city.length===0)
             {
                errors.city="*Required"
             }
            else if(values.city.length < 4)
            {
                errors.city="*City should have atleast 3 characters"
            }
            else if(!textcheck.test(values.city))
            {
                errors.city="*should not contain Special characters and Numbers"
            }
            //address errors
            if(values.address.length===0)
             {
                errors.address="*Required"
             }
            else if(values.address.length < 11)
            {
                errors.address="*address should have atleast 10 characters"
            }
           
            return errors;
        }}

        onSubmit={(values)=>{
           console.log(values);
           props.putuser(values);
        }}
        enableReinitialize //to update form using setstate
        >
         {()=>{
             return(

                <div className="card editcard mx-auto mb-5 createuser" >
            <div className="card-body">
             <Form className="form">
                 <div className="form-group">
                    <label className="font-weight-bold">Name:</label><br/>
                    <Field className="form-control" type="text" placeholder="UserName"
                    name="name"
                    />
                    <ErrorMessage name="name" className="text-danger" component="div"/>
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Email:</label><br/>
                    <Field className="form-control" type="email" placeholder="Email"
                    name="email"
                    />
                     <ErrorMessage name="email" className="text-danger" component="div"/>
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Company:</label><br/>
                    <Field className="form-control" type="text" placeholder="Company"
                    name="company"
                    />
                     <ErrorMessage name="company" className="text-danger" component="div"/>
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Country:</label><br/>
                    <Field className="form-control" type="text" placeholder="Country"
                    name="country"
                    />
                     <ErrorMessage name="country" className="text-danger" component="div"/>
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">City:</label><br/>
                    <Field className="form-control" type="text" placeholder="City"
                    name="city"
                    />
                     <ErrorMessage name="city" className="text-danger" component="div"/>
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Address:</label><br/>
                    <Field className="form-control" type="text" placeholder="Address" 
                    name="address"
                    />
                     <ErrorMessage name="address" className="text-danger" component="div"/>
                </div>
               
                <br/>
                <div className="text-center">
                <button className="mx-auto btn btn-primary" type="submit">Submit</button>
                </div>
             </Form>
            </div>
        </div>
             );
         }}   
        
        </Formik>
        </>
    );
}

export default ProfileEdit;