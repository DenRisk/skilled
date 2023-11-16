import Button from "../../components/button/button";
import Image_Mobile from "../../assets/image/image-hero-mobile@2x.webp"
import Image_Tablet from "../../assets/image/image-hero-tablet.webp"
import Image_Desktop from "../../assets/image/image-hero-desktop.webp"


const Introduction = () => {
    return (
        <section className='introduction'>
            <div className='introduction__content'>
                <h1 className='introduction__heading'>Maximize skill, minimize budget</h1>
                <p className='introduction__text'>Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
                <Button type={"GRADIENT_01"} text={'Get Started'}/>
            </div>
            <div className='introduction__imageContainer'>
                <img className='introduction__image--mobile' src={Image_Mobile} alt={'Portrait'}/>
                <img className='introduction__image--tablet' src={Image_Tablet} alt={'Portrait'}/>
                <img className='introduction__image--desktop' src={Image_Desktop} alt={'Portrait'}/>
            </div>
        </section>
    )
}

export default Introduction;