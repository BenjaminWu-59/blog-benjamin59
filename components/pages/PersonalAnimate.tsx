import Icons from "@/components/SiteIcons";

const PersonalAnimate = () => {
  return (
    <>
      <div className="w-full h-[80%] absolute overflow-hidden">
        <div className="w-[750px] h-[750px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <div className="real w-full h-full flex justify-center items-center
               rounded-full border-dashed border-2"
            style={{ borderColor: "rgba(209, 213, 219, 0.55)" }}>
          </div>
        </div>

        <div className="w-[650px] h-[650px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <div className="real w-full h-full flex justify-center items-center 
               rounded-full border-dashed border-2"
            style={{ borderColor: "rgba(209, 213, 219, 0.9)" }} />
        </div>
      </div>
      {/* 外部圆圈上的小圆 */}
      <div className="circle-main absolute w-[90px] h-[90px] rounded-full">
        <Icons.logo className="rounded-full" />
      </div>

      {/* 内部圆圈上的小圆 */}
      <div className="circle-2 absolute w-[50px] h-[50px] bg-white rounded-full">
        <Icons.gitHub className="rounded-full" />
      </div>
    </>
  )
}

export default PersonalAnimate