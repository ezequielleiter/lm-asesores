import {FC, memo} from 'react';

import {SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
// import {SkillGroup} from './Skills';
// import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <h2 className="text-2xl font-bold center" style={{textAlign: "center", marginBottom: "2rem"}}>Servicios</h2>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Radio">
          <p className="pb-8">La publicidad en la radio es una forma poderosa de llevar tu mensaje directamente a los oídos de tu público objetivo. A través de la radio, puedes llegar a una audiencia diversa y comprometida mientras realizan sus actividades diarias. </p>
        </ResumeSection>
        <ResumeSection title="TV">
          <p className="pb-8">La publicidad en televisión es una ventana hacia la creatividad y la conexión inmediata con tu audiencia. Es la oportunidad de presentar tu marca, producto o servicio en una plataforma visual y auditiva que capta la atención y despierta emociones.</p>
        </ResumeSection>
        <ResumeSection title="Vía Publica">
          <p className="pb-8">A medida que las personas transitan por calles, avenidas y plazas, tu publicidad se convierte en una parte integral de su entorno, capturando su atención y dejando una impresión duradera.</p>
        </ResumeSection>
        <ResumeSection title="Gráfica">
          <p className="pb-8">La publicidad gráfica es la forma de arte que transforma ideas en imágenes cautivadoras. Es la oportunidad de contar historias visuales que resuenan con tu público objetivo y de transmitir el espíritu de tu marca en un solo vistazo.</p>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
