import React from 'react';
import ProfileCard from './ProfileCard';
import iara from '../../assets/img/Picture (8).png';
import empleado1 from '../../assets/img/Picture (2).png';
import empleado2 from '../../assets/img/Picture (6).png';

const About = () => {
    return (
      <div className="container mx-auto my-16 px-4">
        <h2 className="text-center text-3xl font-bold mb-8">Quienes Somos</h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Somos un equipo dedicado a ayudarte a gestionar tus gastos de manera simple y eficaz.
        </p>

        <div className="grid gap-8 justify-center" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <ProfileCard
            name="Iara Roldan"
            title="CEO y Founder"
            description="+10 años de experiencia liderando equipos de desarrollo de software en startups."
            profileImage={iara}
            linkedInLink="https://linkedin.com/in/juandoe"
          />
          <ProfileCard
            name="Maria Lopez"
            title="Directora de Operaciones"
            description="7+ años de experiencia en gestión de proyectos y liderazgo de equipos."
            profileImage={empleado1}
            linkedInLink="https://linkedin.com/in/marialopez"
          />
          <ProfileCard
            name="Juan Doe"
            title="Principal Engineer"
            description="10+ años de experiencia en desarrollo de software."
            profileImage={empleado2}
            linkedInLink="https://linkedin.com/in/juandoe"
          />
        </div>
      </div>
    );
};

export default About;
