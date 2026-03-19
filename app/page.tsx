import Features from "@/components/Features";
import "./globals.css";
import Teams from "@/components/Teams";
import Mural from "@/components/Mural";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4  gap-8">
      <Features />
      <Teams />
      <Mural/>


    </div>
  );
}
