import Card from "../components/item/Card";
import {  Link } from 'react-router-dom';
function ItemPage() {


    
  const item = [
    {
      icone: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      userName: "yahya hiwa",
      dateTime: "23/4/2022",
      image:
       "https://sc04.alicdn.com/kf/H12287a4ffe2d4222940eea98c5bf3dd02.png",
      productName: "water bottle",
      place: "erbil",
      category: "home product",
      status: "like new",
    },
    {
      icone:"https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        ,
      userName: "nma faraidun",
      dateTime: "11/3/2023",
      image: "https://5.imimg.com/data5/OL/RO/UA/SELLER-6786482/economy-chair-500x500-500x500.png",
      productName: "plastic chair",
    },
    {
      icone: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
      userName: "yahya hiwa",
      dateTime: "10/10/2022",
      image: "https://c8.alamy.com/comp/2AMAT0P/pile-of-second-hand-clothes-stack-of-neatly-folded-old-clothing-with-a-white-background-2AMAT0P.jpg",
      productName: "used clothes",
    },
    {
      icone: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
      ,
      userName: "yahya hiwa",
      dateTime: "10/10/2022",
      image: "https://media.karousell.com/media/photos/products/2018/08/19/ikea_queen_size_bed_frame_second_hand_1534673298_adcfe26a_progressive.jpg ",
      productName: "sleeping bed",
    },
    {
      icone: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
      userName: "yahya hiwa",
      dateTime: "10/10/2022",
      image:"https://media.istockphoto.com/id/620006890/photo/toy-car-truck.jpg?s=612x612&w=0&k=20&c=m4UBEwLfrG55Zc0S7Y2mbqMraIm9JtzOp_u5tEeNe6U=",
      productName: "childs car toy",
    },
    
  ];
  return (
    <section className="w-full py-16">
      <div className="flex justify-between items-center  mb-10 px-10 ">
        <div className="flex items-center gap-2 font-bold  text-sm">
        <h2 className="text-neutral-500 ">donated Items: </h2>
        <span className="bg-green-500/30 text-green-500/90 px-3 py-1 rounded">{item.length}</span>
        </div>
        <Link to={'/create'}><button  className=' px-3 py-1 animate-pulse rounded text-base bg-green-700/80 text-neutral-100 border-0  hover:bg-green-700 '>donate</button></Link>
      </div>
      <section
        className="max-w-7xl mx-auto flex justify-center flex-wrap gap-16
    "
      >
        {item.map((value) => {
          return (
            <Link key={value.id} state={{ itemData: value }} to={`/items/${item.id}`}> <Card
            key={value.id}
              icone={value.icone}
              userName={value.userName}
              datetime={value.dateTime}
              image={value.image}
              productName={value.productName}
            />
            </Link>
          );
        })}
      </section>
      <article className="flex justify-center gap-x-3 items-center mb-0 text-slate-700">
        <span
          className="w-8 h-8 border rounded-md flex items-center 
        justify-center py-3 px-3 hover:bg-slate-400 ease-in-out duration-300"
        >
          <i className="fa-solid fa-angle-left fa-xl"></i>
        </span>
        <span
          className="w-8 h-8 border rounded-md flex items-center 
        justify-center py-3 px-3 hover:bg-slate-400 ease-in-out duration-300"
        >
          1
        </span>
        <span
          className="w-8 h-8 border rounded-md flex items-center 
        justify-center py-3 px-3 hover:bg-slate-400 ease-in-out duration-300"
        >
          ...
        </span>
        <span
          className="w-8 h-8 border rounded-md flex items-center 
        justify-center py-3 px-3 hover:bg-slate-400 ease-in-out duration-300"
        >
          10
        </span>
        <span
          className="w-8 h-8 border rounded-md flex items-center 
        justify-center py-3 px-3 hover:bg-slate-400 ease-in-out duration-300"
        >
          <i className="fa-solid fa-angle-right fa-xl"></i>
        </span>
      </article>
    </section>
  );
}

export default ItemPage;
