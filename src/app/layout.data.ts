import {Section, Tabs} from './types';

const simpleSection: Section = { title: 'this has no tabs' };

const childSectionA: Section = { title: 'this is the child A of a tab'};
const childSectionB: Section = { title: 'this is the child B of a tab'};

const tabs: Tabs = { sections: [childSectionA, childSectionB]};

const sectionWithTabs: Section = {
  title: 'this section has tabs',
  tabs,
};


export const SampleAppLayout: Section[] = [
  simpleSection,
  sectionWithTabs,
];
