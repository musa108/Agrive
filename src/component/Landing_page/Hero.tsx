export default function Hero() {
  return (
    <main className="">
      <div className="bg-[url('/image/farm-image.jpg')] bg-cover bg-center h-[545px] w-[1020px] m-auto rounded-2xl mt-8 relative">
        <div className=" flex flex-col absolute bottom-6 left-3 gap-2 text-white">
          <h1 className=" text-3xl font-bold">Invest in the future of food</h1>
          <p className="">
            Connect with farmers, invest in regenerative agriculture, and enjoy
            the fruits of your labor
          </p>
          <button className=" bg-blue-600 hover:bg-green-600 rounded-xl w-32 h-10">
            Get started
          </button>
        </div>
      </div>
    </main>
  );
}
