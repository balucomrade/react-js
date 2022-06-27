//home.js ->module
import React from 'react'

// import profile from '../../../public/assets/images/virat.jpg'

// import wallpaper from '../../../public/assets/images/virat.jpg'

var styles={
    // backgroundImage:`url(${wallpaper })`
    // backgroundImage:url( src="assets/images/virat.jpg")
    backgroundColor:'#46474f'
    
}

//create home component
function Home()
{
    
   return(<>
        <div class="jumbotron text-white" style={styles}>
            <div class="container">
             <div class="row">
              <div class="col-lg-6">
                 <h1 class="h1 pt-5 mt-5"> I AM VIRAT KOHLI</h1>
                 <h5 class="bg-success p-2 mt-3 w-75 text-center"> KING OF CRICKET RUN MACHINE</h5>
              </div>

                 <div className="col-lg-6">
                     {/* <img src={profile} className="w-75 mx-auto img-thumbnail" /> */}
                     <img src="assets/images/virat.jpg" className='w-75 mx-auto img-thumbnail'/>
                 </div>

             </div>
            </div>
        </div>
            
        </>)
}
export default Home;