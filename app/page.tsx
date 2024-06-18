import Image from "next/image";
import FeaturesCard from "./components/featuresCard";
import { Check, Key, Lightning, Mobile, Phonecall } from "./assets";
import ServiceCard from "./components/serviceCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-[38px] font-semibold leading-[62.26px]">All Provided Features</h1>
      <p className="text-[18px] leading-6 font-semibold">
        We are committed to continuous innovation in online banking payments,
      </p>
      <div className="items-stretch justify-between flex space-x-4 mt-8">
        <FeaturesCard
          image={Phonecall}
          title={"24/7 support"}
          body={
            "Our dedicated customer service team is available to assist you resolve any issues"
          }
        />
        <FeaturesCard
          image={Key}
          title={"Secure"}
          body={
            "Using secure encryption which for reliability, giving users peace of mind your data stays safe"
          }
        />
        <FeaturesCard
          image={Lightning}
          title={"Fast"}
          body={
            "Quality-speed performance ensures swift navigation and task completion, optimizing user experience "
          }
        />
        <FeaturesCard
          image={Check}
          title={"Reliable"}
          body={
            " Consistent performance and functionality ensure dependable user experience"
          }
        />
      </div>
      <div className="mt-32 flex p-3 justify-between gap-8">
        <Image
          src={Mobile}
          alt=""
          style={{ objectFit: "contain" }}
          width={450}
        />
        <div>
          <h1 className="text-[64px] font-semibold leading-9 text-center mb-10">Unique Services</h1>
          <div className="grid grid-cols-2 gap-8 gap-x-16">
            <ServiceCard
              title={"Seemless Payment"}
              body={
                "Enjoy secure transactions and fraud protection automate bill payments and transfers"
              }
            />
            <ServiceCard
              title={"Hotel Reservations"}
              body={
                "Compare prices and amenities across multiple providers enjoy exclusive deals and discounts"
              }
            />
            <ServiceCard
              title={"Flight Booking"}
              body={
                "Compare prices and amenities across multiple airlines manage your travel itinerary in one place"
              }
            />
            <ServiceCard
              title={"QR Pay"}
              body={
                "Make secure payments by scanning QR codes track your QR code payment history"
              }
            />
          </div>
        </div>
      </div>
    </main>
  );
}
