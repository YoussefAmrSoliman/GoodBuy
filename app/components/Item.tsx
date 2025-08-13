import Image from 'next/image';

interface ItemProps {
  title: string;
  image: string;
  price: number;
}

export function Item({ title, image, price }: ItemProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md w-[200px] h-[250px] cursor-pointer hover:shadow-lg transition-shadow duration-300">
      <div className="relative  h-[70%]">   
      <Image src={image} alt={title} fill className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">${price}</p>
      </div>
    </div>
  );
}
