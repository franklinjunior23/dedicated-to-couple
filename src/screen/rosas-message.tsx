import { useSearchParams } from "react-router";
import "../assets/rosas.css";
import LyricsSync from "../components/rosas";

export default function RosasMessage() {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");
  const message = searchParams.get("message");
  return (
    <div className="">
      <div className="absolute top-10 w-[400px] bg-white-700 left-[100px] p-10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  ">
        <h1 className="text-4xl font-bold text-white capitalize">
          ¡Hola, {name}!
        </h1>
        <p className=" text-lg text-white capitalize pb-4">{message}.</p>
        <span className="text-5xl block pt-5">❤️</span>
        <h1 className="titulo"></h1>
      </div>
      <LyricsSync />

      <script src="../assets/anim.js"></script>
    </div>
  );
}
