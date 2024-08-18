import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import CallOut from "./CallOut";


const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  CallOut
}


interface MdxProps {
  code: string;
}

const MDXContent = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
} 

export default MDXContent