import Header from "../src/components/landing/Header";
import Footer from "../src/components/landing/Footer";
import Image from "next/image";
import Link from "next/link";
import appStoreBadge from "../src/assets/Available_on_the_App_Store_(black).png";
import playStoreBadge from "../src/assets/playstore.png";

export default function Download() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
                  Get the App
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#243242] mb-6">
                  Download Kutoo and start learning crypto the safe way
                </h1>
                <p className="text-lg text-[#586574] mb-8 leading-relaxed">
                  Access simulated crypto boxes, live market data, and guided lessons
                  from your phone. Practice with confidence before you ever invest
                  real money.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                  <Link
                    href="#"
                    className="inline-flex items-center rounded-xl overflow-hidden hover:opacity-90 transition-opacity bg-transparent"
                  >
                    <Image
                      src={appStoreBadge}
                      alt="Download on the App Store"
                      className="h-14 w-auto"
                    />
                  </Link>

                  <Link
                    href="#"
                    className="inline-flex items-center rounded-xl overflow-hidden hover:opacity-90 transition-opacity bg-transparent"
                  >
                    <Image
                      src={playStoreBadge}
                      alt="Get it on Google Play"
                      className="h-14 w-auto"
                    />
                  </Link>
                </div>

                <p className="text-sm text-muted-foreground">
                  Coming soon to both the Apple App Store and Google Play Store.{" "}
                  Update the links on this page once your apps are live.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -top-10 -right-6 w-40 h-40 rounded-full bg-secondary/20 blur-3xl" />
                <div className="absolute -bottom-10 -left-6 w-48 h-48 rounded-full bg-accent/20 blur-3xl" />
                <div className="relative rounded-[2rem] bg-[#fefcfc] border border-border/60 shadow-card p-6 md:p-8">
                  <div className="aspect-[9/16] w-full max-w-xs mx-auto rounded-[2rem] bg-gradient-to-b from-[#243242] via-[#243242] to-[#111827] overflow-hidden flex items-center justify-center">
                    <Image
                      src="/new-hero.svg"
                      alt="Kutoo app preview"
                      width={320}
                      height={640}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

