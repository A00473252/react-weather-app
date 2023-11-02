import photo from './pic1.jpeg';

export function AboutMe() {
    return (
    <> 
        <div> 
            <img src={ photo } alt = "yes, that's me"/> 
            <h1> Hey! I'm Subhiksha </h1>
            <p> I currently live in Halifax, Nova Scotia but my heart is still in my hometown, Chennai. 
                I'm a capricorn with a love for food, cloud and pretty little things.
            <br></br> 
                I worked as a Datawarehouse Developer for 2 years for a merchant banking client 
                and got to experience the best time by dealing with data and creating reports out of it. 
                I realised that this is a domain that I never not want to be a part of. 
                In the want of being a data analyst, I stumbled upon this course, 
                MCDA which provides all the skills that I'd need to be a good data analyst.
            </p>
        </div>
    </>
    );
}