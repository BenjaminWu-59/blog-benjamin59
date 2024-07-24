import ScrollList from "@/components/ScrollList";

export default function Home() {

  const items = [
    { title: '文章1', content: 'write something' },
    { title: '文章2', content: 'write something' },
    { title: '文章3', content: 'write something' },
    { title: '文章4', content: 'write something' }
  ];

  return (
    <>
      <section className="p-10 mb-10 mt-20">
        <div className="flex items-center justify-center">
          <div className="z-10 p-10 rounded-3xl gray-gradient">
            <p className="text-xl font-bold">My name is:</p>
            <p className="p-5 text-3xl font-extrabold">Benjamin59</p>
            <hr className="pt-5 border-t-3" />
            <p className="w-80 text-xl font-bold">I'm a:</p>
            <div className="my-2 flex flex-col items-end">
              <p className="text-xl py-0.5">Full Stack Developer</p>
              <p className="text-xl py-0.5">Reactjs Developer</p>
              <p className="text-xl py-0.5">Nestjs Developer</p>
              <p className="text-xl py-0.5">Fitness fan</p>
              <p className="text-xl py-0.5">LOL fan</p>
            </div>
          </div>
        </div>
      </ section>

      <section>
         <ScrollList items={items} />
      </section>
    </>
  );
}
