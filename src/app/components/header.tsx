export default function Header() {
  return (
    <header className="flex w-full h-auto ">
      <div className="flex flex-1 pt-4 pl-5 lg:pl-16">
        <img src="/images/logo.png" alt="none" className="w-14 h-14" />
      </div>
      <div className="flex flex-1 justify-end items-center pt-4  lg:pr-16">
        <ul className="flex text-white font-[400] gap-3 items-center">
          <li>
            <img
              src="/images/github.svg"
              alt=""
              className="w-8 h-8 cursor-crosshair"
            />
          </li>
          <li>
            <img
              src="/images/linkedin.svg"
              alt=""
              className="w-8 h-8 cursor-crosshair"
            />
          </li>
          <li>
            <img
              src="/images/enve.svg"
              alt=""
              className="w-16 h-16  -ml-3 cursor-crosshair"
            />
          </li>
        </ul>
      </div>
    </header>
  );
}
