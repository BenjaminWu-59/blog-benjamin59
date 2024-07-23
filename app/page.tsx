export default function Home() {

  let test: string[] = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5'
  ]

  return (
    <>
      <section className="p-10 mb-10 mt-10">
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

      <div className="flex overflow-hidden border">
        <section className="flex as-scroll" style={{ minWidth: "100%" }}>
          <div className="m-5 flex-grow text-center gray-gradient">
            文章1
            <p>
              write somthing
            </p>
          </div>
          <div className="m-5 flex-grow text-center gray-gradient">
            文章2
            <p>
              write somthing
            </p>
          </div>
          <div className="m-5 flex-grow text-center gray-gradient">
            文章3
            <p>
              write somthing
            </p>
          </div>
          <div className="m-5 flex-grow text-center gray-gradient">
            文章4
            <p>
              write somthing
            </p>
          </div>
        </section>
        <section className="flex as-scroll" style={{ minWidth: "100%" }} aria-hidden="true">
        <div className="m-5 flex-grow text-center gray-gradient">
            文章1
            <p>
              write somthing
            </p>
          </div>
          <div className="m-5 flex-grow text-center gray-gradient">
            文章2
            <p>
              write somthing
            </p>
          </div>
          <div className="m-5 flex-grow text-center gray-gradient">
            文章3
            <p>
              write somthing
            </p>
          </div>
          <div className="m-5 flex-grow text-center gray-gradient">
            文章4
            <p>
              write somthing
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
