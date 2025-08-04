export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type LandmarkCardProps = {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  province: string;
  price: number;
};

export type CurrentSlideData = {
  data: LandmarkCardProps;
  index: number;
};
// export type CurrentSlideData = {
//   data: LandmarkCardProps;
//   // index: number;
// };
