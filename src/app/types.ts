export interface Section {
  title: string;
  tabs?: Tabs;
}

export interface Tabs {
  sections: Section[];
}
