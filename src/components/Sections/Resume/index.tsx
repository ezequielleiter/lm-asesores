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
          <p className="pb-8">Here you can show a snapshot of your skills to show off to employers</p>
        </ResumeSection>
        <ResumeSection title="TV">
          <p className="pb-8">Here you can show a snapshot of your skills to show off to employers</p>
        </ResumeSection>
        <ResumeSection title="Vía Publica">
          <p className="pb-8">Here you can show a snapshot of your skills to show off to employers</p>
        </ResumeSection>
        <ResumeSection title="Gráfica">
          <p className="pb-8">Here you can show a snapshot of your skills to show off to employers</p>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
