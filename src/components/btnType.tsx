type buttonProps = {
  name: string;
  icon: JSX.Element;
  activeButton: Boolean;
  click: any;
  status: Boolean;
};

export function ButtonNav({
  name,
  icon,
  activeButton,
  click,
  status,
}: buttonProps) {
  return (
    <button
      disabled={status ? true : false}
      className={`flex items-center justify-center w-32 h-10 bg-gray-700 rounded-2xl cursor-pointer gap-2 text-white ${activeButton ? "filterYellow2" : ""
        }`}
      onClick={!activeButton ? click : undefined}
    >
      {icon}
      <p className="text-white">{name}</p>
    </button>
  );
}
