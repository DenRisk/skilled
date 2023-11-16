import Category, {CategoryModel} from "../../components/category/category";
import {v4 as uuidV4} from "uuid";
import AnimationIcon from '../../assets/icon/icon-animation.svg'
import DesignIcon from '../../assets/icon/icon-design.svg'
import PhotographyIcon from '../../assets/icon/icon-photography.svg'
import CryptoIcon from '../../assets/icon/icon-crypto.svg'
import BusinessIcon from '../../assets/icon/icon-business.svg'



const categoryData: CategoryModel[] = [
    {
        icon: `${AnimationIcon}`,
        title: 'Animation',
        text: 'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
        linkText: 'Get Started'
    },
    {
        icon: `${DesignIcon}`,
        title: 'Design',
        text: 'Create beautiful, usable interfaces to help shape the future of how the web looks.',
        linkText: 'Get Started'
    },
    {
        icon: `${PhotographyIcon}`,
        title: 'Photography',
        text: 'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
        linkText: 'Get Started'
    },
    {
        icon: `${CryptoIcon}`,
        title: 'Crypto',
        text: 'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
        linkText: 'Get Started'
    },
    {
        icon: `${BusinessIcon}`,
        title: 'Business',
        text: 'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
        linkText: 'Get Started'
    }
]

const Categories = () => {
    return (
        <section className='categories full-width'>
            <div className='categories__content'>
                <h3 className='categories__description'>Check out our most popular courses!</h3>
                {categoryData.map((category => (
                    <Category key={uuidV4()} title={category.title} text={category.text} linkText={category.linkText} icon={category.icon}></Category>
                )))
                }
            </div>
        </section>
    )
}
export default Categories;