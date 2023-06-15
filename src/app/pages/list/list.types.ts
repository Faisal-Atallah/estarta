export interface List {
  data: ListItem[];
}

export interface ListItem {
  id: string;
  name: string;
  checked: boolean;
}
