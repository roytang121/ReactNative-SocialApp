export type TabId = string;

export interface ITabNavigatorState {
  tabs: ITab[];
  activeTab: TabId;
}

export interface ITab {
  id: TabId;
}
