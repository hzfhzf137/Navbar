import React from "react";

const Logo=()=>
{
    return(
        <React.Fragment>   {/* using react fragment as wrapper */}

            <img width="150" height="150" src="https://techoverflow.io/wp-content/uploads/2023/06/LOGO-768x316.png" 
            alt="" srcset="https://techoverflow.io/wp-content/uploads/2023/06/LOGO-768x316.png 768w, 
            https://techoverflow.io/wp-content/uploads/2023/06/LOGO-300x123.png 300w, 
            https://techoverflow.io/wp-content/uploads/2023/06/LOGO-1024x421.png 1024w, 
            https://techoverflow.io/wp-content/uploads/2023/06/LOGO.png 1170w" />    {/* img of company logo */}

        </React.Fragment>
    )

}

export default Logo;