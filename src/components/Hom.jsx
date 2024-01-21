import React from 'react';
import './home.css';
import aimzLogo from './images/aimz.png';
import techn from './images/tech.jpg';
import graph from './images/gra.jpg'
import office from './images/OFF.jpg';
// import Footers from './footer';

const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <br /><br />
        <br /><br />
        <img src={aimzLogo} alt="AIMZ Technical Institute Logo" />
        <h1>AIMZ TECHNICAL INSTITUTE, DEPALPUR</h1>
      </header>

      <section className="intro">
       <b> <p>Welcome to AIMZ Technical Institute, where excellence meets education.</p></b>
        <p>
          AIMZ Technical Institute in Depalpur is renowned for its commitment to providing high-quality technical education and fostering a culture of excellence. With a mission to empower students with the skills and knowledge required for successful careers, AIMZ Tech stands out for its proficiency in various subjects. The institute's curriculum is designed to be comprehensive and industry-relevant, ensuring that students not only grasp theoretical concepts but also acquire practical, hands-on experience. The faculty at AIMZ Tech comprises seasoned professionals and experts in their respective fields, dedicated to imparting not just academic knowledge but also instilling a passion for continuous learning. The institute's commitment to excellence is reflected in the success stories of its graduates, who enter the workforce well-prepared and equipped with the skills needed to make a significant impact in the ever-evolving technological landscape. AIMZ Technical Institute, Depalpur, stands as a beacon of quality education, producing graduates who are not only proficient in their subjects but also well-prepared for the challenges of the professional world..
        </p>
      </section>


      <section className="courses">
        <h2>Our Courses</h2>
        <div className="course-card">
        <div className='pic'>
        <h1>MS OFFICE MANAGEMENT | COMPUTER APPLICATION</h1>
            <img className='pic1' src={office} alt="" />
            </div>
           
            <p>AIMZ Technical Institute in Depalpur is committed to providing top-notch education, particularly in the domain of MS Office skills. Students at AIMZ Tech benefit from a comprehensive and hands-on learning experience that equips them with proficiency in various MS Office applications, such as Word, Excel, and PowerPoint. The institute takes pride in its dedicated trainers, Sir Rao Fahad Ali and Sir Ali Ahmad, who bring a wealth of knowledge and expertise to their master classes. These experienced educators not only impart theoretical understanding but also share practical insights gained through real-world applications. Their master classes go beyond the conventional curriculum, offering students a deep understanding of MS Office tools and techniques. As a result, graduates from AIMZ Tech possess not only the technical skills required for effective use of MS Office but also the confidence to apply these skills in professional settings. AIMZ Technical Institute, under the guidance of trainers like Sir Rao Fahad Ali and Sir Ali Ahmad, ensures that students receive a quality education that prepares them for success in the dynamic world of MS Office applications.</p>
        
            <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
          <div className='pic'>
            <img className='img2' src={techn} alt="" />
          </div>

          <h3>Web Development</h3>
          <p>AIMZ Technical Institute in Depalpur takes pride in offering top-notch education in the field of web development, with a particular focus on honing the skills of its students. At the forefront of this endeavor is the highly esteemed trainer, Sir Rao Fahad Ali. With a wealth of experience and expertise in web development, Sir Rao Fahad Ali brings a dynamic approach to the classroom, fostering an environment of innovation and creativity. His commitment to providing quality education is evident in the institute's master classes, where students delve into advanced topics, gain hands-on experience, and develop a profound understanding of the intricacies of web development. The master classes at AIMZ Tech serve as a platform for aspiring web developers to refine their skills, stay abreast of industry trends, and graduate with a mastery that sets them apart in the competitive tech landscape. Under the guidance of Sir Rao Fahad Ali, AIMZ Technical Institute ensures that its students receive not only theoretical knowledge but also practical insights, preparing them for successful careers in the ever-evolving field of web development.</p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="course-card">
          <h3>Graphic Designing</h3>
          <div>
            <img src={graph} alt="" />
          </div>
          <p>Welcome to the vibrant world of Graphic Designing at AIMZ Technical Institute, Depalpur. Our Graphic Designing program is crafted to ignite creativity and equip students with the skills to bring their artistic visions to life. Led by experienced instructors with a passion for design, our curriculum blends theory with hands-on practice to ensure a comprehensive understanding of design principles, color theory, typography, and industry-standard tools. At AIMZ Tech, we go beyond conventional teaching methods and encourage students to explore their creative boundaries. Through practical projects, workshops, and exposure to real-world design scenarios, our students develop a strong foundation in graphic design. Our commitment to excellence is reflected in our state-of-the-art facilities and a learning environment that nurtures innovation. Whether you are a budding designer or seeking to enhance your graphic design skills, AIMZ Technical Institute is your gateway to a world of artistic possibilities and professional success. Join us on this creative journey and let your imagination flourish.</p>
        </div>
        {/* Add more course cards as needed */}
      </section>
      <br />
      <br />
      <br />
      <br />

      <section className="contact">
        <h2>Contact Us</h2>
        <p className='pp'>If you have any questions or inquiries, feel free to contact us:</p>
        <p className='pp'>Email: aimzacademyandtrainingcenter@gmail.com</p>
        <p className='pp'>Admin contact: 0328-7498352</p>
        <p className='pp'>Principal: 0304-4181352</p>
        <p className='pp'>Complaint: 0309-6074062</p>
      </section>

      <section>
        {/* <Footers /> */}
      </section>
    </div>
  );
};

export default HomePage;
