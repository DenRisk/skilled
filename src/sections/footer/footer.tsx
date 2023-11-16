import LogoLight from "../../assets/logo/logo-light.svg";
import Button from "../../components/button/button";

const Footer = () => {
    return (
        <section className='footer full-width'>
            <div className={'footer__content'}>
                <img src={LogoLight} alt={'Logo'}/>
                <Button type={"GRADIENT_02"} text={'Get Started'}/>
            </div>
        </section>
    )
}
export default Footer;