import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();
  const handleShorten = (e: any) => {
    e.preventDefault();
    if (longUrl) {
      navigate(`/auth?createNew=${longUrl}`);
    }
  };

  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Shorten Your Links, Expand Your Reach
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our URL shortener service makes it easy to create clean,
                  branded links that drive more traffic and engagement.
                </p>
              </div>
              <form onSubmit={handleShorten} className="flex gap-2">
                <Input
                  type="text"
                  value={longUrl}
                  placeholder="Enter your long URL"
                  className="max-w-lg flex-1"
                  onChange={(e) => {
                    setLongUrl(e.target.value);
                  }}
                />
                <Button type="submit">Shorten</Button>
              </form>
            </div>
            <img
              src="https://img.freepik.com/premium-photo/hand-man-using-laptop-computer-dark_141345-69.jpg"
              width="550"
              height="310"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Powerful Features for Your Business
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our URL shortener service offers a range of features to help you
                streamline your online presence and drive more engagement.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Branded Links</h3>
                    <p className="text-muted-foreground">
                      Create custom, branded links that reinforce your identity
                      and build trust with your audience.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Real-Time Analytics</h3>
                    <p className="text-muted-foreground">
                      Track the performance of your links with detailed
                      analytics, including click-through rates, referrers, and
                      more.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Bulk Shortening</h3>
                    <p className="text-muted-foreground">
                      Shorten multiple links at once, saving you time and
                      effort.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <img
              src="https://img.freepik.com/premium-photo/dark-room-with-computer-desk-monitor-that-says-game-room_901003-9592.jpg"
              width="550"
              height="310"
              alt="Features"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How does the URL shortener work?
            </AccordionTrigger>
            <AccordionContent>
              Our URL shortener takes your long URLs and generates a unique,
              shorter version that redirects to the original URL. This makes
              sharing and managing links easier.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Are there any usage limits?</AccordionTrigger>
            <AccordionContent>
              Free accounts can create up to 100 short URLs per month. For
              unlimited URL creation and advanced features, consider upgrading
              to our premium plan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I customize my short URL?</AccordionTrigger>
            <AccordionContent>
              Yes, you can customize your short URL with a custom alias,
              provided it is available. This feature is included in our premium
              plan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              How do I track the performance of my short URLs?
            </AccordionTrigger>
            <AccordionContent>
              Each short URL comes with detailed analytics, allowing you to
              track clicks, geographic location, and referrers. Access these
              analytics through your dashboard.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              What if my shortened URL stops working?
            </AccordionTrigger>
            <AccordionContent>
              If your shortened URL stops working, please contact our support
              team. We'll investigate and resolve any issues as quickly as
              possible.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}

export default LandingPage;
