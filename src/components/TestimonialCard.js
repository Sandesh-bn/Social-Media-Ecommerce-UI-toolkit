
import './TestimonialCard.css'
import ProfilePic from '../assets/images/profile-picture.png';


export function TestimonialCard({ name = 'Elon Musk', userName = '@elonmusk', profilePic = ProfilePic, testimonial = ''}){
    const defaultTestimonial = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    testimonial = (testimonial.length > 0)? testimonial: defaultTestimonial;

    return(
        <div className='testimonial-container'>
            <div className='user-row'>
                <img className='profile-picture' src={profilePic}/>
                <div>
                    <b className='testimonial-name'>{name}</b>
                    <div className='testimonial-username'>{userName}</div>
                </div>
            </div>
            <div>
                <div className='testimonial-content'>{testimonial}</div>
            </div>
        </div>
    )
}