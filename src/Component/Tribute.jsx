import Container from '../Component/Layout/Container'
import logo from '../assets/jobs-2.jpg'
const Tribute = () => {
    return (
        <div>
            <section style={{
                backgroundImage: `url(${logo})`,
                width: '100%',
                height: '100vh',
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}>
                <Container>
                    <div className='ml-10 md:ml-0 pt-[250px] md:pt-[350px]'>
                        <p className='text-white text-[30px]  md:text-[50px] font-medium font-edu'>
                            Design is not just what it <br />
                            looks like and feels like. <br />
                            Design is how its works .
                        </p>
                        <h1 className='text-white mt-5 md:mt-10 ml-10 md:ml-[150px] text-[22px] md:text-[30px] font-medium font-edu '>Steve Jobs <br /> 1955-2011</h1>
                    </div>
                </Container>
            </section>

            <section >
                <Container >
                    <div className='text-white m-auto flex flex-col items-center pb-10  '>
                        <h1 className=' py-10 text-[40px] font-medium font-edu '>Biography</h1>
                        <p className=' w-3/4 md:w-2/4 text-[20px] font-medium font-edu text-center'>
                            Steve Jobs was an American entrepreneur and inventor, best known as the co-founder of Apple Inc. Born on February 24, 1955, in San Francisco, California, he was adopted by Paul and Clara Jobs. Jobs briefly attended Reed College before dropping out, but his interest in technology led him to co-found Apple with Steve Wozniak in 1976. The company revolutionized the tech industry with products like the Macintosh, iPod, iPhone, and iPad.

                            Jobs was ousted from Apple in 1985, founded NeXT, and later returned to Apple in 1997, leading it to unprecedented success. He also played a key role in the success of Pixar Animation Studios. Jobs was known for his visionary approach and focus on design and user experience. He passed away on October 5, 2011, due to pancreatic cancer, leaving behind a lasting legacy in technology and innovation.</p>

                    </div>

                    <hr />

                    <div>
                        <p className='text-white text-center py-8'>Made with by || <a href="https://github.com/masudrana-dev" className='text-blue-600'>Masud Rana</a></p>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Tribute