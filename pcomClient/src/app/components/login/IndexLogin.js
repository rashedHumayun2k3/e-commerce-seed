import React from 'react'

export default function IndexLogin() {
  return (
    <div className="page-section mb-60">
    <div className="container">
        
          
             <div className='login'>
             <div class="login-title">
                <h3>
                    Welcome to Discount365! Please login.
                    </h3><div class="login-other"><span>New member? 
                        <a href="/user/">Register</a> here.</span></div></div>
            <div>
                <form action="#" >
                    <div className="mod-login">
                        <h4 className="login-title">Login</h4>
                        <div className="row">
                            <div className='col-md-8 col-sm-12'>
                                <div className="col-md-12 col-12 mb-20">
                                    <label>Email Address*</label>
                                    <input className="mb-0" type="email" placeholder="Email Address"/>
                                </div>
                                <div className="col-12 mb-20">
                                    <label>Password</label>
                                    <input className="mb-0" type="password" placeholder="Password"/>
                                </div>
                                <div className="col-md-4 mt-10 mb-20 text-left text-md-right">
                                <a href="#"> Forgotten pasward?</a>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                right
                            </div>
                           
                           
                          
                           
                        </div>
                    </div>
                </form>
            </div>
              
             </div>
               
           
           
       
    </div>
</div>
  )
}
