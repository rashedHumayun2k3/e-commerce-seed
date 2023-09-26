import Image from 'next/image'
import HeaderTopBar from '@/app/components/header/HeaderTopBar';
import HeaderMiddleBar from '@/app/components/header/HeaderMiddleBar';
import HeaderBottomBar from '@/app/components/header/HeaderBottomBar';
import ReadRouteParameterQuery from '@/app/components/url-processing/ReadRouteParameterQuery';

const Header = () => {
    return (
      <>
        <ReadRouteParameterQuery/>
        <HeaderTopBar/>
        <HeaderMiddleBar/>
        <header>
            <HeaderBottomBar/>
            <div className="mobile-menu-area d-lg-none d-xl-none col-12">
                <div className="container"> 
                    <div className="row">
                        <div className="mobile-menu">
                        </div>
                    </div>
                </div>
            </div>
        </header>
       
      </>
       
    )
}

export default Header;