import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Manish from "@/images/1.jpg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950">
            Winners never quit
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            True winners are those who keep pushing forward, learning from their failures, and continuously striving to reach their goals. This principle applies to Drishti Classes, which embodies this aspect by offering a commitment to its students' success.
          </p>
        </FadeIn>
      </Container>
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Image", logo: Manish }}
      >
        Drishti Classes is a consultancy class that specializes in providing a wide range of educational services aimed at helping students excel in their academic pursuits.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
