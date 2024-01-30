interface LoadingBarProps {
  color?: string;
}

export const LoadingBar = ({ color = "blue-800" }: LoadingBarProps) => (
  <div className="bg-transparent h-2 flex z-[2000] mt-[-8px] animate-slide">
    <div className={`bg-${color} h-full w-32`} />
  </div>
);
