export interface NavbarLinksType {
  id: number;
  name: string;
  path: string;
}
export interface RoomsTypesProps {
  id: number;
  title: string;
  text: string;
}
export interface HotelRoomsInformationType {
  id: number;
  type: string;
  price?: string;
  amenities: string[];
  additional_info: string[];
  photos: string[];
  description?: string;
  reserved_dates?: string[] | null;
  capacity?: {
    basic: number;
    additional: number;
  };
}
export interface FooterLinksType {
  title : string,
  links : { name: string; path: string; }[]
}