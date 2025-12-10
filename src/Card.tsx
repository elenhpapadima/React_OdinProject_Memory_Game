export default function Card({ character, clickProp }) {
  return (
    <div
      onClick={() => clickProp(character.id)}
      className="h-full flex flex-col
       md:aspect-auto
        rounded-2xl border bg-neutral-800 
        text-[#C1232C] text-center font-bold 
        flex flex-col 
        hover:scale-105 transition-all duration-300 cursor-pointer hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
    >
      <img
        src={character.img_url}
        alt={character.name}
        className=" aspect-[3/4] w-full h-48 sm:h-56 lg:h-64  bg-[#C7C8CA]  w-full object-cover mx-auto rounded-t-2xl object-top "
      />
      {
        //why is displayed with "img_url" in data>
      }
      <p className=" min-h-[3rem] text-white line-clamp-2 leading-tight p-2">
        {character.name}
      </p>
    </div>

    //ezio names overlflows when screen is small
  );
}
