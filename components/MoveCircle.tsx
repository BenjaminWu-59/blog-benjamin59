import Icons from "@/components/SiteIcons";

const MoveCircle: React.FC = () => {
  return (
    <div className='z-10 w-[110%] h-[100vh] absolute overflow-hidden'>
      <div className='cus-wrapper'>
        <span>
          <Icons.snow className="rounded-full" />
        </span>
        <span>
          <Icons.snow className="rounded-full" />
        </span>
        <span>
          <Icons.snow className="rounded-full" />
        </span>
        <span>
          <Icons.snow className="rounded-full" />
        </span>
        <span>
          <Icons.snow className="rounded-full" />
        </span>
        <span>
          <Icons.snow className="rounded-full" />
        </span>
        <span>
          <Icons.snow className="rounded-full" />
        </span>
      </div>
    </div>
  )

};

export default MoveCircle;