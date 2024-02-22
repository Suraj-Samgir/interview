"use client";
import IntoBanner from "@/components/IntoBanner";
import NavBar from "@/components/NavBar";
import Card from "@/components/Card";
import PeerModel from "@/components/PeerModel";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <NavBar />
      <IntoBanner />

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

        <Card title="Data Structurs & Algorithem" desc="This interview includes questions on Data Structures and Algorithms. Cover all the topics of DSA and get ready for the interviews." buttontext="Practice Now" />

        <Card title="Frontend Development" desc="This interview includes questions on Frontend Development. Cover all the topics of Frontend Development and get ready for the interviews." buttontext="Practice Now" />

        <Card title="Backend Development" desc="This interview includes questions on Backend Development. Cover all the topics of Backend Development and get ready for the interviews." buttontext="Practice Now" />

        <Card title="Full Stack Development" desc="This interview includes questions on Full Stack Development. Cover all the topics of Full Stack Development and get ready for the interviews." buttontext="Practice Now" />

        <Card title="Machine Learning" desc="This interview includes questions on Machine Learning. Cover all the topics of Machine Learning and get ready for the interviews." buttontext="Practice Now" />
      </div>

      {
        isOpen && <PeerModel setIsOpen={setIsOpen} />
      }
      
    </>
  );
}
