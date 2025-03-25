import swiperMain from "./modules/slider";
import sideBar from "./modules/sidebar";
import numberLive from "./modules/numberLive";
document.addEventListener(`DOMContentLoaded`, () =>{
    try{
        swiperMain();

        sideBar();

        numberLive();
    } catch(e){}
    
});