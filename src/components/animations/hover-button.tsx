interface IHoverButtonProps {
  children: React.ReactNode;
}

const HoverButton = ({ children }: IHoverButtonProps) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden text-2xl uppercase leading-6 text-black">
      <span className="inline-flex items-center gap-2 p-2 transition duration-500 ease-out group-hover:-translate-y-[120%] ">
        {children}
      </span>
      <span className="inline-flex items-center gap-2 absolute left-0 translate-y-[120%] rotate-12 p-2 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
        {children}
      </span>
    </div>
  );
};

export default HoverButton;
