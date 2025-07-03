
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-elegante text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            ❓ Frequently Asked Questions
          </h2>
          <p className="font-montserrat text-lg text-neutral-taupe">
            Everything you need to know about our Character Analysis Mapping Method
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-white/80 rounded-lg border border-accent/10 px-6">
            <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent">
              ⿡ What is Character Analysis Mapping?
            </AccordionTrigger>
            <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed">
              It's a method that helps you understand how your emotions and body patterns were shaped early in life. By observing specific parts of your body, we map your mental and emotional patterns — giving you a clear understanding of why you feel, react, and relate the way you do.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white/80 rounded-lg border border-accent/10 px-6">
            <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent">
              ⿢ How can this method help me if I've already tried therapy or coaching?
            </AccordionTrigger>
            <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed">
              This work goes beyond talking — it connects your mind and body, accessing patterns you might not reach through conversation alone. Many clients who have done therapy say this helped them finally see and release what was still holding them back.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white/80 rounded-lg border border-accent/10 px-6">
            <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent">
              ⿣ Will one session be enough or do I need a program?
            </AccordionTrigger>
            <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed">
              One session gives powerful insights, but lasting change comes with practice and integration. That's why I offer packages to support you step by step as you apply what you discover.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-white/80 rounded-lg border border-accent/10 px-6">
            <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent">
              ⿤ How is this different from traditional talk therapy?
            </AccordionTrigger>
            <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed">
              Here, we use your body shape, sensations, and expressions to analyze your patterns. This process reveals much more about you than what you're consciously aware of — giving you deep insights that go beyond what talking alone can offer.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-white/80 rounded-lg border border-accent/10 px-6">
            <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent">
              ⿥ Do I need any preparation before my session?
            </AccordionTrigger>
            <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed">
              Yes! You can find detailed information here on the website about how to prepare and what to expect from your session. Once you book your appointment, I will also resend these instructions to you via WhatsApp or email so you feel confident and ready.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-white/80 rounded-lg border border-accent/10 px-6">
            <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent">
              ⿦ What should I wear or bring to my session?
            </AccordionTrigger>
            <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed">
              Wear light-colored, form-fitting clothes (like gym wear) so we can observe your body's natural lines. Avoid patterns or stripes. No makeup is recommended. Have water nearby, and a notebook if you'd like to write down insights.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="bg-white/80 rounded-lg border border-accent/10 px-6">
            <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent">
              ⿧ Is this work suitable if I'm in therapy or on medication?
            </AccordionTrigger>
            <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed">
              Yes! This method can complement therapy beautifully. You should only stop your medication if your doctor instructs you to do so. This work does not replace any medication you are taking.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="bg-white/80 rounded-lg border border-accent/10 px-6">
            <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent">
              ⿨ Can I do this online or only in person?
            </AccordionTrigger>
            <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed">
              Both options are available! I work online with clients worldwide or in person, depending on your location.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9" className="bg-white/80 rounded-lg border border-accent/10 px-6">
            <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent">
              ⿩ Do you offer packages or just single sessions?
            </AccordionTrigger>
            <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed">
              I offer both — single Character Analysis Mapping sessions to map your patterns, and an 8-session program that includes the powerful Master Key Tool alongside the Character Analysis Mapping Method for deeper integration and transformation.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10" className="bg-white/80 rounded-lg border border-accent/10 px-6">
            <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent">
              🔟 How soon can I expect to feel changes in myself?
            </AccordionTrigger>
            <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed">
              Many clients report feeling shifts right after their first session — like greater clarity or emotional relief. Deeper, lasting changes happen as you continue practicing and integrating what you learn about yourself.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
