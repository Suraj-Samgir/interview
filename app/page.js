import IntoBanner from "@/components/IntoBanner";
import NavBar from "@/components/NavBar";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <NavBar />
      <IntoBanner />
      <Card title="Enter Title Here" desc="Enter description" button1text="Generate" button2text="Join"/>

    </>
  );
}
