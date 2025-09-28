
import './ProfileCard.css'
import ProfilePic from '../assets/images/profile-picture.png';
import { Linkedin, Twitter, Youtube } from 'lucide-react';

export function ProfileCard(props) {
    const defaultTestimonial = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    let { name = 'Elon Musk', title = 'CEO of Tesla, SpaceX', bio = '', profilePic = ProfilePic, twitterLink, discordLink, linkedInLink } = props;

    bio = (bio.length > 0) ? bio : defaultTestimonial;

    return (
        <div className='profile-container'>
            <img className='profile-pic' src={profilePic} />
            <div><b>{title}</b></div>
            <div className='bio'>{bio}</div>
            <button className='contact-me-button'><a href="mailto:EMAILADDRESS" />
                Contact Me</button>
            <div className='social-links-row'>
                <Linkedin color="blue" />
                <Twitter color="blue" />
                <Youtube color="blue" />
            </div>
        </div>
    )
}