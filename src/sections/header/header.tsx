import LogoDark from '../../assets/logo/logo-dark.svg'
import Button from "../../components/button/button";

const Header = () => {
    return (
        <header className='header'>
            <img src={LogoDark} alt={'Logo'}/>
            <Button type={"PRIMARY"} text={'Get Started'}/>
        </header>
    )
}

export default Header;