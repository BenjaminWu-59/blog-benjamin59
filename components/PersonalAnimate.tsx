import { Icons } from "./icons";

const PersonalAnimate = () => {
  return (
    <>
      <div className="w-full h-[550px] absolute overflow-hidden">
        <div className="w-[700px] h-[700px] absolute inset-0 m-auto flex justify-center items-center">
          <div className="real w-full h-full flex justify-center items-center
               rounded-full border-dashed border-2"
            style={{ borderColor: "rgba(209, 213, 219, 0.4)" }}>
          </div>
        </div>

        <div className="w-[600px] h-[600px] absolute inset-0 m-auto flex justify-center items-center">
          <div className="real w-full h-full flex justify-center items-center 
               rounded-full border-dashed border-2"
            style={{ borderColor: "rgba(209, 213, 219, 0.8)" }} />
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