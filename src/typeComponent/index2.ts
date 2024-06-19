export interface TNavbarItem {
    href1: string;
    label1: string;
    icon1: string;
    children1?: TChildren1[];
    href2: string;
    label2: string;
    children2: TChildren2[];
    href3: string;
    label3: string;
    href4: string;
    label4: string;
    href5: string;
    label5: string;
    href6: string;
    label6: string;


  }

  interface TChildren1{
    icon: string;
    href1: string;
    label1: string;
  }

  interface TChildren2 {
    href2: string;
    label2: string;
  }