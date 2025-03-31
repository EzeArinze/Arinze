import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service - Nuel",
  description:
    "Terms and conditions for using Nuel&apos;s services and website",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-12 px-6">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-light mb-4">1. Introduction</h2>
              <p>
                Welcome to Nuel&apos;s portfolio website. These Terms of Service
                (&quot;Terms&quot;) govern your use of our website located at
                [website URL] (&quot;Website&quot;) and any related services
                offered by Nuel (&quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;).
              </p>
              <p>
                By accessing or using our Website, you agree to be bound by
                these Terms. If you disagree with any part of the Terms, you may
                not access the Website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-4">
                2. Intellectual Property Rights
              </h2>
              <p>
                Unless otherwise stated, we own the intellectual property rights
                for all material on this Website. All intellectual property
                rights are reserved.
              </p>
              <p>
                You may view and/or print pages from the Website for your own
                personal use subject to restrictions set in these Terms.
              </p>
              <p>You must not:</p>
              <ul>
                <li>Republish material from this Website</li>
                <li>Sell, rent, or sub-license material from the Website</li>
                <li>Reproduce, duplicate, or copy material from the Website</li>
                <li>
                  Redistribute content from this Website (unless content is
                  specifically made for redistribution)
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-4">3. User Content</h2>
              <p>
                In these Terms, &quot;User Content&quot; means material
                (including without limitation text, images, audio material,
                video material, and audio-visual material) that you submit to
                this Website, for whatever purpose.
              </p>
              <p>
                You grant us a worldwide, irrevocable, non-exclusive,
                royalty-free license to use, reproduce, adapt, publish,
                translate, and distribute your User Content in any existing or
                future media. You also grant us the right to sub-license these
                rights and the right to bring an action for infringement of
                these rights.
              </p>
              <p>
                Your User Content must not be illegal or unlawful, must not
                infringe any third party&apos;s legal rights, and must not be
                capable of giving rise to legal action whether against you or us
                or a third party.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-4">
                4. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, we exclude
                all representations, warranties, and conditions relating to our
                Website and the use of this Website.
              </p>
              <p>Nothing in this disclaimer will:</p>
              <ul>
                <li>
                  Limit or exclude our or your liability for death or personal
                  injury
                </li>
                <li>
                  Limit or exclude our or your liability for fraud or fraudulent
                  misrepresentation
                </li>
                <li>
                  Limit any of our or your liabilities in any way that is not
                  permitted under applicable law
                </li>
                <li>
                  Exclude any of our or your liabilities that may not be
                  excluded under applicable law
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-4">5. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. If we
                make changes to these Terms, we will post the revised Terms on
                the Website and update the &quot;Last Updated&quot; date at the
                top of these Terms.
              </p>
              <p>
                Your continued use of the Website following the posting of
                revised Terms means that you accept and agree to the changes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-light mb-4">
                6. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <p>
                <a
                  href="mailto:hello@nuel.dev"
                  className="text-primary hover:underline"
                >
                  hello@nuel.dev
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
