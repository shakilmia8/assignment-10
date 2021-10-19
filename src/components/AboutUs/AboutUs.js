import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const aboutBanner = 'https://media.smallbiztrends.com/2019/04/About-Us.png';
    return (
        <div className='about-container'>
            <img src={aboutBanner} alt="" />
            <div className='about'>
                <h2>Our Mission</h2>
                <p>Cedars-Sinai is a nonprofit, independent healthcare organization committed to improving the health status of the communities we serve through:

                    Leadership and excellence in delivering quality healthcare services
                    Expanding the horizons of medical knowledge through biomedical research
                    Educating and training physicians and other healthcare professionals
                    Improving the health status of the community
                    Quality patient care is our priority. Providing excellent clinical and service quality, offering compassionate care, and supporting research and medical education are essential to our mission. This mission is founded in the ethical and cultural precepts of the Judaic tradition, which inspire devotion to the art and science of healing and to the care we give our patients and staff.</p>

                <h2>Our Vision</h2>
                <p>Cedars-Sinai will continue as the leading healthcare organization in Los Angeles, while enhancing its position as a recognized leader among the nation’s most respected, admired, and trusted healthcare organizations. In fulfilling this role, Cedars-Sinai will:

                    Demonstrate national leadership in providing high value healthcare and delivering excellent clinical quality, patient safety, and service
                    Drive transformation and innovation in care delivery, and more fully engage our patients in their wellness and care
                    Advance the frontiers of medicine and science through a major ongoing commitment to biomedical research and medical education
                    Expand and strengthen its regional, national, and international position as a model health system that delivers high value services at all sites of care, including physical interactions in physician offices and clinics, ambulatory and outpatient centers, and inpatient facilities, as well as through electronic and other remote linkages
                    To achieve this, Cedars-Sinai will:
                    Attract and enhance relationships with the best and most respected physicians, scientists, nurses, other healthcare professionals and staff, sharing institutional commitments to leadership, quality, and value
                    Reach out to a broader and more diverse Los Angeles community, serving as a model for other healthcare organizations in providing a wide range of community benefit and community service programs
                    Provide superior facilities, as well as leading edge medical and information technology
                    Maintain a secure financial base including a growing endowment, enhancing Cedars-Sinai’s long term ability to achieve its Mission and Vision
                    Consider partnerships and affiliations with other leading high quality healthcare organizations and other industry participants</p>

                <h2>Our Values</h2>
                <p>In the pursuit of this vision, the actions of leadership, staff and other physicians will be guided by the following values:
                </p>
                <ul>
                    <li>Integrity</li>
                    <li>Excellence</li>
                    <li>Teamwork and collaboration</li>
                    <li>Respect</li>
                    <li>Compassion</li>
                    <li>Innovation</li>
                    <li>Stewardship</li>
                    <li>Efficiency</li>
                    <li>Diversity</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;