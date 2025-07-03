
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const NutritionBeyondPlate = () => {
  return (
    <div className="bg-background-cream min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-elegante font-medium mb-4 sm:mb-6 leading-tight">
            Nutrition Beyond the Plate
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 font-montserrat">
            Discover how your emotions, thoughts, and inner conflicts affect your relationship with food and your body.
          </p>
        </div>
      </section>

      {/* Emotional Patterns Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-elegante text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-8">
              Emotional patterns, survival traits, and the hunger that food can't touch.
            </h2>
          </div>

          <div className="prose prose-lg max-w-none font-montserrat text-neutral-taupe leading-relaxed space-y-6">
            <p className="text-lg">
              We all want to live long, vibrant, healthy lives.<br />
              But true health cannot be compartmentalized.
            </p>
            
            <p className="text-lg">
              Mental health, emotional well-being, physical care — they are not separate journeys.<br />
              They're the same path, walked on different layers.
            </p>

            <p className="text-lg italic text-center my-8">
              An ox on a mountain, representing the emotional weight we carry
            </p>

            <p className="text-lg">
              And while many obsess over clean food and perfect routines,<br />
              they often forget to ask:<br />
              <em>What am I emotionally feeding on?</em><br />
              <em>What am I holding in, instead of releasing?</em>
            </p>

            <div className="bg-accent/10 p-6 rounded-lg my-8">
              <p className="text-lg font-semibold text-primary mb-4">
                Weight gain is not always about food.<br />
                It's often about protection.
              </p>
              
              <p className="text-lg">
                It's your body's intelligent way of saying:<br />
                <em>"I'm overwhelmed."</em><br />
                <em>"I need space."</em><br />
                <em>"I don't know how to ask for help, so I carry everything instead."</em>
              </p>
            </div>

            <p className="text-lg font-semibold">
              Food becomes a soothing ritual for deeper wounds:
            </p>

            <ul className="list-none space-y-2 text-lg pl-0">
              <li>• The perfectionist weight of the Rigid character</li>
              <li>• The craving for love of the Oral</li>
              <li>• The silent endurance of the Masochist</li>
              <li>• The need for control of the Psychopath</li>
              <li>• The emotional withdrawal of the Schizoid</li>
            </ul>

            <p className="text-lg">
              What you're eating is just one part of the story.<br />
              the other part is the pain you swallowed,<br />
              the tears you silenced,<br />
              the boundaries you never spoke.
            </p>

            <div className="bg-primary/10 p-6 rounded-lg my-8">
              <p className="text-lg font-semibold text-primary">
                ✨ It's not a willpower problem.<br />
                It's a story the body keeps holding — silently begging to be heard.
              </p>
            </div>

            <p className="text-lg">
              This space exists to help you listen — to your hunger, your body, your truth.<br />
              To reconnect what got fragmented.<br />
              To heal from the root, and not just the symptom.
            </p>

            <p className="text-lg">
              Because what you carry isn't just weight…<br />
              It's emotion, protection, and memory.
            </p>

            <p className="text-lg font-semibold text-primary">
              It's a story the body keeps holding, silently waiting to be heard.
            </p>

            <div className="text-center mt-12 mb-16">
              <h3 className="font-elegante text-2xl font-bold text-primary mb-4">
                Ready to Begin?
              </h3>
              <p className="text-lg mb-6">
                Transform your relationship with food, body, and emotional well-being.
              </p>
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Book Your Program
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-elegante text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              ❓ Nutrition Beyond Food – Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white/80 rounded-lg border border-accent/10 px-6">
              <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent">
                ⿡ What do you mean by "Nutrition Beyond Food"?
              </AccordionTrigger>
              <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed">
                It means looking at nourishment as something much bigger than just what you eat. This approach explores how your emotions, thoughts, and unresolved inner conflicts can create patterns that affect your weight, cravings, and relationship with food.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/80 rounded-lg border border-accent/10 px-6">
              <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent">
                ⿢ How does this approach differ from regular nutritional counseling?
              </AccordionTrigger>
              <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed">
                Traditional nutrition often focuses only on what's on your plate. Here, we go deeper: we look at what you're feeling before, during, and after you eat; what emotional needs you might be trying to fill with food; and how your weight can be a reflection of emotional battles you're fighting inside.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/80 rounded-lg border border-accent/10 px-6">
              <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent">
                ⿣ Will you give me a meal plan or diet?
              </AccordionTrigger>
              <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed">
                No, because the problem is rarely just the food itself. While we can discuss habits that support your well-being, this program helps you understand the emotional roots behind your eating patterns — so you can make sustainable changes instead of following another restrictive diet.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/80 rounded-lg border border-accent/10 px-6">
              <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent">
                ⿤ What areas of my life will we look at in these sessions?
              </AccordionTrigger>
              <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed">
                We will explore your emotional patterns, beliefs about yourself, relationship with your body, feelings of safety and worth, and the protective role your weight might be playing. We'll also look at your day-to-day habits once we address the emotional root.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white/80 rounded-lg border border-accent/10 px-6">
              <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent">
                ⿥ How can emotional or energetic nutrition affect my health?
              </AccordionTrigger>
              <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed">
                Your emotions are far more inflammatory than unhealthy foods alone. Chronic frustration, fear, anxiety, anger, and sadness keep your nervous system in stress mode, which affects hormones, metabolism, and increases inflammation — directly impacting your weight and health.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white/80 rounded-lg border border-accent/10 px-6">
              <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent">
                ⿦ I already eat well — do I really need this?
              </AccordionTrigger>
              <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed">
                If you eat well but still struggle with weight, emotional eating, or negative self-image, this work can show you what's happening beneath the surface. Eating healthy won't heal emotional wounds — but understanding and processing your emotions will transform your relationship with food and yourself.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white/80 rounded-lg border border-accent/10 px-6">
              <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent">
                ⿧ Can this help with emotional eating or cravings?
              </AccordionTrigger>
              <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed">
                Absolutely. We'll work on recognizing what you're truly craving (love, security, connection) and help you find new ways to meet those needs — so food doesn't have to play the role of comfort or escape anymore.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white/80 rounded-lg border border-accent/10 px-6">
              <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent">
                ⿨ Is this a spiritual or religious program?
              </AccordionTrigger>
              <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed">
                No. This is a holistic, body-mind-emotion approach. While it's deeply personal and can feel spiritual, it does not involve any religious practices or beliefs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default NutritionBeyondPlate;
