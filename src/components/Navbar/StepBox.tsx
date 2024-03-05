interface StepBoxProps {
  iconSrc: string;
  title: string;
  description: string;
}

function StepBox({ iconSrc, description, title }: StepBoxProps) {
  return (
    <div className="flex flex-col gap-5 items-center md:items-start">
      <img src={iconSrc} alt="icon" height={75} width={75} />
      <h1 className="font-semibold text-3xl ">{title}</h1>
      <p className="text-center md:text-start">{description}</p>
    </div>
  );
}

export default StepBox;
