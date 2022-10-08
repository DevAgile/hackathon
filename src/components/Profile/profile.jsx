
import "./profile.css";
var NewComponent = React.createClass({
    render: function () {
        return (
            <div>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Profile</title>
                <link rel="stylesheet" href="Profile.css" />
                {/* CSS only */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
                <div className="d-flex">
                    <form className=" col-lg-6">
                        {/* ========heading of profile===  */}
                        <div className="heading">
                            <h1 className=" mt-5 text-center font-weight-bold title">Profile</h1>
                        </div>
                        <div className=" mx-5 mt-5 form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div><br />
                        {/* <div class="mx-5 ">
          <label for="exampleInputEmail1" >Governmnet id</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="">
         
        </div> */}
                        <div className="mx-5 ">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="mx-5 my-4">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        {/* <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
                        <div className=" mx-5 form-group">
                            <label htmlFor="exampleFormControlTextarea1">Example </label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                        </div>
                        <button type="submit" className=" m-5 btn btn-primary">Submit</button>
                        {/* <div class="button">
          <button class="btn" value="Login" id="submit" onclick="validate()" > Submit </button>
       </div> */}
                    </form>
                    {/* =====photo=== */}
                    <form className="profile-img col-lg-6">
                        <div className=" form-group">
                            {/* <label for="exampleFormControlFile1">Profile pic</label> */}
                            <h4 className="mb-3 font-weight-bold title" style={{ textDecoration: 'dashed' }}>Profile Pic</h4>
                            <div className=" rounded-circle  photo" placeholder="siughg" />
                            <input type="file" className="mt-2 form-control-file" id="exampleFormControlFile1" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});