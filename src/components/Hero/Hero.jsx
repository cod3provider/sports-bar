import Table from '../Table/Table';
import './Hero.module.scss'


const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className='container'>
                    <div>

                        <div className='heroBoxText'>
                            <h1 className='title'>Come on in and
                                have a Great Time!</h1>
                            <p className='text'>Book your seat, enjoy with 25% off pre-booking.</p>
                        </div>
                        <button className="button" type='button'>Book a table <span>*</span></button>
                        <div>
                            <Table />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;