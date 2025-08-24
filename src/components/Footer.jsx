import Container from "./ui/Container";
import logo from "../assets/images/logo/arsil.png";

export default function Footer() {
  return (
    <footer className="border-t py-10 mt-8">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl  text-white flex items-center justify-center font-bold">
              <img src={logo} alt="" />
            </div>
            <div>
              <div className="font-semibold leading-tight">Arsil Group</div>
              <div className="text-xs text-neutral-500 -mt-0.5">
                Architecture • Interior • Build
              </div>
            </div>
          </div>
          <div className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Arsil Group. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
