import Image from "next/image";

const Card = (props: any) => {
  return (
    <div className="transition ease-in-out hover:-translate-y-1 shadow-xl shadow-red-500 hover:shadow-2xl hover:shadow-red-500 rounded-xl bg-gradient-to-b from-violet-900 to-violet-950 border-white border-2 w-64 flex flex-col items-center gap-4 h-full p-6 justify-center text-center ">
      <div>
        <Image
          src={props.imagePath}
          width={100}
          height={100}
          alt="concept Image"
        />
      </div>
      <div className="text-2xl font-bold">{props.title.toUpperCase()}</div>
      <div>{props.description}</div>
    </div>
  );
};

export default Card;
