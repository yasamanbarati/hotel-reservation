import {
  HotelRoomsInformationType,
  NavbarLinksType,
  RoomsTypesProps,
} from "scenes/_slice/type";

export const links: NavbarLinksType[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "services",
    path: "/services",
  },
  {
    id: 3,
    name: "Rooms",
    path: "/rooms",
  },
];

export const specialSaleData = [
  {
    img: "/images/hotel1.webp",
    rows: 2,
    cols: 2,
  },
  {
    img: "/images/hotel2.webp",
    rows: 1,
    cols: 2,
  },
  {
    img: "/images/hotel3.webp",
    rows: 1,
    cols: 2,
  },
];

export const RoomsTypes: RoomsTypesProps[] = [
  {
    id: 1,
    title: "Standard room",
    text: "floors 3 to 24",
  },
  {
    id: 2,
    title: "Junior Suite",
    text: "floors 3 to 24",
  },
  {
    id: 3,
    title: "Royal suite",
    text: "the 22nd and 23rd floors",
  },
  {
    id: 4,
    title: "Duplex suite",
    text: "the 24th floor",
  },
  {
    id: 5,
    title: "Presidential suite",
    text: "the 24th floor",
  },
];
export const HotelRooms: HotelRoomsInformationType[] = [
  {
    id: 1,
    type: "Standard Room",
    price: "$100",
    amenities: ["Queen bed", "TV", "Mini-bar", "Free WiFi"],
    additional_info: ["250 sq ft", "Up to 2 guests"],
    photos: [
      "/images/hotel1.webp",
      "/images/Photo.png",
      "/images/Photo (1).png",
    ],
    description:
      "Our cozy Standard Room is perfect for couples or solo travelers looking for a comfortable stay. Enjoy a queen bed, TV, mini-bar, and free WiFi in this room.",
    reserved_dates: ["2024-01-15", "2024-02-20", "2024-03-05"],
  },
  {
    id: 2,
    type: "Junior Suite",
    price: "$200",
    amenities: ["King bed", "Living area", "Balcony", "Room service"],
    additional_info: ["400 sq ft", "Up to 3 guests"],
    photos: [
      "/images/hotel2.webp",
      "/images/Photo.png",
      "/images/Photo (2).png",
    ],
    description:
      "Experience luxury in our Junior Suite, featuring a spacious living area, king bed, balcony with a view, and room service for your convenience.",
    reserved_dates: ["2024-03-25", "2024-04-10"],
  },
  {
    id: 3,
    type: "Royal Suite",
    price: "$300",
    amenities: [
      "Four-poster bed",
      "Dining area",
      "SPA bath",
      "Private terrace",
    ],
    additional_info: ["600 sq ft", "Up to 4 guests"],
    photos: [
      "/images/hotel3.webp",
      "/images/Photo.png",
      "/images/Photo (3).png",
    ],
    description:
      "Indulge in opulence with our Royal Suite, offering a four-poster bed, dining area, SPA bath, and a private terrace for a truly luxurious stay.",
    reserved_dates: ["2024-01-15", "2024-02-20", "2024-03-05"],
  },
  {
    id: 4,
    type: "Duplex Suite",
    price: "$400",
    amenities: ["Kitchenette", "Two bedrooms", "Fireplace", "Jacuzzi"],
    additional_info: ["800 sq ft", "Up to 6 guests"],
    photos: [
      "/images/Photo (4).png",
      "/images/hotel2.webp",
      "/images/Photo.png",
    ],
    description:
      "Our Duplex Suite is perfect for families or groups, featuring two bedrooms, a kitchenette, fireplace, and a relaxing Jacuzzi for your enjoyment.",
    reserved_dates: ["2024-04-05", "2024-05-15"],
  },
  {
    id: 5,
    type: "President Suite",
    price: "$500",
    amenities: [
      "Master bedroom",
      "Home cinema",
      "Private elevator",
      "Wrap-around balcony",
    ],
    additional_info: ["1000 sq ft", "Up to 8 guests"],
    photos: [
      "/images/Photo (3).png",
      "/images/hotel2.webp",
      "/images/Photo.png",
    ],
    description:
      "Experience lavish comfort in our President Suite, offering a master bedroom, home cinema, private elevator, and a wrap-around balcony with stunning views.",
    reserved_dates: ["2024-03-25", "2024-04-10"],
  },
  {
    id: 6,
    type: "Standard Room",
    price: "$130",
    amenities: ["Queen bed", "TV", "Free WiFi"],
    additional_info: ["230 sq ft", "Up to 2 guests"],
    photos: [
      "/images/Photo (2).png",
      "/images/hotel2.webp",
      "/images/Photo.png",
    ],
    description:
      "Our cozy Standard Room is perfect for couples or solo travelers looking for a comfortable stay. Enjoy a queen bed, TV, mini-bar, and free WiFi in this room.",
    reserved_dates: ["2024-05-10", "2024-05-25", "2024-06-10"],
  },
  {
    id: 7,
    type: "Junior Suite",
    price: "$240",
    amenities: ["King bed", "Living area", "Balcony", "Room service"],
    additional_info: ["380 sq ft", "Up to 3 guests"],
    photos: [
      "/images/hotel3.webp",
      "/images/Photo.png",
      "/images/Photo (4).png",
    ],
    description:
      "Experience lavish comfort in our President Suite, offering a master bedroom, home cinema, private elevator, and a wrap-around balcony with stunning views.",
    reserved_dates: ["2024-04-05", "2024-05-15"],
  },
  {
    id: 8,
    type: "Royal Suite",
    price: "$350",
    amenities: [
      "Four-poster bed",
      "Dining area",
      "SPA bath",
      "Private terrace",
    ],
    additional_info: ["570 sq ft", "Up to 4 guests"],
    photos: [
      "/images/hotel3.webp",
      "/images/Photo (1).png",
      "/images/Photo (3).png",
    ],
    description:
      "Experience lavish comfort in our Royal Suite, offering a master bedroom, home cinema, private elevator, and a wrap-around balcony with stunning views.",
    reserved_dates: ["2024-06-30", "2024-07-15"],
  },
  {
    id: 9,
    type: "Duplex Suite",
    price: "$460",
    amenities: ["Kitchenette", "Two bedrooms", "Fireplace", "Jacuzzi"],
    additional_info: ["780 sq ft", "Up to 6 guests"],
    photos: [
      "/images/Photo.png",
      "/images/Photo (2).png",
      "/images/hotel3.webp",
    ],
    description:
      "Our Duplex Suite is perfect for families or groups, featuring two bedrooms, a kitchenette, fireplace, and a relaxing Jacuzzi for your enjoyment.",
    reserved_dates: [],
  },
  {
    id: 10,
    type: "President Suite",
    price: "$580",
    amenities: [
      "Master bedroom",
      "Home cinema",
      "Private elevator",
      "Wrap-around balcony",
    ],
    additional_info: ["1300 sq ft", "Up to 8 guests"],
    photos: [
      "/images/Photo.png",
      "/images/Photo (3).png",
      "/images/hotel1.webp",
    ],
    description:
      "Our President Suite is perfect for families or groups, featuring two bedrooms, a kitchenette, fireplace, and a relaxing Jacuzzi for your enjoyment.",
    reserved_dates: ["2024-06-30", "2024-07-15"],
  },
];
